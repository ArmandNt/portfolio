import React, { useState } from "react";
import { SliderDataBureau } from "./SliderDataBureau";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import styles from "./ImageSlider.module.css";

export default function ImageSliderBureau({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={styles.slider}>
      <FaArrowAltCircleLeft className={styles.left_arrow} onClick={prevSlide} />
      <FaArrowAltCircleRight
        className={styles.right_arrow}
        onClick={nextSlide}
      />
      {SliderDataBureau.map((slide, index) => {
        return (
          <div
            className={index === current ? styles.slide_active : styles.slide}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="Capture d'ecrans du projet"
                className={styles.image}
              />
            )}
          </div>
        );
      })}
    </section>
  );
}
