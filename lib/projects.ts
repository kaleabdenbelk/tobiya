/**
 * Project data.
 *
 * Single source of truth for the homepage portfolio. This is content-driven so
 * individual case-study pages can later consume the same records without
 * rebuilding the homepage.
 *
 * AUTHENTICITY — Each record has an `approvalStatus`. Only records with
 * `approvalStatus: "approved"` should be rendered on the public site.
 *
 * The entries below are DEVELOPMENT PLACEHOLDERS: illustrative (non-project)
 * photography and generic working titles, included only so the editorial
 * layout can be reviewed. They must be replaced with verified Tobiya project
 * data before publication. Do not publish these.
 */

export interface Project {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  location: string;
  category: string;
  year?: string;
  status: string;
  role: string;
  services: string[];
  image: string;
  alt: string;
  caption?: string;
  credit?: string;
  approvalStatus: "approved" | "placeholder";
  featured?: boolean;
  /** Route to the individual case-study page. Set once that page exists. */
  caseStudyRoute?: string;
}

export const projects: Project[] = [
  {
    id: "ph-01",
    name: "Featured project — placeholder",
    slug: "placeholder-featured",
    shortDescription:
      "Development placeholder — replace with a concise introduction to a verified Tobiya project, its purpose and the involvement of the consultancy.",
    location: "Location to be confirmed",
    category: "Mixed-use / commercial",
    status: "Details pending verification",
    role: "Architectural & engineering consultancy",
    services: ["Architectural Consultancy", "Engineering Consultancy"],
    image: "/images/project-placeholder-01.jpg",
    alt: "Editorial photograph of contemporary architecture (illustrative placeholder)",
    caption: "Illustrative image — not a completed Tobiya project",
    credit: "Unsplash (illustrative only)",
    approvalStatus: "placeholder",
    featured: true,
  },
  {
    id: "ph-02",
    name: "Supporting project A — placeholder",
    slug: "placeholder-supporting-a",
    shortDescription:
      "Development placeholder — describe the project context and the professional role Tobiya held, and the services delivered.",
    location: "Location to be confirmed",
    category: "Workplace / interior",
    status: "Details pending verification",
    role: "Engineering consultancy",
    services: ["Engineering Consultancy"],
    image: "/images/project-placeholder-02.jpg",
    alt: "Editorial photograph of a contemporary interior (illustrative placeholder)",
    caption: "Illustrative image — not a completed Tobiya project",
    credit: "Unsplash (illustrative only)",
    approvalStatus: "placeholder",
  },
  {
    id: "ph-03",
    name: "Supporting project B — placeholder",
    slug: "placeholder-supporting-b",
    shortDescription:
      "Development placeholder — describe how Tobiya contributed through coordination and professional oversight on the project.",
    location: "Location to be confirmed",
    category: "Construction management",
    status: "Details pending verification",
    role: "Construction management consultancy",
    services: ["Construction Management Consultancy"],
    image: "/images/project-placeholder-03.jpg",
    alt: "Editorial photograph of a collaborative project setting (illustrative placeholder)",
    caption: "Illustrative image — not a completed Tobiya project",
    credit: "Unsplash (illustrative only)",
    approvalStatus: "placeholder",
  },
];

/** Public records only. Currently empty until verified material is provided. */
export const publicProjects = projects.filter((p) => p.approvalStatus === "approved");
