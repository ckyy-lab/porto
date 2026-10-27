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
      nav_contact: 'Contact Me',
      
      // Hero
      hero_badge: 'Hello There! 👋',
      hero_headline: 'I\'m <span class="italic text-amber-brand underline decoration-amber-brand decoration-wavy decoration-2 underline-offset-8">Vicky Juni Hendri</span>, Information Systems Student Focused on Data & BI.',
      hero_bio: 'Information Systems undergraduate with hands-on experience in data analysis, Business Intelligence, and process analysis. I turn operational data into KPI dashboards and insights using Python, SQL, and BI tools.',
      hero_location: 'Depok, Indonesia',
      hero_status: 'Open for Data & BI Roles',
      hero_cta_projects: 'View My Projects',
      hero_cta_cv: 'Download CV',
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
      
      // About
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
      kpi3_label: 'Major Enterprise Projects',
      kpi3_desc: 'Full lifecycle BI deployment and end-to-end Odoo 17 ERP manufacturing implementation.',
      
      kpi4_title: 'Competition',
      kpi4_score: 'Semifinalist',
      kpi4_label: 'Gandeng Business Case 2026',
      kpi4_desc: 'National competition in collaboration with Bank Central Asia (BCA).',
      
      // Projects
      projects_tag: '02 • Featured Case Studies',
      projects_heading: 'High-Impact <span class="italic text-amber-brand">Data & Systems</span> Projects',
      projects_sub: 'Proven implementations combining statistical computing, interactive BI frontends, and enterprise ERP orchestration.',
      
      proj1_badge: 'BI Dashboard',
      proj1_date: 'Mar – Apr 2026',
      proj1_kpi_title: 'MBG Operations KPI',
      proj1_tag_live: 'Live Streamlit',
      proj1_stat1_label: 'Records',
      proj1_stat2_label: 'Efficiency',
      proj1_stat3_label: 'Districts',
      proj1_title: 'Business Intelligence Dashboard – Nutritious Meal Program (MBG)',
      proj1_desc: 'Interactive BI dashboard turning 5,000+ operational records into KPI insights; engineered data cleaning and ETL pipelines, and built geographic allocation heatmaps with high-frequency drill-down filters.',
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
      proj2_cta: 'View Case Study',
      
      // Achievement
      achieve_tag: '🏆 Distinction Award',
      achieve_title: 'Semifinalist – Gandeng Business Case Competition 2026',
      achieve_collab: 'Gandeng Competition × PT Bank Central Asia (BCA) • Apr – May 2026',
      achieve_desc: 'Conducted granular market research, quantitative consumer behavior analysis, and growth modeling. Formulated an omnichannel marketing acquisition strategy backed by a realistic 12-month financial and execution roadmap.',
      achieve_badge_top: 'Top Tier',
      achieve_badge_sub: 'National Semifinalist',
      achieve_badge_eval: 'Evaluated on strategic feasibility, analytical data depth, and financial modeling.',
      
      // Experience
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
      
      // Skills
      skills_tag: '05 • Competency Toolkit',
      skills_heading: 'Technical & <span class="italic text-amber-brand">Analytical</span> Capabilities',
      skills_sub: 'A balanced synergy of technical scripting, database queries, enterprise process modeling, and cross-functional leadership.',
      
      skill_group1_title: 'Technical Stack',
      skill_group2_title: 'Business & Process',
      skill_group3_title: 'Soft Skills',
      skill_soft1: 'Problem Solving',
      skill_soft2: 'Leadership',
      skill_soft3: 'Strategic Comms',
      skill_soft4: 'Critical Thinking',
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
      
      // Modals
      modal_close: 'Close',
      modal_overview: 'Project Overview',
      modal_key_metrics: 'Key Results & Metrics',
      modal_technologies: 'Technologies Used',
      
      // MBG Modal
      mbg_modal_title: 'Nutritious Meal Program (MBG) – BI Dashboard',
      mbg_modal_role: 'Data & BI Analyst • Streamlit & Python',
      mbg_modal_p1: 'Developed an interactive Business Intelligence solution to monitor and analyze operational distribution of nutritious meals across dozens of regions. With over 5,000+ transactional records ingested, the platform eliminates reporting bottlenecks.',
      mbg_modal_f1: 'Custom ETL pipeline built with Python & Pandas automating messy CSV/SQL exports.',
      mbg_modal_f2: 'Dynamic choropleth heatmaps created with Plotly to visualize regional delivery density.',
      mbg_modal_f3: 'Drill-down filters by district, distribution date, and vendor efficiency.',
      mbg_stat1: '5,000+ Records Cleaned',
      mbg_stat2: '94.8% Delivery Accuracy',
      mbg_stat3: '38 District Coverage',
      mbg_modal_live_btn: 'Open Live Streamlit App',
      mbg_live_demo: 'Live Streamlit App ↗',
      
      // ERP Modal
      erp_modal_title: 'ERP Supply Chain Implementation – B2RP Collection',
      erp_modal_role: 'ERP Specialist & Business Process Analyst • Odoo 17',
      erp_modal_p1: 'Architected and simulated the complete enterprise supply chain for retail apparel brand B2RP Collection using Odoo 17 Enterprise. Redesigned standard operations into optimized BPMN 2.0 workflows.',
      erp_modal_f1: 'Unified Procure-to-Pay (P2P) and Order-to-Cash (O2C) flows with multi-level approvals.',
      erp_modal_f2: 'Automated Bill of Materials (BOM) calculation and real-time inventory reordering rules.',
      erp_modal_f3: 'Seamless synchronization between inventory movements and PostgreSQL database ledger.',
      erp_stat1: '4 Core Modules Integrated',
      erp_stat2: '100% Traceability across BOM',
      erp_stat3: 'BPMN 2.0 Compliant',
      
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
      nav_contact: 'Hubungi Saya',
      
      // Hero
      hero_badge: 'Halo Semuanya! 👋',
      hero_headline: 'Saya <span class="italic text-amber-brand underline decoration-amber-brand decoration-wavy decoration-2 underline-offset-8">Vicky Juni Hendri</span>, Mahasiswa Sistem Informasi Berfokus pada Data & BI.',
      hero_bio: 'Mahasiswa S1 Sistem Informasi dengan pengalaman langsung dalam analisis data, Business Intelligence, dan analisis proses bisnis. Saya mentransformasikan data operasional menjadi dasbor KPI dan wawasan strategis menggunakan Python, SQL, dan tools BI.',
      hero_location: 'Depok, Indonesia',
      hero_status: 'Terbuka untuk Peran Data & BI',
      hero_cta_projects: 'Lihat Proyek Saya',
      hero_cta_cv: 'Unduh CV',
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
      
      // About
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
      kpi3_label: 'Proyek Besar Terlaksana',
      kpi3_desc: 'Deployment siklus penuh BI dan implementasi manufaktur ERP Odoo 17 secara menyeluruh.',
      
      kpi4_title: 'Kompetisi',
      kpi4_score: 'Semifinalis',
      kpi4_label: 'Gandeng Business Case 2026',
      kpi4_desc: 'Kompetisi tingkat nasional yang berkolaborasi dengan Bank Central Asia (BCA).',
      
      // Projects
      projects_tag: '02 • Studi Kasus Unggulan',
      projects_heading: 'Proyek <span class="italic text-amber-brand">Data & Sistem</span> Berdampak Tinggi',
      projects_sub: 'Implementasi nyata yang menggabungkan komputasi statistik, antarmuka BI interaktif, dan orkestrasi ERP perusahaan.',
      
      proj1_badge: 'Dasbor BI',
      proj1_date: 'Mar – Apr 2026',
      proj1_kpi_title: 'KPI Operasional MBG',
      proj1_tag_live: 'Live Streamlit',
      proj1_stat1_label: 'Catatan',
      proj1_stat2_label: 'Efisiensi',
      proj1_stat3_label: 'Wilayah',
      proj1_title: 'Dasbor Business Intelligence – Program Makanan Bergizi (MBG)',
      proj1_desc: 'Dasbor BI interaktif yang mengubah 5.000+ catatan operasional menjadi wawasan KPI; merancang alur pembersihan dan ETL data, serta membangun heatmap alokasi geografis dengan filter drill-down.',
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
      proj2_cta: 'Lihat Studi Kasus',
      
      // Achievement
      achieve_tag: '🏆 Penghargaan Prestasi',
      achieve_title: 'Semifinalis – Gandeng Business Case Competition 2026',
      achieve_collab: 'Gandeng Competition × PT Bank Central Asia (BCA) • Apr – Mei 2026',
      achieve_desc: 'Melakukan riset pasar mendalam, analisis kuantitatif perilaku konsumen, dan pemodelan pertumbuhan. Merumuskan strategi akuisisi pemasaran omnichannel dengan peta jalan keuangan dan eksekusi 12 bulan yang realistis.',
      achieve_badge_top: 'Tingkat Teratas',
      achieve_badge_sub: 'Semifinalis Nasional',
      achieve_badge_eval: 'Dinilai berdasarkan kelayakan strategis, kedalaman analisis data, dan pemodelan keuangan.',
      
      // Experience
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
      
      // Skills
      skills_tag: '05 • Toolkit Kompetensi',
      skills_heading: 'Kemampuan Teknis & <span class="italic text-amber-brand">Analitis</span>',
      skills_sub: 'Sinergi berimbang antara penulisan kode teknis, kueri basis data, pemodelan proses bisnis, dan kepemimpinan tim.',
      
      skill_group1_title: 'Keahlian Teknis',
      skill_group2_title: 'Bisnis & Proses',
      skill_group3_title: 'Keterampilan Interpersonal',
      skill_soft1: 'Pemecahan Masalah',
      skill_soft2: 'Kepemimpinan',
      skill_soft3: 'Komunikasi Strategis',
      skill_soft4: 'Berpikir Kritis',
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
      
      // Modals
      modal_close: 'Tutup',
      modal_overview: 'Ikhtisar Proyek',
      modal_key_metrics: 'Hasil & Metrik Utama',
      modal_technologies: 'Teknologi yang Digunakan',
      
      // MBG Modal
      mbg_modal_title: 'Program Makanan Bergizi (MBG) – Dasbor BI',
      mbg_modal_role: 'Analis Data & BI • Streamlit & Python',
      mbg_modal_p1: 'Mengembangkan solusi Business Intelligence interaktif untuk memonitor dan menganalisis distribusi operasional makanan bergizi di puluhan wilayah. Mengolah lebih dari 5.000+ data transaksi guna mengatasi kendala pelaporan konvensional.',
      mbg_modal_f1: 'Pipeline ETL kustom dengan Python & Pandas yang mengotomatisasi ekspor CSV/SQL mentah.',
      mbg_modal_f2: 'Peta choropleth heatmap dinamis menggunakan Plotly untuk memetakan kepadatan distribusi wilayah.',
      mbg_modal_f3: 'Filter drill-down mendalam berdasarkan kabupaten, tanggal pengiriman, dan efisiensi vendor.',
      mbg_stat1: '5.000+ Catatan Dibersihkan',
      mbg_stat2: '94,8% Akurasi Pengiriman',
      mbg_stat3: '38 Kabupaten Terjangkau',
      mbg_modal_live_btn: 'Buka Live Streamlit App',
      mbg_live_demo: 'Live Streamlit App ↗',
      
      // ERP Modal
      erp_modal_title: 'Implementasi Supply Chain ERP – B2RP Collection',
      erp_modal_role: 'Spesialis ERP & Analis Proses Bisnis • Odoo 17',
      erp_modal_p1: 'Merancang dan menyimulasikan rantai pasok perusahaan secara terpadu untuk merek pakaian retail B2RP Collection menggunakan Odoo 17 Enterprise. Mengoptimalkan alur operasional ke dalam standar BPMN 2.0.',
      erp_modal_f1: 'Penyatuan alur Procure-to-Pay (P2P) dan Order-to-Cash (O2C) dengan persetujuan bertingkat.',
      erp_modal_f2: 'Perhitungan otomatis Bill of Materials (BOM) dan aturan restock inventaris secara real-time.',
      erp_modal_f3: 'Sinkronisasi lancar antara pergerakan stok gudang dengan buku besar database PostgreSQL.',
      erp_stat1: '4 Modul Utama Terintegrasi',
      erp_stat2: '100% Keterlacakan pada BOM',
      erp_stat3: 'Sesuai Standar BPMN 2.0',
      
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
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'id' || saved === 'en') {
      return saved;
    }
    // Check browser language
    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (browserLang.startsWith('id')) {
      return 'id';
    }
    return 'en';
  }

  // Update text of SVG textPath (for circular rotating badge)
  function updateBadgeCircle(lang) {
    const textPath = document.querySelector('#badgeTextPath');
    if (textPath) {
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
