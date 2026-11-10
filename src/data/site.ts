/**
 * ALL SITE CONTENT LIVES HERE.
 * Edit this file to update the portfolio. Text in [square brackets] is a placeholder.
 * SEO values (site URL, title, description) live in src/data/seo.json.
 *
 * Credibility rules for this file:
 *  - Label each case study by what it really was (Proposed, Designed, Implemented, Outcome verified).
 *  - Never add customer names, logos, pricing or confidential architecture without written permission.
 *  - Leave `outcomes: null` until an outcome is verified.
 */
import type {
  Article,
  CapabilityLayer,
  CaseStudy,
  Certification,
  ContactInfo,
  NavItem,
  Pillar,
  Profile,
  ReferenceProject,
  RoadmapPhase,
  TimelineEntry,
} from '../types';

export const nav: NavItem[] = [
  { id: 'profile', label: 'Profile' },
  { id: 'career', label: 'Career' },
  { id: 'competencies', label: 'Competencies' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'cases', label: 'Case studies' },
  { id: 'reference', label: 'Reference work' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
];

export const profile: Profile = {
  name: 'Mohammed Nooman',
  title: 'Enterprise Solution & Transformation Architect',
  headline: 'Connecting business outcomes to architecture that can be built and run.',
  lede: 'Seventeen years across customer engagement, presales, solution consulting and architecture. I focus on application modernization, enterprise integration, and AI-enabled managed services.',
  location: '[City, Country]',
  tags: [
    'Application modernization',
    'Integration architecture',
    'Digital Workplace',
    'ServiceNow',
    'AI-enabled service operations',
  ],
  highlightTag: 'TOGAF certified',
  // resumeUrl: '/cv.pdf',
};

export const pillars: Pillar[] = [
  {
    kind: 'Primary',
    title: 'Enterprise solution architecture',
    summary:
      'Application modernization and enterprise integration: turning complex requirements across ERP, manufacturing, identity and government systems into solution designs with clear trade-offs.',
  },
  {
    kind: 'Primary',
    title: 'AI-enabled managed services',
    summary:
      'Digital Workplace and service desk transformation, with ServiceNow-based ITSM and automation, framed around measurable service outcomes.',
  },
];

export const profileNote =
  'My background is weighted toward business development, technical presales and solution design. This site labels every piece of work by what it was: a proposal, a design, an implementation or a measured outcome. Cloud, data engineering, security, FinOps and AI architecture are supporting capabilities that I am developing through hands-on reference projects.';

export const timeline: TimelineEntry[] = [
  {
    period: '2009 – 2013',
    title: 'Business development and early technology exposure',
    organization: 'Financial services, B2B sales, mobile applications, SharePoint and analytics firms',
    summary:
      'Business development roles, then SharePoint, Lotus Notes-to-.NET modernization, QlikView, cloud and Hadoop engagements. Early exposure to Web 1.0 and Web 2.0 delivery models.',
  },
  {
    period: '2013 – 2016',
    title: '.NET solutions, managed services and digital lending',
    organization: 'Webdunia, Microland, Prospance, Kuliza',
    summary:
      'First exposure to managed services, followed by digital lending work covering front-end, back-end and three-tier data architecture.',
  },
  {
    period: '2016 – 2025',
    title: 'Lead, Presales',
    organization: 'Impiger Technologies',
    summary:
      'Enterprise and public-sector solutioning across .NET, Python/Django, PHP/Laravel, React, Angular, WSO2, MariaDB and MongoDB. Domains included manufacturing MES integration, warehouse management, ERP, biometric identity, ITSM and ITOM.',
  },
  {
    period: '2025',
    title: 'Senior Manager, Technical Solutions',
    organization: 'Nous Infosystems',
    summary:
      'Databricks, MySQL-to-PostgreSQL migration, ServiceNow ITSM, CMDB, SAM and HAM, and AI-enabled software development lifecycle work.',
  },
  {
    period: '2025 – present',
    title: 'Senior Solution Architect',
    organization: 'Pomeroy',
    summary:
      'Digital Workplace Services solutioning, ServiceNow integration opportunities, AI-enabled service desk and enterprise managed services.',
  },
];

export const capabilities: CapabilityLayer[] = [
  {
    layer: 'Business',
    primary: ['Solution consulting', 'Requirements discovery', 'Service model and SLA design'],
    supporting: ['Business case framing', 'FinOps'],
  },
  {
    layer: 'Data',
    primary: [],
    supporting: ['Databricks', 'Data migration', 'MySQL / PostgreSQL', 'MongoDB', 'MariaDB'],
  },
  {
    layer: 'Application',
    primary: [
      'Application modernization',
      'API and integration architecture',
      'ServiceNow ITSM / ITOM / CMDB',
      'AI-enabled service desk',
    ],
    supporting: ['WSO2', '.NET, Python, PHP, React, Angular'],
  },
  {
    layer: 'Technology',
    primary: [],
    supporting: ['Azure and AWS', 'Hybrid cloud', 'Zero Trust', 'Identity', 'Observability'],
  },
  {
    layer: 'Governance',
    primary: ['TOGAF ADM'],
    supporting: ['Architecture decision records', 'Architecture review', 'Technology roadmaps'],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'manufacturing-integration',
    title: 'Manufacturing systems integration',
    industry: 'Manufacturing',
    context: '[Large Indian manufacturer. Shop-floor MES to be integrated with ERP and warehouse systems.]',
    role: '[Presales and solution design. Confirm exact responsibilities.]',
    status: ['Proposed', 'Designed'],
    problem: '[Describe the business problem in two or three sentences.]',
    approach: '[Describe the solution approach and why it was chosen.]',
    stack: ['[MES]', '[ERP]', '[Warehouse management]', '[Integration layer]'],
    decisions: [
      {
        decision: '[Key decision, for example point-to-point versus API-led integration]',
        tradeoff: '[What was gained and what was given up]',
      },
    ],
    outcomes: null,
    lessons: '[What you would do differently.]',
    published: false,
  },
  {
    id: 'digital-identity',
    title: 'Public-sector digital identity platform',
    industry: 'Government',
    context: '[National government programme in Africa. Biometric identity and supporting enterprise applications.]',
    role: '[Presales and solution design. Confirm exact responsibilities.]',
    status: ['Proposed', 'Designed'],
    problem: '[Describe the business problem.]',
    approach: '[Describe the solution approach.]',
    stack: ['[Biometric identity]', '[API management]', '[Databases]'],
    decisions: [
      {
        decision: '[Key decision]',
        tradeoff: '[Trade-off]',
      },
    ],
    outcomes: null,
    lessons: '[Lessons learned.]',
    published: false,
  },
];

export const referenceProjects: ReferenceProject[] = [
  {
    title: 'Legacy application modernization',
    summary:
      'Strangler-pattern migration of a monolith behind an API gateway, with decision records comparing rehost, replatform and refactor.',
    status: 'Planned',
  },
  {
    title: 'Event-driven integration',
    summary:
      'Reference design for ERP-to-warehouse integration using APIs, messaging and idempotent consumers, with failure-mode analysis.',
    status: 'Planned',
  },
  {
    title: 'AI-assisted service desk',
    summary:
      'Generic architecture for retrieval-grounded ticket triage and agent assist, with guardrails, evaluation metrics and a cost model. Built from public documentation only.',
    status: 'Planned',
  },
];

export const roadmap: RoadmapPhase[] = [
  {
    phase: 'Year 1',
    focus: 'Foundation',
    items: [
      'One cloud architect associate certification (Azure or AWS)',
      'First reference project with decision records',
      'First anonymized case study',
      'ServiceNow architecture depth',
    ],
  },
  {
    phase: 'Year 2',
    focus: 'Breadth',
    items: [
      'Security architecture and Zero Trust',
      'Data platform and Databricks fundamentals',
      'Two more reference projects',
      'Architecture governance practice',
    ],
  },
  {
    phase: 'Year 3',
    focus: 'Principal scope',
    items: [
      'Professional-level cloud architecture',
      'FinOps and technology investment cases',
      'Cross-domain architecture reviews',
      'Published architecture portfolio',
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: 'TOGAF',
    issuer: 'The Open Group',
    status: 'Achieved',
    detail: '[Add certification level, for example Foundation or Certified, and year.]',
    // credentialUrl: 'https://...',
  },
];

/** Add entries as you publish. The section hides itself while the list is empty. */
export const articles: Article[] = [];

export const writingCadence =
  'Two LinkedIn posts a month, one architecture article a quarter, and one case study a quarter.';

export const contact: ContactInfo = {
  intro: 'I welcome conversations with fellow architects and practitioners.',
  email: '[your-email@example.com]',
  linkedinUrl: '',
  notice:
    'This site is a personal professional profile. It does not offer services for hire. Views are my own and do not represent my employer. No customer names, pricing or confidential material appear here.',
};
