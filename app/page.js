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
        I am interested in{" "}
        <span className={styles.main_interest}>software engineering</span>{" "}
        (mainly web & mobile),{" "}
        <span className={styles.main_interest}>deep learning</span>,{" "}
        <span className={styles.main_interest}>design</span> (UI & UX), and{" "}
        <span className={styles.main_interest}>cybersecurity</span>. I desire to
        create unique, impactful products using my knowledge from these fields.
        I am also interested in
        <span className={styles.main_interest}>music</span>,{" "}
        <span className={styles.main_interest}> fashion</span>,{" "}
        <span className={styles.main_interest}>sports</span>, and
        <span className={styles.main_interest}>movies</span>!
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
