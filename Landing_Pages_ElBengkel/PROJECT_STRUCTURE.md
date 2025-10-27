# Project Structure - ElBengkel Landing Page

## 📂 Struktur Folder Lengkap

```
Landing_Pages_ElBengkel/
│
├── 📄 index.html                 # HTML entry point
├── 📄 package.json               # Dependencies & scripts
├── 📄 package-lock.json          # Locked versions
├── 📄 vite.config.js             # Vite configuration
├── 📄 tailwind.config.js         # TailwindCSS configuration
├── 📄 postcss.config.js          # PostCSS configuration
├── 📄 .gitignore                 # Git ignore rules
├── 📄 .stylelintrc.json          # Stylelint configuration
│
├── 📁 src/                       # Source code
│   ├── 📄 main.jsx               # React entry point
│   ├── 📄 App.jsx                # Main App component
│   ├── 📄 globals.css            # Global styles
│   │
│   └── 📁 components/            # React components
│       ├── 📄 Header.jsx         # Navigation header
│       ├── 📄 Hero.jsx           # Hero section
│       ├── 📄 Services.jsx       # Services showcase
│       ├── 📄 Features3D.jsx     # 3D features section
│       ├── 📄 Gallery.jsx        # Image gallery
│       ├── 📄 Stats.jsx          # Statistics section
│       ├── 📄 Testimonials.jsx   # Customer testimonials
│       ├── 📄 CTA.jsx            # Call-to-action section
│       ├── 📄 Contact.jsx        # Contact form & info
│       └── 📄 Footer.jsx         # Footer section
│
├── 📁 dist/                      # Build output (generated)
├── 📁 node_modules/              # Dependencies (generated)
│
├── 📄 README.md                  # Project overview
├── 📄 FEATURES.md                # Detailed features
├── 📄 DEPLOYMENT.md              # Deployment guide
├── 📄 QUICKSTART.md              # Quick start guide
└── 📄 PROJECT_STRUCTURE.md       # File ini
```

---

## 📄 File Descriptions

### Root Files

#### `index.html`
- HTML entry point
- Meta tags untuk SEO
- Root div untuk React
- Script untuk main.jsx

#### `package.json`
- Project metadata
- Dependencies list
- Dev dependencies
- NPM scripts

#### `vite.config.js`
- Vite build configuration
- React plugin setup
- Build optimization

#### `tailwind.config.js`
- TailwindCSS configuration
- Custom colors
- Custom animations
- Theme extensions

#### `postcss.config.js`
- PostCSS plugins
- TailwindCSS integration
- Autoprefixer setup

#### `.gitignore`
- Files to ignore in git
- node_modules, dist, etc

#### `.stylelintrc.json`
- CSS linting rules
- TailwindCSS at-rules

---

## 🔧 Source Files

### `src/main.jsx`
```javascript
// React app initialization
// Mounts App component ke DOM
```

### `src/App.jsx`
```javascript
// Main app component
// Combines all sections
// Layout structure
```

### `src/globals.css`
```css
/* Global styles */
/* TailwindCSS directives */
/* Custom animations */
/* Utility classes */
```

---

## 🧩 Components Breakdown

### `src/components/Header.jsx`
**Purpose:** Navigation header
**Features:**
- Logo
- Navigation menu
- Mobile menu
- CTA button

**Key Props:** None (self-contained)
**State:** `isOpen` (mobile menu toggle)

### `src/components/Hero.jsx`
**Purpose:** Hero/landing section
**Features:**
- Full-screen hero
- Animated background
- Main heading
- CTA buttons
- Scroll indicator

**Key Props:** None
**Animations:** Floating shapes, staggered text

### `src/components/Services.jsx`
**Purpose:** Services showcase
**Features:**
- 6 service cards
- Gradient headers
- Hover effects
- Responsive grid

**Key Props:** None
**Data:** `services` array

### `src/components/Features3D.jsx`
**Purpose:** 3D features section
**Features:**
- 4 feature cards
- 3D perspective effects
- Shine animations
- Floating icons

**Key Props:** None
**Data:** `features` array

### `src/components/Gallery.jsx`
**Purpose:** Image gallery
**Features:**
- 8 gallery items
- Modal popup
- Hover animations
- Responsive grid

**Key Props:** None
**State:** `selectedImage` (modal state)

### `src/components/Stats.jsx`
**Purpose:** Statistics display
**Features:**
- 4 stat cards
- Animated icons
- Floating animations
- Gradient background

**Key Props:** None
**Data:** `stats` array

### `src/components/Testimonials.jsx`
**Purpose:** Customer testimonials
**Features:**
- 4 testimonial cards
- Star ratings
- Emoji avatars
- Hover animations

**Key Props:** None
**Data:** `testimonials` array

### `src/components/CTA.jsx`
**Purpose:** Call-to-action section
**Features:**
- Large heading
- Animated background
- Dual action buttons
- Full-width design

**Key Props:** None
**Animations:** Floating shapes

### `src/components/Contact.jsx`
**Purpose:** Contact section
**Features:**
- Contact info cards
- Contact form
- Form validation
- Map placeholder

**Key Props:** None
**State:** `formData` (form inputs)

### `src/components/Footer.jsx`
**Purpose:** Footer section
**Features:**
- Brand info
- Footer links
- Social media
- Scroll to top button

**Key Props:** None
**Functions:** `scrollToTop()`

---

## 🎨 Styling Architecture

### TailwindCSS
- Utility-first CSS framework
- Custom colors in config
- Responsive classes (md:, lg:)
- Custom animations

### CSS Modules
- Global styles in `globals.css`
- Scoped animations
- Custom keyframes
- Utility classes

### Framer Motion
- Component animations
- Hover effects
- Scroll triggers
- Staggered animations

---

## 📦 Dependencies

### Production
- **react** (18.2.0) - UI library
- **react-dom** (18.2.0) - DOM rendering
- **framer-motion** (11.2.6) - Animations
- **lucide-react** (0.441.0) - Icons

### Development
- **vite** (7.1.12) - Build tool
- **@vitejs/plugin-react** (4.3.1) - React plugin
- **tailwindcss** (3.4.14) - CSS framework
- **postcss** (8.4.47) - CSS processing
- **autoprefixer** (10.4.20) - CSS vendor prefixes
- **stylelint** (16.25.0) - CSS linter

---

## 🔄 Data Flow

```
App.jsx
  ├── Header (Navigation)
  ├── Hero (Landing)
  ├── Services (6 services)
  ├── Features3D (4 features)
  ├── Gallery (8 items)
  ├── Stats (4 statistics)
  ├── Testimonials (4 reviews)
  ├── CTA (Call-to-action)
  ├── Contact (Form + Info)
  └── Footer (Links + Social)
```

---

## 🎯 Component Hierarchy

```
App
├── Header
│   ├── Logo
│   ├── NavMenu
│   └── CTAButton
├── Hero
│   ├── Badge
│   ├── Heading
│   ├── Subheading
│   ├── CTAButtons
│   └── ScrollIndicator
├── Services
│   └── ServiceCard[] (6x)
│       ├── Icon
│       ├── Title
│       └── Description
├── Features3D
│   └── FeatureCard[] (4x)
│       ├── Icon
│       ├── Title
│       └── Description
├── Gallery
│   ├── GalleryItem[] (8x)
│   └── Modal
│       ├── Image
│       ├── Title
│       └── Description
├── Stats
│   └── StatCard[] (4x)
│       ├── Icon
│       ├── Number
│       └── Label
├── Testimonials
│   └── TestimonialCard[] (4x)
│       ├── Rating
│       ├── Content
│       └── Author
├── CTA
│   ├── Heading
│   ├── Description
│   └── CTAButtons
├── Contact
│   ├── InfoCard[] (4x)
│   ├── ContactForm
│   └── MapPlaceholder
└── Footer
    ├── BrandInfo
    ├── FooterLinks[] (3x)
    ├── SocialLinks
    └── ScrollToTopButton
```

---

## 🔐 File Permissions

- All source files: Read/Write
- node_modules: Read only
- dist: Generated (can delete)
- .git: Git tracked

---

## 📊 File Statistics

| File Type | Count | Purpose |
|-----------|-------|---------|
| JSX | 11 | React components |
| CSS | 1 | Global styles |
| JSON | 5 | Configuration |
| MD | 5 | Documentation |
| HTML | 1 | Entry point |
| **Total** | **23** | - |

---

## 🔍 Key Directories

### `/src`
- All source code
- React components
- Styles

### `/src/components`
- Individual components
- Reusable sections
- Self-contained

### `/dist`
- Build output
- Optimized files
- Ready for deployment

### `/node_modules`
- Dependencies
- Third-party packages
- Auto-generated

---

## 🚀 Build Process

```
Source Files (src/)
    ↓
Vite Build
    ↓
Optimized Code
    ↓
Output (dist/)
    ↓
Ready for Deployment
```

---

## 📝 Naming Conventions

### Components
- PascalCase: `Header.jsx`, `Hero.jsx`
- Descriptive names
- One component per file

### Variables
- camelCase: `isOpen`, `formData`
- Descriptive names
- Clear purpose

### CSS Classes
- kebab-case: `gradient-primary`, `card-3d`
- Utility-first approach
- Reusable classes

### Functions
- camelCase: `handleChange()`, `scrollToTop()`
- Verb + Noun pattern
- Clear action

---

## 🔗 Import Paths

```javascript
// Components
import Header from './components/Header'

// Icons
import { Wrench, Menu } from 'lucide-react'

// Motion
import { motion } from 'framer-motion'

// Styles
import './globals.css'
```

---

## 📚 Documentation Files

| File | Purpose |
|------|---------|
| README.md | Project overview |
| FEATURES.md | Detailed features |
| DEPLOYMENT.md | Deploy guide |
| QUICKSTART.md | Quick start |
| PROJECT_STRUCTURE.md | This file |

---

**Last Updated:** October 27, 2025
