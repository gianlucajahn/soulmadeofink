import styles from "./page.module.scss";
import ZoomOnScrollImage from "./components/ZoomOnScrollImage/ZoomOnScrollImage";

export default function Home() {
  return (
    <div className={styles.page}>
      <ZoomOnScrollImage />

      <h3>Welcome to my private space</h3>
      <p className={styles.desc}>Hey, fellow stranger or not-so-stranger. Recently, I felt like the external perception I received wasn't really fitting my internal perception anymore. I noticed: That's been my own fault. I've been sharing myself with almost no one, to the point where the person I presented to others was so little of a fraction of mine that it could have been another person entirely. I figured, I want to change that. So here we are. I like to write. If you like, feel free to take a seat and read about it. Tell me about your feelings regarding these topics. Talk to me about it, if you like. Of course, feel equally free to leave this page and go on about your day. See you around!</p>
    </div>
  );
}
