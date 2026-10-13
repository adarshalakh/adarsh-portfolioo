import { useEffect, useRef } from 'react';
import styles from './DirectionalCharacterCanvas.module.css';

const FRAME_COUNT = 64;
const FRAME_WIDTH = 720;
const FRAME_HEIGHT = 1280;
const BACKGROUND_COLOR = '#EEEFEA';
const FACE_CENTER_X = 0.5;
const FACE_CENTER_Y = 0.36;
const DEADZONE_SCREEN_RADIUS = 0.12;
const RESPONSE_FACTOR = 0.26;
const UP_ANGLE = -Math.PI / 2;
const FULL_TURN = Math.PI * 2;

function lerpAngle(current: number, target: number): number {
  const difference = Math.atan2(Math.sin(target - current), Math.cos(target - current));
  return current + difference * RESPONSE_FACTOR;
}

function frameIndexForAngle(angle: number): number {
  const clockwiseAngle = ((angle - UP_ANGLE) % FULL_TURN + FULL_TURN) % FULL_TURN;
  return Math.round((clockwiseAngle / FULL_TURN) * FRAME_COUNT) % FRAME_COUNT;
}

function loadImage(path: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      image.decode().then(() => resolve(image)).catch(reject);
    };
    image.onerror = () => reject(new Error(`Failed to preload character frame: ${path}`));
    image.src = path;
  });
}

export function DirectionalCharacterCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) {
      console.error('Unable to initialize the character canvas.');
      return;
    }

    canvas.width = FRAME_WIDTH;
    canvas.height = FRAME_HEIGHT;
    canvas.style.backgroundColor = BACKGROUND_COLOR;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const canTrackPointer = !reducedMotion && finePointer;
    let isDisposed = false;
    let animationFrameId: number | null = null;
    let frameImages: HTMLImageElement[] = [];
    let centerImage: HTMLImageElement | null = null;
    let targetAngle = UP_ANGLE;
    let currentAngle = UP_ANGLE;
    let pointerInDeadzone = true;

    const drawFrame = (image: HTMLImageElement) => {
      context.clearRect(0, 0, FRAME_WIDTH, FRAME_HEIGHT);
      context.drawImage(image, 0, 0, FRAME_WIDTH, FRAME_HEIGHT);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!canTrackPointer || event.pointerType !== 'mouse' || !canvas) return;

      const bounds = canvas.getBoundingClientRect();
      const faceX = bounds.left + bounds.width * FACE_CENTER_X;
      const faceY = bounds.top + bounds.height * FACE_CENTER_Y;
      const dx = event.clientX - faceX;
      const dy = event.clientY - faceY;
      const deadzoneRadius = Math.min(window.innerWidth, window.innerHeight) * DEADZONE_SCREEN_RADIUS;

      pointerInDeadzone = Math.hypot(dx, dy) <= deadzoneRadius;
      if (!pointerInDeadzone) targetAngle = Math.atan2(dy, dx);
    };

    const render = () => {
      if (isDisposed || !centerImage) return;

      if (canTrackPointer && !pointerInDeadzone && frameImages.length === FRAME_COUNT) {
        currentAngle = lerpAngle(currentAngle, targetAngle);
        drawFrame(frameImages[frameIndexForAngle(currentAngle)]);
      } else {
        drawFrame(centerImage);
      }

      animationFrameId = window.requestAnimationFrame(render);
    };

    const startRendering = () => {
      if (!isDisposed) animationFrameId = window.requestAnimationFrame(render);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });

    loadImage('/frames/center.webp')
      .then((image) => {
        if (isDisposed) return;
        centerImage = image;
        drawFrame(image);

        if (!canTrackPointer) return;

        return Promise.all(
          Array.from({ length: FRAME_COUNT }, (_, index) =>
            loadImage(`/frames/frame-${String(index).padStart(2, '0')}.webp`),
          ),
        ).then((images) => {
          if (isDisposed) return;
          frameImages = images;
          startRendering();
        });
      })
      .catch((error: unknown) => {
        console.error('Could not load the character animation frames.', error);
      });

    return () => {
      isDisposed = true;
      window.removeEventListener('pointermove', handlePointerMove);
      if (animationFrameId !== null) window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={styles.character} aria-hidden="true">
      <canvas ref={canvasRef} className={styles.canvas} />
    </div>
  );
}
