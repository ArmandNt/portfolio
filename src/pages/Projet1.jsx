import styles from "./Projet.module.css";
import projet from "../resources/resto.zip";
import Link from "../components/Link";
import ImageSliderWeb from "../components/ImageSliderWeb";
import { SliderDataWeb } from "../components/SliderDataWeb";

export default function ProjetWeb(props) {
  return (
    <main>
      <section>
        <div className={styles.div}>
          <p className={styles.titre}>
            Site web de restaurant avec gestion de comptes
          </p>
          <ImageSliderWeb slides={SliderDataWeb} className={styles.image} />
          <p className={styles.descr}>
            Il s'agit d'un restaurant qui a fermer sa boutique à cause de la
            pandemie et a décider de réouvrir le restaurant en ligne et faire
            des livraisons à domicile. Le site web a était developper en groupe
            de 2 personnes (moi et mon collègue). le site web à aussi un gestion
            des utilisateurs.
          </p>
          <a href={projet} className={styles.link}>
            <input
              type="submit"
              className={styles.btn}
              value="Télécharger le fichier zip"
            />
          </a>
          <p className={styles.titre_technologies}>Technologies utilisées</p>
          <div className={styles.technologies}>
            <Link nom="Visual Studio Code" />
            <Link nom="Node.JS" />
            <Link nom="HTML/CSS" />
            <Link nom="JS" />
            <Link nom="SQL" />
            <Link nom="BootStrap" />
          </div>
        </div>
      </section>
    </main>
  );
}
