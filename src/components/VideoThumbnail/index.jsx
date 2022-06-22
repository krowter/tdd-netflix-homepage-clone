import { useState } from "react";
import styles from "./VideoThumbnail.module.css";

export const VideoThumbnail = ({ videoPreview, thumbnail }) => {
  const [playVideoPreview, setPlayVideoPreview] = useState(false);

  const url = new URL(videoPreview);

  url.searchParams.set("autoplay", playVideoPreview ? 1 : 0);

  const handleMouseOver = () => {
    setPlayVideoPreview(true);
  };

  const handleMouseLeave = () => {
    setPlayVideoPreview(false);
  };

  return (
    <div
      className={styles.wrapper + " " + (playVideoPreview ? styles.scaleUp : "")}
      data-testid="video-thumbnail"
    >
      <img
        className={playVideoPreview ? styles.exit : styles.enter}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        src={thumbnail}
      />
      <iframe
        data-testid="video-preview"
        frameBorder={0}
        src={url.origin + url.pathname + url.search}
      />
    </div>
  );
};
