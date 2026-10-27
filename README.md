# Vicky Juni Hendri – Data & Business Intelligence Portfolio

A portfolio website crafted following the design system **"The Friendly Analyst"** for Vicky Juni Hendri, an Information Systems student focused on Data Analysis, Business Intelligence, and ERP Process Modeling.

---

## 🌟 Highlights & Features

1. **Design System ("The Friendly Analyst")**:
   - **Colors**: Deep Forest Green (`#12432E`) for credibility, Vivid Amber Orange (`#FFA800`) for insight & energy, and Soft White (`#F8F8F5`) canvas.
   - **Typography**: Geometric sans-serif `Urbanist` (Google Fonts).
   - **UI Elements**: Pill-shaped navigation, buttons, status chips, floating role stickers, selection handles, and circular rotating badge.
   - **Dynamic Marquee Strip**: Infinite scrolling band highlighting analytical specialties.

2. **Multilingual Support (EN / ID)**:
   - Full bilingual support covering **100% of all content** (English and Bahasa Indonesia).
   - Instant language switching without reloading the page.
   - Preserves user preference in `localStorage` and automatically detects browser language.

3. **Dark Mode & Light Mode**:
   - Deep obsidian forest dark theme (`#0C1511` / `#12211A`) paired with glowing amber accents.
   - Seamless one-click toggle in the navbar and mobile menu.
   - Detects OS system preference (`prefers-color-scheme`) and persists in `localStorage`.

4. **Interactive Features**:
   - **Animated KPI Counters**: Smooth count-up animation when scrolling to the metrics section (GPA 3.84, 5,000+ records, 2 major projects).
   - **Detailed Case Study Modals**: Modal views for both featured projects (MBG Streamlit BI Dashboard and Odoo 17 ERP Supply Chain).
   - **CV Preview Modal**: Interactive CV summary modal with direct email actions.
   - **ScrollSpy Navigation**: Automatically highlights the active section in the floating pill navbar.
   - **Responsive Mobile Drawer**: Optimized navigation for smartphones and tablets.
   - **Back to Top Button**: Floating quick-scroll button.

---

## 📁 Project Structure

```
Portofolio_me/
├── index.html                       # Main semantic HTML5 webpage
├── README.md                        # Documentation
├── assets/
│   ├── css/
│   │   ├── style.css                # CSS variables, design tokens, light/dark themes, components
│   │   └── animations.css           # Keyframe animations (marquee, spin, float, pulse)
│   ├── js/
│   │   ├── main.js                  # ScrollSpy, counters, modal triggers, mobile menu
│   │   ├── i18n.js                  # English & Indonesian dictionaries and live switch engine
│   │   └── theme.js                 # Dark & light theme engine with system detection
│   └── images/
│       ├── vicky-portrait.png       # Vicky's portrait image
│       └── favicon.svg              # Brand SVG favicon
└── stitch_vicky_juni_hendri_portfolio/
    ├── code.html                    # Reference design prototype
    ├── DESIGN_Vicky.md              # Design system guidelines
    └── screen.png                   # Design reference screenshot
```

---

## 🚀 How to Run

No build tools or bundlers are required. The website runs natively in any modern browser:

1. Double-click `index.html` to open it directly in Google Chrome, Microsoft Edge, Firefox, or Safari.
2. Alternatively, serve it locally using any static web server:
   ```bash
   # Using Python 3:
   python -m http.server 3000

   # Or using Node.js npx:
   npx serve .
   ```
3. Open `http://localhost:3000` in your browser.

---

## 📝 Content & Credentials
- **Student**: Vicky Juni Hendri
- **Program**: B.Sc. Information Systems, Universitas Pembangunan Nasional "Veteran" Jakarta (GPA 3.84/4.00)
- **Key Competencies**: Python, SQL, Streamlit, Pandas, Plotly, Odoo 17 ERP, BPMN 2.0, Supply Chain Management
- **Contact**: `vickyjunihendri@gmail.com`
