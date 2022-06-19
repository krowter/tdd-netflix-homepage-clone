import styles from "./Hero.module.css";

export const Hero = (props) => {
  return (
    <section className={styles.heroSection} data-testid="hero-section">
      <img
        className={styles.heroImage}
        src={props.image}
        alt="breaking bad poster"
      />
      <div className={styles.imageBottomOverlay} />

      <div className={styles.heroInfo}>
        <p data-testid="hero-description">{props.description}</p>

        <div>
          <a className={styles.playButton} href={props.playUrl}>
            <img
              className={styles.icons}
              src="/src/assets/icons/ic_triangle-right.svg"
            />
            Play
          </a>
          <button
            className={styles.moreInfoButton}
            onClick={props.onMoreInfoClick}
          >
            <img className={styles.icons} src="/src/assets/icons/ic_info.svg" />
            More Info
          </button>
        </div>
      </div>
    </section>
  );
};
