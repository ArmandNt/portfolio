import styles from "./Skill.module.css";
import Link from "./Link";

export default function Skills(props) {
  return (
    <div className={styles.window}>
      <h3 className={styles.titre}>Compétences</h3>
      <div className={styles.descr}>
        <Link nom="HTML/CSS" />
        <Link nom="JS" />
        <Link nom="SQL" />
        <Link nom="NoSQL" />
        <Link nom="Java" />
        <Link nom="C#" />
      </div>
    </div>
  );
}
