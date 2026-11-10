/** Credibility labels used across the portfolio. Never mark work "Implemented" or "Outcome verified" unless it is. */
export type WorkStatus = 'Proposed' | 'Designed' | 'Implemented' | 'Outcome verified';

export interface NavItem {
  id: string;
  label: string;
}

export interface Profile {
  name: string;
  title: string;
  headline: string;
  lede: string;
  location: string;
  tags: string[];
  highlightTag: string;
  /** Optional. Set to a path in /public (for example "/cv.pdf") to show a download button. */
  resumeUrl?: string;
}

export interface Pillar {
  kind: 'Primary' | 'Supporting';
  title: string;
  summary: string;
}

export interface TimelineEntry {
  period: string;
  title: string;
  organization: string;
  summary: string;
}

export interface CapabilityLayer {
  layer: string;
  primary: string[];
  supporting: string[];
}

export interface Decision {
  decision: string;
  tradeoff: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  context: string;
  role: string;
  /** What the work actually was. Be strict: see WorkStatus. */
  status: WorkStatus[];
  problem: string;
  approach: string;
  stack: string[];
  decisions: Decision[];
  /** Use null when there are no verified outcomes. */
  outcomes: string | null;
  lessons: string;
  /** Set true only when you have written permission to publish. Until then keep the description anonymized. */
  published: boolean;
}

export interface ReferenceProject {
  title: string;
  summary: string;
  status: 'Planned' | 'In progress' | 'Published';
  repoUrl?: string;
}

export interface RoadmapPhase {
  phase: string;
  focus: string;
  items: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  status: 'Achieved' | 'In progress' | 'Planned';
  detail: string;
  credentialUrl?: string;
}

export interface Article {
  title: string;
  kind: 'Article' | 'LinkedIn post' | 'Case study';
  date: string;
  url: string;
}

export interface ContactInfo {
  intro: string;
  email: string;
  linkedinUrl: string;
  notice: string;
}
