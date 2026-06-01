"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

type Project = {
  name: string;
  url?: string;
  role: string;
  duration: string;
  blurb: string;
  detail: string;
};

const projects: Project[] = [
  {
    name: "Tata Tiscon",
    url: "https://tatatiscon.co.in",
    role: "Website Re-Design",
    duration: "03 Months",
    blurb: "Tata Steel's most profitable vertical.",
    detail: "Keeping the vibe similar with a bit of modern touch.",
  },
  {
    name: "Flex Worx",
    url: "https://flexworx.theqa.in/",
    role: "Website Re-Design",
    duration: "03 Weeks\n+1 Week",
    blurb: "One of the most renowned Kolkata's office space solution provider.",
    detail: "User Interface and Experience updates to current UI trend.",
  },
  {
    name: "The QA",
    role: "Website Re-Design",
    duration: "06 Months,\ncontinuous updating UI",
    blurb:
      "Dedicated platform that provides exclusive discounts and offers, creating a positive impact on their academic journey.",
    detail:
      "Targeting Genz audience (college-goers), Attractive UI, Fun Illustrations.",
  },
  {
    name: "Sconto",
    url: "https://www.sconto.ai/",
    role: "Mobile App, Website Design & Social Media Designs.",
    duration: "06 Months,\ncontinuous updating UI",
    blurb:
      "Dedicated platform that provides exclusive discounts and offers, creating a positive impact on their academic journey.",
    detail:
      "Targeting Genz audience (college-goers), Attractive UI, Fun Illustrations.",
  },
  {
    name: "Hour Consulting",
    url: "https://hourconsulting.com/",
    role: "Website Design",
    duration: "06 Months",
    blurb: "A Global recruitment and Human Resources (HR) solutions firm.",
    detail: "New generation targeting, use of bright colours.",
  },
  {
    name: "The Darjeeling Brew",
    url: "https://thedarjeelingbrew.com/",
    role: "Website Re-Design",
    duration: "05 Days",
    blurb:
      "A luxurious Tea brand offering premium tea leaves in Pan India and exporting to France.",
    detail:
      "Keeping the UX similar, the design had to be polished and made cleaner.",
  },
  {
    name: "Unito",
    url: "https://unito.co.in/",
    role: "Website Redesign",
    duration: "2 Weeks",
    blurb:
      "India's one of the largest distributor of Work wear and Industrial Clothing.",
    detail:
      "Vibrant and Client proposed colour specified for two separate business models.",
  },
];

export default function WorksPanel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLElement | null)[]>([]);


  return (
    <section className={styles.worksWrap}>
      <span
        className={styles.marker}
        aria-hidden
      >
        <svg width="19" height="16" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.1324 5.6454L3.27531 0.659062C1.95714 0.104725 0.5 1.07269 0.5 2.50267V12.4769C0.5 13.907 1.95733 14.875 3.27552 14.3205L15.1326 9.33253C16.7653 8.64568 16.7652 6.33206 15.1324 5.6454Z" fill="#1A1A1A" stroke="#A0A0A0" />
        </svg>
      </span>

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div>Project</div>
          <div>Description</div>
          <div>Duration</div>
        </div>

        <div className={styles.scrollWrap}>
          <div className={styles.fadeTop} aria-hidden />
          <div className={styles.fadeBottom} aria-hidden />
          <div ref={scrollRef} className={styles.cardScroll}>
            {projects.map((p, i) => {
              const padStyle = {
                paddingTop: `${i === 0 ? "164" : "50"}px`,
                paddingBottom: `${
                  i === projects.length - 1 ? "180" : "50"
                }px`,
              };
              const projectLabel = (
                <>
                  <span className={styles.projectName}>{p.name}</span>
                  {p.url && (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.66797 7.33288L14.1346 1.86621" stroke="#E5E5E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14.6648 4.53301V1.33301H11.4648" stroke="#E5E5E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7.33203 1.33301H5.9987C2.66536 1.33301 1.33203 2.66634 1.33203 5.99967V9.99967C1.33203 13.333 2.66536 14.6663 5.9987 14.6663H9.9987C13.332 14.6663 14.6654 13.333 14.6654 9.99967V8.66634" stroke="#E5E5E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </>
              );

              return (
                <div
                  key={p.name}
                  ref={(el) => {
                    rowRefs.current[i] = el;
                  }}
                  className={styles.row}
                  style={padStyle}
                >
                  <div className={styles.colProject}>
                    {p.url ? (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        {projectLabel}
                      </a>
                    ) : (
                      projectLabel
                    )}
                  </div>
                  <div className={styles.colDesc}>
                    <div className={styles.role}>{p.role}</div>
                    <div className={styles.blurb}>{p.blurb}</div>
                    <div className={styles.detail}>{p.detail}</div>
                  </div>
                  <div className={styles.colDuration}>{p.duration}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
