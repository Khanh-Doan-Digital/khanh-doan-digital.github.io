"use client";

import { useEffect, useRef, useState } from "react";

import type { Language, PortfolioContent } from "../../data/content";
import type { CaseStudy } from "../../data/types";
import { CaseAssetCarousel } from "./CaseAssetCarousel";

type CaseDetailModalProps = {
  caseStudy: CaseStudy;
  content: PortfolioContent;
  language: Language;
  onClose: () => void;
  onNavigate?: (direction: -1 | 1) => void;
  position?: string;
  previewMode: boolean;
};

export function CaseDetailModal({ caseStudy, content, language, onClose, onNavigate, position, previewMode }: CaseDetailModalProps) {
  const dialogRef = useRef<HTMLElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const navigateRef = useRef(onNavigate);
  const [condensed, setCondensed] = useState(false);
  const caseNumber = String(caseStudy.id).padStart(2, "0");
  const metrics = caseStudy.metrics.filter((metric) => metric.verified || previewMode);

  useEffect(() => {
    navigateRef.current = onNavigate;
  }, [onNavigate]);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: 0 });
  }, [caseStudy.id]);

  useEffect(() => {
    const returnTarget = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const frameId = window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        // The asset carousel and video controls use the arrow keys themselves.
        const target = event.target instanceof HTMLElement ? event.target : null;
        if (target?.closest(".case-assets, video, input, textarea")) return;
        navigateRef.current?.(event.key === "ArrowLeft" ? -1 : 1);
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = [...(dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), video[controls], [tabindex]:not([tabindex="-1"])',
      ) ?? [])].filter((element) => !element.hasAttribute("hidden"));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(frameId);
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
      window.requestAnimationFrame(() => returnTarget?.focus());
    };
  }, [onClose]);

  const detail = caseStudy.detail;
  if (!detail) return null;

  return (
    <div
      className="case-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => { if (event.currentTarget === event.target) onClose(); }}
    >
      <section
        className="case-modal"
        data-condensed={condensed ? "true" : undefined}
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`case-title-${caseNumber}`}
        aria-describedby={`case-overview-${caseNumber}`}
      >
        <button ref={closeButtonRef} className="case-modal-close" type="button" onClick={onClose} aria-label={content.close}>
          <svg aria-hidden="true" viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <header className={`case-modal-header case-modal-header-${caseStudy.coverVariant}`}>
          <div className="case-modal-overline">
            <p><span>CASE {caseNumber}</span><span>{caseStudy.industry[language]}</span></p>
            {onNavigate && (
              <nav className="case-modal-nav" aria-label={`${content.previousCase} / ${content.nextCase}`}>
                <button type="button" onClick={() => onNavigate(-1)} aria-label={content.previousCase}>←</button>
                {position && <span>{position}</span>}
                <button type="button" onClick={() => onNavigate(1)} aria-label={content.nextCase}>→</button>
              </nav>
            )}
          </div>
          <div className="discipline-tags">
            {caseStudy.disciplineTags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <h2 id={`case-title-${caseNumber}`}>{caseStudy.title[language]}</h2>
          <p>{caseStudy.roles[language]}</p>
        </header>

        <div
          className="case-modal-body"
          ref={bodyRef}
          onScroll={(event) => {
            const { scrollTop } = event.currentTarget;
            setCondensed((current) => (scrollTop > 48 ? true : scrollTop <= 4 ? false : current));
          }}
        >
          {metrics.length > 0 && (
            <section className="case-modal-results" aria-label={content.verifiedResults}>
              {metrics.map((metric) => (
                <div data-metric-status={metric.verified ? "verified" : "pending"} key={metric.label.en}>
                  <span>{metric.label[language]}</span><strong>{metric.value}</strong>
                </div>
              ))}
            </section>
          )}

          <dl className="case-modal-meta">
            {caseStudy.dataPeriod && <div><dt>{content.dataPeriod}</dt><dd>{caseStudy.dataPeriod[language]}</dd></div>}
            {caseStudy.collaborationDuration && <div><dt>{content.collaborationDuration}</dt><dd>{caseStudy.collaborationDuration[language]}</dd></div>}
            <div><dt>{content.platformsLabel}</dt><dd>{caseStudy.platforms.join(" · ")}</dd></div>
          </dl>

          <div className="case-detail-block" id={`case-overview-${caseNumber}`}>
            <span>01 · {content.overview}</span><p>{detail.overview[language]}</p>
          </div>
          <div className="case-detail-block"><span>02 · {content.strategy}</span><p>{detail.strategy[language]}</p></div>
          <div className="case-detail-block"><span>03 · {content.results}</span><p>{detail.results[language]}</p></div>
          {detail.accountScope && <div className="case-detail-block"><span>04 · {content.accountScope}</span><p>{detail.accountScope[language]}</p></div>}
          {detail.insight && <div className="case-detail-insight"><span>{content.insight}</span><p>{detail.insight[language]}</p></div>}

          <CaseAssetCarousel assets={caseStudy.assets} caseId={caseStudy.id} content={content} key={caseStudy.id} language={language} />
          <p className="case-modal-note">ⓘ {content.confidential}</p>
        </div>
      </section>
    </div>
  );
}
