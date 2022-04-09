import styles from "./Footer.module.css";

export default function Footer(props) {
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.p}>&#169; Copyright {props.nom}</p>
      </div>
    </footer>
  );
}
