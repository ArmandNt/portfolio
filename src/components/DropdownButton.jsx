import styles from "./DropdownButton.module.css";
import { FaArrowAltCircleDown } from "react-icons/fa";
import cv from "../resources/cv.pdf";

export default function DropdownButton() {
  return (
    <div className={styles.dropdown}>
      <a href={cv} download="CV_EN_ArmandNtawebangana">
        <button className={styles.dropdown_btn}>
          Telecharger mon CV
          <FaArrowAltCircleDown className={styles.arrow} />
        </button>
      </a>
    </div>
  );
}
