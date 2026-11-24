<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\Setting;
use App\Models\Location;
use App\Models\Practice;
use App\Models\Transaction;
use App\Models\Page;
use App\Models\PageSection;
use App\Models\Category;
use App\Models\Post;
use App\Models\Inquiry;
use App\Models\ActivityLog;
use App\Models\Testimonial;
use App\Models\Faq;
use App\Models\Product;
use App\Models\Order;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Super Admin User (Matching Screenshots 3 & 4)
        $admin = User::updateOrCreate(
            ['email' => 'admin@company.com'],
            [
                'name' => 'System Admin',
                'username' => 'admin',
                'password' => Hash::make('admin'), // default login: admin / admin (or password)
                'role' => 'super_admin',
                'avatar' => '/images/admin-avatar.png',
                'is_active' => true,
            ]
        );

        // Also create a backup admin account with admin@blackmarkt.network
        User::updateOrCreate(
            ['email' => 'admin@blackmarkt.network'],
            [
                'name' => 'Black Markt Executive',
                'username' => 'blackmarkt',
                'password' => Hash::make('password'),
                'role' => 'super_admin',
                'avatar' => '/images/admin-avatar.png',
                'is_active' => true,
            ]
        );

        // 2. The 8 Global Financial Hubs (Locations)
        $hubs = [
            [
                'city_code' => 'LON',
                'name' => 'London',
                'hub_name' => 'Bank & City Financial District',
                'market' => 'LSE / FTSE 100',
                'timezone' => 'Europe/London',
                'tz_abbr' => 'GMT/BST',
                'focus' => 'Global Advisory & Sovereign Capital Structuring HQ',
                'atmosphere' => 'Daylight High Finance & Thames Maritime Traffic',
                'image_url' => '/images/cities/london.jpg',
                'pan_keyframe' => 'pan-subtle-right',
                'sort_order' => 1,
            ],
            [
                'city_code' => 'NYC',
                'name' => 'New York',
                'hub_name' => 'Wall Street & Lower Manhattan',
                'market' => 'NYSE / NASDAQ',
                'timezone' => 'America/New_York',
                'tz_abbr' => 'EDT',
                'focus' => 'Transatlantic Private Equity & Institutional Syndication',
                'atmosphere' => 'Golden Hour Wall Street & FDR Highway Streams',
                'image_url' => '/images/cities/newyork.jpg',
                'pan_keyframe' => 'pan-subtle-zoom',
                'sort_order' => 2,
            ],
            [
                'city_code' => 'LOS',
                'name' => 'Lagos',
                'hub_name' => 'Lekki Bridge & Victoria Island Corridor',
                'market' => 'NGX / Eko Atlantic',
                'timezone' => 'Africa/Lagos',
                'tz_abbr' => 'WAT',
                'focus' => 'West African Infrastructure, FinTech & Trade Expansion',
                'atmosphere' => 'Midday Commercial Powerhouse & Lagoon Traffic',
                'image_url' => '/images/cities/lagos.jpg',
                'pan_keyframe' => 'pan-subtle-left',
                'sort_order' => 3,
            ],
            [
                'city_code' => 'NBO',
                'name' => 'Nairobi',
                'hub_name' => 'Upper Hill & Silicon Savannah',
                'market' => 'NSE 20 / Kenya Central',
                'timezone' => 'Africa/Nairobi',
                'tz_abbr' => 'EAT',
                'focus' => 'East African Energy Grid & Digital Infrastructure',
                'atmosphere' => 'Dusk Expressway Artery & Tech Metropolis',
                'image_url' => '/images/cities/nairobi.jpg',
                'pan_keyframe' => 'pan-subtle-zoom-out',
                'sort_order' => 4,
            ],
            [
                'city_code' => 'JNB',
                'name' => 'Johannesburg',
                'hub_name' => 'Sandton Financial Center ("Richest Square Mile")',
                'market' => 'JSE Africa / Sandton',
                'timezone' => 'Africa/Johannesburg',
                'tz_abbr' => 'SAST',
                'focus' => 'Southern African Mining, Metals & Banking Syndication',
                'atmosphere' => 'Midday High-Yield Banking & Highway Interchange',
                'image_url' => '/images/cities/johannesburg.jpg',
                'pan_keyframe' => 'pan-subtle-right',
                'sort_order' => 5,
            ],
            [
                'city_code' => 'CAI',
                'name' => 'Cairo',
                'hub_name' => 'Nile Corniche & Sovereign Financial District',
                'market' => 'EGX 30 / New Capital',
                'timezone' => 'Africa/Cairo',
                'tz_abbr' => 'EET',
                'focus' => 'North African Sovereign Debt, Maritime & PPP Advisory',
                'atmosphere' => 'Sunset Nile Bridge Streams & Modern Towers',
                'image_url' => '/images/cities/cairo.jpg',
                'pan_keyframe' => 'pan-subtle-zoom',
                'sort_order' => 6,
            ],
            [
                'city_code' => 'ACC',
                'name' => 'Accra',
                'hub_name' => 'Airport City & Ridge Financial District',
                'market' => 'GSE Composite / Ridge',
                'timezone' => 'Africa/Accra',
                'tz_abbr' => 'GMT',
                'focus' => 'West African Cross-Border Trade & Institutional Wealth',
                'atmosphere' => 'Tropical Aviation & Banking Boulevard Movement',
                'image_url' => '/images/cities/accra.jpg',
                'pan_keyframe' => 'pan-subtle-left',
                'sort_order' => 7,
            ],
            [
                'city_code' => 'KGL',
                'name' => 'Kigali',
                'hub_name' => 'Kigali International Financial Centre & KICC',
                'market' => 'RSE / KIFC Sovereign',
                'timezone' => 'Africa/Kigali',
                'tz_abbr' => 'CAT',
                'focus' => 'Pan-African Green Finance, Fund Domiciliation & Innovation',
                'atmosphere' => 'Verdant Clean Tech Valley & Convention Domes',
                'image_url' => '/images/cities/kigali.jpg',
                'pan_keyframe' => 'pan-subtle-right',
                'sort_order' => 8,
            ],
        ];

        foreach ($hubs as $hub) {
            Location::updateOrCreate(['city_code' => $hub['city_code']], $hub);
        }

        // 3. The 4 Core Practice Areas
        $practices = [
            [
                'slug' => 'strategy',
                'title' => 'Corporate Strategy & Capital Allocation',
                'eyebrow' => 'STRATEGIC PORTFOLIO ADVISORY',
                'short_desc' => 'Long-range portfolio structuring, sovereign balance sheet optimization, and cross-border expansion strategies for high-growth enterprise holdings.',
                'full_desc' => 'Black Markt advises institutional boards, sovereign investment funds, and corporate treasuries on navigating complex cross-border allocations. We combine macroeconomic scenario modeling with granular corporate finance structuring to ensure capital deployability without systemic friction.',
                'icon' => 'chess',
                'deal_size' => '$450M – $5B+',
                'key_metrics' => [
                    ['label' => 'Capital Optimized', 'value' => '$18.4B'],
                    ['label' => 'Average IRR Lift', 'value' => '+3.8%'],
                    ['label' => 'Cross-Border Nodes', 'value' => '14 Nations'],
                ],
                'capabilities' => [
                    'Sovereign Balance Sheet Structuring & Optimization',
                    'Cross-Border M&A Synergies & Carve-Out Strategy',
                    'Fiduciary Capital Allocation & Liquidity Ring-Fencing',
                    'Regulatory Arbitrage & Jurisdictional Arbitrage Risk',
                    'Defensive Capital Moats & Anti-Takeover Hardening',
                ],
                'deliverables' => [
                    'Institutional Strategic Mandate Dossier',
                    '5-Year Capital Allocation Roadmap & Scenario Analysis',
                    'Cross-Border Regulatory Matrix & Fiduciary Opinion',
                ],
                'sort_order' => 1,
            ],
            [
                'slug' => 'digital-infrastructure',
                'title' => 'Mission-Critical Digital Infrastructure',
                'eyebrow' => 'SOVEREIGN CLOUD & NETWORKS',
                'short_desc' => 'Architecting resilient, sovereign-grade telecom, cloud systems, and data center infrastructures with guaranteed multi-nines availability.',
                'full_desc' => 'We design and stress-test high-capacity digital backbones that underpin national economies, global clearing houses, and hyperscale cloud providers. Our engineers guarantee zero-downtime tolerance and compliance with stringent data sovereignty laws.',
                'icon' => 'server',
                'deal_size' => '$200M – $3.5B',
                'key_metrics' => [
                    ['label' => 'Uptime Reliability', 'value' => '99.999%'],
                    ['label' => 'Terabits Provisioned', 'value' => '420 Tbps'],
                    ['label' => 'Sovereign Enclaves', 'value' => '38 Active'],
                ],
                'capabilities' => [
                    'Sovereign Data Center Architecture & Hyperscale Planning',
                    'Subsea Cable & Cross-Continental Fiber Route Due Diligence',
                    'Zero-Trust Sovereign Cloud Enclaves (Swiss FADP / GDPR)',
                    'Multi-Nines Fault Tolerance & Disaster Recovery Topology',
                    'Energy-Efficient Compute & Decarbonized Datacenter Design',
                ],
                'deliverables' => [
                    'Tier-IV Infrastructure Architecture Blueprint',
                    'Sovereign Data Residency Compliance Certification',
                    'Stress-Testing & Latency Optimization Audit',
                ],
                'sort_order' => 2,
            ],
            [
                'slug' => 'ma-pe',
                'title' => 'Private Equity & M&A Due Diligence',
                'eyebrow' => 'HIGH-STAKES TRANSACTION DILIGENCE',
                'short_desc' => 'Institutional technology audits, carve-out engineering, synergy verification, and technical risk quantification for mega-cap buyout funds.',
                'full_desc' => 'Evaluating target infrastructure before signing is critical to protecting valuation multiples. We perform line-by-line codebase audits, technical debt quantification, cybersecurity posture assessments, and Day-1 carve-out roadmaps for private equity sponsors.',
                'icon' => 'handshake',
                'deal_size' => '$500M – $10B+',
                'key_metrics' => [
                    ['label' => 'Liabilities Shielded', 'value' => '$2.8B+'],
                    ['label' => 'Average Audit Window', 'value' => '14 Days'],
                    ['label' => 'Carveout Success', 'value' => '100% Day-1'],
                ],
                'capabilities' => [
                    'Pre-Close Technical Debt & Latent Liability Quantification',
                    'Transition Services Agreement (TSA) Optimization',
                    'Post-Close Technology Value Creation Blueprint',
                    'Cybersecurity & Intellectual Property Forensic Auditing',
                    'Productivity & Engineering Team Capability Scoring',
                ],
                'deliverables' => [
                    'Executive Red-Flag Diligence Report',
                    'Day-1 Separation & Carve-Out Execution Playbook',
                    '100-Day Value Acceleration Matrix',
                ],
                'sort_order' => 3,
            ],
            [
                'slug' => 'modernization',
                'title' => 'Enterprise Modernization & Architecture',
                'eyebrow' => 'SYSTEMS RESILIENCE & RE-ENGINEERING',
                'short_desc' => 'Decommissioning legacy mainframes, transitioning core banking systems to event-driven microservices, and eliminating structural operational drag.',
                'full_desc' => 'Decades of layered software create systemic fragility in financial and industrial enterprises. Black Markt replaces legacy monoliths with high-throughput event-driven systems without interrupting active business operations.',
                'icon' => 'sync',
                'deal_size' => '$100M – $1.2B',
                'key_metrics' => [
                    ['label' => 'Legacy Drag Reduction', 'value' => '64%'],
                    ['label' => 'Throughput Increase', 'value' => '12x'],
                    ['label' => 'Maintenance Savings', 'value' => '$85M/yr'],
                ],
                'capabilities' => [
                    'Core Banking Mainframe Migration to Distributed Ledgers',
                    'Event-Driven Microservices Architecture (Kafka/gRPC)',
                    'Zero-Downtime Data Pipeline Modernization',
                    'Structural Monolith Strangler-Pattern Migration',
                    'Continuous Compliance & Operational Risk Mitigation',
                ],
                'deliverables' => [
                    'Enterprise Target Operating Model (TOM)',
                    'Microservices Decoupling Roadmap & Architecture Spec',
                    'Production Cutover & Rollback Verification Protocol',
                ],
                'sort_order' => 4,
            ],
        ];

        foreach ($practices as $practice) {
            Practice::updateOrCreate(['slug' => $practice['slug']], $practice);
        }

        // 4. Pages & Page Sections (Matching Screenshot 2)
        $homePage = Page::updateOrCreate(
            ['slug' => 'home'],
            [
                'title' => 'Homepage',
                'template' => 'Homepage',
                'meta_title' => 'Black Markt Network Consultancy | Strategic Capital Advisory & Africa Growth Markets',
                'meta_description' => 'Connecting ambitious African businesses, sponsors, and governments with institutional capital and transformative global partnerships.',
                'status' => 'Published',
                'sort_order' => 1,
            ]
        );

        // Seed Hero Section into Homepage
        PageSection::updateOrCreate(
            ['page_id' => $homePage->id, 'section_key' => 'hero'],
            [
                'title' => 'Hero Section',
                'content' => [
                    'eyebrow' => 'Strategic Capital Advisory • Africa Growth Markets',
                    'headline_line1' => 'Connecting African Opportunity',
                    'headline_line2' => 'With Global Capital',
                    'subhead' => 'Black Markt Network Consultancy is an independent strategic capital advisory firm connecting ambitious African businesses, project sponsors, governments and institutions with institutional capital, expertise and transformative partnerships.',
                    'fiduciary_badge' => 'Strict Fiduciary Discretion • Sovereign Grade Governance',
                    'cta_primary_label' => 'Request a Strategic Consultation',
                    'cta_primary_url' => '/book-consultation',
                    'cta_secondary_label' => 'Services',
                    'cta_secondary_url' => '#services',
                    'telemetry_ribbon' => [
                        ['label' => 'Pipeline', 'value' => '$4.2B+'],
                        ['label' => 'Network', 'value' => '70+'],
                        ['label' => 'Presence', 'value' => 'LON + 8 Hubs'],
                    ],
                ],
                'sort_order' => 1,
                'is_active' => true,
            ]
        );

        // Seed About Us Section into Homepage
        PageSection::updateOrCreate(
            ['page_id' => $homePage->id, 'section_key' => 'about_us'],
            [
                'title' => 'About Us Section',
                'content' => [
                    'eyebrow' => 'INSTITUTIONAL ADVISORY PEDIGREE',
                    'headline' => 'Unlocking High-Yield Sovereign Capital Across Emerging Africa',
                    'body' => 'Operating from London with active regional coverage across Lagos, Nairobi, Johannesburg, Cairo, Accra, and Kigali, Black Markt operates at the intersection of sovereign discretion, deep institutional syndication, and tier-1 corporate finance execution.',
                ],
                'sort_order' => 2,
                'is_active' => true,
            ]
        );

        // Seed Other Standard Pages from Screenshot 2
        $standardPages = [
            ['title' => 'About Us', 'slug' => 'about', 'template' => 'Default', 'status' => 'Published'],
            ['title' => 'Practices', 'slug' => 'practices', 'template' => 'Default', 'status' => 'Published'],
            ['title' => 'Industries', 'slug' => 'industries', 'template' => 'Default', 'status' => 'Published'],
            ['title' => 'Transactions', 'slug' => 'transactions', 'template' => 'Default', 'status' => 'Published'],
            ['title' => 'Leadership', 'slug' => 'leadership', 'template' => 'Default', 'status' => 'Published'],
            ['title' => 'Careers', 'slug' => 'careers', 'template' => 'Default', 'status' => 'Published'],
            ['title' => 'Reports & Insights', 'slug' => 'reports', 'template' => 'Default', 'status' => 'Published'],
            ['title' => 'Book Consultation', 'slug' => 'book-consultation', 'template' => 'Page detail', 'status' => 'Published'],
            ['title' => 'Contact', 'slug' => 'contact', 'template' => 'Default', 'status' => 'Published'],
            ['title' => 'FAQs', 'slug' => 'faqs', 'template' => 'Default', 'status' => 'Published'],
            ['title' => 'Compliance & Sovereign Fiduciary', 'slug' => 'compliance', 'template' => 'Default', 'status' => 'Published'],
            ['title' => 'Pricing & Retainer Structures', 'slug' => 'pricing', 'template' => 'Default', 'status' => 'Published'],
        ];

        foreach ($standardPages as $p) {
            Page::updateOrCreate(['slug' => $p['slug']], $p);
        }

        // 5. Blog Categories & Posts (Matching Screenshot 1)
        $catLifestyle = Category::updateOrCreate(['slug' => 'lifestyle'], ['name' => 'Lifestyle', 'description' => 'Lifestyle & High Net Worth Advisory']);
        $catHotel = Category::updateOrCreate(['slug' => 'hotel'], ['name' => 'Hotel', 'description' => 'Hospitality & Luxury Real Estate']);
        $catTravel = Category::updateOrCreate(['slug' => 'travel-tips'], ['name' => 'Travel Tips', 'description' => 'Cross-Border Mobility & Global Hubs']);
        $catNature = Category::updateOrCreate(['slug' => 'nature'], ['name' => 'Nature', 'description' => 'ESG & Sustainable Transition Capital']);
        $catDesign = Category::updateOrCreate(['slug' => 'design'], ['name' => 'Design', 'description' => 'Architecture & Sovereign Infrastructure Design']);

        $postsData = [
            [
                'title' => 'Sexy Clutches: How to Buy & Wear a Designer Clutch Bag',
                'slug' => 'sexy-clutches-how-to-buy-and-wear-a-designer-clutch-bag',
                'category_id' => $catHotel->id,
                'author_id' => $admin->id,
                'author_name' => 'System Admin',
                'featured_image' => '/images/cities/london.jpg',
                'summary' => 'Navigating luxury design assets, timeless investments, and premium portfolio considerations.',
                'content' => '<p>Investing in timeless luxury assets requires careful diligence, provenance verification, and brand equity assessment.</p>',
                'views_count' => 1422,
                'status' => 'Published',
                'published_at' => '2026-06-12 10:00:00',
            ],
            [
                'title' => '4 Expert Tips On How To Choose The Right Men\'s Wallet',
                'slug' => '4-expert-tips-on-how-to-choose-the-right-mens-wallet',
                'category_id' => $catLifestyle->id,
                'author_id' => $admin->id,
                'author_name' => 'System Admin',
                'featured_image' => '/images/cities/newyork.jpg',
                'summary' => 'Craftsmanship, security, and structural elegance in everyday executive carry.',
                'content' => '<p>Executive lifestyle accessories combine minimalism with durable leather craftsmanship.</p>',
                'views_count' => 1096,
                'status' => 'Published',
                'published_at' => '2026-06-12 11:30:00',
            ],
            [
                'title' => 'Unlock The Secrets Of Selling High Ticket Items',
                'slug' => 'unlock-the-secrets-of-selling-high-ticket-items',
                'category_id' => $catHotel->id,
                'author_id' => $admin->id,
                'author_name' => 'System Admin',
                'featured_image' => '/images/cities/lagos.jpg',
                'summary' => 'Structuring mega-cap transactions, sovereign advisory positioning, and institutional syndication trust.',
                'content' => '<p>High ticket syndication requires bespoke advisory trust, uncompromising discretion, and verifiable credentials.</p>',
                'views_count' => 2688,
                'status' => 'Published',
                'published_at' => '2026-06-12 12:00:00',
            ],
            [
                'title' => '10,000 Web Site Visitors In One Month: Guaranteed',
                'slug' => '10000-web-site-visitors-in-one-month-guaranteed',
                'category_id' => $catNature->id,
                'author_id' => $admin->id,
                'author_name' => 'System Admin',
                'featured_image' => '/images/cities/nairobi.jpg',
                'summary' => 'Digital acquisition strategies and high-converting institutional traffic funnels.',
                'content' => '<p>Targeted investor engagement strategies driving high-intent deal flow and institutional inquiries.</p>',
                'views_count' => 708,
                'status' => 'Published',
                'published_at' => '2026-06-12 14:00:00',
            ],
            [
                'title' => 'Apple iMac with Retina 5K display review',
                'slug' => 'apple-imac-with-retina-5k-display-review',
                'category_id' => $catDesign->id,
                'author_id' => $admin->id,
                'author_name' => 'System Admin',
                'featured_image' => '/images/cities/johannesburg.jpg',
                'summary' => 'Evaluating high-throughput workstation hardware for mission-critical financial modeling.',
                'content' => '<p>Color-accurate multi-monitor workflows powering complex macroeconomic simulations and data pipelines.</p>',
                'views_count' => 1307,
                'status' => 'Published',
                'published_at' => '2026-06-12 15:30:00',
            ],
        ];

        foreach ($postsData as $p) {
            Post::updateOrCreate(['slug' => $p['slug']], $p);
        }

        // 6. Inquiries (Matching Image 4 with 32 records and unread badges)
        $inquiries = [
            ['name' => 'Deepa', 'email' => 'deepa.sale01@gmail.com', 'organization' => 'Apex Infra Partners', 'capital_range' => '$50M - $250M', 'message' => 'Requesting consultation on West African subsea fiber expansion mandate.'],
            ['name' => 'Sofia', 'email' => 'sofia.sale01@gmail.com', 'organization' => 'Meridian Capital Group', 'capital_range' => '$100M - $500M', 'message' => 'Seeking co-syndication advisory for renewable solar microgrid project.'],
            ['name' => 'Minnie Toomey', 'email' => 'toomey.minnie@googlemail.com', 'organization' => 'Sovereign Holdings UK', 'capital_range' => '$250M+', 'message' => 'Inquiring regarding UK-Kenya bilateral trade financing vehicle.'],
            ['name' => 'Ronald Stonge', 'email' => 'stonge.ronald@hotmail.com', 'organization' => 'Stonge Ventures', 'capital_range' => '$20M - $100M', 'message' => 'Interested in sovereign cloud enclave security audit.'],
            ['name' => 'Nora Hilson', 'email' => 'nora.hilson@yahoo.com', 'organization' => 'Hilson Asset Management', 'capital_range' => '$500M+', 'message' => 'Private equity carveout diligence request for pan-African fintech target.'],
            ['name' => 'Andrew Walters', 'email' => 'delcoronascardigliinc@gmail.com', 'organization' => 'Del Corona & Scardigli Inc', 'capital_range' => '$100M+', 'message' => 'Port facility expansion debt structuring inquiry in Lagos corridor.'],
            ['name' => 'Ulysses Dolling', 'email' => 'ulysses.dolling@outlook.com', 'organization' => 'Dolling Energy Syndicate', 'capital_range' => '$75M - $300M', 'message' => 'Geothermal energy transmission grid advisory in Rift Valley.'],
        ];

        foreach ($inquiries as $inq) {
            Inquiry::updateOrCreate(['email' => $inq['email']], array_merge($inq, [
                'status' => 'Unread',
                'created_at' => now()->subDays(rand(1, 40)),
            ]));
        }

        // 7. Core Settings (Matching Image 3 Common, Localization, Business, Others)
        $settings = [
            ['group' => 'common', 'key' => 'site_name', 'value' => 'Black Markt Network Consultancy', 'type' => 'text'],
            ['group' => 'common', 'key' => 'site_tagline', 'value' => 'Connecting African Opportunity With Global Capital', 'type' => 'text'],
            ['group' => 'common', 'key' => 'site_email', 'value' => 'advisory@blackmarkt.network', 'type' => 'text'],
            ['group' => 'common', 'key' => 'site_phone', 'value' => '+44 (0) 20 7946 0912', 'type' => 'text'],
            ['group' => 'common', 'key' => 'site_copyright', 'value' => 'Copyright 2026 © Black Markt Network Consultancy. All Rights Reserved.', 'type' => 'text'],
            ['group' => 'common', 'key' => 'theme_accent', 'value' => '#C9A227', 'type' => 'text'],
            ['group' => 'common', 'key' => 'theme_bg', 'value' => '#050505', 'type' => 'text'],
            ['group' => 'common', 'key' => 'theme_surface', 'value' => '#0B1320', 'type' => 'text'],
            ['group' => 'ecommerce', 'key' => 'base_currency', 'value' => 'USD', 'type' => 'text'],
            ['group' => 'ecommerce', 'key' => 'currencies', 'value' => json_encode(['USD', 'GBP', 'EUR', 'NGN', 'KES', 'ZAR']), 'type' => 'json'],
            ['group' => 'ecommerce', 'key' => 'company_hq', 'value' => 'Bank & City Financial District, London, United Kingdom', 'type' => 'text'],
            ['group' => 'others', 'key' => 'google_analytics_id', 'value' => 'G-BKMRKT2026', 'type' => 'text'],
            ['group' => 'others', 'key' => 'enable_whatsapp_chat', 'value' => '1', 'type' => 'boolean'],
        ];

        foreach ($settings as $s) {
            Setting::set($s['key'], $s['value'], $s['group'], $s['type']);
        }

        // 8. Sample Activity Logs (Matching Screenshot 3)
        $logs = [
            ['action' => 'logged in to the system', 'module' => 'auth', 'ip_address' => '2a00:5900:222:c000:a424:82d1:8723:a33'],
            ['action' => 'logged in to the customer portal', 'module' => 'portal', 'ip_address' => '2a00:5900:222:c000:a424:82d1:8723:a33'],
            ['action' => 'logged in to the system', 'module' => 'auth', 'ip_address' => '194.46.239.124'],
            ['action' => 'logged in to the customer portal', 'module' => 'portal', 'ip_address' => '194.46.239.124'],
            ['action' => 'logged in to the system', 'module' => 'auth', 'ip_address' => '79.135.105.57'],
            ['action' => 'logged in to the customer portal', 'module' => 'portal', 'ip_address' => '79.135.105.57'],
            ['action' => 'logged in to the system', 'module' => 'auth', 'ip_address' => '105.118.5.27'],
            ['action' => 'logged in to the customer portal', 'module' => 'portal', 'ip_address' => '105.118.5.27'],
        ];

        foreach ($logs as $log) {
            ActivityLog::create([
                'user_id' => $admin->id,
                'user_name' => 'System Admin',
                'user_role' => 'admin',
                'action' => $log['action'],
                'module' => $log['module'],
                'ip_address' => $log['ip_address'],
                'user_agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131.0.0.0 Safari/537.36',
            ]);
        }

        // 9. Sample Testimonials
        Testimonial::updateOrCreate(
            ['client_name' => 'H.E. Adebayo Ibrahim'],
            [
                'title' => 'Chief Investment Officer',
                'institution' => 'West African Sovereign Infrastructure Fund',
                'avatar' => '/images/cities/lagos.jpg',
                'quote' => 'Black Markt executed our cross-border syndication with sovereign-grade rigor and precision that standard investment banks simply cannot replicate.',
                'rating' => 5,
                'sort_order' => 1,
                'is_active' => true,
            ]
        );
    }
}
