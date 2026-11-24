import { getContentCollection } from '../utils/contentLoader';

const FALLBACK_PRACTICES_DATA = [
  {
    slug: 'strategy',
    title: 'Corporate Strategy & Capital Allocation',
    eyebrow: 'STRATEGIC PORTFOLIO ADVISORY',
    shortDesc: 'Long-range portfolio structuring, sovereign balance sheet optimization, and cross-border expansion strategies for high-growth enterprise holdings.',
    fullDesc: 'Black Markt advises institutional boards, sovereign investment funds, and corporate treasuries on navigating complex cross-border allocations. We combine macroeconomic scenario modeling with granular corporate finance structuring to ensure capital deployability without systemic friction.',
    icon: 'chess',
    dealSize: '$450M – $5B+',
    keyMetrics: [
      { label: 'Capital Optimized', value: '$18.4B' },
      { label: 'Average IRR Lift', value: '+3.8%' },
      { label: 'Cross-Border Nodes', value: '14 Nations' },
    ],
    capabilities: [
      'Sovereign Balance Sheet Structuring & Optimization',
      'Cross-Border M&A Synergies & Carve-Out Strategy',
      'Fiduciary Capital Allocation & Liquidity Ring-Fencing',
      'Regulatory Arbitrage & Jurisdictional Arbitrage Risk',
      'Defensive Capital Moats & Anti-Takeover Hardening',
    ],
    deliverables: [
      'Institutional Strategic Mandate Dossier',
      '5-Year Capital Allocation Roadmap & Scenario Analysis',
      'Cross-Border Regulatory Matrix & Fiduciary Opinion',
    ],
  },
  {
    slug: 'digital-infrastructure',
    title: 'Mission-Critical Digital Infrastructure',
    eyebrow: 'SOVEREIGN CLOUD & NETWORKS',
    shortDesc: 'Architecting resilient, sovereign-grade telecom, cloud systems, and data center infrastructures with guaranteed multi-nines availability.',
    fullDesc: 'We design and stress-test high-capacity digital backbones that underpin national economies, global clearing houses, and hyperscale cloud providers. Our engineers guarantee zero-downtime tolerance and compliance with stringent data sovereignty laws.',
    icon: 'server',
    dealSize: '$200M – $3.5B',
    keyMetrics: [
      { label: 'Uptime Reliability', value: '99.999%' },
      { label: 'Terabits Provisioned', value: '420 Tbps' },
      { label: 'Sovereign Enclaves', value: '38 Active' },
    ],
    capabilities: [
      'Sovereign Data Center Architecture & Hyperscale Planning',
      'Subsea Cable & Cross-Continental Fiber Route Due Diligence',
      'Zero-Trust Sovereign Cloud Enclaves (Swiss FADP / GDPR)',
      'Multi-Nines Fault Tolerance & Disaster Recovery Topology',
      'Energy-Efficient Compute & Decarbonized Datacenter Design',
    ],
    deliverables: [
      'Tier-IV Infrastructure Architecture Blueprint',
      'Sovereign Data Residency Compliance Certification',
      'Stress-Testing & Latency Optimization Audit',
    ],
  },
  {
    slug: 'ma-pe',
    title: 'Private Equity & M&A Due Diligence',
    eyebrow: 'HIGH-STAKES TRANSACTION DILIGENCE',
    shortDesc: 'Institutional technology audits, carve-out engineering, synergy verification, and technical risk quantification for mega-cap buyout funds.',
    fullDesc: 'Evaluating target infrastructure before signing is critical to protecting valuation multiples. We perform line-by-line codebase audits, technical debt quantification, cybersecurity posture assessments, and Day-1 carve-out roadmaps for private equity sponsors.',
    icon: 'handshake',
    dealSize: '$500M – $10B+',
    keyMetrics: [
      { label: 'Liabilities Shielded', value: '$2.8B+' },
      { label: 'Average Audit Window', value: '14 Days' },
      { label: 'Carveout Success', value: '100% Day-1' },
    ],
    capabilities: [
      'Pre-Close Technical Debt & Latent Liability Quantification',
      'Transition Services Agreement (TSA) Optimization',
      'Post-Close Technology Value Creation Blueprint',
      'Cybersecurity & Intellectual Property Forensic Auditing',
      'Productivity & Engineering Team Capability Scoring',
    ],
    deliverables: [
      'Executive Red-Flag Diligence Report',
      'Day-1 Separation & Carve-Out Execution Playbook',
      '100-Day Value Acceleration Matrix',
    ],
  },
  {
    slug: 'modernization',
    title: 'Enterprise Modernization & Architecture',
    eyebrow: 'SYSTEMS RESILIENCE & RE-ENGINEERING',
    shortDesc: 'Decommissioning legacy mainframes, transitioning core banking systems to event-driven microservices, and eliminating structural operational drag.',
    fullDesc: 'Decades of layered software create systemic fragility in financial and industrial enterprises. Black Markt replaces legacy monoliths with high-throughput event-driven systems without interrupting active business operations.',
    icon: 'sync',
    dealSize: '$100M – $1.2B',
    keyMetrics: [
      { label: 'Legacy Drag Reduction', value: '64%' },
      { label: 'Throughput Increase', value: '12x' },
      { label: 'Maintenance Savings', value: '$85M/yr' },
    ],
    capabilities: [
      'Core Banking Mainframe Migration to Distributed Ledgers',
      'Event-Driven Microservices Architecture (Kafka/gRPC)',
      'Zero-Downtime Data Pipeline Modernization',
      'Structural Monolith Strangler-Pattern Migration',
      'Continuous Compliance & Operational Risk Mitigation',
    ],
    deliverables: [
      'Modernization Migration Roadmap with Zero Business Interruption',
      'Target Architecture Technical Specification',
      'Executive Governance & Change Management Dashboard',
    ],
  },
  {
    slug: 'ai-analytics',
    title: 'Quantitative Intelligence & Sovereign AI',
    eyebrow: 'PROPRIETARY ALGORITHMIC ENGINES',
    shortDesc: 'Bespoke algorithmic decision engines, sovereign LLM deployments, and predictive asset pricing frameworks shielded by zero-trust enclaves.',
    fullDesc: 'We construct customized machine learning and quantitative risk systems for hedge funds, central banks, and market makers. Our systems operate on localized, air-gapped sovereign hardware to prevent proprietary data contamination.',
    icon: 'cpu',
    dealSize: '$50M – $800M',
    keyMetrics: [
      { label: 'Decision Latency', value: '< 2.4 ms' },
      { label: 'Predictive Accuracy', value: '94.2%' },
      { label: 'Private LLM Nodes', value: '100% Air-Gapped' },
    ],
    capabilities: [
      'Sovereign Large Language Models with Zero Data Leakage',
      'High-Frequency Derivatives Pricing & Arbitrage Engines',
      'Algorithmic Risk Management & Stress Simulation',
      'Automated Fiduciary Reporting & Portfolio Attribution',
      'Synthetic Data Generation for High-Stakes Model Validation',
    ],
    deliverables: [
      'Proprietary Algorithmic Model Architecture',
      'Air-Gapped Sovereign AI Cluster Deployment',
      'Quantitative Model Validation & Stress Report',
    ],
  },
  {
    slug: 'financial',
    title: 'Financial Advisory & Capital Structuring',
    eyebrow: 'CAPITAL STRUCTURE & SYNDICATION',
    shortDesc: 'Debt financing syndication, liquidity architecture, and balance sheet resilience for international corporate expansion.',
    fullDesc: 'Crafting tailored capital structures across senior secured credit, mezzanine facilities, and convertible instruments. We ensure our clients secure favorable covenants and resilient balance sheet structures in volatile interest rate regimes.',
    icon: 'landmark',
    dealSize: '$300M – $4B',
    keyMetrics: [
      { label: 'Syndicated Volume', value: '$12.6B' },
      { label: 'Spread Compression', value: '85 bps' },
      { label: 'Global Lenders', value: '120+ Tier-1' },
    ],
    capabilities: [
      'Cross-Border Debt Syndication & Club Deal Structuring',
      'Liquidity Buffer Modeling & Stress Testing',
      'Hybrid Capital & Preferred Equity Structuring',
      'Covenant Advisory & Restructuring Negotiations',
      'Working Capital Optimization for Multinationals',
    ],
    deliverables: [
      'Comprehensive Capital Structure Term Sheet',
      'Syndication Information Memorandum',
      'Fiduciary Debt Covenants Risk Assessment',
    ],
  },
  {
    slug: 'esg',
    title: 'ESG & Sovereign Energy Transition',
    eyebrow: 'NATURAL ASSETS & DECARBONIZATION',
    shortDesc: 'Strategic advisory on energy grid decarbonization, industrial critical minerals logistics, and sovereign regulatory compliance.',
    fullDesc: 'Advising sovereign funds and industrial conglomerates on capital allocations into critical transition assets: clean power grids, battery storage infrastructure, and ethical raw material supply chains across Europe, the Americas, and APAC.',
    icon: 'globe',
    dealSize: '$250M – $6B',
    keyMetrics: [
      { label: 'Clean Power Scoped', value: '8.4 GW' },
      { label: 'Carbon Avoided', value: '14 Mt/yr' },
      { label: 'Regulatory Index', value: '100% Taxonomy' },
    ],
    capabilities: [
      'Grid Modernization & Decentralized Storage Structuring',
      'Critical Mineral Supply Chain & Geopolitical Security',
      'EU Taxonomy & Cross-Border Carbon Border Tax (CBAM) Due Diligence',
      'Green Bond Framework Design & Third-Party Verification',
      'Sovereign Just-Transition Strategy & Public-Private Partnerships',
    ],
    deliverables: [
      'Energy Transition Capital Deployment Blueprint',
      'Supply Chain Vulnerability & Geopolitical Risk Assessment',
      'Green Financing Framework & Impact Certification',
    ],
  },
];

const loadedPractices = getContentCollection('practices');
export const PRACTICES_DATA = loadedPractices.length > 0 ? loadedPractices : FALLBACK_PRACTICES_DATA;

export const INDUSTRIES_DATA = [
  {
    slug: 'financial',
    name: 'Financial Institutions & Banking',
    eyebrow: 'FINANCIAL CONSORTIA & CLEARING',
    desc: 'Advising global Tier-1 investment banks, central clearing counterparties, and payment consortiums on core transactional architecture, regulatory compliance (Basel IV, DORA), and low-latency settlement.',
    statMetric: '$3.2B',
    statLabel: 'Largest Settlement Node Scoped',
    secondaryStat: '0.84ms',
    secondaryStatLabel: 'Average Clearing Latency',
  },
  {
    slug: 'sovereign-wealth',
    name: 'Sovereign Wealth & Private Equity',
    eyebrow: 'INSTITUTIONAL INVESTORS & BUYOUTS',
    desc: 'Delivering confidential technology audits, portfolio optimization, and cross-border carve-outs for mega-cap buyout sponsors, sovereign wealth funds, and multi-family offices managing over $500B in AUM.',
    statMetric: '$42B+',
    statLabel: 'Transaction Volume Advised',
    secondaryStat: '18',
    secondaryStatLabel: 'Sovereign Jurisdictions',
  },
  {
    slug: 'telecom',
    name: 'Telecommunications & Cloud Infrastructure',
    eyebrow: 'HYPERSCALE & SUBSEA NETWORKS',
    desc: 'Architecting zero-trust sovereign enclaves, subsea fiber routing, and next-generation 5G standalone core infrastructures with 99.999% fault tolerance.',
    statMetric: '420 Tbps',
    statLabel: 'Subsea Capacity Scoped',
    secondaryStat: '38',
    secondaryStatLabel: 'Hyperscale Hubs',
  },
  {
    slug: 'energy',
    name: 'Energy, Mining & Natural Assets',
    eyebrow: 'POWER TRANSMISSION & MINERALS',
    desc: 'Guiding global utilities, transmission system operators, and mining conglomerates through critical supply chain security, smart grid modernization, and decarbonization investments.',
    statMetric: '8.4 GW',
    statLabel: 'Grid Transition Scoped',
    secondaryStat: '$6B',
    secondaryStatLabel: 'Asset Deal Size',
  },
  {
    slug: 'healthcare',
    name: 'Healthcare & Life Sciences',
    eyebrow: 'BIOMEDICAL INFRASTRUCTURE & IP',
    desc: 'Shielding proprietary drug discovery pipelines, building HIPAA/GDPR-compliant clinical data lakes, and structuring digital health mergers with bulletproof intellectual property protection.',
    statMetric: '100%',
    statLabel: 'Data Enclave Integrity',
    secondaryStat: 'Zero',
    secondaryStatLabel: 'Regulatory Breaches',
  },
  {
    slug: 'public-sector',
    name: 'Public Sector & Defense Infrastructure',
    eyebrow: 'SOVEREIGN NATIONAL SECURITY',
    desc: 'Providing high-integrity counsel for national ministries, defense agencies, and state-backed utilities requiring sovereign digital autonomy, air-gapped data centers, and critical asset resilience.',
    statMetric: 'Tier-IV',
    statLabel: 'Security Accreditation',
    secondaryStat: 'Swiss FADP',
    secondaryStatLabel: 'Fiduciary Standard',
  },
];

const FALLBACK_TRANSACTIONS_DATA = [
  {
    slug: 'fintech-consortium',
    title: '$3.2B Cross-Border FinTech Consortium Infrastructure',
    client: 'European Institutional Banking Consortium',
    location: 'London / Zurich',
    sector: 'Financial Institutions',
    impact: '42% Latency Reduction, Zero Mandate Slippage',
    scope: 'Orchestrated full architectural due diligence and low-latency clearing settlement engine integration across 14 European institutional banking nodes. Ensured Day-1 close with zero downtime.',
    stats: [
      { label: 'Transaction Value', value: '$3.2B' },
      { label: 'Latency Drop', value: '42%' },
      { label: 'Member Banks', value: '14 Nodes' },
      { label: 'Close Velocity', value: 'Day-1 On-Time' },
    ],
  },
  {
    slug: 'sovereign-grid',
    title: 'Sovereign Digital Grid & Telecom Security Architecture',
    client: 'National Sovereign Wealth & Infrastructure Entity',
    location: 'Singapore / Dubai',
    sector: 'Telecommunications & Energy',
    impact: '99.999% Fault Tolerance & Swiss FADP Compliance',
    scope: 'Designed state-grade zero-trust telecommunications backbone and sovereign data enclave protecting national critical energy distribution networks from external intrusion.',
    stats: [
      { label: 'Network Uptime', value: '99.999%' },
      { label: 'Data Enclaves', value: '4 Air-Gapped' },
      { label: 'Security Standard', value: 'ISO 27001' },
      { label: 'Jurisdictions', value: 'APAC & EMEA' },
    ],
  },
  {
    slug: 'private-equity-carveout',
    title: 'Tier-1 Buyout Due Diligence: Multi-Facility Carve-Out',
    client: 'Mega-Cap Private Equity Sponsor',
    location: 'New York / London',
    sector: 'Private Equity / Logistics',
    impact: '$140M Liability Shield & Accelerated Day-1 Close',
    scope: 'Executed pre-close technology carve-out audit for a $1.8B industrial logistics acquisition, mitigating $140M in hidden technical liabilities and accelerating TSA exit by 7 months.',
    stats: [
      { label: 'Asset Value', value: '$1.8B' },
      { label: 'Liabilities Shielded', value: '$140M' },
      { label: 'Audit Window', value: '14 Days' },
      { label: 'TSA Reduction', value: '7 Months' },
    ],
  },
  {
    slug: 'hft-core',
    title: 'Quantitative Risk Platform & High-Frequency Core',
    client: 'Global Market Maker & Proprietary Trading Syndicate',
    location: 'London / New York / Zurich',
    sector: 'Capital Markets',
    impact: 'Sub-millisecond Execution & Basel IV Compliance',
    scope: 'Deployed specialized algorithmic risk containment architecture processing over 12 million real-time derivatives market events per second with deterministic sub-millisecond execution.',
    stats: [
      { label: 'Events / Sec', value: '12M+' },
      { label: 'Execution Latency', value: '0.84 ms' },
      { label: 'Compliance Status', value: 'Basel IV' },
      { label: 'System Drift', value: '0.00%' },
    ],
  },
];

const loadedTransactions = getContentCollection('transactions');
export const TRANSACTIONS_DATA = loadedTransactions.length > 0 ? loadedTransactions : FALLBACK_TRANSACTIONS_DATA;

const FALLBACK_LEADERSHIP_DATA = [
  {
    name: 'Lord Alistair Sterling',
    role: 'Senior Managing Director & Head of London Practice',
    location: 'London (Global HQ)',
    bio: 'Former Chief Investment Officer of a major European sovereign consortium with over 25 years advising corporate boards, FTSE 100 chairs, and international syndicates on cross-border capital structure.',
    credentials: ['Ex-Sovereign CIO', 'Advisory Board, Oxford Capital Forum', 'FCA Senior Manager'],
  },
  {
    name: 'Marcus Vance',
    role: 'Managing Director, Private Equity Due Diligence Practice',
    location: 'New York (Midtown)',
    bio: 'Pioneered technology carve-out methodologies for Tier-1 US buyout funds. Advised on over $30B in cumulative enterprise transactions across North America and Europe.',
    credentials: ['M&A Technology Fellow', 'Former Lead Partner, Wall Street Advisory', 'MBA Harvard Business School'],
  },
  {
    name: 'Elena Rostova',
    role: 'Partner & Chief Infrastructure Architect',
    location: 'Zurich (Bahnhofstrasse)',
    bio: 'Global authority on zero-trust sovereign enclaves and cryptographic systems. Leads Black Markt’s mission-critical infrastructure audits for Swiss and European banking institutions.',
    credentials: ['Ph.D. Computer Systems ETH Zurich', 'Swiss FADP Expert Delegate', 'ISO 27001 Lead Auditor'],
  },
  {
    name: 'Dr. Kian Seng Lim',
    role: 'Senior Fellow & Quantitative Systems Lead',
    location: 'Singapore (Marina Bay)',
    bio: 'Specialist in algorithmic liquidity, low-latency market infrastructure, and sovereign AI architectures across the APAC corridor. Advises regional central banking entities.',
    credentials: ['Former Head of Quantitative Risk, Temasek Consortium', 'Ph.D. Applied Mathematics', 'MAS Advisory Panel'],
  },
  {
    name: 'Tariq Al-Mansoor',
    role: 'Principal, Sovereign Transactions & Energy Assets',
    location: 'Dubai (DIFC)',
    bio: 'Advises Gulf sovereign wealth funds and sovereign energy entities on strategic asset acquisitions, grid decarbonization architectures, and global capital deployment.',
    credentials: ['Ex-Investment Director, Gulf Sovereign Fund', 'DIFC Registered Advisor', 'M.Sc. London School of Economics'],
  },
];

const loadedLeadership = getContentCollection('leadership');
export const LEADERSHIP_DATA = loadedLeadership.length > 0 ? loadedLeadership : FALLBACK_LEADERSHIP_DATA;

const FALLBACK_INSIGHTS_DATA = [
  {
    slug: 'valuation-high-rate',
    title: 'Cross-Border Valuation in High-Rate Regimes: Mitigating Structural Asset Drag',
    category: 'M&A & CAPITAL MARKETS',
    date: 'February 2026',
    author: 'Lord Alistair Sterling',
    readTime: '8 min read',
    excerpt: 'An institutional examination of how persistent baseline interest rates demand rigorous technical audits to safeguard buyout valuation multiples.',
  },
  {
    slug: 'sovereign-ai-autonomy',
    title: 'Sovereign AI & Strategic Digital Autonomy: Building National Compute Enclaves',
    category: 'DIGITAL INFRASTRUCTURE',
    date: 'January 2026',
    author: 'Elena Rostova & Dr. Kian Seng Lim',
    readTime: '11 min read',
    excerpt: 'How sovereign wealth funds and nation-states are building private, air-gapped LLM infrastructures to prevent strategic intelligence contamination.',
  },
  {
    slug: 'mitigating-architecture-debt',
    title: 'Mitigating Architecture Debt in Mega-Cap Buyouts: The Pre-Close Protocol',
    category: 'PRIVATE EQUITY DUE DILIGENCE',
    date: 'December 2025',
    author: 'Marcus Vance',
    readTime: '9 min read',
    excerpt: 'Case evidence from $15B+ in carve-outs showing how unaddressed legacy architectural liabilities destroy post-acquisition EBITDA targets.',
  },
  {
    slug: 'data-center-report',
    title: '2026 Sovereign Data Center & Hyperscale Infrastructure Index',
    category: 'MARKET INTELLIGENCE',
    date: 'Q1 2026 Research Report',
    author: 'Black Markt Intelligence Desk',
    readTime: 'Downloadable Whitepaper',
    excerpt: 'A comprehensive benchmark evaluating power capacity, subsea fiber density, and Swiss FADP compliance across 24 financial jurisdictions.',
  },
];

const loadedInsights = getContentCollection('insights');
export const INSIGHTS_DATA = loadedInsights.length > 0 ? loadedInsights : FALLBACK_INSIGHTS_DATA;

export const GLOBAL_HUBS = [
  {
    city: 'London',
    district: 'Global Headquarters',
    address: '124 City Road London, EC1V 2NX, England',
    phone: '+44 20 7946 0880',
    email: 'london@blackmarkt.network',
    lead: 'Lord Alistair Sterling',
    focus: 'Capital Markets, Cross-Border M&A, Sovereign Advisory',
  },
  {
    city: 'New York',
    district: 'Midtown Manhattan',
    address: '767 Fifth Avenue, Midtown, New York, NY 10153',
    phone: '+1 212 555 0192',
    email: 'newyork@blackmarkt.network',
    lead: 'Marcus Vance',
    focus: 'Private Equity Due Diligence, Carve-Out Engineering, Buyouts',
  },
  {
    city: 'Zurich',
    district: 'Financial District',
    address: 'Bahnhofstrasse 45, 8001 Zurich, Switzerland',
    phone: '+41 44 210 4080',
    email: 'zurich@blackmarkt.network',
    lead: 'Elena Rostova',
    focus: 'Sovereign Enclaves, Swiss FADP Governance, Banking Infrastructure',
  },
  {
    city: 'Singapore',
    district: 'Marina Bay',
    address: 'Marina Bay Financial Centre, Tower 3, Singapore 018982',
    phone: '+65 6712 3400',
    email: 'singapore@blackmarkt.network',
    lead: 'Dr. Kian Seng Lim',
    focus: 'Quantitative Systems, Sovereign AI, APAC Corridors',
  },
  {
    city: 'Dubai',
    district: 'DIFC',
    address: 'Gate Precinct 4, Level 5, DIFC, Dubai, UAE',
    phone: '+971 4 362 7000',
    email: 'dubai@blackmarkt.network',
    lead: 'Tariq Al-Mansoor',
    focus: 'Sovereign Wealth Funds, Energy Transition, Middle East Mandates',
  },
];

const FALLBACK_REPORTS_DATA = [
  {
    slug: '2026-sovereign-index',
    title: '2026 Sovereign Data Center & Hyperscale Infrastructure Index',
    badge: 'ANNUAL BENCHMARK',
    releaseDate: 'January 2026',
    format: 'PDF & Interactive Data Suite (84 Pages)',
    desc: 'An authoritative 84-page analysis of global power allocations, subsea fiber redundancy, and sovereign regulatory jurisdiction across 24 sovereign nations.',
    highlights: [
      'Global Tier-IV power grid capacity mapping',
      'Geopolitical choke-point index for subsea fiber cables',
      'Sovereign data residency legal framework comparison',
      'Cost-per-megawatt projections through 2030',
    ],
  },
  {
    slug: 'pe-tech-debt-benchmark',
    title: 'Private Equity Technology Debt & Carve-Out Benchmark 2026',
    badge: 'M&A DILIGENCE REPORT',
    releaseDate: 'December 2025',
    format: 'Executive Whitepaper (52 Pages)',
    desc: 'Empirical data gathered from 140+ mega-cap private equity transactions revealing how hidden software liabilities impact IRR and EBITDA margins.',
    highlights: [
      'Average TSA cost creep analysis across industrial buyouts',
      'The 7 most common hidden IT liabilities in corporate carve-outs',
      'How to structure binding vendor separation guarantees',
      'Statistical correlation between codebase quality and exit multiples',
    ],
  },
  {
    slug: 'sovereign-ai-risk-matrix',
    title: 'Sovereign AI & Critical National Infrastructure: Risk Matrix',
    badge: 'DEFENSE & SOVEREIGN ADVISORY',
    releaseDate: 'November 2025',
    format: 'Classified Briefing Summary (38 Pages)',
    desc: 'A comprehensive framework for evaluating state-level artificial intelligence models, air-gapped compute clusters, and national security data lakes.',
    highlights: [
      'Threat vector analysis for foreign cloud LLM dependencies',
      'Air-gapped on-premise architecture specification for central banks',
      'Quantum-safe encryption transition timeline',
      'Regulatory compliance mapping for EU AI Act & Swiss FADP',
    ],
  },
  {
    slug: 'cross-border-clearing-modernization',
    title: 'Next-Generation Cross-Border Clearing & Settlement Systems',
    badge: 'FINANCIAL MARKETS STUDY',
    releaseDate: 'October 2025',
    format: 'Institutional Research Dossier (46 Pages)',
    desc: 'Examining the transition of institutional banking consortiums to event-driven distributed ledgers and sub-millisecond gross settlement engines.',
    highlights: [
      'Comparing Kafka, gRPC, and distributed ledgers in Tier-1 banking',
      'Liquidity ring-fencing in high-volatility rate environments',
      'Basel IV capital buffer optimization techniques',
      'Real-world case study of 14-bank European consortium integration',
    ],
  },
];

const loadedReports = getContentCollection('reports');
export const REPORTS_DATA = loadedReports.length > 0 ? loadedReports : FALLBACK_REPORTS_DATA;

export const CAREERS_DATA = {
  values: [
    {
      title: 'Intellectual & Forensic Precision',
      desc: 'We operate at the intersection of high finance and deep systems engineering. We accept zero approximations in our models, code audits, or board memos.',
    },
    {
      title: 'Inviolable Discretion',
      desc: 'Our clients entrust us with sovereign secrets, pre-IPO architectures, and sensitive multi-billion-dollar transactions. Discretion is our absolute fiduciary duty.',
    },
    {
      title: 'Meritocratic Autonomy',
      desc: 'We assemble small, elite multidisciplinary pods of Managing Directors, systems architects, and quantitative analysts empowered with complete operational authority.',
    },
    {
      title: 'Fiduciary Impact',
      desc: 'We measure our success not by billable hours, but by transactions secured, liabilities shielded, and mission-critical uptime preserved for global institutions.',
    },
  ],
  openRoles: [
    {
      id: 'pe-diligence-md',
      title: 'Managing Director — Private Equity Technology Due Diligence',
      practice: 'Private Equity & M&A Due Diligence',
      location: 'New York (Midtown) or London (Global HQ)',
      comp: '$450,000 – $650,000 + Performance Incentive',
      desc: 'Lead high-stakes technical due diligence mandates for Tier-1 private equity sponsors, identifying latent architectural risks and architecting Day-1 carve-out roadmaps.',
      requirements: [
        '12+ years in technical diligence, management consulting, or CTO roles within enterprise software.',
        'Track record leading diligence on 20+ mega-cap ($500M+) buyout transactions.',
        'Fluency in enterprise architecture, cloud economics, cybersecurity, and codebase auditing.',
      ],
    },
    {
      id: 'sovereign-infra-architect',
      title: 'Principal Infrastructure Architect — Sovereign Enclaves',
      practice: 'Mission-Critical Digital Infrastructure',
      location: 'Zurich (Bahnhofstrasse)',
      comp: 'CHF 320,000 – CHF 420,000 + Equity Participation',
      desc: 'Design and audit zero-trust sovereign compute environments, air-gapped data centers, and multi-jurisdictional compliance architectures for Swiss and European banking entities.',
      requirements: [
        '10+ years engineering large-scale distributed systems, Tier-IV datacenters, or sovereign cloud.',
        'Deep mastery of Swiss FADP, EU DORA, zero-trust cryptographic primitives, and hardware security.',
        'Experience liaising with national regulatory bodies and central banking technical auditors.',
      ],
    },
    {
      id: 'quant-risk-fellow',
      title: 'Senior Fellow — Quantitative Risk & Algorithmic Systems',
      practice: 'Quantitative Intelligence & Sovereign AI',
      location: 'Singapore (Marina Bay) or London (Global HQ)',
      comp: '$280,000 – $380,000 + Incentive Bonus',
      desc: 'Research and construct proprietary market micro-structure engines, low-latency execution gateways, and sovereign machine learning pipelines for institutional capital clients.',
      requirements: [
        'Ph.D. or Master’s in Applied Mathematics, Computer Science, or Quantitative Finance.',
        'Extensive experience with C++, FPGA acceleration, Linux kernel bypass, and high-throughput data streams.',
        'Published research or proven production track record in high-frequency algorithmic systems.',
      ],
    },
    {
      id: 'capital-markets-vp',
      title: 'Vice President — Corporate Strategy & Capital Structuring',
      practice: 'Corporate Strategy & Capital Allocation',
      location: 'London (Global HQ)',
      comp: '£220,000 – £290,000 + Bonus',
      desc: 'Advise sovereign wealth funds and multinational corporate boards on capital allocation, cross-border debt syndication, and balance sheet resilience.',
      requirements: [
        '7+ years in Tier-1 investment banking (M&A / Leveraged Finance) or top-tier strategic consulting.',
        'Proven expertise modeling multi-layered capital structures, debt covenants, and cross-border currency hedges.',
        'Outstanding executive presentation and board advisory presence.',
      ],
    },
  ],
};

export const ASSESSMENT_DATA = {
  title: 'Institutional Capital & Architecture Diagnostic',
  subtitle: 'Confidential 4-Domain Readiness & Technical Vulnerability Assessment',
  domains: [
    {
      id: 'sovereign-resilience',
      name: '1. Sovereign Digital Autonomy & Data Residency',
      description: 'Evaluate exposure to foreign regulatory subpoenas, cross-border cloud dependencies, and compliance with Swiss FADP / EU DORA.',
      questions: [
        {
          id: 'q1',
          prompt: 'Where are your primary transactional databases and cryptographic keys hosted?',
          options: [
            { text: 'Air-gapped on-premise Tier-IV sovereign enclaves with local HSM keys.', score: 10 },
            { text: 'Dedicated private cloud with geographic encryption ring-fencing.', score: 7 },
            { text: 'Multi-tenant commercial public cloud (AWS/Azure/GCP) in regional zones.', score: 4 },
            { text: 'Undocumented or dispersed international third-party SaaS vendors.', score: 1 },
          ],
        },
        {
          id: 'q2',
          prompt: 'How frequently are cross-border data transfer flows audited against Swiss FADP / GDPR?',
          options: [
            { text: 'Continuous automated cryptographic compliance telemetry with zero data export.', score: 10 },
            { text: 'Formal quarterly audits conducted by independent certified auditors.', score: 7 },
            { text: 'Annual retrospective legal review without technical packet verification.', score: 4 },
            { text: 'Ad-hoc reviews only when requested by regulatory authorities.', score: 1 },
          ],
        },
      ],
    },
    {
      id: 'ma-debt',
      name: '2. M&A Architecture Debt & Technical Liabilities',
      description: 'Quantify latent code vulnerabilities, Transition Services Agreement (TSA) exposure, and separation friction in portfolio assets.',
      questions: [
        {
          id: 'q3',
          prompt: 'What is the current technical debt ratio across core revenue-generating systems?',
          options: [
            { text: 'Fully refactored microservices with automated CI/CD and <5% legacy drag.', score: 10 },
            { text: 'Active modernization roadmap in place with manageable technical backlog.', score: 7 },
            { text: 'Significant monolith dependencies with brittle undocumented interfaces.', score: 4 },
            { text: 'Mission-critical COBOL/legacy systems with retiring single-point talent.', score: 1 },
          ],
        },
        {
          id: 'q4',
          prompt: 'How rapidly could an acquired or carved-out entity achieve standalone operational independence?',
          options: [
            { text: 'Day-1 autonomous decoupling with zero reliance on parent TSA services.', score: 10 },
            { text: 'Under 90 days with pre-negotiated fixed-cost transition agreements.', score: 7 },
            { text: '6 to 12 months with substantial recurring TSA royalty fees.', score: 4 },
            { text: 'Indeterminate duration with severe risk of ongoing operational paralysis.', score: 1 },
          ],
        },
      ],
    },
    {
      id: 'fault-tolerance',
      name: '3. Low-Latency Financial Core & Transactional Fault Tolerance',
      description: 'Assess determinism, sub-millisecond execution integrity, and disaster recovery redundancy under extreme market volatility bursts.',
      questions: [
        {
          id: 'q5',
          prompt: 'What is your verified maximum recovery point objective (RPO) and recovery time objective (RTO)?',
          options: [
            { text: 'RPO = 0 (Zero transaction loss), RTO < 30 seconds synchronous failover.', score: 10 },
            { text: 'RPO < 1 minute, RTO < 15 minutes across redundant geographic clusters.', score: 7 },
            { text: 'RPO < 1 hour, RTO < 4 hours requiring manual failover procedures.', score: 4 },
            { text: 'Untested failovers or RTO exceeding 24 hours under disaster conditions.', score: 1 },
          ],
        },
        {
          id: 'q6',
          prompt: 'How does execution throughput behave during sudden 10x market event volatility spikes?',
          options: [
            { text: 'Deterministic sub-millisecond latency sustained via FPGA/hardware acceleration.', score: 10 },
            { text: 'Elastic auto-scaling absorbs volume with minimal jitter (< 15ms).', score: 7 },
            { text: 'Noticeable queuing delays and sporadic API timeouts during peaks.', score: 4 },
            { text: 'System freezes, circuit breakers tripped, or partial transaction drops.', score: 1 },
          ],
        },
      ],
    },
    {
      id: 'regulatory-governance',
      name: '4. Fiduciary Governance & Regulatory Arbitrage',
      description: 'Examine cross-border legal shielding, capital adequacy ring-fencing, and board-level risk transparency.',
      questions: [
        {
          id: 'q7',
          prompt: 'Are fiduciary risk reports and regulatory disclosures programmatically verified?',
          options: [
            { text: 'Real-time automated immutable ledgers with direct board telemetry dashboards.', score: 10 },
            { text: 'Standardized monthly quantitative reporting with partner sign-off.', score: 7 },
            { text: 'Manual spreadsheets compiled manually at quarter-end with latency.', score: 4 },
            { text: 'Disparate siloed reporting with high risk of human error or inconsistency.', score: 1 },
          ],
        },
        {
          id: 'q8',
          prompt: 'What degree of ring-fencing shields your primary operating assets from subsidiary legal liabilities?',
          options: [
            { text: 'Multi-jurisdictional holding company structure with bankruptcy-remote SPVs.', score: 10 },
            { text: 'Standard parent-subsidiary corporate veil with adequate capitalization.', score: 7 },
            { text: 'Cross-collateralized balance sheets with shared parent corporate guarantees.', score: 4 },
            { text: 'Undefined liability boundaries exposing corporate treasury to direct exposure.', score: 1 },
          ],
        },
      ],
    },
  ],
};
