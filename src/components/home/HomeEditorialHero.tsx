import styles from './HomeEditorialHero.module.css';
import { DirectionalCharacterCanvas } from './DirectionalCharacterCanvas';

export function HomeEditorialHero() {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>HI, I&apos;M ADARSH</p>

        <p className={styles.greeting} aria-hidden="true">
          Hey, <span className={styles.greetingBlack}>the</span>
          <span className={styles.greetingHighlight}>re.</span>
        </p>

        <p className={styles.introduction}>
          Building responsive, interactive web experiences with React, TypeScript, and modern web
          technologies.
        </p>

        <DirectionalCharacterCanvas />

        <h1 className={styles.identity} id="home-hero-title">
          <span className={styles.identityPrefix}>I AM</span>
          <span className={styles.identityName}>
            ADARSH <span className={styles.identitySurname}>MEHTA</span>
          </span>
        </h1>

        <p className={styles.role}>
          FRONTEND
          <br />
          DEVELOPER
        </p>
      </div>
    </section>
  );
}
