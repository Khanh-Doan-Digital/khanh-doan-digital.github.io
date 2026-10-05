"use client";

import type { PortfolioContent } from "../../data/content";
import { useExperienceRoadmap } from "../../hooks/useExperienceRoadmap";
import { ArrowDownIcon } from "../ui/Icons";

function ExperienceMilestoneLogo({ company }: { company: string }) {
  const label = company.startsWith("LANA")
    ? "LANA"
    : company.startsWith("Lạc")
      ? "LẠC"
      : company === "Freelance"
        ? "Freelance"
        : "S4S";

  return <span className="milestone-monogram" aria-hidden="true">{label}</span>;
}

export function ExperienceSection({ content }: { content: PortfolioContent }) {
  const { roadmapRef, activeIndex } = useExperienceRoadmap();

  return (
    <section className="experience" id="experience">
      <div className="section-shell experience-intro">
        <div>
          <p className="kicker">{content.experienceKicker}</p>
          <h2>{content.experienceTitle}</h2>
          <div className="roadmap-scroll-cue" aria-hidden="true">
            <span>{content.experienceScrollLabel}</span>
            <i><ArrowDownIcon /></i>
          </div>
        </div>
      </div>

      <div
        className="section-shell experience-roadmap"
        ref={roadmapRef}
        role="list"
        aria-label={content.experienceTitle}
      >
        <svg className="roadmap-line" viewBox="0 0 100 1000" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="roadmap-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#2dd4a7" />
              <stop offset="0.48" stopColor="#4a95c9" />
              <stop offset="1" stopColor="#1976d2" />
            </linearGradient>
          </defs>
          <path
            className="roadmap-path roadmap-path-progress roadmap-path-wide"
            d="M50 0 C50 60 64 70 64 125 C64 220 36 280 36 375 C36 470 64 530 64 625 C64 720 36 780 36 875 C36 940 50 965 50 1000"
            pathLength="1"
          />
          {/* Narrow screens: a wide wave behind the cards that crosses the centre at every milestone. */}
          <path
            className="roadmap-path roadmap-path-progress roadmap-path-compact"
            d="M14 0 C14 91 86 159 86 250 C86 341 14 409 14 500 C14 591 86 659 86 750 C86 841 14 909 14 1000"
            pathLength="1"
          />
        </svg>
        {content.experiences.map((experience, index) => {
          const isRevealed = index <= activeIndex;
          const isActive = index === activeIndex;
          const brandClass = experience.company.startsWith("LANA")
            ? "lana"
            : experience.company.startsWith("Lạc")
              ? "lac"
              : experience.company === "Freelance"
                ? "freelance"
                : "s4s";

          return (
            <div
              className={`roadmap-step roadmap-step-${index % 2 === 0 ? "left" : "right"}${isRevealed ? " is-revealed" : ""}${isActive ? " is-active" : ""}`}
              key={`${experience.start}-${experience.role}`}
              role="listitem"
            >
              <div className={`roadmap-milestone milestone-${brandClass}`} aria-hidden="true">
                <span className="milestone-ring" />
                <span className="milestone-logo"><ExperienceMilestoneLogo company={experience.company} /></span>
              </div>

              <article className="experience-card" aria-current={isActive ? "step" : undefined}>
                <div className="experience-date">
                  <span>{experience.start}</span>
                  <i>→</i>
                  <span>{experience.end}</span>
                </div>
                <div className="experience-body">
                  <div>
                    <p className="company-name">{experience.company}</p>
                    <h3>{experience.role}</h3>
                  </div>
                  <p>{experience.text}</p>
                  <div className="experience-tags">
                    {experience.tags.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
