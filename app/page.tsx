import styles from "./page.module.css";
import WorksPanel from "./WorksPanel";
import MobileView from "./MobileView";
import { skills, PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from "./data";

export default function Page() {
  return (
    <>
      <main className={`${styles.main} ${styles.desktopOnly}`}>
        <section className={styles.left}>
          <h1 className={styles.name}>Debarpan Dey</h1>

          <p className={styles.tagline}>
            <span className={styles.italic}>Crafting Interfaces.</span> Building
            polished software and web experiences. Experimenting with magical
            details in user interfaces.
          </p>

          <ul className={styles.skills}>
            {skills.map((skill) => (
              <li key={skill} className={styles.pill}>
                {skill}
              </li>
            ))}
          </ul>

          <footer className={styles.meta}>
            <div className={styles.metaRow}>
              <span>30+ Clients</span>
              <span className={styles.dot}>•</span>
              <span>Exp: 5.6 years</span>
            </div>
            <div className={styles.metaRow}>
              <span>Senior UI/UX Designer</span>
              <span className={styles.dot}>•</span>
              <span>Kolkata, India.</span>
            </div>
            <div className={styles.metaRow}>
              <a href={PHONE_HREF} className={styles.metaLink}>
                {PHONE}
              </a>
              <span className={styles.dot}>•</span>
              <a href={EMAIL_HREF} className={styles.metaLink}>
                {EMAIL}
              </a>
            </div>
          </footer>
        </section>

        <WorksPanel />
      </main>

      <MobileView />
    </>
  );
}
