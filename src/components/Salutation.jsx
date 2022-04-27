import styles from "./Salutation.module.css";
import Skill from "./Skill";
import Intro from "../components/Intro";

export default function Salutation(props) {
  return (
    <div className={styles.div}>
      <img
        src="https://via.placeholder.com/600x800.png?text=Coming+Soon"
        alt="coming soon"
        width="450"
        height="500"
        className={styles.image}
      />
      <div className={styles.fenetre}>
        <p className={styles.nom}>{props.nom}</p>
        <Intro>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          similique nostrum rerum velit voluptatibus deserunt cum? Dicta quia
          odio nostrum perferendis sit illo hic, quibusdam officia ducimus quod
          nesciunt dolor.Lorem ipsum dolor sit. quibusdam officia ducimus quod
          nesciunt dolor.Lorem ipsum dolor sit.
        </Intro>
      </div>
      <Skill />
    </div>
  );
}
