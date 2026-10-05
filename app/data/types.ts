export type Language = "vi" | "en";

export type LocalizedText = {
  vi: string;
  en: string;
};

export type DisciplineTag =
  | "Ads"
  | "Account"
  | "Copywriting"
  | "Design"
  | "Video Editing";

export type CapabilityId =
  | "paid-media-strategy"
  | "lead-generation-funnel"
  | "performance-analysis"
  | "account-integrated-management"
  | "brand-content-creative";

export type DataStatus = "draft" | "needs-verification" | "approved";
export type PresentationTier = "flagship" | "evidence-only" | "hidden";

export type VerifiedMetric = {
  label: LocalizedText;
  value: string;
  verified: boolean;
};

// One Google Drive file, shown through Drive's embeddable preview.
export type CaseEvidenceFile = {
  driveId: string;
  // Tab label when an evidence item groups several files (e.g. one per month).
  label?: LocalizedText;
};

// Branches of the evidence tree in the viewer.
export type CaseEvidenceGroup = "image" | "content" | "video" | "link";

export type CaseEvidence = {
  kind: "image" | "video" | "link";
  // Which branch the item is listed under; defaults to its kind.
  group?: CaseEvidenceGroup;
  title: LocalizedText;
  platform?: string;
  // Empty for a "link" item, or while the file is still being added (shown as pending).
  files: CaseEvidenceFile[];
  // Required for "link" items: an external page opened in a new tab.
  href?: string;
  note?: LocalizedText;
};

export type CaseDetail = {
  overview: LocalizedText;
  strategy: LocalizedText;
  results: LocalizedText;
  accountScope?: LocalizedText;
  insight?: LocalizedText;
};

export type CaseStudy = {
  id: number;
  slug: string;
  disciplineTags: DisciplineTag[];
  capabilityIds: CapabilityId[];
  presentationTier: PresentationTier;
  featuredRank?: number;
  industry: LocalizedText;
  serviceCategory?: LocalizedText;
  title: LocalizedText;
  cardDescription: LocalizedText;
  evidenceSummary: LocalizedText;
  roles: LocalizedText;
  roleTags: string[];
  dataPeriod?: LocalizedText;
  collaborationDuration?: LocalizedText;
  engagement?: LocalizedText;
  platforms: string[];
  metrics: VerifiedMetric[];
  detail?: CaseDetail;
  coverVariant: CapabilityId;
  evidence: CaseEvidence[];
  confidential: boolean;
  dataStatus: DataStatus;
};

export type ExpertiseProof = {
  caseId: number;
  text: LocalizedText;
};

export type Expertise = {
  id: CapabilityId;
  kind: "core" | "supporting";
  title: LocalizedText;
  description: LocalizedText;
  subskills: LocalizedText[];
  proofs: ExpertiseProof[];
  evidenceCaseIds: number[];
};
