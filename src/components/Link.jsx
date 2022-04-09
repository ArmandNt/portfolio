import styles from "./Link.module.css";

export default function Link(props) {
  return (
    <>
      <h4 className={styles.link}>{props.nom}</h4>
    </>
  );
}
