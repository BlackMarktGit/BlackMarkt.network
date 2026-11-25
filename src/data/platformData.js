/**
 * Black Markt Network Consultancy - Platform Master Data
 * Source of truth: BlackMarkt website update.pdf (Approved Master Copy)
 */

export const COMPANY_INFO = {
  name: 'Black Markt Network Consultancy',
  legalName: 'Black Markt Network Consultancy (Subsidiary of LSTC)',
  parentCompany: 'LSTC',
  legalStatus: 'Subsidiary of LSTC',
  registrationNumber: '11124243',
  registeredAddress: '124 City Road, London, EC1V 2NX, England',
  vatNumber: '477993219',
  jurisdiction: 'England and Wales',
  scope: 'Strategic Capital Advisory | Africa Growth Markets | Global Investment & Partnership Solutions',
  headline: 'Connecting African Opportunity With Global Capital',
  valueProposition: 'Institutional Rigour. Dual-Corridor Reach.',
  mission: 'To empower African businesses, project sponsors, and public institutions by connecting them with the institutional capital, strategic partnerships, and advisory expertise required to achieve sustainable scale, industrial competitiveness, and lasting economic development.',
  vision: 'To be recognised among the world’s most trusted independent strategic capital advisory firms—serving as the premier institutional bridge between African growth markets and global investment capital.',
  phone: '+44 77 7419 0852',
  phoneFormatted: '+44 77 7419 0852',
  phoneRaw: '+447774190852',
  emails: {
    general: 'advisory@blackmarkt.network',
    advisory: 'advisory@blackmarkt.network',
    clientService: 'Clientservice@blackmarkt.network',
    executive: 'Felix.beck@blackmarkt.network',
  },
  offices: [
    {
      city: 'London',
      country: 'United Kingdom',
      address: '124 City Road, London, EC1V 2NX',
      phone: '+44 77 7419 0852',
      focus: 'Global Capital Desks & Sovereign Strategic Advisory HQ',
      isHQ: true,
    },
  ],
};

// 1. HOME: CORE ADVISORY PILLARS
export const CORE_ADVISORY_PILLARS = [
  {
    id: '01',
    title: 'Capital Raising & Structuring',
    desc: 'End-to-end origination and placement of institutional growth equity, private credit, blended finance, and syndicated debt facilities.',
    iconName: 'TrendingUp',
    link: '/services/equity-debt-raising',
  },
  {
    id: '02',
    title: 'Project Finance & Infrastructure',
    desc: 'Bankability structuring and multi-tranche capital mobilisation for utility-scale energy, transport, logistics, and industrial assets.',
    iconName: 'HardHat',
    link: '/services/project-finance',
  },
  {
    id: '03',
    title: 'Cross-Border M&A & Joint Ventures',
    desc: 'Buy-side and sell-side advisory, strategic alliances, and market-entry execution across African and international jurisdictions.',
    iconName: 'GitMerge',
    link: '/services/ma-advisory',
  },
  {
    id: '04',
    title: 'Investment Readiness & Governance',
    desc: 'Institutional financial modelling, Information Memorandum preparation, due diligence management, and board governance alignment.',
    iconName: 'FileSearch',
    link: '/services/investment-readiness',
  },
];

// 2. ABOUT US: WHO WE ADVISE & OPERATING APPROACH
export const WHO_WE_ADVISE = [
  {
    category: 'African Growth Enterprises & Family-Owned Businesses',
    desc: 'Market leaders seeking institutional growth equity, structured debt, governance enhancement, or international expansion partners.',
    iconName: 'Building2',
  },
  {
    category: 'Project Sponsors & Infrastructure Developers',
    desc: 'Consortia and developers structuring greenfield and brownfield energy, transport, real estate, and industrial projects to international bankability standards.',
    iconName: 'HardHat',
  },
  {
    category: 'Governments, Ministries & Public Institutions',
    desc: 'Sovereign and municipal stakeholders designing bankable Public-Private Partnerships (PPPs), concessions, and strategic investment frameworks.',
    iconName: 'Landmark',
  },
  {
    category: 'Global Institutional Investors & Multinationals',
    desc: 'Funds, family offices, DFIs, and strategic corporates seeking pre-vetted African deal flow, co-investment structures, or disciplined market-entry execution.',
    iconName: 'Globe2',
  },
];

export const OPERATING_APPROACH = [
  {
    title: 'Dual-Corridor Connectivity',
    desc: 'Headquartered in London with active on-the-ground networks across West, East, Southern, and North Africa, we translate local commercial realities into institutional-grade investment propositions.',
    iconName: 'Globe',
  },
  {
    title: 'Independent, Conflict-Free Advice',
    desc: 'As a privately held advisory firm, our counsel is unencumbered by proprietary balance-sheet conflicts—ensuring complete alignment with our clients’ strategic and financial objectives.',
    iconName: 'Shield',
  },
  {
    title: 'End-to-End Execution Discipline',
    desc: 'From initial feasibility and financial modelling through to investor bookbuilding, due diligence, and financial close, we remain actively engaged at every milestone.',
    iconName: 'Award',
  },
];

// 3. CORE VALUES (Verbatim from Section 3 of PDF)
export const CORE_VALUES = [
  {
    title: 'Integrity',
    desc: 'We uphold the highest standards of professional ethics, transparency, and fiduciary responsibility in every advisory mandate and counterparty interaction.',
    iconName: 'Scale',
  },
  {
    title: 'Confidentiality',
    desc: 'Discretion is foundational to our practice. We safeguard sensitive commercial, financial, and strategic information under strict non-disclosure protocols throughout every engagement.',
    iconName: 'Lock',
  },
  {
    title: 'Excellence',
    desc: 'We apply institutional discipline, analytical rigour, and meticulous attention to detail across our financial modelling, transaction documentation, and deal execution.',
    iconName: 'Award',
  },
  {
    title: 'Strategic Thinking',
    desc: 'We look beyond short-term capital placement to architect resilient capital structures and commercial partnerships aligned with multi-year growth objectives.',
    iconName: 'Compass',
  },
  {
    title: 'Global Collaboration',
    desc: 'We foster enduring cross-border relationships between African entrepreneurs, sovereign stakeholders, and international institutional investors across continents.',
    iconName: 'Globe2',
  },
  {
    title: 'Long-Term Value Creation',
    desc: 'We prioritise sustainable commercial fundamentals, sound corporate governance, and partnerships that generate measurable economic impact alongside attractive risk-adjusted returns.',
    iconName: 'TrendingUp',
  },
];

// 4. SERVICES (The 9 Core Advisory Services from Section 4 of PDF)
export const PRACTICES_DATA = [
  {
    number: '4.1',
    slug: 'strategic-capital-advisory',
    title: 'Strategic Capital Advisory',
    iconName: 'Landmark',
    shortDesc: 'Customised funding strategies aligning operational roadmaps with optimal capital mix, pricing, and governance.',
    fullDesc: 'We architect customised funding strategies that align a client’s operational roadmap with the optimal mix of capital, pricing, and governance. Rather than taking an opportunistic approach to fundraising, we evaluate balance sheet capacity, cash-flow horizons, and dilution sensitivity to match each mandate with the right institutional capital pools.',
    deliverablesHeading: 'Core Deliverables',
    deliverables: [
      'Capital structure optimisation',
      'Valuation and dilution modelling',
      'Funding roadmap design',
      'Capital partner mapping & matching',
      'Term-sheet advisory & structuring',
    ],
  },
  {
    number: '4.2',
    slug: 'equity-debt-raising',
    title: 'Equity & Debt Capital Raising',
    iconName: 'TrendingUp',
    shortDesc: 'End-to-end capital raising connecting high-potential businesses and projects with aligned global liquidity.',
    fullDesc: 'We manage end-to-end capital raising processes from initial positioning through to commercial negotiation and financial close. Leveraging direct relationships across London, Europe, the Middle East, North America, and Africa, we connect high-potential businesses and assets with aligned global liquidity.',
    deliverablesHeading: 'Capital Instruments & Sources',
    deliverables: [
      'Growth equity and buyout private equity',
      'Institutional venture capital (Series A and growth stages)',
      'Sovereign wealth funds and institutional asset managers',
      'Single- and multi-family office direct & co-investment capital',
      'Commercial, syndicated, and trade finance facilities',
      'Structured credit, mezzanine, and hybrid instruments',
      'Development Finance Institutions (DFIs) & blended impact capital',
    ],
  },
  {
    number: '4.3',
    slug: 'project-finance',
    title: 'Project Finance & Infrastructure Advisory',
    iconName: 'HardHat',
    shortDesc: 'Bankability structuring and multi-tranche financing for large-scale African infrastructure and industrial assets.',
    fullDesc: 'Large-scale African infrastructure and industrial assets require rigorous risk allocation and multi-tranche financing. We advise project sponsors and consortia on structuring greenfield and brownfield developments to meet international project finance and bankability standards.',
    deliverablesHeading: 'Transaction Scope',
    deliverables: [
      'Utility-scale energy and renewable power projects',
      'Transport corridors, ports, aviation, and logistics hubs',
      'Commercial, industrial, and mixed-use real estate developments',
      'Special Economic Zones (SEZs) and industrial manufacturing parks',
      'Water, telecommunications, and municipal utility infrastructure',
      'Blended finance structuring, off-take alignment, and EPC/O&M partner selection',
    ],
  },
  {
    number: '4.4',
    slug: 'strategic-partnerships',
    title: 'Strategic Partnerships & Joint Ventures',
    iconName: 'Handshake',
    shortDesc: 'Structuring commercial and operational alliances between African enterprises and international industry leaders.',
    fullDesc: 'Sustainable scale across African markets frequently requires more than financial capital alone. We identify, vet, and structure commercial and operational alliances between African enterprises and international industry leaders to unlock synergies and de-risk expansion.',
    deliverablesHeading: 'Partnership Structures',
    deliverables: [
      'Equity joint ventures and co-development consortia',
      'Regional distribution, off-take, and supply-chain alliances',
      'Technology transfer, IP licensing, and technical service agreements',
      'Local-content and regulatory compliance partnerships for multinational entrants',
    ],
  },
  {
    number: '4.5',
    slug: 'investment-readiness',
    title: 'Investment Readiness & Due Diligence',
    iconName: 'FileSearch',
    shortDesc: 'Preparing promising enterprises and project sponsors to withstand the scrutiny of global investment committees.',
    fullDesc: 'Many promising African enterprises and projects face delays during institutional underwriting due to gaps in reporting, governance, or documentation. We prepare clients prior to market launch so they withstand the scrutiny of global investment committees.',
    deliverablesHeading: 'Readiness & Execution Support',
    deliverables: [
      'Commercial strategy refinement and unit-economics validation',
      'Institutional-grade financial modelling and sensitivity analysis',
      'Drafting of Teasers, Pitch Decks, and comprehensive Information Memorandums (IMs)',
      'Virtual Data Room (VDR) architecture and due diligence management',
      'Corporate governance, board structuring, and ESG framework alignment',
    ],
  },
  {
    number: '4.6',
    slug: 'ma-advisory',
    title: 'Mergers & Acquisitions (M&A) Advisory',
    iconName: 'GitMerge',
    shortDesc: 'Discreet buy-side and sell-side advisory for corporates, private equity, and family-owned enterprises.',
    fullDesc: 'We provide discreet buy-side and sell-side advisory for corporates, private equity funds, and family-owned enterprises pursuing inorganic growth, market consolidation, or strategic exits across African and international jurisdictions.',
    deliverablesHeading: 'M&A Capabilities',
    deliverables: [
      'Buy-side target screening, origination, and commercial evaluation',
      'Sell-side positioning, competitive auction management, and value maximisation',
      'Cross-border acquisitions, divestitures, and corporate carve-outs',
      'Strategic minority stake sales and succession liquidity solutions',
      'Deal structuring, valuation negotiation, and closing execution',
    ],
  },
  {
    number: '4.7',
    slug: 'investor-relations',
    title: 'Investor Relations & Capital Strategy',
    iconName: 'Users',
    shortDesc: 'Building credible, transparent investor communication frameworks that position businesses for follow-on capital or exit.',
    fullDesc: 'Securing capital is the beginning of a long-term institutional partnership. We advise management teams on building credible, transparent investor communication frameworks that strengthen stakeholder trust and position the business for follow-on capital or eventual exit.',
    deliverablesHeading: 'Advisory Focus',
    deliverables: [
      'Institutional investor positioning and equity story articulation',
      'Long-term capital allocation and multi-round funding planning',
      'Board and shareholder reporting frameworks',
      'Strategic communication and stakeholder engagement management',
    ],
  },
  {
    number: '4.8',
    slug: 'cross-border-entry',
    title: 'Cross-Border Market Entry',
    iconName: 'Globe',
    shortDesc: 'Guiding international entrants into African markets and supporting African champions expanding regionally and globally.',
    fullDesc: 'We operate as a dual-corridor advisor—guiding international corporations and investors entering high-growth African jurisdictions, while supporting established African champions expanding regionally under the African Continental Free Trade Area (AfCFTA) or into the UK, Europe, and the Middle East.',
    deliverablesHeading: 'Market Entry Execution',
    deliverables: [
      'Country risk, regulatory landscape, and sector feasibility assessments',
      'Go-to-market structuring (subsidiary setup, acquisition, or local JV)',
      'Counterparty due diligence and local partner origination',
      'Cross-border regulatory, tax-structuring coordination, and commercial launch support',
    ],
  },
  {
    number: '4.9',
    slug: 'government-ppp',
    title: 'Government & Public-Private Partnership (PPP) Advisory',
    iconName: 'Building2',
    shortDesc: 'Designing and financing bankable Public-Private Partnerships that accelerate national infrastructure transformation.',
    fullDesc: 'We advise sovereign ministries, state-owned enterprises, municipal authorities, and private-sector consortia on designing and financing bankable Public-Private Partnerships that accelerate national infrastructure and economic transformation.',
    deliverablesHeading: 'Public-Sector Mandate Scope',
    deliverables: [
      'Project commercial feasibility and bankability structuring',
      'Concession framework design and balanced risk-allocation modelling',
      'Private-sector investor and technical operator mobilisation',
      'Sovereign-DFI-private sector capital blending and transaction execution',
    ],
  },
];

// 5. INDUSTRIES (High-Conviction African Growth Sectors from Section 5 of PDF)
export const INDUSTRIES_DATA = [
  {
    number: '5.1',
    slug: 'infrastructure',
    name: 'Infrastructure',
    iconName: 'Building2',
    desc: 'Essential physical and digital assets underpinning regional trade, industrial productivity, and urban logistics.',
    overview: 'Addressing Africa’s multi-billion-dollar infrastructure deficit represents one of the most compelling long-term yield opportunities globally. We advise sponsors and institutional investors on essential physical and digital assets that underpin regional trade and urban productivity.',
    focusAreas: [
      'Transport and logistics corridors (ports, rail, toll roads, aviation)',
      'Cold-chain and warehousing hubs',
      'Telecommunications backbone (fibre networks, data centres, tower infrastructure)',
      'Water and municipal utilities',
    ],
  },
  {
    number: '5.2',
    slug: 'energy-renewables',
    name: 'Energy & Renewable Resources',
    iconName: 'Zap',
    desc: 'Capital raising and project structuring across the full energy transition spectrum and utility-scale power.',
    overview: 'Rapid demographic growth and industrialisation are driving urgent demand for reliable, affordable, and cleaner power across the continent. We support capital raising and project structuring across the full energy transition spectrum.',
    focusAreas: [
      'Utility-scale solar, wind, hydro, and geothermal generation',
      'Commercial & Industrial (C&I) captive solar and battery energy storage systems (BESS)',
      'Decentralised mini-grids',
      'Transitional natural gas infrastructure',
      'Grid transmission and distribution upgrades',
    ],
  },
  {
    number: '5.3',
    slug: 'real-estate',
    name: 'Real Estate',
    iconName: 'Building',
    desc: 'Institutional-grade industrial parks, modern logistics, commercial developments, and scalable residential platforms.',
    overview: 'Accelerated urbanisation, a rising middle class, and expanding corporate activity continue to fuel demand for institutional-grade real estate assets across key African gateway cities.',
    focusAreas: [
      'Modern industrial parks and Grade-A logistics warehousing',
      'Mixed-use commercial and office developments',
      'Scalable residential and affordable housing platforms',
      'Retail centres and specialised student accommodation',
    ],
  },
  {
    number: '5.4',
    slug: 'healthcare',
    name: 'Healthcare',
    iconName: 'HeartPulse',
    desc: 'Expanding private healthcare capacity, diagnostic networks, and local pharmaceutical manufacturing.',
    overview: 'Expanding private healthcare capacity and localising medical supply chains are critical priorities across African markets. We connect healthcare operators and innovators with growth capital and international clinical partners.',
    focusAreas: [
      'Multi-specialty hospitals, outpatient clinics, and diagnostic centres',
      'Local pharmaceutical manufacturing and distribution',
      'Medical equipment supply and vendor lease structuring',
      'Scalable health-tech and telemedicine platforms',
    ],
  },
  {
    number: '5.5',
    slug: 'technology',
    name: 'Technology',
    iconName: 'Cpu',
    desc: 'Scalable platforms solving core commercial and financial bottlenecks across Africa’s leapfrogging digital economy.',
    overview: 'Africa’s digital economy is leapfrogging legacy infrastructure, creating scalable, high-margin platforms solving core commercial and financial bottlenecks. We advise growth-stage technology companies expanding across regional markets.',
    focusAreas: [
      'Fintech, digital payments, and cross-border settlement infrastructure',
      'B2B e-commerce and supply-chain enablement',
      'Enterprise SaaS and cloud solutions',
      'Insurtech, edtech, and AI-driven data analytics',
    ],
  },
  {
    number: '5.6',
    slug: 'manufacturing',
    name: 'Manufacturing',
    iconName: 'Factory',
    desc: 'Industrial localization, import substitution, and regional value-addition under the AfCFTA trade framework.',
    overview: 'Supported by regional trade integration under the AfCFTA and a strategic push for import substitution, African manufacturing is attracting renewed institutional and strategic capital.',
    focusAreas: [
      'Fast-Moving Consumer Goods (FMCG) production',
      'Building and construction materials',
      'Light industrial assembly and packaging solutions',
      'Textiles and automotive components',
    ],
  },
  {
    number: '5.7',
    slug: 'agriculture',
    name: 'Agriculture',
    iconName: 'Wheat',
    desc: 'Commercial farming, midstream agro-processing, cold-chain storage, and export-oriented food supply chains.',
    overview: 'With the majority of the world’s remaining uncultivated arable land, Africa holds immense potential to scale domestic food security and high-value agricultural exports through commercialisation and downstream processing.',
    focusAreas: [
      'Agro-processing and value-added food manufacturing',
      'Commercial farming and modern irrigation infrastructure',
      'Agricultural inputs and agritech distribution',
      'Cold-chain storage and export-oriented cash crops',
    ],
  },
  {
    number: '5.8',
    slug: 'mining-natural-resources',
    name: 'Mining & Natural Resources',
    iconName: 'Gem',
    desc: 'Responsible, ESG-compliant capital and technical partnerships across critical energy-transition minerals.',
    overview: 'Africa hosts vast reserves of the critical minerals essential to global decarbonisation, electrification, and industrial supply chains. We facilitate responsible, ESG-compliant capital and technical partnerships across the mineral value chain.',
    focusAreas: [
      'Critical and battery transition minerals (lithium, copper, cobalt, graphite, rare earths)',
      'Precious and industrial metals',
      'Midstream local beneficiation and processing facilities',
      'Mine-site renewable energy infrastructure',
    ],
  },
  {
    number: '5.9',
    slug: 'hospitality',
    name: 'Hospitality',
    iconName: 'Hotel',
    desc: 'Cash-generative business and conference hotels, serviced executive residences, and luxury eco-tourism destinations.',
    overview: 'Driven by growing intra-African business travel, diaspora connectivity, and rising international demand for experiential tourism, the continent’s hospitality sector offers strong cash-generative investment opportunities.',
    focusAreas: [
      'Branded business and conference hotels in commercial hubs',
      'Luxury eco-tourism and safari resorts',
      'Serviced executive apartments',
      'Integrated leisure and mixed-use destinations',
    ],
  },
];

// 6. INVESTORS: CAPITAL POOLS, MANDATE MATRIX & ORIGINATION ADVANTAGES (Section 6)
export const INVESTOR_POOLS = [
  {
    title: 'Private Equity & Growth Funds',
    category: 'Private Equity & Growth Funds',
    description: 'Pan-African and global origination partner for proprietary growth equity, buyout, mezzanine, buy-side bolt-ons, and secondary liquidity transactions.',
    desc: 'Pan-African and global origination partner for proprietary growth equity, buyout, mezzanine, buy-side bolt-ons, and secondary liquidity transactions.',
    iconName: 'Briefcase',
  },
  {
    title: 'Private Credit & Direct Lending Funds',
    category: 'Private Credit & Direct Lending Funds',
    description: 'Structuring senior secured, mezzanine, trade finance, and asset-backed debt facilities for high-performing mid-market and infrastructure borrowers.',
    desc: 'Structuring senior secured, mezzanine, trade finance, and asset-backed debt facilities for high-performing mid-market and infrastructure borrowers.',
    iconName: 'Landmark',
  },
  {
    title: 'Family Offices & Ultra-High-Net-Worth Vehicles',
    category: 'Family Offices & Ultra-High-Net-Worth Vehicles',
    description: 'Discreet access to off-market direct investments, club deals, and structured co-investments with patient growth capital deployment and real-asset backing.',
    desc: 'Discreet access to off-market direct investments, club deals, and structured co-investments with patient growth capital deployment and real-asset backing.',
    iconName: 'Shield',
  },
  {
    title: 'Sovereign Wealth Funds & National Development Entities',
    category: 'Sovereign Wealth Funds & National Development Entities',
    description: 'We originate large-scale, long-horizon opportunities across strategic national priorities—utility-scale renewable energy, transport corridors, critical minerals, and PPP concessions.',
    desc: 'We originate large-scale, long-horizon opportunities across strategic national priorities—utility-scale renewable energy, transport corridors, critical minerals, and PPP concessions.',
    iconName: 'Crown',
  },
  {
    title: 'Development Finance Institutions (DFIs) & Multilateral Agencies',
    category: 'Development Finance Institutions (DFIs) & Multilateral Agencies',
    description: 'We structure bankable transactions that deliver measurable developmental impact alongside commercial sustainability, incorporating blended finance, technical assistance, and IFC Performance Standards.',
    desc: 'We structure bankable transactions that deliver measurable developmental impact alongside commercial sustainability, incorporating blended finance, technical assistance, and IFC Performance Standards.',
    iconName: 'Globe2',
  },
];

export const MANDATE_ALIGNMENT_MATRIX = [
  {
    category: 'DFIs & Impact Funds',
    focus: 'Infrastructure, energy transition, healthcare, agriculture, financial inclusion',
    instruments: 'Senior/subordinated debt, blended finance, political/credit risk guarantees, growth equity',
    preferredInstruments: 'Senior/subordinated debt, blended finance, political/credit risk guarantees, growth equity',
  },
  {
    category: 'Sovereign Wealth Funds',
    focus: 'National infrastructure, energy, mining, industrial parks, strategic real estate',
    instruments: 'Large-ticket direct equity, sovereign-backed PPP concessions, platform co-investments',
    preferredInstruments: 'Large-ticket direct equity, sovereign-backed PPP concessions, platform co-investments',
  },
  {
    category: 'Family Offices',
    focus: 'Cash-generative operating businesses, real estate, hospitality, agri-processing',
    instruments: 'Direct minority/majority equity, club deals, convertible instruments, structured notes',
    preferredInstruments: 'Direct minority/majority equity, club deals, convertible instruments, structured notes',
  },
  {
    category: 'Private Equity & Credit',
    focus: 'Scalable market leaders, regional roll-ups, cash-flowing mid-market enterprises',
    instruments: 'Growth equity, buyouts, mezzanine & private credit, buy-side M&A, recapitalisations',
    preferredInstruments: 'Growth equity, buyouts, mezzanine & private credit, buy-side M&A, recapitalisations',
  },
  {
    category: 'Strategic Corporates',
    focus: 'Market entry, supply-chain integration, technology & distribution expansion',
    instruments: 'Equity joint ventures, strategic minority stakes, off-take & licensing partnerships',
    preferredInstruments: 'Equity joint ventures, strategic minority stakes, off-take & licensing partnerships',
  },
];

export const ORIGINATION_ADVANTAGES = [
  {
    title: 'Pre-Vetted, Investment-Committee-Ready Pipeline',
    desc: 'Every opportunity undergoes rigorous commercial, financial, and governance screening before introduction, reducing execution friction and underwriting timelines.',
    iconName: 'FileCheck',
  },
  {
    title: 'Structuring & Risk Mitigation',
    desc: 'We work alongside legal, tax, and technical advisors to address currency exposure, regulatory approvals, off-take security, and capital repatriation mechanics upfront.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Aligned Co-Investment & Syndication',
    desc: 'We assemble balanced capital stacks—pairing local operational sponsors with complementary international equity, private credit, and DFI tranches.',
    iconName: 'Users',
  },
  {
    title: 'Discreet, Mandate-Driven Coverage',
    desc: 'We engage investors strictly on the basis of defined sector, geographic, ticket-size, and return criteria, maintaining complete confidentiality throughout origination and due diligence.',
    iconName: 'Lock',
  },
];

// 7. TRANSACTIONS: CAPABILITIES, 4-STAGE LIFECYCLE & MANDATE PROFILES (Section 7)
export const TRANSACTION_MANDATES = [
  'Growth Capital & Institutional Equity',
  'Project Finance & Blended Capital',
  'Strategic Investments & Co-Investments',
  'Joint Ventures & Operational Alliances',
  'Mergers, Acquisitions & Divestitures',
  'Public-Private Partnerships (PPPs) & Concessions',
  'Cross-Border Expansion & Market Entry',
];

export const LIFECYCLE_STEPS = [
  {
    step: '01',
    title: 'Origination, Structuring & Bankability Assessment',
    desc: 'We evaluate commercial fundamentals, capital structure efficiency, regulatory considerations, and risk allocation to establish an optimal transaction thesis prior to market approach.',
  },
  {
    step: '02',
    title: 'Institutional Documentation & Pre-Marketing',
    desc: 'We prepare institutional-grade financial models, teasers, Information Memorandums (IMs), and Virtual Data Rooms (VDRs) aligned with international underwriting and ESG standards.',
  },
  {
    step: '03',
    title: 'Targeted Investor Engagement & Bookbuilding',
    desc: 'We execute discreet, curated outreach to matched capital providers—spanning DFIs, private equity funds, private credit providers, family offices, and strategic corporates—to generate competitive tension.',
  },
  {
    step: '04',
    title: 'Due Diligence Management, Negotiation & Financial Close',
    desc: 'We coordinate commercial, legal, technical, and financial due diligence workstreams, advise on term-sheet and definitive agreement negotiations, and drive execution through to disbursement and close.',
  },
];

export const TRANSACTIONS_DATA = [
  {
    slug: 'renewable-generation-bess-west-africa',
    title: 'Utility-Scale Renewable Generation & Battery Energy Storage',
    sector: 'Energy & Infrastructure',
    location: 'West Africa',
    scope: 'Project Finance & Blended Debt/Equity Advisory',
    overview: 'Structuring multi-tranche institutional capital for a utility-scale renewable generation and battery energy storage (BESS) platform.',
    servicesDelivered: [
      'Bankability structuring & PPA financial modelling',
      'DFI & blended finance tranche alignment',
      'Off-take security & risk mitigation framework',
      'EPC & O&M commercial partner advisory',
    ],
  },
  {
    slug: 'cold-chain-logistics-east-africa',
    title: 'Regional Cold-Chain & Warehousing Expansion',
    sector: 'Transport & Logistics',
    location: 'East Africa',
    scope: 'Growth Equity & Strategic Joint Venture',
    overview: 'Advising a regional cold-chain and warehousing operator on institutional growth capital and an international logistics partnership.',
    servicesDelivered: [
      'Growth equity placement & investor due diligence',
      'International strategic joint venture structuring',
      'Asset-backed debt facility arrangement',
      'Regional trade corridor expansion roadmap',
    ],
  },
  {
    slug: 'enterprise-payments-series-b',
    title: 'Cross-Border Enterprise Payments Infrastructure',
    sector: 'Technology & Financial Services',
    location: 'Pan-African & London Desk',
    scope: 'Cross-Border Expansion & Series B Capital Raise',
    overview: 'Positioning an enterprise payments infrastructure provider for institutional venture and strategic corporate investment.',
    servicesDelivered: [
      'Institutional investment readiness & IM drafting',
      'Global tech VC & strategic investor roadshows',
      'Valuation advisory & Series B term-sheet negotiation',
      'UK/European holding corporate governance alignment',
    ],
  },
  {
    slug: 'consumer-goods-bolt-on-ma',
    title: 'Industrial Consumer Goods Consolidation',
    sector: 'Manufacturing & Agro-Processing',
    location: 'Southern Africa',
    scope: 'Buy-Side M&A & Working Capital Facility',
    overview: 'Advising an industrial consumer goods group on cross-border bolt-on acquisitions and structured trade finance.',
    servicesDelivered: [
      'Buy-side target screening & commercial valuation',
      'Cross-border regulatory & AfCFTA compliance',
      'Structured trade & working capital facility arrangement',
      'Post-acquisition operational integration plan',
    ],
  },
];

// 8. INSIGHTS: RESEARCH PILLARS & EDITORIAL THEMES (Section 8)
export const RESEARCH_PILLARS = [
  {
    title: 'Capital Flows & Macroeconomic Briefings',
    desc: 'Analysis of institutional capital allocation across Africa, tracking shifts in private equity, private credit, sovereign debt markets, and foreign exchange risk mitigation.',
    iconName: 'TrendingUp',
  },
  {
    title: 'Sector Deep-Dives & Bankability Reports',
    desc: 'Ground-level evaluations of investment readiness, unit economics, and structuring requirements across energy transition, digital infrastructure, critical minerals, and agro-industry.',
    iconName: 'FileSearch',
  },
  {
    title: 'Cross-Border Policy, Regulatory & AfCFTA Analysis',
    desc: 'Practical commentary on trade integration under the African Continental Free Trade Area, investment treaty frameworks, local-content rules, and capital repatriation mechanics.',
    iconName: 'Globe',
  },
  {
    title: 'Transaction Structuring & Governance Notes',
    desc: 'Actionable guidance for founders, boards, and project sponsors on institutional governance, ESG integration, valuation discipline, and exit preparation.',
    iconName: 'Scale',
  },
];

export const INSIGHTS_DATA = [
  {
    slug: 'private-credit-catalyst-african-infrastructure',
    title: 'Private Credit as a Catalyst for African Infrastructure',
    category: 'Energy & Infrastructure',
    date: 'February 2026',
    readTime: '8 min read',
    excerpt: 'Examining how structured private debt, mezzanine facilities, and blended credit vehicles are bridging the continent’s infrastructure financing gap alongside traditional commercial bank lending.',
    content: `
      ## Executive Summary

      Addressing Africa’s annual infrastructure financing gap, estimated by the African Development Bank at between $68 billion and $108 billion, demands financial structures that look beyond sovereign balance sheets and traditional commercial bank syndications. Over the past twenty-four months, institutional private credit has transitioned from a niche funding source into one of the most vital capital conduits for mid-market and utility-scale infrastructure developments across the continent.

      As macroeconomic headwinds, sovereign debt renegotiations, and stringent banking capital adequacy rules curtail domestic and international commercial bank lending, structured private debt providers are delivering the patient, non-dilutive, and custom-tenored liquidity essential to reaching financial close.

      > "Private credit in emerging markets is no longer simply an opportunistic alternative to bank lending; it has become the foundational structural bridge between commercial risk realities and long-term institutional underwriting standards."

      ## The Structural Bankability Deficit & Commercial Bank Constraints

      Commercial banks operating across sub-Saharan and North African gateway economies face acute structural constraints:

      - **Tenor Mismatches:** Domestic commercial bank deposits are predominantly short-term (often 90 to 180 days), severely limiting their appetite to extend 10-to-15-year amortising project loans without prohibitive liquidity premiums.
      - **Single-Obligor Limits:** Strict central bank prudential guidelines limit exposure to single corporate sponsors or individual concession consortia, leaving large projects under-syndicated.
      - **Foreign Exchange Volatility:** For assets generating domestic currency revenues, such as municipal water, domestic transport, and local distribution grids, standard USD-denominated bank facilities create acute currency mismatch risks that can rapidly impair debt service capacity.

      ## Why Institutional Private Credit is Gaining Ground

      Institutional private credit funds, backed by North American and European pension funds, sovereign wealth funds, and specialist development asset managers, operate with flexible mandates that directly address these friction points.

      ### 1. Tailored Cash Flow Amortisation
      Unlike standard commercial bank loans that require rigid quarterly principal repayments regardless of operational ramps, private credit facilities can incorporate bespoke grace periods, cash-sweep mechanisms, and revenue-linked amortisation schedules aligned with seasonal revenue generation or multi-stage commissioning milestones.

      ### 2. Mezzanine & Subordinated Tranches
      Private debt providers frequently underwrite subordinated and mezzanine facilities that sit between sponsor equity and senior commercial bank debt. By absorbing a secondary tier of operational risk and accepting subordination, these mezzanine tranches:
      - Compress the required equity check for project developers from 35% down to 15-20%.
      - Provide the necessary equity cushion required by senior commercial lenders to approve senior debt facilities.
      - Enhance overall equity internal rates of return (IRR) while maintaining healthy debt service coverage ratios (DSCR).

      ### 3. Synthetic and Local-Currency Structuring
      Leading private credit managers are increasingly deploying synthetic local-currency facilities. By combining offshore hard-currency funding with currency hedging facilities from institutions like TCX (The Currency Exchange Fund) or local development banks, sponsors can service debt in local currency while international credit funds receive their agreed hard-currency yields.

      ## Key Structuring Models in Practice

      ### Model A: The Blended Infrastructure Vehicle
      Pairing commercial private debt with first-loss concessional capital from Development Finance Institutions (DFIs). Under this structure:
      - The DFI tranche absorbs the initial 10-15% of any credit or operational loss.
      - The institutional private debt tranche earns a commercial yield with an investment-grade risk profile.
      - The project sponsor secures competitive blended interest rates that make the underlying project economically viable.

      ### Model B: HoldCo Financing for Regional Platforms
      Rather than lending solely at the asset level (OpCo), private credit funds provide structured financing at the holding company (HoldCo) level across a portfolio of diversified infrastructure assets, such as a multi-country commercial & industrial solar portfolio. The cash flows from operational assets cross-collateralise the debt while greenfield assets are constructed.

      ## Strategic Outlook: Institutional Underwriting Priorities

      For project sponsors seeking to access global private credit, underwriting committees focus on four non-negotiable fundamentals:

      - **Off-Take Creditworthiness:** High-quality, enforceable power purchase agreements (PPAs), take-or-pay concession contracts, or long-term capacity agreements with creditworthy counterparties.
      - **IFC Performance Standards:** Full environmental and social impact governance, including transparent community engagement and biodiversity safeguards.
      - **Disciplined Legal Jurisdiction:** Enforceable cross-border security packages, typically governed under English or French commercial law with international arbitration clauses (LCIA, ICC).
      - **Auditable Operating Governance:** Professional financial reporting, escrow account management, and independent engineering validation.
    `,
  },
  {
    slug: 'domestic-strategic-exits-regional-ma',
    title: 'The Rise of Domestic Strategic Exits & Regional M&A',
    category: 'M&A & Corporate Strategy',
    date: 'January 2026',
    readTime: '7 min read',
    excerpt: 'Analysing how African corporates and strategic consolidators are driving trade-sale acquisitions and cross-border roll-ups across key regional hubs under the AfCFTA framework.',
    content: `
      ## Executive Summary

      Historically, private equity sponsors and founder-entrepreneurs across Africa structured their liquidity horizons around initial public offerings (IPOs) on international stock exchanges or regional domestic bourses. Today, market reality has catalyzed a fundamental paradigm shift: corporate strategic sales and regional consolidation have become the primary, most reliable liquidity and value-realisation pathways across the continent.

      Driven by trade integration under the African Continental Free Trade Area (AfCFTA), currency diversification imperatives, and the aggressive expansion of Pan-African commercial champions, strategic M&A is unlocking unprecedented transaction velocity across consumer goods, agribusiness, financial services, and industrial logistics.

      > "The primary liquidity mechanism across African growth markets is no longer a speculative public listing; it is the strategic trade sale to a well-capitalised regional consolidator seeking immediate scale and distribution."

      ## Beyond the IPO Myth: The New Liquidity Paradigm

      Public equity markets across Africa, with few exceptions, remain characterized by constrained secondary liquidity, low trading turnover, and currency conversion frictions. As a consequence:

      - International institutional fund managers face difficulty exiting substantial shareholdings without depressing equity valuations.
      - Mid-market companies with market capitalisations under $200 million frequently lack the institutional analyst coverage necessary to maintain fair valuation multiples on public exchanges.
      - The compliance and listing maintenance costs on domestic exchanges often outweigh the governance benefits.

      In contrast, strategic corporate trade buyers are equipped with permanent balance sheets, operational synergy models, and long-term strategic horizon commitments that make them willing to pay attractive valuation multiples for verified market-leading assets.

      ## Three Catalysts Driving Cross-Border Strategic M&A

      ### 1. Acceleration Under AfCFTA Trade Integration
      The progressive operationalisation of the African Continental Free Trade Area is dismantling regional tariff walls and harmonizing customs protocols. Rather than operating within fragmented single-country borders, corporate champions in Nigeria, Kenya, South Africa, Egypt, and Morocco are executing regional hub-and-spoke acquisition strategies:
      - Acquiring regional logistics operators to establish Pan-African supply-chain corridors.
      - Purchasing local manufacturing assets in neighbouring trade blocs (ECOWAS, EAC, SADC, COMESA) to meet rules-of-origin requirements and bypass border bottlenecks.
      - Securing regional consumer distribution channels to capture the continent's growing 1.4-billion-person internal market.

      ### 2. Supply-Chain Integration & Import Substitution
      Global supply chain disruptions and foreign exchange volatility have forced industrial conglomerates to localize raw material sourcing. Large FMCG and industrial groups are aggressively acquiring upstream agricultural processing assets, packaging manufacturers, and local distribution fleets to safeguard margins and reduce hard-currency import reliance.

      ### 3. Portfolio De-Risking via Multi-Currency Revenue
      Operating in a single African market exposes corporate groups to acute single-currency depreciation risk. By acquiring operating businesses across complementary currency regimes, such as pairing Nigerian Naira or Kenyan Shilling revenue with CFA Franc (XOF/XAF) or South African Rand (ZAR) assets, strategic acquirers achieve natural currency hedging and revenue stability.

      ## Structuring Strategic M&A: Bridging the Valuation Gap

      In any emerging-market M&A transaction, macroeconomic volatility can create wide valuation divergence between buyer and seller expectations. Successfully executing trade-sale exits requires sophisticated commercial structuring:

      ### 1. Earn-Outs & Milestone-Linked Consideration
      Structuring a portion of the transaction price (typically 15% to 30%) as contingent consideration tied to audited EBITDA milestones or regulatory license renewals over a 12-to-24-month horizon. This mitigates downside risk for the acquirer while preserving upside potential for the exiting founder.

      ### 2. Vendor Equity Retention & Rollover
      Strategic acquirers increasingly demand that key founders or executive management roll over a minority equity stake (10% to 20%) into the enlarged regional holding company, ensuring ongoing alignment during the post-merger integration phase.

      ### 3. Escrow & Indemnity Architecture
      Establishing offshore escrow accounts (frequently seated in London, Mauritius, or DIFC) holding 10% to 15% of transaction proceeds for a standard warranty survival period, addressing counterparty diligence findings and unforeseen tax liabilities.

      ## Strategic Takeaways for Business Owners

      For founders and sponsors preparing for a trade sale within the next 18 to 36 months, early institutional preparation is decisive:

      - **Clean Corporate Architecture:** Rationalise non-core subsidiary entities, resolve legacy shareholder agreements, and establish clear IP ownership.
      - **Multi-Year IFRS Audits:** Secure three consecutive years of clean financial audits conducted by an internationally recognised accounting firm.
      - **Operational Metric Transparency:** Establish rigorous tracking of customer acquisition costs (CAC), lifetime value (LTV), gross margins, and working capital cycles.
    `,
  },
  {
    slug: 'mobilising-dfi-institutional-capital',
    title: 'Mobilising Institutional & DFI Capital in a Fragmented Global Economy',
    category: 'Capital Markets',
    date: 'January 2026',
    readTime: '8 min read',
    excerpt: 'Practical frameworks for using guarantees, blended finance, and risk-sharing instruments to unlock development finance and institutional capital at scale.',
    content: `
      ## Executive Summary

      In a global macroeconomic environment characterized by elevated interest rates, geopolitical realignments, and heightened risk aversion, the competition for cross-border investment capital has intensified dramatically. For African project sponsors, corporations, and governments, securing international institutional capital requires moving beyond conventional debt or equity pitches.

      Success in the current landscape demands the deployment of sophisticated financial engineering, specifically blended finance and risk-sharing frameworks that utilize development capital to de-risk commercial investment, generate acceptable risk-adjusted yields, and unlock institutional allocations at scale.

      > "The role of advisory today is not merely finding capital; it is architecting the credit enhancements, guarantees, and risk-sharing tranches that transform high-potential African opportunities into bankable institutional assets."

      ## The Challenge: Emerging Market Risk vs. Global Underwriting Standards

      International institutional investors, such as global pension funds, sovereign wealth managers, and private institutional allocators, face strict underwriting mandates that often penalise emerging-market opportunities:

      - **Sovereign Ceiling Caps:** Institutional credit ratings are typically capped at the host nation’s sovereign rating, regardless of the underlying corporate project's profitability.
      - **Perceived Political & Regulatory Risk:** Concerns surrounding contract sanctity, expropriation, tariff renegotiation, and currency convertibility frequently add several hundred basis points to the required hurdle rate.
      - **Currency Inconvertibility & Transfer Restrictions:** Fears of balance-of-payments crises or FX liquidity shortages that could prevent foreign currency debt service or dividend repatriation.

      Catalytic capital from Development Finance Institutions (DFIs) and multilateral agencies is designed precisely to dismantle these underwriting barriers.

      ## The Core De-Risking Toolkit: Essential Instruments

      ### 1. Political Risk Insurance (PRI) & Breach-of-Contract Guarantees
      Institutions such as the Multilateral Investment Guarantee Agency (MIGA - World Bank Group), the African Trade & Investment Development Insurance (ATIDI), and the African Development Bank offer specialized political risk insurance and Partial Risk Guarantees (PRGs). These instruments protect commercial lenders and equity sponsors against:
      - Expropriation, nationalisation, and confiscation of assets.
      - Currency transfer restrictions and inconvertibility.
      - Sovereign or municipal breach of concession contracts, off-take agreements, or tariff guarantees.
      - War, civil disturbance, and political violence.

      By wrapping an infrastructure facility in MIGA or ATIDI coverage, commercial lenders can often treat the facility as an AAA- or AA-rated credit exposure, substantially lowering pricing and extending debt tenors.

      ### 2. Concessional First-Loss Tranches
      In blended finance vehicles, a public agency, philanthropic endowment, or multilateral institution provides a subordinate first-loss equity or debt tranche. If the project underperforms or encounters unforeseen losses:
      - The first-loss tranche absorbs the initial losses up to a pre-agreed threshold (such as 10% to 20% of total capital).
      - Senior commercial co-investors are protected, enjoying a heavily de-risked return profile that satisfies their internal investment committees.
      - The public capital achieves a multiplier effect, crowding in $4 to $8 of private institutional capital for every $1 of public funds deployed.

      ### 3. Liquidity Support & Payment Guarantees
      For power generation and utility concessions, state-owned off-takers may have weak balance sheets. Multi-tranche liquidity facilities, such as the African Development Bank’s Partial Credit Guarantees (PCGs) or standby letters of credit (LCs) backed by DFIs, guarantee 6 to 12 months of off-taker tariff payments, ensuring uninterrupted debt service during temporary payment disputes.

      ### 4. Project Preparation & Technical Assistance Grants
      Many high-potential projects stall during early feasibility because developers lack the risk capital required to finance comprehensive bankability studies. Multilateral project preparation facilities, including IFC InfraVentures, PIDG, and USTDA, provide non-reimbursable or success-contingent grants to fund:
      - Environmental and Social Impact Assessments (ESIA) aligned with IFC Performance Standards.
      - Bankable financial models, geotechnical surveys, and legal concession drafting.
      - International competitive bidding and EPC contract negotiations.

      ## Navigating DFI & Multilateral Due Diligence

      Securing DFI commitment requires meticulous alignment with their operational and policy standards:

      - **Measurable Developmental Impact:** Clear articulation of job creation, gender inclusion, industrial localisation, and carbon mitigation metrics.
      - **IFC Performance Standards Compliance:** Strict adherence to international environmental, health, safety, and community consultation benchmarks.
      - **Integrity Due Diligence (IDD):** Complete beneficial ownership transparency, PEP screening, and zero tolerance for non-transparent intermediaries.

      ## The Role of Independent Transaction Advisory

      As an independent advisory firm operating between London and primary African hubs, Black Markt Network Consultancy architects these multi-stakeholder capital structures. We bridge the communication and technical gap between international development agencies and African commercial sponsors, translating project fundamentals into the quantitative models, legal covenants, and risk-allocation matrices required to unlock catalytic institutional liquidity.
    `,
  },
  {
    slug: 'local-champion-to-institutional-asset',
    title: 'From Local Champion to Institutional Asset: Governance Milestones for African Enterprises',
    category: 'Governance & Investment Readiness',
    date: 'December 2025',
    readTime: '8 min read',
    excerpt: 'Key governance, financial reporting, and structuring milestones required for family-owned African enterprises preparing for international private equity, private credit, or strategic partnership.',
    content: `
      ## Executive Summary

      Across the African continent, dynamic family-owned enterprises and privately held commercial ventures form the absolute backbone of regional economic activity. Many of these businesses boast established brand recognition, strong market shares, and robust cash-flow generation. Yet when seeking to raise institutional expansion capital, execute cross-border joint ventures, or prepare for generational liquidity, they frequently encounter severe underwriting friction.

      This friction rarely stems from poor commercial products or weak demand; rather, it is driven by informal corporate governance, opaque financial accounting, and key-person dependency. Transforming a privately held local champion into an institutional-grade investment asset is a structured, value-accretive journey that commands substantial valuation premiums.

      > "Institutional capital does not invest in commercial promise alone; it invests in verified governance frameworks, auditable financial systems, and management structures that outlive any single individual."

      ## The Four Critical Governance Milestones

      ### Milestone 1: Separation of Management & Ownership
      In founder-led enterprises, ownership and executive decision-making are often inextricably merged. Strategic decisions are made informally without documented board deliberation. To attract institutional private equity or structured debt, businesses must establish:
      - **An Independent Board of Directors:** Appointing non-executive directors (NEDs) with proven industry, financial, and legal expertise who bring objective scrutiny to strategic decisions.
      - **Board Committees:** Formalising specialized sub-committees, including an Audit & Risk Committee, a Compensation/Remuneration Committee, and a Governance & Ethics Committee.
      - **Clear Delegation of Authority (DoA):** Documenting expenditure thresholds, signing authorities, and operational approvals that distinguish board-level prerogatives from day-to-day executive management.

      ### Milestone 2: Transition from Statutory Tax Accounting to IFRS Audits
      Institutional investors and credit committees will not underwrite transactions based on unaudited statutory management accounts prepared solely for local tax filings. The enterprise must achieve:
      - **Three Consecutive Years of IFRS Audited Financials:** Transitioning to International Financial Reporting Standards (IFRS) audited by an internationally recognised accounting firm (Tier 1 or Tier 2 global network).
      - **Related-Party Transaction Transparency:** Unbundling personal family expenditures, real estate holdings, or affiliated supplier transactions from core operational balance sheets.
      - **Robust Enterprise Resource Planning (ERP):** Implementing modern cloud ERP systems (SAP, Oracle, NetSuite) that ensure automated inventory tracking, real-time revenue recognition, and auditable accounting controls.

      ### Milestone 3: Key-Person De-Risking & Leadership Succession
      Institutional underwriters discount valuations heavily when a business’s relationships with clients, regulatory bodies, and suppliers reside exclusively in the personal relationships of the founding entrepreneur. De-risking this vulnerability requires:
      - **Building C-Suite Depth:** Hiring seasoned executive talent, including an experienced Chief Financial Officer (CFO), Chief Operating Officer (COO), and Chief Technology Officer (CTO), who have operating authority and accountability.
      - **Formal Succession Planning:** Establishing clear operational succession protocols and institutionalising institutional knowledge into standard operating procedures (SOPs).
      - **Key-Person Life & Disability Insurance:** Putting in place insurance policies payable to the enterprise to safeguard operational continuity.

      ### Milestone 4: Institutionalising ESG & Anti-Financial Crime Compliance
      Global limited partners (LPs) who fund international private equity and DFI vehicles are legally mandated to enforce strict environmental, social, and anti-bribery standards:
      - **Formal Anti-Bribery & Corruption (ABC) Policies:** Implementing verifiable compliance frameworks aligned with the UK Bribery Act and US Foreign Corrupt Practices Act (FCPA).
      - **Supply-Chain Integrity:** Verifying that sub-suppliers adhere to fair labour standards, occupational health and safety benchmarks, and environmental regulations.
      - **Data Protection & Cybersecurity:** Ensuring operational customer data complies with relevant domestic and international privacy regulations.

      ## The Tangible Commercial Payoff: Valuation Multiples & Capital Access

      Undergoing this institutional transformation requires financial investment, administrative discipline, and cultural change. However, the commercial returns are immediate and quantifiable:

      - **Valuation Expansion:** Institutionally prepared enterprises consistently command 2.0x to 4.0x higher EBITDA valuation multiples compared to informal peer competitors in the same sector.
      - **Lower Cost of Debt:** Audited, well-governed businesses access structured bank credit and private debt facilities with lower collateral requirements and narrower credit spreads.
      - **Faster Deal Execution:** With an organized Virtual Data Room (VDR) and institutional documentation already in place, transaction due diligence can be completed in 60 to 90 days rather than dragging on for 9 to 12 months.

      ## Black Markt’s Advisory Engagement

      At Black Markt Network Consultancy, our investment readiness and governance practice works shoulder-to-shoulder with visionary business owners across Africa. We design and implement customised governance roadmaps, build institutional financial models, coordinate pre-audit reconciliations, and structure corporate architectures that turn local market leadership into enduring, globally respected institutional assets.
    `,
  },
];

// 9. CONTACT & INTAKE DESKS (Section 9)
export const DIRECT_ENGAGEMENT_DESKS = [
  {
    title: 'Corporate & Project Advisory Enquiries',
    desc: 'For businesses and project sponsors seeking equity or debt capital raising, M&A advisory, investment readiness, or cross-border joint ventures.',
    email: 'advisory@blackmarkt.network',
  },
  {
    title: 'Institutional Investor & Co-Investment Desk',
    desc: 'For DFIs, sovereign wealth funds, private equity funds, and family offices registering investment mandates or requesting deal-flow access.',
    email: 'Clientservice@blackmarkt.network',
  },
  {
    title: 'Sovereign, PPP & Institutional Relations',
    desc: 'For government ministries, state-owned enterprises, and development agencies exploring public-private investment frameworks.',
    email: 'Felix.beck@blackmarkt.network',
  },
];

export const FORM_OPTIONS = {
  enquiryCategories: [
    'Capital Raising',
    'Project Finance & Infrastructure',
    'M&A / Strategic Partnership',
    'Investor Mandate Registration',
    'Government & PPP Advisory',
  ],
  industrySectors: [
    'Infrastructure',
    'Energy & Renewable Resources',
    'Real Estate',
    'Healthcare',
    'Technology',
    'Manufacturing',
    'Agriculture',
    'Mining & Natural Resources',
    'Hospitality',
    'Multi-Sector',
  ],
  capitalRequirements: [
    'Under $5M',
    '$5M – $25M',
    '$25M – $100M',
    '$100M+',
    'Strategic Partnership / Non-Capital',
  ],
};
