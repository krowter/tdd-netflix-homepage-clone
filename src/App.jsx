import { useState } from "react";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

import SearchIcon from "/src/assets/icons/ic_search.svg";
import BellIcon from "/src/assets/icons/ic_bell.svg";
import HeroImage from '/src/assets/hero-image.jpg'

import styles from "./App.module.css";

function App() {
  const heroSectionProps = {
    image: HeroImage,
    description:
      "A high school chemistry teacher dying of cancer teams with a former student to secure his family's future by manufacturing and selling crystal meth.",
    playUrl: "/watch/breaking-bad",
    onMoreInfoClick: () => alert("More info clicked!")
  };

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

      <Hero {...heroSectionProps} />
    </>
  );
}

export default App;
