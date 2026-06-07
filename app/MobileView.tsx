"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { projects, skills, stats } from "./data";

function Hero() {
  return (
    <section className={styles.mHero}>
      <h1 className={styles.mName}>Debarpan Dey</h1>
      <p className={styles.mTagline}>
        <span className={styles.italic}>Crafting Interfaces.</span> Building
        polished software and web experiences. Experimenting with magical
        details in user interfaces.
      </p>

      <ul className={styles.mStats}>
        {stats.map((s) =>
          s.href ? (
            <li key={s.label}>
              <a href={s.href} className={styles.mStatPill}>
                {s.label}
              </a>
            </li>
          ) : (
            <li key={s.label} className={styles.mStatPill}>
              {s.label}
            </li>
          )
        )}
      </ul>
    </section>
  );
}

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M3 8h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M8 3v10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const MinusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M3 8h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const ExternalIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <path
      d="M8.66797 7.33288L14.1346 1.86621"
      stroke="#E5E5E5"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.6648 4.53301V1.33301H11.4648"
      stroke="#E5E5E5"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.33203 1.33301H5.9987C2.66536 1.33301 1.33203 2.66634 1.33203 5.99967V9.99967C1.33203 13.333 2.66536 14.6663 5.9987 14.6663H9.9987C13.332 14.6663 14.6654 13.333 14.6654 9.99967V8.66634"
      stroke="#E5E5E5"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function MobileView() {
  const [openIdx, setOpenIdx] = useState<number>(0);

  return (
    <div className={styles.mobileOnly}>
      <div className={styles.mView}>
        {/* Hero (top) */}
        <Hero />

        {/* Selected Works */}
        <section className={styles.mSection}>
          <h2 className={styles.mHeading}>Selected Works</h2>
          <ul className={styles.mAccordion}>
            {projects.map((p, i) => {
              const open = openIdx === i;
              return (
                <li
                  key={p.name}
                  className={`${styles.mAccItem} ${open ? styles.mAccOpen : ""}`}
                >
                  <button
                    type="button"
                    className={styles.mAccHeader}
                    onClick={() => setOpenIdx(open ? -1 : i)}
                    aria-expanded={open}
                  >
                    <span>{p.name}</span>
                    {open ? <MinusIcon /> : <PlusIcon />}
                  </button>
                  {open && (
                    <div className={styles.mAccBody}>
                      <div className={styles.mAccRole}>
                        {p.url ? (
                          <a
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.mAccRoleLink}
                          >
                            <span>{p.role}</span>
                            <ExternalIcon />
                          </a>
                        ) : (
                          <span>{p.role}</span>
                        )}
                      </div>
                      <p className={styles.mAccBlurb}>{p.blurb}</p>
                      <p className={styles.mAccDetail}>{p.detail}</p>
                    </div>
                  )}
                </li>
              );
            })}
            <li 
              className={`${styles.mAccItem} ${openIdx === projects.length ? styles.mAccOpen : ""}`}
            >
              <span className={styles.mAccFooter} >
                And many more...
              </span>
            </li>
          </ul>
        </section>

        {/* Skills */}
        <section className={styles.mSection}>
          <h2 className={styles.mHeading}>Skills</h2>
          <ul className={styles.mSkills}>
            {skills.map((skill) => (
              <li
                key={skill}
                className={`${styles.pill} ${
                  skill === "Figma" ? styles.pillActive : ""
                }`}
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* Hero (repeated at bottom so users don't have to scroll up) */}
        <Hero />
      </div>
    </div>
  );
}
