import styles from "./Projet.module.css";
import projet from "../resources/gestion_stagiaires.zip";
import Link from "../components/Link";
import ImageSliderBureau from "../components/ImageSliderBureau";
import { SliderDataBureau } from "../components/SliderDataBureau";

export default function ProjetBureau(props) {
  return (
    <main>
      <section>
        <div className={styles.div}>
          <p className={styles.titre}>
            Application bureau de gestion de stagiaires
          </p>
            <ImageSliderBureau slides={SliderDataBureau} className={styles.image} />
          <p className={styles.descr}>
            C'est un application bureau qui aident à la gestions des stagiaires. L'application contient 3 onglets (Programmes, Stagiaires et Consulter). Donc, vous pouves ajouter, modifier ou supprimer des programmes dans l'onglet programme, vous pouvez faire la même chose pour les stagiaires dans l'onglet stagiaire et aussi les ajouter à un programme. Pour l'onglet consulter, ça montre une liste des stagiaires qui sont dans un programme selectionner.
          </p>
          <a href={projet} className={styles.link}>
            <input type="submit" className={styles.btn} value="Télécharger le fichier zip" />
          </a>
          <p className={styles.titre_technologies}>Technologies utilisées</p>
          <div className={styles.technologies}>
            <Link nom="Visual Studio 2019" />
            <Link nom="C#" />
            <Link nom="SQL Server" />
          </div>
        </div>
      </section>
    </main>
  );
}
