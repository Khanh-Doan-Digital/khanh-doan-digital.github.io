"use client";

import { useCallback, useMemo, useState } from "react";

import type { Language, PortfolioContent } from "../../data/content";
import type { CaseStudy } from "../../data/types";
import { CaseDetailModal } from "../cases/CaseDetailModal";
import { CaseFolder } from "../cases/CaseFolder";

type WorkSectionProps = {
  caseStudies: CaseStudy[];
  content: PortfolioContent;
  language: Language;
  previewMode: boolean;
  selectedCase: CaseStudy | null;
  // Case IDs the modal's prev/next is limited to; null means every published case.
  caseScope: number[] | null;
  totalCases: number;
  onSelectCase: (caseStudy: CaseStudy | null, scope?: number[] | null) => void;
};

export function WorkSection({
  caseStudies,
  content,
  language,
  previewMode,
  selectedCase,
  caseScope,
  totalCases,
  onSelectCase: setSelectedCase,
}: WorkSectionProps) {
  const flagshipCases = useMemo(
    () => caseStudies
      .filter((item) => item.presentationTier === "flagship")
      .sort((left, right) => left.id - right.id),
    [caseStudies],
  );
  // Set when a folder was clicked, so the modal unfolds out of it; cases opened elsewhere just fade in.
  const [openedFromFolder, setOpenedFromFolder] = useState(false);
  const closeCase = useCallback(() => {
    setOpenedFromFolder(false);
    setSelectedCase(null);
  }, [setSelectedCase]);
  const openFolder = (caseStudy: CaseStudy) => {
    setOpenedFromFolder(true);
    setSelectedCase(caseStudy);
  };
  // Ordered by case number; unpublished and out-of-scope cases are simply skipped (4/19 → 6/19).
  const navigableCases = useMemo(
    () => caseStudies
      .filter((item) => item.detail && (!caseScope || caseScope.includes(item.id)))
      .sort((left, right) => left.id - right.id),
    [caseStudies, caseScope],
  );
  const selectedIndex = selectedCase ? navigableCases.findIndex((item) => item.id === selectedCase.id) : -1;
  const navigateCase = (direction: -1 | 1) => {
    if (selectedIndex < 0) return;
    setSelectedCase(navigableCases[(selectedIndex + direction + navigableCases.length) % navigableCases.length], caseScope);
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
            <div className="case-folder-stack">
              {flagshipCases.map((caseStudy) => (
                <CaseFolder
                  caseStudy={caseStudy}
                  content={content}
                  isOpen={selectedCase?.id === caseStudy.id}
                  key={caseStudy.id}
                  language={language}
                  onSelect={openFolder}
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
          unfold={openedFromFolder}
        />
      )}
    </>
  );
}
