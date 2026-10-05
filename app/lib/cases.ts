import { caseStudies } from "../data/cases";
import { expertise } from "../data/expertise";
import type { CaseStudy, LocalizedText } from "../data/types";

const INTERNAL_MARKERS = ["🟨", "[___]", "⇔", "để chỗ"];
const DRIVE_ID_PATTERN = /^[\w-]{25,}$/;

function hasLocalizedText(value: LocalizedText | undefined) {
  return Boolean(value?.vi.trim() && value?.en.trim());
}

function collectPublicText(item: CaseStudy) {
  return [
    item.slug,
    item.industry.vi,
    item.industry.en,
    item.title.vi,
    item.title.en,
    item.cardDescription.vi,
    item.cardDescription.en,
    item.evidenceSummary.vi,
    item.evidenceSummary.en,
    item.roles.vi,
    item.roles.en,
    item.detail?.overview.vi,
    item.detail?.overview.en,
    item.detail?.strategy.vi,
    item.detail?.strategy.en,
    item.detail?.results.vi,
    item.detail?.results.en,
    item.detail?.accountScope?.vi,
    item.detail?.accountScope?.en,
    item.detail?.insight?.vi,
    item.detail?.insight?.en,
    ...(item.evidence ?? []).flatMap((evidence) => [
      evidence.title.vi,
      evidence.title.en,
      evidence.note?.vi,
      evidence.note?.en,
      ...evidence.files.flatMap((file) => [file.label?.vi, file.label?.en]),
    ]),
  ].filter(Boolean).join(" ");
}

export function validateCaseStudies() {
  const ids = caseStudies.map((item) => item.id);
  const expectedIds = Array.from({ length: 19 }, (_, index) => index + 1);

  if (ids.length !== expectedIds.length || expectedIds.some((id) => !ids.includes(id))) {
    throw new Error("Case data must contain each ID from 01 through 19 exactly once.");
  }

  if (new Set(ids).size !== ids.length) throw new Error("Case IDs must be unique.");

  const slugs = caseStudies.map((item) => item.slug);
  if (new Set(slugs).size !== slugs.length) throw new Error("Case slugs must be unique.");

  const driveIds = new Set<string>();

  for (const item of caseStudies) {
    if (item.roleTags.length > 3) throw new Error(`Case ${item.id} has more than three role tags.`);
    if (!hasLocalizedText(item.industry) || !hasLocalizedText(item.title)) {
      throw new Error(`Case ${item.id} is missing localized identity fields.`);
    }
    if (!hasLocalizedText(item.cardDescription) || !hasLocalizedText(item.evidenceSummary)) {
      throw new Error(`Case ${item.id} is missing localized summary fields.`);
    }
    if (item.detail?.accountScope && !item.disciplineTags.includes("Account")) {
      throw new Error(`Case ${item.id} has Account Scope without the Account discipline tag.`);
    }
    if (INTERNAL_MARKERS.some((marker) => collectPublicText(item).includes(marker))) {
      throw new Error(`Case ${item.id} contains an internal brief marker.`);
    }
    if (item.dataStatus === "approved" && item.presentationTier === "flagship") {
      if (!item.detail) throw new Error(`Approved flagship Case ${item.id} is missing detail data.`);
      if (item.metrics.some((metric) => !metric.verified)) {
        throw new Error(`Approved flagship Case ${item.id} contains an unverified metric.`);
      }
    }
    if (!Array.isArray(item.evidence)) throw new Error(`Case ${item.id} is missing its evidence list.`);
    for (const evidence of item.evidence) {
      if (!hasLocalizedText(evidence.title)) throw new Error(`Case ${item.id} has evidence without a localized title.`);
      if (evidence.note && !hasLocalizedText(evidence.note)) {
        throw new Error(`Case ${item.id} has evidence with an incomplete note.`);
      }
      if (evidence.kind === "link" && !/^https:\/\//.test(evidence.href ?? "")) {
        throw new Error(`Link evidence in Case ${item.id} requires an https URL.`);
      }
      if (evidence.files.length > 1 && evidence.files.some((file) => !hasLocalizedText(file.label))) {
        throw new Error(`Grouped evidence in Case ${item.id} requires a localized label per file.`);
      }
      for (const file of evidence.files) {
        if (!DRIVE_ID_PATTERN.test(file.driveId)) throw new Error(`Case ${item.id} has an invalid Drive file ID.`);
        if (driveIds.has(file.driveId)) throw new Error(`Drive file ${file.driveId} is used more than once.`);
        driveIds.add(file.driveId);
      }
    }
  }

  const ranks = caseStudies
    .filter((item) => item.presentationTier === "flagship")
    .map((item) => item.featuredRank)
    .filter((rank): rank is number => rank !== undefined);
  if (new Set(ranks).size !== ranks.length) throw new Error("Flagship ranks must be unique.");

  for (const item of expertise) {
    for (const id of [...item.proofs.map((proof) => proof.caseId), ...item.evidenceCaseIds]) {
      if (!ids.includes(id)) throw new Error(`Expertise ${item.id} references missing Case ${id}.`);
    }
  }
}

validateCaseStudies();

// Every case counts, published or not, so the modal's "4/19" counter keeps a stable total.
export const totalCaseCount = caseStudies.length;

export function getCaseStudiesForRender({ preview }: { preview: boolean }) {
  if (preview) return caseStudies.filter((item) => item.presentationTier !== "hidden");

  const published = caseStudies.filter((item) => {
    if (item.dataStatus !== "approved" || item.presentationTier === "hidden") return false;
    if (item.presentationTier === "flagship") return Boolean(item.detail);
    return true;
  });

  const publishedFlagships = published.filter((item) => item.presentationTier === "flagship");
  if (publishedFlagships.length > 6) {
    throw new Error("A published portfolio cannot contain more than six flagship cases.");
  }

  return published;
}
