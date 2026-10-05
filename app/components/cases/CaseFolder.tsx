import type { Language, PortfolioContent } from "../../data/content";
import type { CaseStudy } from "../../data/types";
import { formatMetricValue } from "../../lib/format";

type CaseFolderProps = {
  caseStudy: CaseStudy;
  content: PortfolioContent;
  language: Language;
  // The folder leaves its slot while its case is open in the modal.
  isOpen: boolean;
  onSelect: (caseStudy: CaseStudy) => void;
  previewMode: boolean;
};

export function CaseFolder({ caseStudy, content, language, isOpen, onSelect, previewMode }: CaseFolderProps) {
  const metrics = caseStudy.metrics.filter((metric) => metric.verified || previewMode).slice(0, 2);
  const caseNumber = String(caseStudy.id).padStart(2, "0");

  return (
    <article
      className={`case-folder case-folder-${caseStudy.coverVariant}`}
      data-case-tier="flagship"
      data-open={isOpen ? "true" : undefined}
      id={`case-${caseNumber}`}
    >
      <button
        className="case-folder-hitbox"
        type="button"
        disabled={!caseStudy.detail}
        onClick={() => onSelect(caseStudy)}
        aria-label={`${content.viewProject}: ${caseStudy.title[language]}`}
      />

      <span className="case-folder-tab">CASE {caseNumber}</span>

      <div className="case-folder-body">
        <div className="case-folder-info">
          <p className="case-folder-category">
            {caseStudy.serviceCategory
              ? `${caseStudy.serviceCategory[language]} · ${caseStudy.industry[language]}`
              : caseStudy.industry[language]}
          </p>
          <h3>{caseStudy.title[language]}</h3>
        </div>

        {metrics.length > 0 && (
          <dl className="case-folder-metrics">
            {metrics.map((metric) => (
              <div data-metric-status={metric.verified ? "verified" : "pending"} key={metric.label.en}>
                <dt>{metric.label[language]}</dt>
                <dd>{formatMetricValue(metric.value, language)}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </article>
  );
}
