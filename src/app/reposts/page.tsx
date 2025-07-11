import styles from "./page.module.scss";
import Gallery from "../components/Gallery/Gallery";

export default function Experience() {
  return (
    <div className={styles.experience}>
      <h1>Reposts*</h1>
      <p className={styles.pageDesc}>*Letters, texts, poems and quotes that I identified enough with to feel the need to put them on here.</p>

      <Gallery category="reposts" />
    </div>
  );
}
