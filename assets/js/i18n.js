/**
 * Internationalization (i18n) Engine for Vicky Juni Hendri Portfolio
 * Supports English (en) and Indonesian (id)
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'vicky_portfolio_lang';

  const translations = {
    en: {
      page_title: 'Vicky Juni Hendri – Data & BI Portfolio',
      meta_description: 'Portfolio of Vicky Juni Hendri – Information Systems student specializing in Data Analysis, Business Intelligence, and ERP Process Modeling.',
      
      // Navbar
      nav_home: 'Home',
      nav_about: 'About',
      nav_projects: 'Projects',
      nav_achievement: 'Achievement',
      nav_experience: 'Experience',
      nav_skills: 'Skills',
      nav_cv: 'CV',
      nav_contact: 'Contact Me',
      
      // Hero
      hero_badge: 'Hello There! 👋',
      hero_headline: 'I\'m <span class="italic text-amber-brand underline decoration-amber-brand decoration-wavy decoration-2 underline-offset-8">Vicky Juni Hendri</span>, Information Systems Student Focused on Data & BI.',
      hero_bio: 'Information Systems undergraduate with hands-on experience in data analysis, Business Intelligence, and process analysis. I turn operational data into KPI dashboards and insights using Python, SQL, and BI tools.',
      hero_location: 'Depok, Indonesia',
      hero_status: 'Seeking Data/BI Internship • Available from [ISI BULAN/TAHUN] • [ISI DURASI] • [ISI LOKASI/REMOTE]',
      hero_cta_projects: 'View My Projects',
      hero_cta_cv: 'Download CV',
      hero_preview_cv: 'Preview CV',
      hero_univ_badge: 'Information Systems @ UPNVJ',
      hero_gpa_badge: 'GPA 3.84',
      hero_rotating_badge: 'DATA ANALYSIS • BUSINESS INTELLIGENCE •',
      hero_chip_analyst: 'Data Analyst',
      hero_chip_bierp: 'BI & ERP',
      
      // Marquee
      marquee_data_analysis: 'Data Analysis',
      marquee_bi: 'Business Intelligence',
      marquee_erp: 'ERP Implementation',
      marquee_process: 'Process Modeling',
      marquee_supply: 'Supply Chain',
      marquee_etl: 'ETL & Dashboarding',
      
      // About (01)
      about_tag: '01 • About Vicky',
      about_heading: 'Translating complex operational workflows into <span class="text-amber-brand italic">actionable</span> intelligence.',
      about_bio: 'As an Information Systems undergraduate at Universitas Pembangunan Nasional "Veteran" Jakarta, I combine data analytical rigor with end-to-end business process modeling. My core focus lies in extracting raw records from databases, conducting meticulous ETL pipelines, and synthesizing them into intuitive executive dashboards.',
      edu_tag: 'Education',
      edu_degree: 'B.Sc. Information Systems',
      edu_school: 'Universitas Pembangunan Nasional "Veteran" Jakarta',
      edu_details: 'Aug 2024 – Present • Coursework: BI, Database Systems, Supply Chain Management',
      
      // KPI Badges
      kpi1_title: 'Academic Performance',
      kpi1_score: '3.84',
      kpi1_label: 'GPA / 4.00 Scale',
      kpi1_desc: 'Consistently high academic standing and cumulative grade distinction across all semesters.',
      
      kpi2_title: 'Data Volume',
      kpi2_score: '5,000+',
      kpi2_label: 'Operational Records Analyzed',
      kpi2_desc: 'Processed, cleaned, and modeled into KPI analytics pipelines with Python & SQL.',
      
      kpi3_title: 'System Delivery',
      kpi3_score: '2',
      kpi3_label: 'Academic Projects',
      kpi3_desc: 'Full lifecycle BI deployment and end-to-end Odoo 17 ERP manufacturing implementation.',
      
      kpi4_title: 'Competition',
      kpi4_score: 'Semifinalist',
      kpi4_label: 'Gandeng Business Case 2026',
      kpi4_desc: 'National competition in collaboration with Bank Central Asia (BCA).',
      
      // Projects (02)
      projects_tag: '02 • Featured Case Studies',
      projects_heading: 'High-Impact <span class="italic text-amber-brand">Data & Systems</span> Projects',
      projects_sub: 'Proven implementations combining statistical computing, interactive BI frontends, and enterprise ERP orchestration.',
      
      proj1_badge: 'BI Dashboard',
      proj1_badge_group: 'Group Project • 4 Members',
      proj1_date: 'Mar – Apr 2026',
      proj1_kpi_title: 'MBG Operations KPI',
      proj1_tag_live: 'Live Streamlit',
      proj1_stat1_label: 'Records',
      proj1_stat2_label: '[ISI: Label Metrik 94.8%]',
      proj1_stat3_label: 'Provinces',
      proj1_title: 'Business Intelligence Dashboard – Nutritious Meal Program (MBG)',
      proj1_desc: 'Interactive BI dashboard turning 5,000+ operational records across 38 provinces into KPI insights; engineered data cleaning and ETL pipelines, and built geographic allocation heatmaps with high-frequency drill-down filters.',
      proj1_cta: 'View Case Study',
      proj_cta: 'View Case Study',
      
      proj2_badge: 'ERP & BPMN',
      proj2_date: 'May – Jul 2026',
      proj2_flow_title: 'Odoo 17 Enterprise Flow',
      proj2_flow_sub: 'P2P & O2C',
      proj2_stage1: 'Procurement',
      proj2_stage2: 'Inventory',
      proj2_stage3: 'Sales O2C',
      proj2_title: 'ERP Supply Chain Implementation – B2RP Collection',
      proj2_desc: 'Simulated end-to-end supply chain and manufacturing in Odoo 17; redesigned P2P, O2C, and production workflows using rigorous BPMN models; unified procurement, inventory, manufacturing, and accounting modules.',
      proj2_stat1_label: 'Core Modules',
      proj2_stat2_label: 'BOM Validation',
      proj2_stat3_label: 'Business UAT',
      proj2_cta: 'View Case Study',
      
      // Achievement (03)
      achieve_tag: '03 • Semifinalist Distinction',
      achieve_title: 'Semifinalist – Gandeng Business Case Competition 2026',
      achieve_collab: 'Gandeng Competition × PT Bank Central Asia (BCA) • Apr – May 2026',
      achieve_desc: 'Conducted granular market research, quantitative consumer behavior analysis, and growth modeling. Formulated an omnichannel marketing acquisition strategy backed by a realistic 12-month financial and execution roadmap.',
      achieve_badge_top: 'Semifinalist',
      achieve_badge_sub: 'National Semifinalist',
      achieve_badge_eval: 'Evaluated on strategic feasibility, analytical data depth, and financial modeling.',
      
      // Experience (04)
      exp_tag: '04 • Organizational Timeline',
      exp_heading: 'Leadership & <span class="italic text-amber-brand">Organizational</span> Impact',
      
      exp1_role: 'Staff Dinamika Mahasiswa',
      exp1_org: 'HIMA S1 Sistem Informasi (Himpunan Mahasiswa)',
      exp1_date: 'Jan 2026 – Present',
      exp1_desc: 'Spearheading student engagement and academic empowerment initiatives for Information Systems cohorts, facilitating academic mentorship, and coordinating data-backed faculty feedback sessions.',
      
      exp2_role: 'Head of Supervisory Division',
      exp2_org: 'Pemilihan Raya Universitas (University General Election)',
      exp2_date: 'Oct – Dec 2025',
      exp2_desc: 'Led a 4-member cross-functional supervisory team overseeing campus-wide democratic voting transparency, enforcing constitutional electoral guidelines, and auditing voter turnout metrics.',
      
      exp3_role: 'Logistic Staff',
      exp3_org: 'UKM EXPO (University Student Activity Units Fair)',
      exp3_date: 'Jul – Sep 2025',
      exp3_desc: 'Orchestrated resource logistics, vendor asset scheduling, and spatial staging for dozens of university organizations, guaranteeing seamless event execution and inventory tracking.',
      
      // Skills (05)
      skills_tag: '05 • Competency Toolkit',
      skills_heading: 'Technical & <span class="italic text-amber-brand">Analytical</span> Capabilities',
      skills_sub: 'A balanced synergy of technical scripting, database queries, enterprise process modeling, and cross-functional leadership.',
      
      skill_group1_title: 'Technical Stack',
      skill_core_badge: 'Core & Hands-on',
      skill_learning_badge: 'Learning / In Progress',
      skill_group2_title: 'Business & Process',
      skill_group3_title: 'Demonstrated Soft Skills',
      
      skill_soft1_title: 'Cross-Functional Team Leadership',
      skill_soft1_desc: 'Led a 4-member independent election supervisory team auditing campus-wide democratic voting transparency.',
      skill_soft2_title: 'Operational Coordination & Logistics',
      skill_soft2_desc: 'Orchestrated asset staging, resource allocations, and vendor logistics for dozens of student organizations at UKM EXPO.',
      skill_soft3_title: 'Stakeholder Engagement & Mentorship',
      skill_soft3_desc: 'Coordinated student empowerment programs, academic tutoring, and faculty feedback forums within HIMA SI.',
      skill_soft4_title: 'Analytical Problem Solving & Strategy',
      skill_soft4_desc: 'Synthesized market research and quantitative consumer models into a 12-month execution roadmap (National Semifinalist).',
      
      skill_group4_title: 'Languages',
      lang_id_name: 'Indonesian',
      lang_id_lvl: 'Native',
      lang_en_name: 'English',
      lang_en_lvl: 'Professional Working',
      
      // Footer
      footer_tag: 'Let\'s Collaborate',
      footer_heading: 'Let\'s turn data into <span class="italic text-amber-brand">decisions.</span>',
      footer_desc: 'Open for internships, Business Intelligence analyst roles, and process modeling collaborations.',
      footer_credits: 'Designed with "The Friendly Analyst" System • Urbanist & Tailwind',
      footer_copyright: '© 2026 Vicky Juni Hendri. All rights reserved. Depok, Indonesia.',
      
      // Common Modal Terms
      modal_close: 'Close',
      modal_overview: 'Overview',
      modal_problem: 'Problem Statement',
      modal_data_method: 'Data & Methodology',
      modal_my_role: 'My Role & Contributions',
      modal_key_insights: 'Key Insights',
      modal_technologies: 'Technologies Used',
      modal_gallery: 'Project Gallery (Click to enlarge)',
      modal_links: 'Links & Live Demonstrations',
      
      // MBG Modal
      mbg_modal_title: 'Nutritious Meal Program (MBG) – BI Dashboard',
      mbg_modal_role: 'Data & BI Analyst • Streamlit & Python',
      mbg_modal_badge_group: 'Group Project • 4 Members',
      mbg_overview_text: 'Interactive Business Intelligence solution developed to monitor and analyze the operational distribution of nutritious meals across 38 provinces in Indonesia. Built collaboratively to eliminate reporting bottlenecks and provide actionable geospatial insights.',
      mbg_problem_text: 'Monitoring meal distribution across 38 geographically fragmented provinces presented significant challenges in detecting localized distribution bottlenecks, regional cost variances, and operational anomalies from thousands of raw operational logs.',
      mbg_data_source_label: 'Data Source',
      mbg_data_source_val: 'Public Dataset',
      mbg_data_scope_label: 'Regional Scope',
      mbg_data_scope_val: '38 Provinces (National Scale)',
      mbg_data_records_label: 'Volume',
      mbg_data_records_val: '5,000+ Cleaned Records',
      mbg_anomaly_def_label: 'Anomaly Definition',
      mbg_anomaly_def_val: 'An extreme deviation or irregularity departing from normal distribution standards or baseline trends, specifically statistical outliers exceeding the majority of regional records.',
      mbg_cost_method_label: 'Daily Cost Estimation Formula',
      mbg_cost_method_val: 'Calculated by dividing total operational expenditures within a designated period by the exact count of working or calendar days within that respective timeframe.',
      mbg_role_item1: 'Engineered Anomaly Ratio by Province: Analyzed and mapped the percentage of regencies/cities exhibiting anomalous distribution patterns across each province.',
      mbg_role_item2: 'Built Catering Distribution Density by Province: Contrasted catering distribution facility density against daily estimated catering expenditures across 38 provinces.',
      mbg_insight1_title: 'Insight 1: Regional Anomaly Ratio & Special Logistics Readiness',
      mbg_insight1_text: 'Provinces at the peak of the chart (e.g. North Kalimantan and Bengkulu) indicate critical reporting gaps where active medical needs are registered but actual beneficiaries remain at zero. High anomaly ratios highlight acute unreadiness in specialized regional logistics, presenting compliance audit risks regarding unmet nutritional rights for students with special needs.',
      mbg_insight2_title: 'Insight 2: Distribution Density vs Daily Catering Cost Disparity',
      mbg_insight2_text: 'The disparity between beneficiary density trends (average recipients per school) and daily budget bars measures logistic efficiency. Remote provinces with high expenditure but low density demonstrate elevated distribution costs, whereas high-density regions (such as Central and East Java) exhibit high logistical economies of scale.',
      mbg_stat1: '5,000+ Records Cleaned',
      mbg_stat2: '94.8% [ISI: Label Metrik]',
      mbg_stat3: '38 Provinces',
      mbg_chart1_caption: 'Chart 1: Anomaly Ratio by Province',
      mbg_chart2_caption: 'Chart 2: Catering Distribution Density vs Daily Cost',
      mbg_hosting_notice: 'The live app may take a few seconds to wake up (free hosting).',
      mbg_view_screenshots_btn: 'View Screenshots',
      mbg_modal_live_btn: 'Open Live Streamlit App ↗',
      mbg_source_code_btn: 'Source Code ↗',
      mbg_live_demo: 'Live Streamlit App ↗',
      
      // ERP Modal
      erp_modal_title: 'ERP Supply Chain Implementation – B2RP Collection',
      erp_modal_role: 'ERP Specialist & Business Process Analyst • Odoo 17',
      erp_problem_title: 'Problem Statement',
      erp_problem_text: 'Retail apparel brand B2RP Collection struggled with fragmented operational silos between manual purchasing, decentralized stock counts, and disjointed sales orders, causing fulfillment delays and inventory inaccuracies.',
      erp_my_role_title: 'My Role & Execution',
      erp_my_role_text: 'Designed end-to-end supply chain processes in Odoo 17 Enterprise; structured and aligned Procure-to-Pay (P2P), Order-to-Cash (O2C), and production workflows using BPMN 2.0; and configured PostgreSQL database synchronization.',
      erp_result_title: 'Key Results & Verification',
      erp_stat1: '4 Core Modules Integrated',
      erp_stat2: 'Accurate BOM Validation',
      erp_stat3: 'Business Flow UAT Passed',
      erp_f1: 'Unified Procure-to-Pay (P2P) and Order-to-Cash (O2C) flows with multi-level approvals.',
      erp_f2: 'Configured automated Bill of Materials (BOM) and dynamic reordering rules.',
      erp_f3: 'Synchronized inventory movements with relational database ledger.',
      erp_gallery_title: 'Process & System Architecture (Click to enlarge)',
      erp_dashboard_title: 'Odoo 17 Enterprise Dashboard',
      erp_dashboard_caption: 'Odoo 17 Enterprise Live Operational Dashboard',
      modal_click_zoom: 'Click to enlarge ↗',
      erp_bpmn_caption: 'BPMN 2.0 Workflow Model',
      erp_p2s_caption: 'To-Be Produce-to-Stock (P2S) Workflow',
      erp_o2c_caption: 'To-Be Order-to-Cash (O2C) Workflow',
      erp_p2p_caption: 'To-Be Procure-to-Pay (P2P) Workflow',
      erp_odoo_caption: 'Odoo 17 Enterprise Operations',
      
      // CV Modal
      cv_modal_title: 'Curriculum Vitae – Vicky Juni Hendri',
      cv_modal_subtitle: 'Information Systems Undergraduate • Data & BI Analyst',
      cv_summary_title: 'Professional Summary',
      cv_summary_text: 'Information Systems undergraduate with hands-on experience in data analysis, Business Intelligence, and process analysis. Proficient in Python, SQL, Streamlit, Plotly, and Odoo 17 ERP.',
      cv_download_btn: 'Download PDF CV',
      cv_contact_direct: 'Contact Directly via Email'
    },
    
    id: {
      page_title: 'Vicky Juni Hendri – Portofolio Data & BI',
      meta_description: 'Portofolio Vicky Juni Hendri – Mahasiswa Sistem Informasi dengan spesialisasi Analisis Data, Business Intelligence, dan Pemodelan Proses ERP.',
      
      // Navbar
      nav_home: 'Beranda',
      nav_about: 'Tentang',
      nav_projects: 'Proyek',
      nav_achievement: 'Prestasi',
      nav_experience: 'Pengalaman',
      nav_skills: 'Keahlian',
      nav_cv: 'CV',
      nav_contact: 'Hubungi Saya',
      
      // Hero
      hero_badge: 'Halo Semuanya! 👋',
      hero_headline: 'Saya <span class="italic text-amber-brand underline decoration-amber-brand decoration-wavy decoration-2 underline-offset-8">Vicky Juni Hendri</span>, Mahasiswa Sistem Informasi Berfokus pada Data & BI.',
      hero_bio: 'Mahasiswa S1 Sistem Informasi dengan pengalaman langsung dalam analisis data, Business Intelligence, dan analisis proses bisnis. Saya mentransformasikan data operasional menjadi dasbor KPI dan wawasan strategis menggunakan Python, SQL, dan tools BI.',
      hero_location: 'Depok, Indonesia',
      hero_status: 'Mencari Magang Data/BI • Tersedia mulai [ISI BULAN/TAHUN] • [ISI DURASI] • [ISI LOKASI/REMOTE]',
      hero_cta_projects: 'Lihat Proyek Saya',
      hero_cta_cv: 'Unduh CV',
      hero_preview_cv: 'Pratinjau CV',
      hero_univ_badge: 'Sistem Informasi @ UPNVJ',
      hero_gpa_badge: 'IPK 3.84',
      hero_rotating_badge: 'ANALISIS DATA • BUSINESS INTELLIGENCE •',
      hero_chip_analyst: 'Analis Data',
      hero_chip_bierp: 'BI & ERP',
      
      // Marquee
      marquee_data_analysis: 'Analisis Data',
      marquee_bi: 'Business Intelligence',
      marquee_erp: 'Implementasi ERP',
      marquee_process: 'Pemodelan Proses',
      marquee_supply: 'Manajemen Rantai Pasok',
      marquee_etl: 'ETL & Dasbor',
      
      // About (01)
      about_tag: '01 • Tentang Vicky',
      about_heading: 'Menerjemahkan alur operasional kompleks menjadi kecerdasan yang <span class="text-amber-brand italic">dapat ditindaklanjuti</span>.',
      about_bio: 'Sebagai mahasiswa S1 Sistem Informasi di Universitas Pembangunan Nasional "Veteran" Jakarta, saya memadukan ketajaman analisis data dengan pemodelan proses bisnis terintegrasi. Fokus utama saya adalah mengekstraksi data mentah dari basis data, menjalankan alur ETL terstruktur, dan merangkumnya menjadi dasbor eksekutif yang intuitif.',
      edu_tag: 'Pendidikan',
      edu_degree: 'S1 Sistem Informasi',
      edu_school: 'Universitas Pembangunan Nasional "Veteran" Jakarta',
      edu_details: 'Agu 2024 – Sekarang • Mata Kuliah: BI, Sistem Basis Data, Manajemen Rantai Pasok',
      
      // KPI Badges
      kpi1_title: 'Prestasi Akademik',
      kpi1_score: '3.84',
      kpi1_label: 'IPK / Skala 4.00',
      kpi1_desc: 'Prestasi akademik yang konsisten tinggi dan predikat nilai kumulatif memuaskan di setiap semester.',
      
      kpi2_title: 'Volume Data',
      kpi2_score: '5,000+',
      kpi2_label: 'Catatan Operasional Dianalisis',
      kpi2_desc: 'Diproses, dibersihkan, dan dimodelkan ke alur analitik KPI dengan Python & SQL.',
      
      kpi3_title: 'Implementasi Sistem',
      kpi3_score: '2',
      kpi3_label: 'Proyek Akademik',
      kpi3_desc: 'Deployment siklus penuh BI dan implementasi manufaktur ERP Odoo 17 secara menyeluruh.',
      
      kpi4_title: 'Kompetisi',
      kpi4_score: 'Semifinalist',
      kpi4_label: 'Gandeng Business Case 2026',
      kpi4_desc: 'Kompetisi tingkat nasional yang berkolaborasi dengan Bank Central Asia (BCA).',
      
      // Projects (02)
      projects_tag: '02 • Studi Kasus Unggulan',
      projects_heading: 'Proyek <span class="italic text-amber-brand">Data & Sistem</span> Berdampak Tinggi',
      projects_sub: 'Implementasi nyata yang menggabungkan komputasi statistik, antarmuka BI interaktif, dan orkestrasi ERP perusahaan.',
      
      proj1_badge: 'Dasbor BI',
      proj1_badge_group: 'Proyek Kelompok • 4 Anggota',
      proj1_date: 'Mar – Apr 2026',
      proj1_kpi_title: 'KPI Operasional MBG',
      proj1_tag_live: 'Live Streamlit',
      proj1_stat1_label: 'Catatan',
      proj1_stat2_label: '[ISI: Label Metrik 94.8%]',
      proj1_stat3_label: 'Provinsi',
      proj1_title: 'Dasbor Business Intelligence – Program Makanan Bergizi (MBG)',
      proj1_desc: 'Dasbor BI interaktif yang mengubah 5.000+ catatan operasional di 38 provinsi menjadi wawasan KPI; merancang alur pembersihan dan ETL data, serta membangun heatmap alokasi geografis dengan filter drill-down.',
      proj1_cta: 'Lihat Studi Kasus',
      proj_cta: 'Lihat Studi Kasus',
      
      proj2_badge: 'ERP & BPMN',
      proj2_date: 'Mei – Jul 2026',
      proj2_flow_title: 'Alur Enterprise Odoo 17',
      proj2_flow_sub: 'P2P & O2C',
      proj2_stage1: 'Pengadaan',
      proj2_stage2: 'Inventaris',
      proj2_stage3: 'Penjualan O2C',
      proj2_title: 'Implementasi Supply Chain ERP – B2RP Collection',
      proj2_desc: 'Simulasi rantai pasok dan manufaktur menyeluruh pada Odoo 17; merancang ulang alur kerja P2P, O2C, dan produksi dengan model BPMN; mengintegrasikan modul pengadaan, inventaris, manufaktur, dan akuntansi.',
      proj2_stat1_label: 'Modul Inti',
      proj2_stat2_label: 'Validasi BOM',
      proj2_stat3_label: 'UAT Alur Bisnis',
      proj2_cta: 'Lihat Studi Kasus',
      
      // Achievement (03)
      achieve_tag: '03 • Prestasi Kompetisi',
      achieve_title: 'Semifinalist – Gandeng Business Case Competition 2026',
      achieve_collab: 'Gandeng Competition × PT Bank Central Asia (BCA) • Apr – Mei 2026',
      achieve_desc: 'Melakukan riset pasar mendalam, analisis kuantitatif perilaku konsumen, dan pemodelan pertumbuhan. Merumuskan strategi akuisisi pemasaran omnichannel dengan peta jalan keuangan dan eksekusi 12 bulan yang realistis.',
      achieve_badge_top: 'Semifinalist',
      achieve_badge_sub: 'National Semifinalist',
      achieve_badge_eval: 'Dinilai berdasarkan kelayakan strategis, kedalaman analisis data, dan pemodelan keuangan.',
      
      // Experience (04)
      exp_tag: '04 • Linimasa Organisasi',
      exp_heading: 'Kepemimpinan & Dampak <span class="italic text-amber-brand">Organisasi</span>',
      
      exp1_role: 'Staff Dinamika Mahasiswa',
      exp1_org: 'HIMA S1 Sistem Informasi (Himpunan Mahasiswa)',
      exp1_date: 'Jan 2026 – Sekarang',
      exp1_desc: 'Menginisiasi program keterlibatan mahasiswa dan penguatan akademik bagi angkatan Sistem Informasi, memfasilitasi bimbingan akademik, serta mengoordinasikan sesi umpan balik berbasis data dengan pihak fakultas.',
      
      exp2_role: 'Head of Supervisory Division (Ketua Pengawas)',
      exp2_org: 'Pemilihan Raya Universitas',
      exp2_date: 'Okt – Des 2025',
      exp2_desc: 'Memimpin tim pengawas lintas fungsi beranggotakan 4 orang dalam mengawal transparansi pemilu demokratis universitas, menegakkan aturan pemilihan konstitusional, dan mengaudit metrik partisipasi pemilih.',
      
      exp3_role: 'Logistic Staff (Staf Logistik)',
      exp3_org: 'UKM EXPO Universitas',
      exp3_date: 'Jul – Sep 2025',
      exp3_desc: 'Mengatur logistik sarana prasarana, penjadwalan aset vendor, serta tata letak panggung untuk puluhan organisasi mahasiswa, menjamin kelancaran jalannya acara dan pelacakan inventaris yang rapi.',
      
      // Skills (05)
      skills_tag: '05 • Toolkit Kompetensi',
      skills_heading: 'Kemampuan Teknis & <span class="italic text-amber-brand">Analitis</span>',
      skills_sub: 'Sinergi berimbang antara penulisan kode teknis, kueri basis data, pemodelan proses bisnis, dan kepemimpinan tim.',
      
      skill_group1_title: 'Keahlian Teknis',
      skill_core_badge: 'Keahlian Utama (Core)',
      skill_learning_badge: 'Sedang Dipelajari (In Progress)',
      skill_group2_title: 'Bisnis & Proses',
      skill_group3_title: 'Keterampilan Interpersonal Terbukti',
      
      skill_soft1_title: 'Kepemimpinan Tim Lintas Fungsi',
      skill_soft1_desc: 'Memimpin tim pengawas independen beranggotakan 4 orang dalam mengawal transparansi voting pemilihan raya mahasiswa.',
      skill_soft2_title: 'Koordinasi Operasional & Logistik',
      skill_soft2_desc: 'Mengorkestrasi tata letak fasilitas, alokasi aset, dan jadwal vendor untuk puluhan organisasi pada perhelatan UKM EXPO.',
      skill_soft3_title: 'Kolaborasi Pemangku Kepentingan',
      skill_soft3_desc: 'Mengoordinasikan program penguatan akademik, mentoring mahasiswa, dan forum aspirasi berbasis data dengan pihak fakultas di HIMA SI.',
      skill_soft4_title: 'Analisis Masalah & Strategi',
      skill_soft4_desc: 'Merumuskan riset pasar kuantitatif dan model perilaku konsumen menjadi roadmap eksekusi 12 bulan (Semifinalist Nasional).',
      
      skill_group4_title: 'Bahasa',
      lang_id_name: 'Bahasa Indonesia',
      lang_id_lvl: 'Penutur Asli (Native)',
      lang_en_name: 'Bahasa Inggris',
      lang_en_lvl: 'Kemahiran Kerja Profesional',
      
      // Footer
      footer_tag: 'Mari Berkolaborasi',
      footer_heading: 'Mari ubah data menjadi <span class="italic text-amber-brand">keputusan.</span>',
      footer_desc: 'Terbuka untuk posisi magang, peran analis Business Intelligence, dan kolaborasi pemodelan proses bisnis.',
      footer_credits: 'Dirancang dengan Sistem "The Friendly Analyst" • Urbanist & Tailwind',
      footer_copyright: '© 2026 Vicky Juni Hendri. Hak cipta dilindungi. Depok, Indonesia.',
      
      // Common Modal Terms
      modal_close: 'Tutup',
      modal_overview: 'Ikhtisar Proyek',
      modal_problem: 'Rumusan Masalah',
      modal_data_method: 'Data & Metodologi',
      modal_my_role: 'Peran & Kontribusi Saya',
      modal_key_insights: 'Insight Utama',
      modal_technologies: 'Teknologi yang Digunakan',
      modal_gallery: 'Galeri Proyek (Klik untuk memperbesar)',
      modal_links: 'Tautan & Demonstrasi Langsung',
      
      // MBG Modal
      mbg_modal_title: 'Program Makanan Bergizi (MBG) – Dasbor BI',
      mbg_modal_role: 'Analis Data & BI • Streamlit & Python',
      mbg_modal_badge_group: 'Proyek Kelompok • 4 Anggota',
      mbg_overview_text: 'Solusi Business Intelligence interaktif yang dikembangkan untuk memonitor dan menganalisis distribusi operasional makanan bergizi di 38 provinsi di Indonesia. Dibangun secara kolaboratif guna mengatasi kendala pelaporan konvensional dan menyajikan visualisasi geospasial yang actionable.',
      mbg_problem_text: 'Pemantauan distribusi pangan di 38 provinsi yang terfragmentasi menghadapi kendala dalam mendeteksi ketimpangan alokasi daerah, disparitas estimasi biaya, dan anomali operasional dari ribuan baris data mentah.',
      mbg_data_source_label: 'Sumber Data',
      mbg_data_source_val: 'Dataset Publik',
      mbg_data_scope_label: 'Cakupan Wilayah',
      mbg_data_scope_val: '38 Provinsi (Skala Nasional)',
      mbg_data_records_label: 'Volume Data',
      mbg_data_records_val: '5.000+ Catatan Operasional',
      mbg_anomaly_def_label: 'Definisi Anomali',
      mbg_anomaly_def_val: 'Penyimpangan atau ketidakteraturan ekstrem dari suatu pola normal, standar, atau tren umum dalam kumpulan data, seperti kemunculan nilai pencilan (outlier) yang jauh melampaui kelompok data mayoritas.',
      mbg_cost_method_label: 'Metode Estimasi Biaya Harian',
      mbg_cost_method_val: 'Dihitung dengan membagi total biaya operasional atau pengeluaran dalam satu periode waktu dengan jumlah hari kerja atau hari kalender pada periode tersebut.',
      mbg_role_item1: 'Merancang Rasio Anomali per Provinsi: Mengkalkulasi dan memetakan persentase kabupaten/kota dengan kondisi anomali di setiap provinsi menggunakan visualisasi geospasial.',
      mbg_role_item2: 'Mengembangkan Kepadatan Distribusi Katering per Provinsi: Membandingkan rasio kepadatan katering dengan estimasi biaya katering harian di 38 provinsi.',
      mbg_insight1_title: 'Insight 1: Rasio Anomali & Kesiapan Logistik Khusus',
      mbg_insight1_text: 'Provinsi di puncak grafik (seperti Kalimantan Utara dan Bengkulu) mengindikasikan kegagalan sistemik pendataan Dapodik dengan persentase kecamatan beranomali tertinggi (kondisi medis aktif namun penerima manfaat = 0). Rasio anomali yang tinggi ini menandakan ketidaksiapan alokasi logistik khusus, yang berisiko menjadi temuan audit BPK terkait hak gizi siswa berkebutuhan khusus yang tidak terpenuhi.',
      mbg_insight2_title: 'Insight 2: Disparitas Kepadatan Distribusi vs Estimasi Biaya Harian',
      mbg_insight2_text: 'Disparitas antara garis tren (rata-rata penerima manfaat per sekolah sebagai indikator kepadatan) dan batang anggaran harian mengukur efisiensi logistik. Provinsi dengan anggaran besar namun kepadatan siswa rendah (garis biru di bawah batang hijau) membuktikan tingginya biaya distribusi/ongkos kirim katering di wilayah pelosok, sementara provinsi padat seperti Jawa Tengah dan Jawa Timur mencatat skala ekonomi yang lebih terkonsentrasi.',
      mbg_stat1: '5.000+ Catatan Dibersihkan',
      mbg_stat2: '94,8% [ISI: Label Metrik]',
      mbg_stat3: '38 Provinsi',
      mbg_chart1_caption: 'Grafik 1: Rasio Anomali per Provinsi',
      mbg_chart2_caption: 'Grafik 2: Kepadatan Distribusi Katering vs Biaya Harian',
      mbg_hosting_notice: 'Catatan: Aplikasi live mungkin membutuhkan beberapa detik untuk aktif (free hosting).',
      mbg_view_screenshots_btn: 'Lihat Tangkapan Layar',
      mbg_modal_live_btn: 'Buka Live Streamlit App ↗',
      mbg_source_code_btn: 'Kode Sumber ↗',
      mbg_live_demo: 'Live Streamlit App ↗',
      
      // ERP Modal
      erp_modal_title: 'Implementasi Supply Chain ERP – B2RP Collection',
      erp_modal_role: 'Spesialis ERP & Analis Proses Bisnis • Odoo 17',
      erp_problem_title: 'Rumusan Masalah',
      erp_problem_text: 'Merek pakaian retail B2RP Collection menghadapi hambatan operasional akibat fragmentasi sistem antara pengadaan barang manual, inventaris yang tidak tersinkronisasi, dan pengelolaan order penjualan terpisah yang memicu keterlambatan pemenuhan produk.',
      erp_my_role_title: 'Peran & Eksekusi Saya',
      erp_my_role_text: 'Merancang alur rantai pasok terintegrasi menggunakan Odoo 17 Enterprise; memodelkan alur Procure-to-Pay (P2P), Order-to-Cash (O2C), dan manufaktur sesuai standar BPMN 2.0; serta mengonfigurasi sinkronisasi basis data PostgreSQL.',
      erp_result_title: 'Hasil & Bukti Implementasi',
      erp_stat1: '4 Modul Terintegrasi',
      erp_stat2: 'Validasi BOM Akurat',
      erp_stat3: 'UAT Alur Bisnis Lolos',
      erp_f1: 'Penyatuan alur Procure-to-Pay (P2P) dan Order-to-Cash (O2C) dengan persetujuan bertingkat.',
      erp_f2: 'Pengaturan otomatis Bill of Materials (BOM) dan aturan restock dinamis.',
      erp_f3: 'Sinkronisasi pergerakan stok gudang dengan buku besar database relasional.',
      erp_gallery_title: 'Arsitektur Proses & Sistem (Klik untuk memperbesar)',
      erp_dashboard_title: 'Dasbor Odoo 17 Enterprise',
      erp_dashboard_caption: 'Dasbor Operasional Sistem Odoo 17 Enterprise',
      modal_click_zoom: 'Klik untuk memperbesar ↗',
      erp_bpmn_caption: 'Model Alur Kerja BPMN 2.0',
      erp_p2s_caption: 'Alur Kerja To-Be Produce-to-Stock (P2S)',
      erp_o2c_caption: 'Alur Kerja To-Be Order-to-Cash (O2C)',
      erp_p2p_caption: 'Alur Kerja To-Be Procure-to-Pay (P2P)',
      erp_odoo_caption: 'Operasional Sistem Odoo 17 Enterprise',
      
      // CV Modal
      cv_modal_title: 'Curriculum Vitae – Vicky Juni Hendri',
      cv_modal_subtitle: 'Mahasiswa S1 Sistem Informasi • Analis Data & BI',
      cv_summary_title: 'Ringkasan Profesional',
      cv_summary_text: 'Mahasiswa S1 Sistem Informasi dengan pengalaman praktis dalam analisis data, Business Intelligence, dan analisis proses bisnis. Menguasai Python, SQL, Streamlit, Plotly, dan ERP Odoo 17.',
      cv_download_btn: 'Unduh PDF CV',
      cv_contact_direct: 'Hubungi Langsung via Email'
    }
  };

  // Get initial language preference
  function getPreferredLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const queryLang = urlParams.get('lang');
    if (queryLang === 'id' || queryLang === 'en') {
      return queryLang;
    }

    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'id' || saved === 'en') {
      return saved;
    }
    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (browserLang.startsWith('id')) {
      return 'id';
    }
    return 'en';
  }

  // Update text of SVG textPath (for circular rotating badge)
  function updateBadgeCircle(lang) {
    const textPath = document.querySelector('#badgeTextPath');
    if (textPath && translations[lang]) {
      textPath.textContent = translations[lang].hero_rotating_badge;
    }
  }

  // Set Language
  function setLanguage(lang) {
    if (!translations[lang]) return;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;

    const dict = translations[lang];

    // Update document title and meta description
    if (dict.page_title) {
      document.title = dict.page_title;
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict.meta_description) {
      metaDesc.setAttribute('content', dict.meta_description);
    }

    // Update all elements with data-i18n
    const textNodes = document.querySelectorAll('[data-i18n]');
    textNodes.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Update all elements with data-i18n-html (for HTML content with highlighted spans)
    const htmlNodes = document.querySelectorAll('[data-i18n-html]');
    htmlNodes.forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Update badge textpath
    updateBadgeCircle(lang);

    // Update all language toggle buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach((btn) => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === lang) {
        btn.classList.add('bg-amber-brand', 'text-ink', 'font-black');
        btn.classList.remove('text-white/70', 'hover:text-white');
      } else {
        btn.classList.remove('bg-amber-brand', 'text-ink', 'font-black');
        btn.classList.add('text-white/70', 'hover:text-white');
      }
    });

    // Dispatch event
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }

  // Setup on DOM load
  document.addEventListener('DOMContentLoaded', () => {
    const currentLang = getPreferredLanguage();
    setLanguage(currentLang);

    // Bind all language switch buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedLang = btn.getAttribute('data-lang');
        if (selectedLang) {
          setLanguage(selectedLang);
        }
      });
    });
  });

  // Expose global i18n
  window.i18nManager = {
    getPreferredLanguage,
    setLanguage,
    getDictionary: (lang) => translations[lang || getPreferredLanguage()],
  };
})();
