/**
 * Insights & resources data.
 *
 * Single source of truth for the homepage Insights & Resources section.
 * Content-driven so future article / resource pages can consume the same
 * records. Mirrors the `people` / `projects` data conventions.
 *
 * AUTHENTICITY — Each record has an `approvalStatus`. Only records with
 * `approvalStatus: "approved"` should be presented as published company
 * content. The records below are DEVELOPMENT PLACEHOLDERS: proposed editorial
 * topics and draft summaries, included only so the layout can be reviewed.
 * They must be approved by Tobiya (and, for featured/other insights, fully
 * written) before publication. Resources must point to real approved documents
 * or destinations — never invented PDFs or credentials.
 *
 * To publish:
 *   1. Set `approvalStatus: "approved"`.
 *   2. Provide the complete approved article content and set `href` once the
 *      article page exists.
 *   3. For resources, provide a real `href` to the approved document.
 * The `publicInsights` export below automatically includes only approved
 * records.
 */

export interface Insight {
  id: string;
  /** Small uppercase category label. */
  category: string;
  /** Article or resource title. */
  title: string;
  /** One or more paragraphs. */
  description: string[];
  /** Label for the exploration / reading link. */
  linkLabel: string;
  /** Route to the published article or document. Empty until it exists. */
  href?: string;
  /** Featured insight image. Empty for list-only entries. */
  image?: string;
  /** Accessible description of the image. */
  alt?: string;
  /** Editorial caption / credit for the image. */
  caption?: string;
  approvalStatus: "approved" | "placeholder";
}

export interface ResourceDoc {
  id: string;
  title: string;
  description: string;
  linkLabel: string;
  /** Real destination of the approved document. Required to display. */
  href?: string;
  /** Small document-type label (e.g. "PDF", "Document"). Optional. */
  docType?: string;
}

export const featuredInsight: Insight = {
  id: "insight-featured",
  category: "Perspective",
  title: "The thinking behind a building project",
  description: [
    "A building is shaped by more than what eventually appears on site. Early decisions about the project brief, design, technical requirements and coordination influence how a project develops.",
    "Understanding the relationship between these decisions is an important part of approaching building projects thoughtfully.",
  ],
  linkLabel: "Read the perspective",
  image: "/images/insight-featured-b.jpg",
  alt: "Editorial photograph of an architectural scale model on a technical drawing table (illustrative placeholder)",
  caption: "Illustrative image — not a completed Tobiya project",
  approvalStatus: "placeholder",
};

export const perspectives: Insight[] = [
  {
    id: "insight-01",
    category: "Architecture & Design",
    title: "Where architectural thinking meets project requirements",
    description: [
      "An exploration of how project objectives, spatial considerations and technical requirements influence architectural decisions.",
    ],
    linkLabel: "Explore perspective",
    approvalStatus: "placeholder",
  },
  {
    id: "insight-02",
    category: "Engineering",
    title: "Considering the technical picture of a building project",
    description: [
      "A closer look at the relationship between technical considerations, design intent and the broader needs of a building project.",
    ],
    linkLabel: "Explore perspective",
    approvalStatus: "placeholder",
  },
  {
    id: "insight-03",
    category: "Construction Management",
    title: "Understanding the role of construction management",
    description: [
      "An introductory perspective on coordination, planning and professional management within the construction environment.",
    ],
    linkLabel: "Explore perspective",
    approvalStatus: "placeholder",
  },
];

/**
 * Company resources. Displayed only when a record has an approved, real `href`.
 * Currently empty — no approved documents have been supplied for publication.
 */
export const resources: ResourceDoc[] = [];

/** Public records only. Currently empty until articles are approved. */
export const publicInsights = [featuredInsight, ...perspectives].filter(
  (i) => i.approvalStatus === "approved",
);
