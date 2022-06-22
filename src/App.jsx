import { useEffect, useState } from "react";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero/Hero";
import { VideoThumbnail } from "./components/VideoThumbnail";

import SearchIcon from "/src/assets/icons/ic_search.svg";
import BellIcon from "/src/assets/icons/ic_bell.svg";

import { getThumbnailUrlFromVideo, getEmbedUrlFromVideo } from "./utils/helper";

import styles from "./App.module.css";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("/videos.json")
      .then((res) => res.json())
      .then(setVideos);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div>
          <Navbar />

          <div>
            <img className={styles.icons} src={SearchIcon} />
            <img className={styles.icons} src={BellIcon} />
          </div>
        </div>
      </header>

      <Hero
        onMoreInfoClick={() => alert("more info clicked")}
        onPlayClick={() => alert("play clicked")}
      />

      <section className={styles.videoHorizontalList}>
        <h2>Continue Watching</h2>
        <div>
          {videos.map((video) => (
            <VideoThumbnail
              key={video.url}
              videoPreview={getEmbedUrlFromVideo(video)}
              thumbnail={getThumbnailUrlFromVideo(video)}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
