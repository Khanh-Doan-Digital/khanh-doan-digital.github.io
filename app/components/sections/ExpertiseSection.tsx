"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

import type { Language, PortfolioContent } from "../../data/content";
import { expertise } from "../../data/expertise";
import type { Expertise } from "../../data/types";

type ExpertiseSectionProps = {
  content: PortfolioContent;
  language: Language;
  visibleCaseIds?: number[];
  onOpenCase?: (caseId: number) => boolean;
  onOpenEvidence?: (caseIds: number[]) => void;
};

const coreExpertise = expertise.filter((item) => item.kind === "core");
const supportingExpertise = expertise.filter((item) => item.kind === "supporting");

// Donut geometry in SVG user units, centred on the origin.
const WHEEL_OUTER = 190;
const WHEEL_INNER = 70;
const WHEEL_GAP = 4;
const WHEEL_VIEW = 215;

const round = (value: number) => Number(value.toFixed(2));

// The donut is cut along its diagonals (an X), so slices run clockwise from the top: 01 top, 02 right, 03 bottom, 04 left.
const wheelSlices = coreExpertise.map((item, index) => {
  const sweep = (Math.PI * 2) / coreExpertise.length;
  const start = Math.PI * 1.25 + index * sweep;
  const end = start + sweep;
  const middle = start + sweep / 2;
  // A constant-width gap needs a larger angular inset on the inner edge than on the outer one.
  const outerInset = Math.asin(WHEEL_GAP / 2 / WHEEL_OUTER);
  const innerInset = Math.asin(WHEEL_GAP / 2 / WHEEL_INNER);
  const point = (radius: number, angle: number) => `${round(radius * Math.cos(angle))} ${round(radius * Math.sin(angle))}`;
  const labelRadius = (WHEEL_OUTER + WHEEL_INNER) / 2;

  return {
    id: item.id,
    path: [
      `M ${point(WHEEL_OUTER, start + outerInset)}`,
      `A ${WHEEL_OUTER} ${WHEEL_OUTER} 0 0 1 ${point(WHEEL_OUTER, end - outerInset)}`,
      `L ${point(WHEEL_INNER, end - innerInset)}`,
      `A ${WHEEL_INNER} ${WHEEL_INNER} 0 0 0 ${point(WHEEL_INNER, start + innerInset)}`,
      "Z",
    ].join(" "),
    labelX: round(labelRadius * Math.cos(middle)),
    labelY: round(labelRadius * Math.sin(middle)),
    // Unit vector the selected slice pops out along.
    popX: round(Math.cos(middle)),
    popY: round(Math.sin(middle)),
  };
});

export function ExpertiseSection({ content, language, visibleCaseIds, onOpenCase, onOpenEvidence }: ExpertiseSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const renderHeading = (item: Expertise, number: string) => (
    <div className="expertise-pillar-heading">
      <span className="expertise-index">{number}</span>
      <div>
        {item.kind === "supporting" && <p className="expertise-kind">{content.supportingCapability}</p>}
        <h3>{item.title[language]}</h3>
        <p className="expertise-description">{item.description[language]}</p>
      </div>
    </div>
  );

  const renderBody = (item: Expertise) => {
    const proofs = item.proofs.filter((proof) => !visibleCaseIds || visibleCaseIds.includes(proof.caseId));
    const availableEvidence = item.evidenceCaseIds.filter((id) => !visibleCaseIds || visibleCaseIds.includes(id));
    const hasEvidence = proofs.length > 0 || availableEvidence.length > 0;

    return (
      <div className={hasEvidence ? "expertise-pillar-body" : "expertise-pillar-body expertise-pillar-body-single"}>
        <div>
          <span className="expertise-label">{content.expertiseSkillsLabel}</span>
          <ul className="expertise-skills">
            {item.subskills.map((skill) => <li key={skill.en}>{skill[language]}</li>)}
          </ul>
        </div>

        {hasEvidence && (
          <div>
            <span className="expertise-label">{content.expertiseProofLabel}</span>
            {proofs.length > 0 && (
              <div className="expertise-proofs">
                {proofs.map((proof) => {
                  // Proof copy is written as "<project tag> · <result>".
                  const [tag, ...rest] = proof.text[language].split(" · ");

                  return (
                    <a
                      href={`#case-${String(proof.caseId).padStart(2, "0")}`}
                      key={proof.caseId}
                      onClick={(event) => {
                        if (onOpenCase?.(proof.caseId)) event.preventDefault();
                      }}
                    >
                      {rest.length > 0 && <small>{tag}</small>}
                      <span>{rest.length > 0 ? rest.join(" · ") : tag}</span>
                      <i aria-hidden="true">↘</i>
                    </a>
                  );
                })}
              </div>
            )}
            {availableEvidence.length > 0 && (
              <button className="expertise-evidence-count" type="button" onClick={() => onOpenEvidence?.(availableEvidence)}>
                +{availableEvidence.length} {content.expertiseMoreEvidence}<i aria-hidden="true">↘</i>
              </button>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <section
      className={isVisible ? "expertise section-shell is-visible" : "expertise section-shell"}
      id="expertise"
      ref={sectionRef}
    >
      <div className="section-heading">
        <div>
          <p className="kicker">{content.expertiseKicker}</p>
          <h2>{content.expertiseTitle}</h2>
        </div>
        <p>{content.expertiseIntro}</p>
      </div>

      <div className="expertise-wheel-layout">
        {/* All four panels share one grid cell, so the layout keeps the tallest panel's height. */}
        <div className="expertise-panels">
          {coreExpertise.map((item, index) => (
            <article
              aria-hidden={index === activeIndex ? undefined : true}
              aria-labelledby={`expertise-slice-${item.id}`}
              className={index === activeIndex ? "expertise-panel is-active" : "expertise-panel"}
              data-expertise-kind={item.kind}
              id={`expertise-panel-${item.id}`}
              key={item.id}
              role="tabpanel"
            >
              {renderHeading(item, String(index + 1).padStart(2, "0"))}
              {renderBody(item)}
            </article>
          ))}
        </div>

        <div className="expertise-wheel">
          <svg
            aria-label={content.expertiseKicker}
            role="tablist"
            viewBox={`${-WHEEL_VIEW} ${-WHEEL_VIEW} ${WHEEL_VIEW * 2} ${WHEEL_VIEW * 2}`}
          >
            <defs>
              <linearGradient id="expertise-wheel-gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="var(--gradient-start)" />
                <stop offset="1" stopColor="var(--gradient-end)" />
              </linearGradient>
            </defs>
            {wheelSlices.map((slice, index) => {
              const item = coreExpertise[index];
              const number = String(index + 1).padStart(2, "0");

              return (
                <g
                  aria-controls={`expertise-panel-${slice.id}`}
                  aria-label={`${number} ${item.title[language]}`}
                  aria-selected={index === activeIndex}
                  className={index === activeIndex ? "expertise-slice is-active" : "expertise-slice"}
                  id={`expertise-slice-${slice.id}`}
                  key={slice.id}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => {
                    if (event.key !== "Enter" && event.key !== " ") return;
                    event.preventDefault();
                    setActiveIndex(index);
                  }}
                  role="tab"
                  style={{ "--pop-x": slice.popX, "--pop-y": slice.popY } as CSSProperties}
                  tabIndex={0}
                >
                  <path d={slice.path} />
                  <text x={slice.labelX} y={slice.labelY}>{number}</text>
                </g>
              );
            })}
          </svg>
          <div className="expertise-wheel-hub" aria-hidden="true">
            <strong key={coreExpertise[activeIndex].id}>{coreExpertise[activeIndex].title[language]}</strong>
          </div>
        </div>
      </div>

      <div className="expertise-pillars">
        {supportingExpertise.map((item) => (
          <article
            className={`expertise-pillar expertise-pillar-${item.kind}`}
            data-expertise-kind={item.kind}
            key={item.id}
          >
            {renderHeading(item, String(expertise.indexOf(item) + 1).padStart(2, "0"))}
            {renderBody(item)}
          </article>
        ))}
      </div>
    </section>
  );
}
