/**
 * People and expertise data.
 *
 * Single source of truth for the homepage People section. Content-driven so a
 * future individual profile page can consume the same records without
 * rebuilding this section.
 *
 * The names and roles below were supplied by the client and are treated as
 * approved for display. NOTE — the portraits are low-resolution placeholder
 * avatars (randomuser.me, 128×128) and must be replaced with approved, larger
 * photography before launch.
 */

export interface Person {
  id: string;
  /** Full name. */
  name: string;
  /** Professional title. */
  role: string;
  /** Concise biography (homepage length). Optional. */
  bio?: string;
  /** Professional background / specialization summary. Optional. */
  specialization?: string;
  /** Path to the portrait. */
  image: string;
  /** Accessible description of the portrait. */
  alt: string;
  /** True for the featured leadership profile. */
  leadership?: boolean;
  /** Route to the individual profile page. Set once that page exists. */
  profileRoute?: string;
  approvalStatus: "approved" | "placeholder";
}

export const people: Person[] = [
  {
    id: "member-01",
    name: "Dawit Bekele",
    role: "Principal Architect",
    image: "/images/team-dawit.jpg",
    alt: "Portrait of Dawit Bekele",
    leadership: true,
    approvalStatus: "approved",
  },
  {
    id: "member-02",
    name: "Selamawit Tadesse",
    role: "Senior Architect",
    image: "/images/team-selam.jpg",
    alt: "Portrait of Selamawit Tadesse",
    approvalStatus: "approved",
  },
  {
    id: "member-03",
    name: "Henok Abebe",
    role: "Civil Engineer",
    image: "/images/team-henok.jpg",
    alt: "Portrait of Henok Abebe",
    approvalStatus: "approved",
  },
  {
    id: "member-04",
    name: "Meron Getachew",
    role: "Construction Management Consultant",
    image: "/images/team-meron.jpg",
    alt: "Portrait of Meron Getachew",
    approvalStatus: "approved",
  },
];

/** Approved records only. */
export const publicPeople = people.filter((p) => p.approvalStatus === "approved");
