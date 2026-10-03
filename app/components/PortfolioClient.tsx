"use client";

import { useCallback, useState } from "react";

import type { CaseStudy } from "../data/types";
import { copy } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";
import { useLanguage } from "../hooks/useLanguage";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { ExpertiseSection } from "./sections/ExpertiseSection";
import { HeroSection } from "./sections/HeroSection";
import { NumbersSection } from "./sections/NumbersSection";
import { WorkSection } from "./sections/WorkSection";
import { SiteCursor } from "./ui/SiteCursor";

type PortfolioClientProps = {
  caseStudies: CaseStudy[];
  previewMode: boolean;
  totalCases: number;
};

export function PortfolioClient({ caseStudies, previewMode, totalCases }: PortfolioClientProps) {
  const { language, setLanguage } = useLanguage();
  const content = copy[language];
  const { activeSection, setActiveSection, showBackToTop } = useActiveSection(copy.vi.navIds);
  const visibleCaseIds = caseStudies.map((item) => item.id);
  // `scope` limits the modal's prev/next to those case IDs; null means every published case.
  const [selection, setSelection] = useState<{ caseStudy: CaseStudy; scope: number[] | null } | null>(null);
  const selectCase = useCallback((caseStudy: CaseStudy | null, scope: number[] | null = null) => {
    setSelection(caseStudy ? { caseStudy, scope } : null);
  }, []);
  // Returns false when the case has no detail to show, so the caller can fall back to its anchor link.
  const openCaseById = (caseId: number) => {
    const caseStudy = caseStudies.find((item) => item.id === caseId);
    if (!caseStudy?.detail) return false;
    selectCase(caseStudy);
    return true;
  };
  // Opens the first of a capability's extra projects and keeps prev/next within that set.
  const openEvidenceCases = (caseIds: number[]) => {
    const first = caseStudies
      .filter((item) => item.detail && caseIds.includes(item.id))
      .sort((left, right) => left.id - right.id)[0];
    if (first) selectCase(first, caseIds);
  };

  return (
    <main>
      <SiteCursor />
      <Header
        activeSection={activeSection}
        content={content}
        language={language}
        onLanguageChange={setLanguage}
        onNavigate={setActiveSection}
      />
      <HeroSection content={content} language={language} />
      <NumbersSection content={content} language={language} />
      <AboutSection content={content} />
      <ExpertiseSection
        content={content}
        language={language}
        visibleCaseIds={visibleCaseIds}
        onOpenCase={openCaseById}
        onOpenEvidence={openEvidenceCases}
      />
      <WorkSection
        caseStudies={caseStudies}
        content={content}
        language={language}
        previewMode={previewMode}
        selectedCase={selection?.caseStudy ?? null}
        caseScope={selection?.scope ?? null}
        totalCases={totalCases}
        onSelectCase={selectCase}
      />
      <ExperienceSection content={content} />
      <ContactSection content={content} />
      <Footer content={content} language={language} showBackToTop={showBackToTop} />
    </main>
  );
}
