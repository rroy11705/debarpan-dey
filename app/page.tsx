import styles from "./page.module.css";
import WorksPanel from "./WorksPanel";

const skills = [
  "Figma",
  "Adobe XD",
  "Prototyping",
  "Wireframing",
  "Visual Design",
  "Usability Testing",
  "Design Systems",
  "Typography",
  "UX Strategy",
  "Micro Interactions",
  "ChatGPT - Visual Generation",
  "Claude - UX Research & Documentations",
];

export default function Page() {
  return (
    <main className={styles.main}>
      <section className={styles.left}>
        <h1 className={styles.name}>Debarpan Dey</h1>

        <p className={styles.tagline}>
          <span className={styles.italic}>Crafting Interfaces.</span> Building
          polished software and web experiences. Experimenting with magical
          details in user interfaces.
        </p>

        <ul className={styles.skills}>
          {skills.map((skill) => (
            <li
              key={skill}
              className={styles.pill}
            >
              {skill}
            </li>
          ))}
        </ul>

        <footer className={styles.meta}>
          <div className={styles.metaRow}>
            <span>24+ Clients</span>
            <span className={styles.dot}>•</span>
            <span>Experience - 04 years, 06 months</span>
          </div>
          <div className={styles.metaRow}>
            <span>Senior UI-UX Designer</span>
            <span className={styles.dot}>•</span>
            <span>Kolkata, India.</span>
          </div>
          <div className={styles.metaRow}>
            <a href="tel:+918697500538" className={styles.metaLink}>
              +91 86975 - 00538
            </a>
            <span className={styles.dot}>•</span>
            <a href="mailto:desgn.dd@gmail.com" className={styles.metaLink}>
              desgn.dd@gmail.com
            </a>
          </div>
        </footer>
      </section>

      <WorksPanel />
    </main>
  );
}
