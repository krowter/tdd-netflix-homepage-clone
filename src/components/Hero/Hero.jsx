import styles from "./Hero.module.css";

export const Hero = ({ onPlayClick, onMoreInfoClick }) => {
  return (
    <div className={styles.heroSection} data-testid="hero-section">
      <img data-testid="hero-image" className={styles.heroImage} src="/src/assets/hero-image.jpg" />

      <div className={styles.imageBottomOverlay} />

      <div className={styles.heroInfo}>
        <p>
          Premise. Set in Albuquerque, New Mexico, between 2008 and 2010,
          Breaking Bad follows Walter White, a meek high school chemistry
          teacher who transforms into a ruthless player in the local
          methamphetamine drug trade, driven by a desire to financially provide
          for his family after being diagnosed with terminal lung cancer.
        </p>

        <div>
          <button className={styles.playButton} onClick={onPlayClick}>
            <img
              className={styles.icons}
              src="/src/assets/icons/ic_triangle-right.svg"
            />
            Play
          </button>
          <button className={styles.moreInfoButton} onClick={onMoreInfoClick}>
            <img className={styles.icons} src="/src/assets/icons/ic_info.svg" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};
