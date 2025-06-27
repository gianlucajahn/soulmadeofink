import styles from "./page.module.scss";
import Gallery from "../components/Gallery/Gallery";

export default function Experience() {
  return (
    <div className={styles.experience}>
      <h1>Experience*</h1>
      <p>*Just me rambling about things I have experienced, my two cents on certain topics and the melancholy of human memories.</p>

      <Gallery category="experience" />
    </div>
  );
}
