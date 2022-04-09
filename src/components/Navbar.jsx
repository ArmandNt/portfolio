import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Menu(props) {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <header>
      <nav className={color ? styles.navbar_bg : styles.navbar}>
        <ul className={styles.navbar_links}>
          <li>
            <Link to="/">accueil</Link>
          </li>
          <li>
            <Link to="Projet1">projet 1</Link>
          </li>
          <li>
            <Link to="Projet2">projet 2</Link>
          </li>
          <li>
            <Link to="Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
