"use client";

import { useCallback, useMemo } from "react";

import type { Language, PortfolioContent } from "../../data/content";
import type { CaseStudy } from "../../data/types";
import { AdditionalEvidence } from "../cases/AdditionalEvidence";
import { CaseCard } from "../cases/CaseCard";
import { CaseDetailModal } from "../cases/CaseDetailModal";

type WorkSectionProps = {
  caseStudies: CaseStudy[];
  content: PortfolioContent;
  language: Language;
  previewMode: boolean;
  selectedCase: CaseStudy | null;
  totalCases: number;
  onSelectCase: (caseStudy: CaseStudy | null) => void;
};

export function WorkSection({
  caseStudies,
  content,
  language,
  previewMode,
  selectedCase,
  totalCases,
  onSelectCase: setSelectedCase,
}: WorkSectionProps) {
  const flagshipCases = useMemo(
    () => caseStudies
      .filter((item) => item.presentationTier === "flagship")
      .sort((left, right) => (left.featuredRank ?? 99) - (right.featuredRank ?? 99)),
    [caseStudies],
  );
  const evidenceCases = useMemo(
    () => caseStudies
      .filter((item) => item.presentationTier === "evidence-only")
      .sort((left, right) => left.id - right.id),
    [caseStudies],
  );
  const closeCase = useCallback(() => setSelectedCase(null), [setSelectedCase]);
  // Ordered by case number; unpublished cases are simply skipped (4/19 → 6/19).
  const navigableCases = useMemo(
    () => caseStudies.filter((item) => item.detail).sort((left, right) => left.id - right.id),
    [caseStudies],
  );
  const selectedIndex = selectedCase ? navigableCases.findIndex((item) => item.id === selectedCase.id) : -1;
  const navigateCase = (direction: -1 | 1) => {
    if (selectedIndex < 0) return;
    setSelectedCase(navigableCases[(selectedIndex + direction + navigableCases.length) % navigableCases.length]);
  };

  return (
    <>
      <section className="work case-studies" id="work">
        <div className="section-shell">
          <div className="section-heading work-heading">
            <div>
              <p className="kicker">{content.workKicker}</p>
              <h2>{content.workTitle}</h2>
            </div>
            <p>{content.workIntro}</p>
          </div>

          {previewMode && <p className="case-preview-notice"><span>PREVIEW</span>{content.previewNotice}</p>}

          {flagshipCases.length > 0 ? (
            <div className="selected-case-grid">
              {flagshipCases.map((caseStudy) => (
                <CaseCard
                  caseStudy={caseStudy}
                  content={content}
                  key={caseStudy.id}
                  language={language}
                  onSelect={setSelectedCase}
                  previewMode={previewMode}
                />
              ))}
            </div>
          ) : (
            <div className="case-empty-state" role="status">
              <span>CASE STUDIES</span>
              <p>{content.noPublishedCases}</p>
            </div>
          )}

          <AdditionalEvidence caseStudies={evidenceCases} content={content} language={language} onSelect={setSelectedCase} />
          <p className="confidential-note"><span>ⓘ</span>{content.confidential}</p>
        </div>
      </section>

      {selectedCase?.detail && (
        <CaseDetailModal
          caseStudy={selectedCase}
          content={content}
          language={language}
          onClose={closeCase}
          onNavigate={selectedIndex >= 0 && navigableCases.length > 1 ? navigateCase : undefined}
          position={`${selectedCase.id}/${totalCases}`}
          previewMode={previewMode}
        />
      )}
    </>
  );
}
