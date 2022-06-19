import React from "react";

import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img alt="company logo" src="/src/assets/logo.svg" />
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/shows">TV Shows</a>
        </li>
        <li>
          <a href="/movies">Movies</a>
        </li>
        <li>
          <a href="/popular">New &amp; Popular</a>
        </li>
        <li>
          <a href="/my-list">My List</a>
        </li>
      </ul>

    </nav>
  );
};
