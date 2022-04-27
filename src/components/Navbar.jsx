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
            <Link to="ProjetWeb">projet Web</Link>
          </li>
          <li>
            <Link to="ProjetBureau">projet Bureau</Link>
          </li>
          <li>
            <Link to="Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
