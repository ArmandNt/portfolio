import styles from "./Intro.module.css";

export default function Intro(props) {
  return <p className={styles.description}>{props.children}</p>;
}
