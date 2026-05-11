// Language Translations
const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_partners: "Partners & Investors",
        nav_contact: "Contact",
        nav_cta: "Get Started",
        
        // Hero Section
        hero_subtitle: "Empowering creators and connecting audiences through innovative media experiences at the intersection of publishing, gaming, and social interaction.",
        hero_btn_projects: "View Projects",
        hero_btn_contact: "Contact Us",
        hero_floating_card: "Storytelling",
        
        // About Section
        about_title: "About Versa Nova",
        about_lead: "Versa Nova Media & Entertainment is a media and technology company focused on social-first storytelling.",
        about_desc: "We operate at the intersection of publishing, gaming, and creator economy—building products that make stories easier to discover, share, and experience.",
        about_startup_badge: "Early Stage Startup",
        about_startup_title: "Our Journey Begins",
        about_startup_text: "We're an ambitious startup at the beginning of an exciting journey. Currently developing two groundbreaking projects that will redefine how stories are created, shared, and experienced.",
        about_project1_title: "Booksy Boutique",
        about_project1_status: "MVP Ready",
        about_project1_desc: "Minimum Viable Product Complete",
        about_project2_title: "Project Unite-7",
        about_project2_status: "Demo in Preparation",
        about_project2_desc: "Building Interactive Demo",
        
        // Projects Section
        projects_title: "Our Projects",
        projects_subtitle: "Building the future of social-first storytelling",
        project1_title: "Booksy Boutique",
        project1_category: "Social commerce for books",
        project1_status: "MVP Ready",
        project1_desc: "Booksy Boutique is a social-media-driven book discovery and sales platform. It connects readers, influencers, and publishers in one place—making it easy to showcase books, track engagement, and turn attention into sales.",
        project1_feature1: "Social Commerce",
        project1_feature2: "Publishing Platform",
        project1_feature3: "Creator Economy",
        project1_progress: "Development Progress",
        project2_title: "Project Unite-7",
        project2_category: "Mobile 2.5D game",
        project2_status: "Demo in Preparation",
        project2_desc: "Booksy Boutique is a social-media-driven book discovery and sales platform. It connects readers, influencers, and publishers in one place—making it easy to showcase books, track engagement, and turn attention into sales.",
        project2_feature1: "Mobile Gaming",
        project2_feature2: "2.5D Graphics",
        project2_feature3: "Interactive Story",
        project2_progress: "Demo Progress",
        
        // Partners Section
        partners_title: "Seeking Partners & Investors",
        partners_subtitle: "Join us in building the future of social-first storytelling",
        partners_badge: "Open for Investment & Partnerships",
        partners_intro: "We're an early-stage startup with two innovative projects in development. We're actively seeking strategic partners and investors who share our vision of revolutionizing how stories are created, shared, and monetized.",
        partners_card1_title: "Strategic Partners",
        partners_card1_desc: "Collaborate with us to expand reach, leverage synergies, and create mutual value in the creator economy space.",
        partners_card1_item1: "Technology Partners",
        partners_card1_item2: "Distribution Partners",
        partners_card1_item3: "Content Partners",
        partners_featured_badge: "Priority",
        partners_card2_title: "Angel Investors",
        partners_card2_desc: "Invest in our vision and be part of an innovative startup at the intersection of publishing, gaming, and social media.",
        partners_card2_item1: "Seed Funding Round",
        partners_card2_item2: "Equity Opportunities",
        partners_card2_item3: "Advisory Roles",
        partners_card3_title: "Financial Support",
        partners_card3_desc: "We're exploring various funding options including grants, loans, and accelerator programs to fuel our growth.",
        partners_card3_item1: "Business Loans",
        partners_card3_item2: "Grant Programs",
        partners_card3_item3: "Accelerator Funding",
        partners_why_title: "Why Partner With Us?",
        partners_why_item1_title: "Innovative Vision",
        partners_why_item1_desc: "Unique positioning at the intersection of books, games, and social commerce",
        partners_why_item2_title: "Growing Market",
        partners_why_item2_desc: "Tapping into the booming creator economy and digital entertainment sectors",
        partners_why_item3_title: "MVP Ready",
        partners_why_item3_desc: "First product approaching launch with strong early traction potential",
        partners_cta_title: "Interested in Our Journey?",
        partners_cta_desc: "Let's discuss how we can grow together. We're open to conversations about partnerships, investments, and collaboration opportunities.",
        partners_cta_btn1: "Contact Us",
        partners_cta_btn2: "View Our Projects",
        
        // Contact Section
        contact_title: "Get In Touch",
        contact_subtitle: "Let's discuss partnership and investment opportunities",
        contact_location: "Location",
        contact_email: "Email",
        contact_phone: "Phone",
        contact_form_name: "Your Name *",
        contact_form_email: "Your Email *",
        contact_form_subject: "Subject *",
        contact_form_message: "Message",
        contact_form_btn: "Send Message",
        
        // Footer
        footer_desc: "A media and technology company focused on social-first storytelling. Building products at the intersection of publishing, gaming, and creator economy.",
        footer_quick_links: "Quick Links",
        footer_company: "Company",
        footer_contact_us: "Contact Us",
        footer_careers: "Careers",
        footer_news: "News",
        footer_press: "Press Kit",
        footer_newsletter: "Newsletter",
        footer_newsletter_desc: "Subscribe to get the latest updates",
        footer_newsletter_placeholder: "Your email",
        footer_copyright: "© 2026 Versa Nova. All rights reserved.",
        footer_impressum: "Impressum",
        footer_privacy: "Privacy Policy",
        footer_cookies: "Cookie Settings",
        footer_terms: "Terms of Use",

        // Cookie Settings Modal
        cookie_title: "Cookie Settings",
        cookie_overview: "Overview",
        cookie_overview_text: "This site uses cookies and similar technologies to ensure basic functionality, improve your experience, and provide analytics and marketing features. Use the controls below to manage which categories you allow.",
        cookie_categories: "Cookie categories",
        cookie_essential: "Essential",
        cookie_essential_desc: "Required for site security, navigation, and basic functions. These cookies cannot be disabled.",
        cookie_preferences: "Preferences",
        cookie_preferences_desc: "Remember language, display preferences, and other choices to improve your experience.",
        cookie_analytics: "Analytics",
        cookie_analytics_desc: "Collect anonymous usage data to help us understand how the site is used and to improve performance.",
        cookie_marketing: "Marketing",
        cookie_marketing_desc: "Enable personalized content, social media features, and advertising. These are only active with your consent.",
        cookie_choices: "Your choices",
        cookie_accept_all: "Accept all",
        cookie_accept_all_desc: "Enable all cookie categories.",
        cookie_reject_all: "Reject all non‑essential",
        cookie_reject_all_desc: "Allow only Essential cookies.",
        cookie_customize: "Customize",
        cookie_customize_desc: "Toggle each non‑essential category on or off.",
        cookie_change: "How to change or withdraw consent",
        cookie_change_text: "You can change your cookie settings at any time by clicking the Cookie Settings link in the footer or via your browser settings to block or delete cookies. Withdrawing consent will not affect processing already carried out while consent was valid.",
        cookie_third_parties: "Third parties and transfers",
        cookie_third_parties_text: "Some cookies are set by third parties (analytics, social platforms, advertising partners). Where data is transferred outside the EEA, we rely on appropriate safeguards such as standard contractual clauses or adequacy decisions.",
        cookie_contact: "Contact",
        cookie_contact_text: "For questions about cookies or data processing contact: info@versanova.de.",
        cookie_save: "Save Preferences",
        cookie_close: "Close",

        // Cookie Banner
        cookie_banner_title: "We use cookies",
        cookie_banner_text: "We use cookies and similar technologies to improve your experience, analyze site usage, and assist with our marketing efforts. You can manage your preferences at any time.",
        cookie_banner_accept: "Accept All",
        cookie_banner_reject: "Reject Non-Essential",
        cookie_banner_settings: "Cookie Settings",

        // Back to Top
        back_to_top: "Back to Top",

        // Booksy Boutique Page
        bb_hero_subtitle: "Modern Book Library & Social Reading Platform",
        bb_hero_tech: "Built with React, TypeScript, Ionic & MongoDB",
        bb_badge_mvp: "MVP Ready",
        bb_badge_crossplatform: "Cross-Platform",
        bb_what_title: "What is Booksy Boutique?",
        bb_what_lead: "Booksy Boutique is a digital, community-based book platform that connects readers, bookstores, and libraries in a single ecosystem.",
        bb_what_desc1: "The platform combines a modern marketplace, social features, and multilingual discovery tools to simplify access to literature and strengthen local book cultures.",
        bb_what_desc2: "The EU book market is large but digitally fragmented: there is no central platform that makes community engagement, book discovery, and local retailers visible. Booksy Boutique fills this gap with a scalable technical architecture and a clear focus on cultural and social value.",
        bb_status: "Status:",
        bb_platform: "Platform:",
        bb_features_title: "✨ Key Features",
        bb_feature1_title: "Personal Library",
        bb_feature1_desc: "Add, organize, and manage your entire book collection with cover uploads and ratings",
        bb_feature2_title: "Social Features",
        bb_feature2_desc: "Connect with friends, share recommendations, and discover what others are reading",
        bb_feature3_title: "Cross-Platform",
        bb_feature3_desc: "Mobile-first design with native iOS and Android apps using Capacitor",
        bb_feature4_title: "Rating System",
        bb_feature4_desc: "Rate books and bookstores, see average ratings from the community",
        bb_feature5_title: "Shopping Cart",
        bb_feature5_desc: "Add books to cart, manage purchases, and track your orders",
        bb_feature6_title: "Favorites",
        bb_feature6_desc: "Save your favorite books for quick access and future reference",
        bb_tech_title: "🚀 Tech Stack",
        bb_tech_frontend: "Frontend",
        bb_tech_backend: "Backend",
        bb_tech_services: "Services & Tools",
        bb_tech_mobile: "Mobile",
        bb_tech_architecture: "Architecture",
        bb_screenshots_title: "📸 Screenshots",
        bb_cta_title: "Ready to Explore?",
        bb_cta_desc: "Booksy Boutique is in MVP stage and ready for partnerships, investments, or integration opportunities.",
        bb_cta_btn: "Get in Touch",

        // Project Unite-7 Page
        pu7_hero_subtitle: "Cyberpunk 2D Platformer Game",
        pu7_what_title: "What is Project Unite-7?",
        pu7_what_lead: "Project Unite-7 is a fast-paced cyberpunk 2D platformer built with Godot 4.4, featuring dynamic character switching, intense combat, and puzzle-solving mechanics.",
        pu7_what_desc1: "In a dystopian cyberpunk world, players can switch between 4 unique characters—each with special abilities—to overcome challenges. Rex breaks walls, Astra09 hacks locked doors via a mini wire-puzzle game, while Kira and Nyxs offer unique combat and mobility options.",
        pu7_what_desc2: "The game combines action-platforming with puzzle elements, featuring smart AI enemies, mobile-optimized virtual joystick controls, breakable walls, and a cyberpunk aesthetic with neon visuals.",
        pu7_status: "Status: Alpha Development",
        pu7_platform: "Platform: Windows, Linux, Android",
        pu7_features_title: "✨ Game Features",
        pu7_feature1_title: "Character Switching",
        pu7_feature1_desc: "Switch between 4 playable characters with unique abilities via portrait UI system",
        pu7_feature2_title: "Dynamic Combat",
        pu7_feature2_desc: "Projectile-based combat with health bars, damage system, and character-specific attacks",
        pu7_feature3_title: "Mobile Optimized",
        pu7_feature3_desc: "Virtual joystick with ability buttons (Jump, Shoot, Rage, Special) for mobile gameplay",
        pu7_feature4_title: "Puzzle Mechanics",
        pu7_feature4_desc: "Wire-puzzle mini-game for hacking doors and environmental interaction with gear items",
        pu7_feature5_title: "Breakable Walls",
        pu7_feature5_desc: "Destructible environment—Rex can break certain walls after 3 hits to reveal secrets",
        pu7_feature6_title: "Smart AI Enemies",
        pu7_feature6_desc: "Enemies with patrol/chase/attack states, NeuroBone AI, and boss-level Battle Tanks",
        pu7_chars_title: "🎮 Playable Characters",
        pu7_char1_name: "Astra09",
        pu7_char1_desc: "Hacker with wire-puzzle ability. Can hack locked doors and terminals to access new areas.",
        pu7_char2_name: "Rex",
        pu7_char2_desc: "Heavy unit with wall-breaking power. Can destroy breakable walls after 3 hits to find secrets.",
        pu7_char3_name: "Kira",
        pu7_char3_desc: "Agile fighter with enhanced mobility. Perfect for speed runs and dodging enemy attacks.",
        pu7_char4_name: "Nyxs",
        pu7_char4_desc: "Mysterious character with unique combat style. Special abilities for advanced gameplay.",
        pu7_enemies_title: "⚔️ Enemies & Challenges",
        pu7_enemy1_name: "NeuroBone",
        pu7_enemy1_desc: "Cyberpunk-style AI skeleton with patrol, chase, and attack states. The most common enemy type.",
        pu7_enemy2_name: "Battle Tank",
        pu7_enemy2_desc: "Heavy armored boss enemy with high health and powerful attacks. Requires strategy to defeat.",
        pu7_enemy3_name: "Sakoo",
        pu7_enemy3_desc: "Fast-moving enemy with unpredictable attack patterns. Tests player reaction time.",
        pu7_controls_title: "🎮 Controls",
        pu7_controls_desktop: "Desktop Controls",
        pu7_controls_desktop_desc: "WASD for movement, Arrow Keys for actions, Space for jump, Mouse for aim and shoot.",
        pu7_controls_mobile: "Mobile Controls",
        pu7_controls_mobile_desc: "Virtual joystick with dedicated buttons for Jump, Shoot, Rage, and Special abilities.",
        pu7_tech_title: "🚀 Tech Stack",
        pu7_tech_structure: "Project Structure",
        pu7_environment_title: "🌆 Game Environment",
        pu7_cta_title: "Want to Learn More?",
        pu7_cta_desc: "Project Unite-7 is in active development. Reach out for collaboration, playtesting, or development inquiries.",
        pu7_cta_btn: "Get in Touch"
    },
    de: {
        // Navigation
        nav_home: "Startseite",
        nav_about: "Über uns",
        nav_projects: "Projekte",
        nav_partners: "Partner & Investoren",
        nav_contact: "Kontakt",
        nav_cta: "Loslegen",
        
        // Hero Section
        hero_subtitle: "Wir befähigen Kreative und verbinden Zielgruppen durch innovative Medienerlebnisse an der Schnittstelle von Publishing, Gaming und sozialer Interaktion.",
        hero_btn_projects: "Projekte ansehen",
        hero_btn_contact: "Kontakt",
        hero_floating_card: "Storytelling",
        
        // About Section
        about_title: "Über Versa Nova",
        about_lead: "Versa Nova Media & Entertainment ist ein Medien- und Technologieunternehmen mit Fokus auf Social-First-Storytelling.",
        about_desc: "Wir agieren an der Schnittstelle von Publishing, Gaming und Creator Economy – und entwickeln Produkte, die es einfacher machen, Geschichten zu entdecken, zu teilen und zu erleben.",
        about_startup_badge: "Early-Stage Startup",
        about_startup_title: "Unsere Reise beginnt",
        about_startup_text: "Wir sind ein ehrgeiziges Startup am Anfang einer spannenden Reise. Derzeit entwickeln wir zwei bahnbrechende Projekte, die neu definieren, wie Geschichten erstellt, geteilt und erlebt werden.",
        about_project1_title: "Booksy Boutique",
        about_project1_status: "MVP bereit",
        about_project1_desc: "Minimum Viable Product fertig",
        about_project2_title: "Project Unite-7",
        about_project2_status: "Demo in Vorbereitung",
        about_project2_desc: "Interaktive Demo wird erstellt",
        
        // Projects Section
        projects_title: "Unsere Projekte",
        projects_subtitle: "Die Zukunft des Social-First-Storytelling gestalten",
        project1_title: "Booksy Boutique",
        project1_category: "Social Commerce für Bücher",
        project1_status: "MVP bereit",
        project1_desc: "Booksy Boutique ist eine Social-Media-getriebene Buchentdeckungs- und Vertriebsplattform. Sie verbindet Leser, Influencer und Verlage an einem Ort – und macht es einfach, Bücher zu präsentieren, Engagement zu verfolgen und Aufmerksamkeit in Verkäufe umzuwandeln.",
        project1_feature1: "Social Commerce",
        project1_feature2: "Publishing-Plattform",
        project1_feature3: "Creator Economy",
        project1_progress: "Entwicklungsfortschritt",
        project2_title: "Project Unite-7",
        project2_category: "Mobiles 2.5D-Spiel",
        project2_status: "Demo in Vorbereitung",
        project2_desc: "Booksy Boutique ist eine Social-Media-getriebene Buchentdeckungs- und Vertriebsplattform. Sie verbindet Leser, Influencer und Verlage an einem Ort – und macht es einfach, Bücher zu präsentieren, Engagement zu verfolgen und Aufmerksamkeit in Verkäufe umzuwandeln.",
        project2_feature1: "Mobile Gaming",
        project2_feature2: "2.5D-Grafik",
        project2_feature3: "Interaktive Story",
        project2_progress: "Demo-Fortschritt",
        
        // Partners Section
        partners_title: "Partner & Investoren gesucht",
        partners_subtitle: "Gestalten Sie mit uns die Zukunft des Social-First-Storytelling",
        partners_badge: "Offen für Investitionen & Partnerschaften",
        partners_intro: "Wir sind ein Early-Stage Startup mit zwei innovativen Projekten in der Entwicklung. Wir suchen aktiv strategische Partner und Investoren, die unsere Vision teilen, die Art und Weise zu revolutionieren, wie Geschichten erstellt, geteilt und monetarisiert werden.",
        partners_card1_title: "Strategische Partner",
        partners_card1_desc: "Arbeiten Sie mit uns zusammen, um die Reichweite zu erweitern, Synergien zu nutzen und gemeinsamen Wert im Creator-Economy-Bereich zu schaffen.",
        partners_card1_item1: "Technologie-Partner",
        partners_card1_item2: "Vertriebs-Partner",
        partners_card1_item3: "Content-Partner",
        partners_featured_badge: "Priorität",
        partners_card2_title: "Angel-Investoren",
        partners_card2_desc: "Investieren Sie in unsere Vision und werden Sie Teil eines innovativen Startups an der Schnittstelle von Publishing, Gaming und Social Media.",
        partners_card2_item1: "Seed-Finanzierungsrunde",
        partners_card2_item2: "Beteiligungsmöglichkeiten",
        partners_card2_item3: "Beratungsrollen",
        partners_card3_title: "Finanzielle Unterstützung",
        partners_card3_desc: "Wir prüfen verschiedene Finanzierungsmöglichkeiten, darunter Zuschüsse, Darlehen und Accelerator-Programme, um unser Wachstum zu fördern.",
        partners_card3_item1: "Geschäftskredite",
        partners_card3_item2: "Förderprogramme",
        partners_card3_item3: "Accelerator-Finanzierung",
        partners_why_title: "Warum mit uns arbeiten?",
        partners_why_item1_title: "Innovative Vision",
        partners_why_item1_desc: "Einzigartige Positionierung an der Schnittstelle von Büchern, Spielen und Social Commerce",
        partners_why_item2_title: "Wachsender Markt",
        partners_why_item2_desc: "Erschließung der boomenden Creator Economy und digitalen Entertainment-Sektoren",
        partners_why_item3_title: "MVP bereit",
        partners_why_item3_desc: "Erstes Produkt steht kurz vor dem Launch mit starkem Early-Traction-Potenzial",
        partners_cta_title: "Interessiert an unserer Reise?",
        partners_cta_desc: "Lassen Sie uns besprechen, wie wir gemeinsam wachsen können. Wir sind offen für Gespräche über Partnerschaften, Investitionen und Kooperationsmöglichkeiten.",
        partners_cta_btn1: "Kontakt aufnehmen",
        partners_cta_btn2: "Unsere Projekte ansehen",
        
        // Contact Section
        contact_title: "Kontakt",
        contact_subtitle: "Lassen Sie uns über Partnerschaft und Investitionsmöglichkeiten sprechen",
        contact_location: "Standort",
        contact_email: "E-Mail",
        contact_phone: "Telefon",
        contact_form_name: "Ihr Name *",
        contact_form_email: "Ihre E-Mail *",
        contact_form_subject: "Betreff *",
        contact_form_message: "Nachricht",
        contact_form_btn: "Nachricht senden",
        
        // Footer
        footer_desc: "Ein Medien- und Technologieunternehmen mit Fokus auf Social-First-Storytelling. Wir entwickeln Produkte an der Schnittstelle von Publishing, Gaming und Creator Economy.",
        footer_quick_links: "Schnelllinks",
        footer_company: "Unternehmen",
        footer_contact_us: "Kontakt",
        footer_careers: "Karriere",
        footer_news: "Neuigkeiten",
        footer_press: "Presse-Kit",
        footer_newsletter: "Newsletter",
        footer_newsletter_desc: "Abonnieren Sie für aktuelle Updates",
        footer_newsletter_placeholder: "Ihre E-Mail",
        footer_copyright: "© 2026 Versa Nova. Alle Rechte vorbehalten.",
        footer_impressum: "Impressum",
        footer_privacy: "Datenschutz",
        footer_cookies: "Cookie-Einstellungen",
        footer_terms: "Nutzungsbedingungen",

        // Cookie Settings Modal
        cookie_title: "Cookie Einstellungen",
        cookie_overview: "Übersicht",
        cookie_overview_text: "Diese Website verwendet Cookies und ähnliche Technologien für grundlegende Funktionen, zur Verbesserung der Nutzererfahrung sowie für Analyse‑ und Marketingzwecke. Mit den folgenden Einstellungen können Sie festlegen, welche Kategorien Sie zulassen.",
        cookie_categories: "Cookie Kategorien",
        cookie_essential: "Essentiell",
        cookie_essential_desc: "Notwendig für Sicherheit, Navigation und Basisfunktionen der Seite. Diese Cookies können nicht deaktiviert werden.",
        cookie_preferences: "Präferenzen",
        cookie_preferences_desc: "Speichern Sprache, Anzeigeeinstellungen und andere Präferenzen zur Verbesserung der Nutzung.",
        cookie_analytics: "Analytics",
        cookie_analytics_desc: "Erfassen anonymer Nutzungsdaten, damit wir die Website verbessern und die Leistung analysieren können.",
        cookie_marketing: "Marketing",
        cookie_marketing_desc: "Ermöglichen personalisierte Inhalte, Social‑Media‑Funktionen und Werbung. Diese werden nur mit Ihrer Einwilligung aktiviert.",
        cookie_choices: "Ihre Auswahlmöglichkeiten",
        cookie_accept_all: "Alle akzeptieren",
        cookie_accept_all_desc: "Aktiviert alle Cookie‑Kategorien.",
        cookie_reject_all: "Alle nicht‑essentiellen ablehnen",
        cookie_reject_all_desc: "Erlaubt nur essentielle Cookies.",
        cookie_customize: "Anpassen",
        cookie_customize_desc: "Schalten Sie einzelne nicht‑essentielle Kategorien ein oder aus.",
        cookie_change: "Widerruf und Änderung der Einwilligung",
        cookie_change_text: "Sie können Ihre Cookie‑Einstellungen jederzeit über den Link Cookie Einstellungen im Footer ändern oder über die Browsereinstellungen Cookies blockieren oder löschen. Ein Widerruf wirkt nicht rückwirkend auf bereits verarbeitete Daten während der gültigen Einwilligung.",
        cookie_third_parties: "Drittanbieter und Übermittlungen",
        cookie_third_parties_text: "Einige Cookies werden von Drittanbietern gesetzt (Analytics, Social Media, Werbepartner). Bei Übermittlungen außerhalb des EWR nutzen wir geeignete Garantien wie Standardvertragsklauseln oder Angemessenheitsbeschlüsse.",
        cookie_contact: "Kontakt",
        cookie_contact_text: "Bei Fragen zu Cookies oder Datenverarbeitung: info@versanova.de.",
        cookie_save: "Einstellungen speichern",
        cookie_close: "Schließen",

        // Cookie Banner
        cookie_banner_title: "Wir verwenden Cookies",
        cookie_banner_text: "Wir verwenden Cookies und ähnliche Technologien, um Ihre Erfahrung zu verbessern, die Nutzung der Website zu analysieren und unsere Marketingmaßnahmen zu unterstützen. Sie können Ihre Einstellungen jederzeit verwalten.",
        cookie_banner_accept: "Alle akzeptieren",
        cookie_banner_reject: "Nicht-essentielle ablehnen",
        cookie_banner_settings: "Cookie-Einstellungen",

        // Back to Top
        back_to_top: "Nach oben",

        // Booksy Boutique Page
        bb_hero_subtitle: "Moderne Buchbibliothek & Social Reading Plattform",
        bb_hero_tech: "Entwickelt mit React, TypeScript, Ionic & MongoDB",
        bb_badge_mvp: "MVP bereit",
        bb_badge_crossplatform: "Cross-Platform",
        bb_what_title: "Was ist Booksy Boutique?",
        bb_what_lead: "Booksy Boutique ist eine digitale, community‑basierte Buchplattform, die Leser:innen, Buchhandlungen und Bibliotheken in einem einzigen Ökosystem verbindet.",
        bb_what_desc1: "Die Plattform kombiniert einen modernen Marktplatz, soziale Funktionen und mehrsprachige Discovery‑Tools, um den Zugang zu Literatur zu vereinfachen und lokale Buchkulturen zu stärken.",
        bb_what_desc2: "Der EU Buchmarkt ist groß, aber digital fragmentiert: Es fehlt eine zentrale Plattform, die Community‑Engagement, Buchentdeckung und lokale Händler sichtbar macht. Booksy Boutique schließt diese Lücke mit einer skalierbaren technischen Architektur und einem klaren Fokus auf kulturellen und sozialen Mehrwert.",
        bb_status: "Status:",
        bb_platform: "Plattform:",
        bb_features_title: "✨ Hauptfunktionen",
        bb_feature1_title: "Persönliche Bibliothek",
        bb_feature1_desc: "Fügen Sie Ihre gesamte Buchsammlung hinzu, organisieren und verwalten Sie diese mit Cover-Uploads und Bewertungen",
        bb_feature2_title: "Soziale Funktionen",
        bb_feature2_desc: "Vernetzen Sie sich mit Freunden, teilen Sie Empfehlungen und entdecken Sie, was andere lesen",
        bb_feature3_title: "Cross-Platform",
        bb_feature3_desc: "Mobile-First-Design mit nativen iOS- und Android-Apps mit Capacitor",
        bb_feature4_title: "Bewertungssystem",
        bb_feature4_desc: "Bewerten Sie Bücher und Buchhandlungen, sehen Sie durchschnittliche Bewertungen der Community",
        bb_feature5_title: "Warenkorb",
        bb_feature5_desc: "Fügen Sie Bücher zum Warenkorb hinzu, verwalten Sie Käufe und verfolgen Sie Ihre Bestellungen",
        bb_feature6_title: "Favoriten",
        bb_feature6_desc: "Speichern Sie Ihre Lieblingsbücher für schnellen Zugriff und zukünftige Referenz",
        bb_tech_title: "🚀 Technologie-Stack",
        bb_tech_frontend: "Frontend",
        bb_tech_backend: "Backend",
        bb_tech_services: "Services & Tools",
        bb_tech_mobile: "Mobile",
        bb_tech_architecture: "Architektur",
        bb_screenshots_title: "📸 Screenshots",
        bb_cta_title: "Bereit zum Erkunden?",
        bb_cta_desc: "Booksy Boutique befindet sich im MVP-Stadium und ist bereit für Partnerschaften, Investitionen oder Integrationsmöglichkeiten.",
        bb_cta_btn: "Kontakt aufnehmen",

        // Project Unite-7 Seite
pu7_hero_subtitle: "Cyberpunk 2D Platformer Spiel",
        pu7_what_title: "Was ist Project Unite-7?",
        pu7_what_lead: "Project Unite-7 ist ein rasanter Cyberpunk 2D-Platformer, entwickelt mit Godot 4.4, mit dynamischem Charakterwechsel, intensiven Kämpfen und Puzzle-Mechaniken.",
        pu7_what_desc1: "In einer dystopischen Cyberpunk-Welt können Spieler zwischen 4 einzigartigen Charakteren wechseln—jeder mit besonderen Fähigkeiten—um Herausforderungen zu meistern. Rex zerstört Wände, Astra09 hackt verschlossene Türen über ein Draht-Puzzle-Minispiel, während Kira und Nyxs einzigartige Kampf- und Mobilitätsoptionen bieten.",
        pu7_what_desc2: "Das Spiel kombiniert Action-Platforming mit Puzzle-Elementen, mit intelligenten KI-Gegnern, mobil-optimierten virtuellen Joystick-Steuerungen, zerstörbaren Wänden und einer Cyberpunk-Ästhetik mit Neon-Visuals.",
        pu7_status: "Status: Alpha-Entwicklung",
        pu7_platform: "Plattform: Windows, Linux, Android",
        pu7_features_title: "✨ Spiel-Features",
        pu7_feature1_title: "Charakterwechsel",
        pu7_feature1_desc: "Wechseln Sie zwischen 4 spielbaren Charakteren mit einzigartigen Fähigkeiten über das Portrait-UI-System",
        pu7_feature2_title: "Dynamischer Kampf",
        pu7_feature2_desc: "Projektilbasierter Kampf mit Lebensbalken, Schadenssystem und charakterspezifischen Angriffen",
        pu7_feature3_title: "Mobil Optimiert",
        pu7_feature3_desc: "Virtueller Joystick mit Fähigkeitstasten (Springen, Schießen, Wut, Spezial) für mobiles Gameplay",
        pu7_feature4_title: "Puzzle-Mechaniken",
        pu7_feature4_desc: "Draht-Puzzle-Minispiel zum Hacken von Türen und Umgebungsinteraktion mit Zahnrad-Gegenständen",
        pu7_feature5_title: "Zerstörbare Wände",
        pu7_feature5_desc: "Zerstörbare Umgebung—Rex kann bestimmte Wände nach 3 Treffern zerstören, um Geheimnisse zu enthüllen",
        pu7_feature6_title: "Intelligente KI-Gegner",
        pu7_feature6_desc: "Gegner mit Patrouille/Verfolgung/Angriff-Zuständen, NeuroBone-KI und Boss-Level Battle Tanks",
        pu7_chars_title: "🎮 Spielbare Charaktere",
        pu7_char1_name: "Astra09",
        pu7_char1_desc: "Hacker mit Draht-Puzzle-Fähigkeit. Kann verschlossene Türen und Terminals hacken, um neue Bereiche zu erreichen.",
        pu7_char2_name: "Rex",
        pu7_char2_desc: "Schwere Einheit mit Wand-Zerstörungskraft. Kann zerstörbare Wände nach 3 Treffern zerstören, um Geheimnisse zu finden.",
        pu7_char3_name: "Kira",
        pu7_char3_desc: "Agiler Kämpfer mit verbesserter Mobilität. Perfekt für Speedruns und zum Ausweichen von Angriffen.",
        pu7_char4_name: "Nyxs",
        pu7_char4_desc: "Mysteriöser Charakter mit einzigartigem Kampfstil. Spezielle Fähigkeiten für fortgeschrittenes Gameplay.",
        pu7_enemies_title: "⚔️ Gegner & Herausforderungen",
        pu7_enemy1_name: "NeuroBone",
        pu7_enemy1_desc: "Cyberpunk-KI-Skelett mit Patrouille-, Verfolgungs- und Angriffszuständen. Der häufigste Gegnertyp.",
        pu7_enemy2_name: "Battle Tank",
        pu7_enemy2_desc: "Schwer gepanzerter Boss-Gegner mit hoher Gesundheit und mächtigen Angriffen. Erfordert Strategie zum Besiegen.",
        pu7_enemy3_name: "Sakoo",
        pu7_enemy3_desc: "Schnellbeweglicher Gegner mit unvorhersehbaren Angriffsmustern. Testet die Reaktionszeit des Spielers.",
        pu7_controls_title: "🎮 Steuerung",
        pu7_controls_desktop: "Desktop-Steuerung",
        pu7_controls_desktop_desc: "WASD für Bewegung, Pfeiltasten für Aktionen, Leertaste zum Springen, Maus zum Zielen und Schießen.",
        pu7_controls_mobile: "Mobile Steuerung",
        pu7_controls_mobile_desc: "Virtueller Joystick mit dedizierten Tasten für Springen, Schießen, Wut und Spezialfähigkeiten.",
        pu7_tech_title: "🚀 Tech-Stack",
        pu7_tech_structure: "Projektstruktur",
        pu7_environment_title: "🌆 Spielumgebung",
        pu7_cta_title: "Mehr erfahren?",
        pu7_cta_desc: "Project Unite-7 befindet sich in aktiver Entwicklung. Kontaktieren Sie uns für Zusammenarbeit, Playtesting oder Entwicklungsanfragen.",
        pu7_cta_btn: "Kontakt aufnehmen"
    }
};

// Current language
let currentLanguage = 'de';

// Change language function
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    // Update current language indicator
    document.getElementById('currentLang').textContent = lang.toUpperCase();
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    
    // Update placeholder attributes
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
        }
    });
    
    // Update hero text animation
    if (window.heroTexts && lang === 'de') {
        window.heroTexts = [
            'Wir entwickeln <span class="text-gradient">Social-First-Storytelling-Plattformen</span>, auf denen Bücher, Spiele und Communities gemeinsam wachsen',
            'Wo <span class="text-gradient">Leser zu Communities werden</span> und Geschichten lebendig werden',
            '<span class="text-gradient">Bücher in interaktive Erlebnisse</span> für das digitale Zeitalter verwandeln',
            'Die Zukunft von <span class="text-gradient">Gaming und Storytelling</span> Hand in Hand gestalten',
            'Plattformen schaffen, wo <span class="text-gradient">Geschichten auf Spieler treffen</span> und Magie entsteht'
        ];
        // Update the currently displayed text
        const textElement = document.querySelector('.hero-text-animated');
        if (textElement) {
            textElement.innerHTML = window.heroTexts[0];
        }
    } else if (window.heroTexts && lang === 'en') {
        window.heroTexts = [
            'We build <span class="text-gradient">social-first storytelling platforms</span> where books, games, and communities grow together',
            'Where <span class="text-gradient">readers become communities</span> and stories come alive',
            'Transforming <span class="text-gradient">books into interactive experiences</span> for the digital age',
            'Building the future of <span class="text-gradient">gaming and storytelling</span> hand in hand',
            'Creating platforms where <span class="text-gradient">stories meet players</span> and magic happens'
        ];
        // Update the currently displayed text
        const textElement = document.querySelector('.hero-text-animated');
        if (textElement) {
            textElement.innerHTML = window.heroTexts[0];
        }
    }
    
    // Reinitialize AOS
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('preferredLanguage') || 'de';
    changeLanguage(savedLang);
});
