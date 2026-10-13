import argparse
import math
from pathlib import Path

import cv2
import numpy as np


VIDEO_PATH = Path("public/video/character.mp4")
POSE_FRAMES = {
    "UP": 16,
    "UP_RIGHT": 36,
    "RIGHT": 52,
    "DOWN_RIGHT": 68,
    "DOWN": 88,
    "DOWN_LEFT": 112,
    "LEFT": 132,
    "UP_LEFT": 140,
}
NEUTRAL_FRAME = 184
WEBP_QUALITY = 96
FRAME_ANCHOR_INDICES = (0, 8, 16, 24, 32, 40, 48, 56)
LOOP_CLOSURE_FRAMES = (140, 142, 144, 148, 156, 8, 12, 16)


def read_video() -> tuple[list[np.ndarray], float]:
    capture = cv2.VideoCapture(str(VIDEO_PATH))
    if not capture.isOpened():
        raise RuntimeError(f"Could not open {VIDEO_PATH}")

    fps = capture.get(cv2.CAP_PROP_FPS)
    frames: list[np.ndarray] = []
    while True:
        ok, frame = capture.read()
        if not ok:
            break
        frames.append(frame)
    capture.release()

    if not frames:
        raise RuntimeError(f"No frames found in {VIDEO_PATH}")
    return frames, fps


def make_contact_sheet(
    frames: list[np.ndarray],
    output_path: Path,
    step: int,
    first: int,
    last: int,
    full_frame: bool,
) -> None:
    indices = list(range(first, min(last, len(frames) - 1) + 1, step))
    tile_width = 180
    image_height = 320 if full_frame else 195
    tile_height = image_height + 30
    columns = 4
    rows = math.ceil(len(indices) / columns)
    sheet = np.full((rows * tile_height, columns * tile_width, 3), 245, dtype=np.uint8)

    for position, index in enumerate(indices):
        frame = frames[index]
        if not full_frame:
            height, width = frame.shape[:2]
            frame = frame[
                int(height * 0.06) : int(height * 0.52),
                int(width * 0.17) : int(width * 0.83),
            ]
        image = cv2.resize(frame, (tile_width, image_height), interpolation=cv2.INTER_AREA)
        x = (position % columns) * tile_width
        y = (position // columns) * tile_height
        sheet[y : y + image_height, x : x + tile_width] = image
        cv2.putText(
            sheet,
            f"frame {index} ({index / 24:.2f}s)",
            (x + 4, y + image_height + 18),
            cv2.FONT_HERSHEY_SIMPLEX,
            0.36,
            (20, 20, 20),
            1,
            cv2.LINE_AA,
        )

    output_path.parent.mkdir(parents=True, exist_ok=True)
    if not cv2.imwrite(str(output_path), sheet):
        raise RuntimeError(f"Could not write contact sheet to {output_path}")


def report_video(frames: list[np.ndarray], fps: float) -> None:
    height, width = frames[0].shape[:2]
    duration = len(frames) / fps if fps else 0
    print(f"frames={len(frames)} fps={fps:g} size={width}x{height} duration={duration:.3f}s")

    capture = cv2.VideoCapture(str(VIDEO_PATH))
    background_samples = []
    while True:
        ok, frame = capture.read()
        if not ok:
            break
        background_samples.append(frame[: int(height * 0.05), :, :].reshape(-1, 3)[::20])
    capture.release()

    samples = np.concatenate(background_samples)
    colors, counts = np.unique(samples, axis=0, return_counts=True)
    dominant = colors[counts.argmax()][::-1]
    print(f"dominant top-background RGB=#{dominant[0]:02X}{dominant[1]:02X}{dominant[2]:02X}")
    print("direction poses:", ", ".join(f"{name}={frame}" for name, frame in POSE_FRAMES.items()))
    print(f"neutral={NEUTRAL_FRAME}")


def remove_background(frame: np.ndarray) -> np.ndarray:
    saturation = frame.max(axis=2) - frame.min(axis=2)
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    candidates = ((gray > 200) & (saturation < 34)).astype(np.uint8)
    _, labels = cv2.connectedComponents(candidates, connectivity=8)
    border_labels = np.unique(
        np.concatenate((labels[0], labels[-1], labels[:, 0], labels[:, -1]))
    )
    border_labels = border_labels[border_labels != 0]
    background = np.isin(labels, border_labels)
    foreground = (~background).astype(np.uint8)
    alpha = np.clip(cv2.distanceTransform(foreground, cv2.DIST_L2, 3) / 2, 0, 1)
    rgba = cv2.cvtColor(frame, cv2.COLOR_BGR2BGRA)
    rgba[:, :, 3] = (alpha * 255).astype(np.uint8)
    return rgba


def source_frame_for_output(index: int) -> int:
    if index >= FRAME_ANCHOR_INDICES[-1]:
        return LOOP_CLOSURE_FRAMES[index - FRAME_ANCHOR_INDICES[-1]]

    anchors = list(zip(FRAME_ANCHOR_INDICES, POSE_FRAMES.values()))
    for (left_index, left_frame), (right_index, right_frame) in zip(anchors, anchors[1:]):
        if left_index <= index <= right_index:
            progress = (index - left_index) / (right_index - left_index)
            return round(left_frame + (right_frame - left_frame) * progress)
    raise ValueError(f"No directional source frame for output index {index}")


def main() -> None:
    parser = argparse.ArgumentParser(description="Inspect or pre-extract the character turn video.")
    parser.add_argument("--contact-sheet", type=Path)
    parser.add_argument("--step", type=int, default=4)
    parser.add_argument("--first-frame", type=int, default=0)
    parser.add_argument("--last-frame", type=int, default=191)
    parser.add_argument("--full-frame", action="store_true")
    parser.add_argument("--extract", action="store_true")
    parser.add_argument("--output-dir", type=Path, default=Path("public/frames"))
    args = parser.parse_args()

    frames, fps = read_video()
    report_video(frames, fps)

    if args.contact_sheet:
        make_contact_sheet(
            frames,
            args.contact_sheet,
            args.step,
            args.first_frame,
            args.last_frame,
            args.full_frame,
        )
        print(f"contact_sheet={args.contact_sheet}")

    if not args.extract:
        return
    if max((*POSE_FRAMES.values(), NEUTRAL_FRAME)) >= len(frames):
        parser.error("Configured source frames must fall inside the video frame range")

    args.output_dir.mkdir(parents=True, exist_ok=True)
    for index in range(64):
        source_frame = source_frame_for_output(index)
        destination = args.output_dir / f"frame-{index:02d}.webp"
        if not cv2.imwrite(
            str(destination),
            remove_background(frames[source_frame]),
            [cv2.IMWRITE_WEBP_QUALITY, WEBP_QUALITY],
        ):
            raise RuntimeError(f"Could not write {destination}")
        print(f"frame-{index:02d}.webp: source frame {source_frame}")

    center_path = args.output_dir / "center.webp"
    if not cv2.imwrite(
        str(center_path),
        remove_background(frames[NEUTRAL_FRAME]),
        [cv2.IMWRITE_WEBP_QUALITY, WEBP_QUALITY],
    ):
        raise RuntimeError(f"Could not write {center_path}")
    print(f"center.webp: source frame {NEUTRAL_FRAME}")


if __name__ == "__main__":
    main()
