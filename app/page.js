import Image from "next/image";
import styles from "../styles/Main.module.css";

export default function Home() {
  return (
    <main className={styles.outer}>
      <div className={styles.main_header}>
        <span>
          <em>Hey, I'm Korbin!</em>
        </span>
        <span className={styles.main_subhead}>Student + Developer</span>
      </div>

      <div className={styles.main_body}>
        <p>
          I'm a 20 year old student from Dallas, Texas. I am currently studying
          Computer Science at the University of Texas at Dallas
        </p>
      </div>

      <div className={styles.main_body}>
        I am interested in software engineering (mainly web & mobile), deep
        learning, design (UI & UX), and cybersecurity. I desire to create
        unique, impactful products using my knowledge from these fields. I am
        also interested in music, fashion, sports, and movies!
      </div>

      <div className={styles.main_body}>
        <p>In my free time I enjoy...</p>
        <ul className={styles.main_list}>
          <li className={styles.main_li}>
            <em>Working on exciting projects</em>
          </li>
          <li className={styles.main_li}>
            <em>
              Listening to music, watching movies, and occasionally reading
              books
            </em>
          </li>
          <li className={styles.main_li}>
            <em>Spending time with family and friends</em>
          </li>
        </ul>
      </div>
    </main>
  );
}
