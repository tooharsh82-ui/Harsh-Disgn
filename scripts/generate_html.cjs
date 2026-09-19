const fs = require('fs');
const path = require('path');

// Configuration
const OUTPUT_HTML = path.join(__dirname, '..', 'index.html');

// Thumbnail Portfolio Data (Plain External Image Links - No Base64, No Downloads)
const PROJECTS = [
  {
    id: 'tech-ai-03',
    title: 'Cyber Intelligence & Next-Gen Automation',
    category: 'Tech & AI',
    imageUrl: 'https://i.ibb.co/S4ZGPvgd/FINAL-1.jpg',
    channelName: 'Tech & AI Channel',
    hook: 'Compelling visual tension establishing a clear curiosity gap based on the video hook.',
    strategy: 'Editorial-grade compositing with balanced lighting and zero generic clickbait clutter.',
    colorPalette: ['#0B0F19', '#1E1B4B', '#A855F7', '#B7FF35'],
    tags: ['Tech & AI', 'Cyber', 'Editorial'],
    scriptExcerpt: 'The automation tools reshaping industry workflows and digital intelligence.',
    focalPoint: 'Focused subject anchor illuminated against clean negative space',
    textTreatment: 'Minimal text hook with strict visual discipline'
  },
  {
    id: 'documentary-01',
    title: 'Unspoken History: The Declassified Chronicles',
    category: 'Documentary',
    imageUrl: 'https://i.ibb.co/MQhDysD/IMG-20260910-202002.jpg',
    channelName: 'Documentary Channel',
    hook: 'Cinematic atmosphere and documentary-grade lighting that respects the gravity of the script.',
    strategy: 'Dramatic shadows and realistic textures designed to create an authentic narrative scene.',
    colorPalette: ['#1A1713', '#451A03', '#F59E0B', '#F5F5F0'],
    tags: ['Documentary', 'Cinematic', 'Storytelling'],
    scriptExcerpt: 'The untold accounts preserved in historical archives that changed everything.',
    focalPoint: 'Atmospheric narrative subject with dramatic cinematic lighting',
    textTreatment: 'Clean editorial styling matched to the documentary tone'
  },
  {
    id: 'documentary-02',
    title: 'The Silent Investigation: Uncovering What Happened',
    category: 'Documentary',
    imageUrl: 'https://i.ibb.co/4nyXjHx3/IMG-20260806-191942.jpg',
    channelName: 'Documentary Channel',
    hook: 'Moody, tension-filled visual setup crafted directly from key investigative evidence.',
    strategy: 'Deliberate balance of light and shadow emphasizing authentic narrative suspense.',
    colorPalette: ['#0F172A', '#1E293B', '#E2E8F0', '#B7FF35'],
    tags: ['Documentary', 'Investigation', 'Narrative'],
    scriptExcerpt: 'Piecing together the subtle details and critical moments from the investigation.',
    focalPoint: 'Expressive focal subject framed with rich depth of field',
    textTreatment: 'Strategically positioned visual elements safe from YouTube UI badges'
  },
  {
    id: 'documentary-03',
    title: 'The Turning Point: When Everything Changed',
    category: 'Documentary',
    imageUrl: 'https://i.ibb.co/Gf5W65Zh/IMG-20260830-174211.jpg',
    channelName: 'Documentary Channel',
    hook: 'Epic narrative scale capturing high-stakes storytelling with polished visual clarity.',
    strategy: 'Harmonious color grading, realistic composites, and clear hierarchy for immediate feed impact.',
    colorPalette: ['#18181B', '#3F3F46', '#D4D4D8', '#B7FF35'],
    tags: ['Documentary', 'Storytelling', 'Compositing'],
    scriptExcerpt: 'The defining moments that shaped real-world outcomes against all odds.',
    focalPoint: 'High-impact central action anchor with controlled contrast',
    textTreatment: 'Bold visual storytelling with clear narrative focal points'
  }
];

const SPECIALIZATIONS = [
  {
    id: 'documentary',
    title: 'Documentary',
    description: 'Story-driven visual concepts.',
    detail: 'Cinematic lighting, narrative depth, and subtle symbolism that respect serious topics.',
    icon: 'film'
  },
  {
    id: 'serious-content',
    title: 'Serious Content',
    description: 'Clean and impactful thumbnails.',
    detail: 'Eliminating cartoonish clutter in favor of journalistic authority and prestige.',
    icon: 'shield'
  },
  {
    id: 'script-based',
    title: 'Script-Based Concepts',
    description: "Ideas built around the video's actual story.",
    detail: 'No generic clickbait — every thumbnail connects directly to the core twist of your video.',
    icon: 'file-text'
  },
  {
    id: 'visual-storytelling',
    title: 'Visual Storytelling',
    description: 'Turning information into an instantly understandable visual.',
    detail: 'Instant cognitive comprehension in under 0.3 seconds on mobile feeds.',
    icon: 'eye'
  },
  {
    id: 'custom-concepts',
    title: 'Custom Concepts',
    description: 'Different visual directions depending on the content.',
    detail: "Tailored aesthetic choices matched to your channel's distinct brand tone.",
    icon: 'palette'
  }
];

const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Send the Script',
    description: "You send me the video script or explain the video's core idea and angle.",
    deliverable: 'Initial Hook Analysis',
    details: 'I study the pacing, target audience emotional trigger, and identify the single most powerful visual hook in the story.'
  },
  {
    step: '02',
    title: 'Share Assets',
    description: 'If specific images, faces, screenshots, or references are needed, you can provide them.',
    deliverable: 'Asset Curation & Prep',
    details: 'High-res cutout extraction, professional color balance matching, and lighting alignment to fit the thumbnail scene.'
  },
  {
    step: '03',
    title: 'Concept & Direction',
    description: "I understand the story and create rough thumbnail concepts based on the video's strongest hook.",
    deliverable: '2-3 Composition Concepts',
    details: 'Visual hierarchy sketches with lighting contrast, focal point placement, and typography tests to test curiosity gaps.'
  },
  {
    step: '04',
    title: 'Final Thumbnail',
    description: 'After your feedback and requirements, I refine the selected concept and deliver the final thumbnail.',
    deliverable: 'Full Resolution (16:9 4K Export)',
    details: 'Pixel-perfect color grading, mobile readability verification, and ready-to-publish exports.'
  }
];

// SVG Icons helper
function getSvg(name, classes = 'w-4 h-4') {
  switch (name) {
    case 'arrow-up-right':
      return `<svg class="${classes}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`;
    case 'arrow-down':
      return `<svg class="${classes}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>`;
    case 'arrow-up':
      return `<svg class="${classes}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>`;
    case 'check-circle':
      return `<svg class="${classes}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>`;
    case 'check':
      return `<svg class="${classes}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
    case 'menu':
      return `<svg class="${classes}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></svg>`;
    case 'x':
      return `<svg class="${classes}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
    case 'maximize':
      return `<svg class="${classes}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>`;
    case 'tag':
      return `<svg class="${classes}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/><circle cx="7" cy="7" r=".5" fill="currentColor"/></svg>`;
    case 'film':
      return `<svg class="${classes}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/></svg>`;
    case 'shield':
      return `<svg class="${classes}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`;
    case 'file-text':
      return `<svg class="${classes}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`;
    case 'eye':
      return `<svg class="${classes}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>`;
    case 'palette':
      return `<svg class="${classes}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`;
    case 'layers':
      return `<svg class="${classes}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 12.5-8.58 3.91a2 2 0 0 1-1.66 0L2 12.5"/><path d="m22 17.5-8.58 3.91a2 2 0 0 1-1.66 0L2 17.5"/></svg>`;
    case 'compass':
      return `<svg class="${classes}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`;
    case 'share':
      return `<svg class="${classes}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`;
    case 'mail':
      return `<svg class="${classes}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`;
    case 'copy':
      return `<svg class="${classes}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
    case 'instagram':
      return `<svg class="${classes}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`;
    case 'clapperboard':
      return `<svg class="${classes}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.4-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.4Z"/><path d="m6.2 5.3 3.1 3.9"/><path d="m12.4 3.4 3.1 4"/><path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/></svg>`;
    case 'trending-up':
      return `<svg class="${classes}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`;
    case 'sparkles':
      return `<svg class="${classes}" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`;
    default:
      return '';
  }
}

async function generate() {
  console.log('--- Starting Harsh_Disgn Standalone HTML Generation ---');
  console.log(`Output target: ${OUTPUT_HTML}`);
  console.log(`Configured projects: ${PROJECTS.length} external image links (no base64, no downloads)`);

  // Build the complete standalone HTML
  const html = `<!doctype html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Harsh_Disgn — YouTube Thumbnail Designer Portfolio</title>
  <meta name="description" content="Portfolio of Harsh, thumbnail designer specializing in documentary, business, and story-driven visual concepts for YouTube creators." />
  <meta property="og:title" content="Harsh_Disgn — Thumbnail Designer" />
  <meta property="og:description" content="I turn boring ideas into thumbnails people want to click." />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
            serif: ['"DM Serif Display"', '"Playfair Display"', 'Georgia', 'serif'],
            display: ['"Playfair Display"', '"DM Serif Display"', 'Georgia', 'serif']
          },
          colors: {
            lime: '#B7FF35',
            'warm-bg': '#FAFAF7',
            'warm-card': '#F4F4F0',
            'warm-border': '#E8E8E1',
            'dark-ink': '#111111'
          }
        }
      }
    };
  </script>

  <!-- Inline CSS & Custom Styles -->
  <style>
    body {
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      background-color: #FAFAF7;
      color: #111111;
      overflow-x: hidden;
      margin: 0;
      padding: 0;
    }

    .font-editorial {
      font-family: "DM Serif Display", "Playfair Display", Georgia, serif;
    }

    .font-editorial-italic {
      font-family: "Playfair Display", "DM Serif Display", Georgia, serif;
      font-style: italic;
    }

    /* Custom subtle scrollbar */
    ::-webkit-scrollbar {
      width: 7px;
    }
    ::-webkit-scrollbar-track {
      background: #FAFAF7;
    }
    ::-webkit-scrollbar-thumb {
      background: #D5D5CD;
      border-radius: 9999px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #B8B8AD;
    }

    /* Hide scrollbar utility */
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    /* Transitions */
    .filter-item {
      transition: opacity 0.25s ease, transform 0.25s ease;
    }
    .filter-item.hidden-item {
      display: none !important;
    }
  </style>
</head>
<body class="bg-[#FAFAF7] text-[#111111] antialiased selection:bg-[#B7FF35] selection:text-black min-h-screen">

  <!-- ================= NAVBAR ================= -->
  <header
    id="main-navbar"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-5"
  >
    <div class="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
      <!-- Brand Logo -->
      <a
        href="#home"
        id="brand-logo"
        class="group flex items-center gap-2 text-xl font-bold tracking-tight text-[#111111] hover:opacity-80 transition-opacity"
      >
        <span class="w-2.5 h-2.5 rounded-full bg-[#B7FF35] inline-block ring-2 ring-[#111111]"></span>
        <span class="font-sans font-extrabold tracking-tighter text-lg sm:text-xl">
          Harsh<span class="text-[#666666] font-normal">_Disgn</span>
        </span>
      </a>

      <!-- Desktop Navigation Links -->
      <nav id="desktop-nav" class="hidden md:flex items-center gap-8">
        <a href="#home" class="text-[13px] font-medium text-[#666666] hover:text-[#111111] transition-colors relative py-1">Home</a>
        <a href="#work" class="text-[13px] font-medium text-[#666666] hover:text-[#111111] transition-colors relative py-1">Work</a>
        <a href="#workflow" class="text-[13px] font-medium text-[#666666] hover:text-[#111111] transition-colors relative py-1">Workflow</a>
        <a href="#about" class="text-[13px] font-medium text-[#666666] hover:text-[#111111] transition-colors relative py-1">About</a>
        <a href="#contact" class="text-[13px] font-medium text-[#666666] hover:text-[#111111] transition-colors relative py-1">Contact</a>
      </nav>

      <!-- CTA Button -->
      <div class="hidden md:flex items-center gap-3">
        <a
          href="#contact"
          id="nav-cta-button"
          class="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B7FF35] text-[#111111] border border-[#111111] text-[13px] font-semibold transition-all duration-200 hover:bg-[#a6f026] hover:shadow-[0_4px_16px_rgba(183,255,53,0.35)] active:scale-95 cursor-pointer"
        >
          <span>Let's Work</span>
          ${getSvg('arrow-up-right', 'w-3.5 h-3.5 text-[#111111] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5')}
        </a>
      </div>

      <!-- Mobile Hamburger Button -->
      <button
        id="mobile-menu-toggle"
        class="md:hidden p-2 rounded-lg text-[#111111] hover:bg-[#F0F0EB] transition-colors cursor-pointer"
        aria-label="Toggle navigation menu"
      >
        <span id="menu-icon-bars">${getSvg('menu', 'w-6 h-6')}</span>
        <span id="menu-icon-close" class="hidden">${getSvg('x', 'w-6 h-6')}</span>
      </button>
    </div>

    <!-- Mobile Drawer Menu -->
    <div
      id="mobile-nav-drawer"
      class="hidden md:hidden bg-[#FAFAF7] border-b border-[#E8E8E1] px-6 py-6 transition-all duration-300 shadow-xl"
    >
      <div class="flex flex-col gap-4">
        <a href="#home" class="mobile-link text-lg font-medium text-[#111111] hover:text-[#B7FF35] hover:bg-[#111111] px-3 py-2 rounded-md transition-colors">Home</a>
        <a href="#work" class="mobile-link text-lg font-medium text-[#111111] hover:text-[#B7FF35] hover:bg-[#111111] px-3 py-2 rounded-md transition-colors">Work</a>
        <a href="#workflow" class="mobile-link text-lg font-medium text-[#111111] hover:text-[#B7FF35] hover:bg-[#111111] px-3 py-2 rounded-md transition-colors">Workflow</a>
        <a href="#about" class="mobile-link text-lg font-medium text-[#111111] hover:text-[#B7FF35] hover:bg-[#111111] px-3 py-2 rounded-md transition-colors">About</a>
        <a href="#contact" class="mobile-link text-lg font-medium text-[#111111] hover:text-[#B7FF35] hover:bg-[#111111] px-3 py-2 rounded-md transition-colors">Contact</a>
        <div class="pt-4 border-t border-[#E8E8E1]">
          <a
            href="#contact"
            class="mobile-link w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#111111] text-white font-medium hover:bg-[#222222]"
          >
            <span>Let's Work</span>
            ${getSvg('arrow-up-right', 'w-4 h-4 text-[#B7FF35]')}
          </a>
        </div>
      </div>
    </div>
  </header>

  <main>
    <!-- ================= HERO SECTION ================= -->
    <section id="home" class="pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        
        <!-- Top Header / Status Pill -->
        <div class="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F2F2EC] border border-[#E4E4DC] text-xs font-semibold tracking-wide text-[#333333]">
            <span class="w-2 h-2 rounded-full bg-[#B7FF35] ring-2 ring-black/10 animate-pulse"></span>
            <span>HARSH_DISGN — YOUTUBE THUMBNAIL DESIGNER</span>
          </div>

          <div class="hidden sm:flex items-center gap-6 text-xs text-[#666666] font-medium">
            <span class="flex items-center gap-1.5">
              ${getSvg('check-circle', 'w-3.5 h-3.5 text-[#111111]')}
              Serious &amp; Documentary Specialists
            </span>
            <span class="flex items-center gap-1.5">
              ${getSvg('check-circle', 'w-3.5 h-3.5 text-[#111111]')}
              100% Script-Driven Concepts
            </span>
          </div>
        </div>

        <!-- Hero Editorial Heading -->
        <div class="max-w-4xl mb-8">
          <h1 class="text-4xl sm:text-6xl md:text-[68px] font-semibold text-[#111111] tracking-[-2px] leading-[1.04] mb-6">
            I turn boring ideas into
            <span class="font-serif italic font-normal text-[#666666] block sm:inline">
              interesting thumbnails.
            </span>
          </h1>

          <p class="text-base sm:text-[16px] text-[#666666] font-normal leading-[1.6] max-w-[460px]">
            I'm Harsh, a thumbnail designer focused on serious, documentary and story-driven visuals.
            Give me the script, and I'll turn it into a hook.
          </p>
        </div>

        <!-- Hero CTA Action Group -->
        <div class="flex flex-wrap items-center gap-3.5 mb-12">
          <a
            href="#work"
            id="hero-view-work-btn"
            class="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#111111] bg-transparent text-[#111111] text-sm font-semibold transition-all duration-200 hover:bg-[#111111] hover:text-white active:scale-98 cursor-pointer"
          >
            <span>View My Work</span>
            ${getSvg('arrow-down', 'w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5')}
          </a>

          <a
            href="#contact"
            id="hero-contact-btn"
            class="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#111111] text-white text-sm font-semibold transition-all duration-200 hover:bg-[#222222] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] active:scale-98 cursor-pointer"
          >
            <span>Contact Me</span>
            ${getSvg('arrow-up-right', 'w-3.5 h-3.5 text-[#B7FF35] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5')}
          </a>

          <div class="ml-auto hidden lg:flex items-center gap-4 text-xs text-[#777777] border-l border-[#e0e0db] pl-6">
            <div>
              <span class="block text-sm font-bold text-[#111111]">Mobile-Scale</span>
              <span>Clarity Tested</span>
            </div>
            <div class="w-px h-8 bg-[#e0e0db]"></div>
            <div>
              <span class="block text-sm font-bold text-[#111111]">24–48h</span>
              <span>Turnaround Time</span>
            </div>
          </div>
        </div>

        <!-- Workflow Process Overview Quick Capsule -->
        <div class="bg-white border border-[#e0e0db] rounded-[24px] p-6 shadow-sm">
          <div class="flex justify-between items-center mb-5 pb-3 border-b border-[#f0f0eb]">
            <span class="text-[11px] uppercase tracking-[1px] font-bold text-[#666666]">
              / Workflow
            </span>
            <span class="text-[11px] text-[#999999]">
              Process Overview
            </span>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="flex items-start gap-3">
              <span class="text-[#111111] font-extrabold text-base bg-[#B7FF35] w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0">
                01
              </span>
              <div class="text-xs">
                <b class="block text-[#111111] font-bold mb-0.5">Script Analysis</b>
                <span class="text-[#777777]">Send the concept</span>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-[#111111] font-extrabold text-base bg-[#B7FF35] w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0">
                02
              </span>
              <div class="text-xs">
                <b class="block text-[#111111] font-bold mb-0.5">Asset Selection</b>
                <span class="text-[#777777]">References shared</span>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-[#111111] font-extrabold text-base bg-[#B7FF35] w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0">
                03
              </span>
              <div class="text-xs">
                <b class="block text-[#111111] font-bold mb-0.5">Design Draft</b>
                <span class="text-[#777777]">Concept creation</span>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-[#111111] font-extrabold text-base bg-[#B7FF35] w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0">
                04
              </span>
              <div class="text-xs">
                <b class="block text-[#111111] font-bold mb-0.5">Final Delivery</b>
                <span class="text-[#777777]">High-res export</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ================= CHANNEL NICHES STRIP ================= -->
    <section class="py-6 border-y border-[#E8E8E1] bg-[#F7F7F2] overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-white border border-[#E0E0DB] flex items-center justify-center text-[#111111] shrink-0">
              ${getSvg('clapperboard', 'w-4 h-4')}
            </div>
            <div>
              <div class="text-xs font-bold text-[#111111]">Documentaries</div>
              <div class="text-[11px] text-[#666666]">In-depth narrative essays</div>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-white border border-[#E0E0DB] flex items-center justify-center text-[#111111] shrink-0">
              ${getSvg('trending-up', 'w-4 h-4')}
            </div>
            <div>
              <div class="text-xs font-bold text-[#111111]">Tech &amp; AI Systems</div>
              <div class="text-[11px] text-[#666666]">Modern computational topics</div>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-white border border-[#E0E0DB] flex items-center justify-center text-[#111111] shrink-0">
              ${getSvg('compass', 'w-4 h-4')}
            </div>
            <div>
              <div class="text-xs font-bold text-[#111111]">Investigative &amp; History</div>
              <div class="text-[11px] text-[#666666]">Archival &amp; mystery angles</div>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-white border border-[#E0E0DB] flex items-center justify-center text-[#111111] shrink-0">
              ${getSvg('sparkles', 'w-4 h-4')}
            </div>
            <div>
              <div class="text-xs font-bold text-[#111111]">16:9 Compositing</div>
              <div class="text-[11px] text-[#666666]">Tested at 120px scale</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= SELECTED WORK GALLERY ================= -->
    <section id="work" class="py-20 md:py-32 bg-[#FAFAF7]">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        
        <!-- Section Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span class="text-[11px] uppercase tracking-[1px] font-bold text-[#666666] block mb-2 font-mono">
              / Portfolio
            </span>
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-1px] text-[#111111] mb-3">
              Selected Work
            </h2>
            <p class="text-base sm:text-[16px] text-[#666666] max-w-2xl">
              Different topics. Different stories. One goal — make the idea impossible to ignore.
            </p>
          </div>

          <div class="text-xs text-[#666666] border-b border-[#111111] pb-0.5 font-medium self-start md:self-auto">
            Showing <span id="gallery-count" class="font-bold text-[#111111]">${PROJECTS.length}</span> curated projects
          </div>
        </div>

        <!-- Category Filters -->
        <div class="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar" id="category-filter-bar">
          <button
            data-category="All"
            class="filter-btn whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer bg-[#111111] text-white shadow-sm"
          >
            All
          </button>
          <button
            data-category="Tech & AI"
            class="filter-btn whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer bg-[#F2F2EC] text-[#666666] hover:bg-[#E8E8E0] hover:text-[#111111]"
          >
            Tech &amp; AI
          </button>
          <button
            data-category="Documentary"
            class="filter-btn whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer bg-[#F2F2EC] text-[#666666] hover:bg-[#E8E8E0] hover:text-[#111111]"
          >
            Documentary
          </button>
        </div>

        <!-- Gallery Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7" id="gallery-grid">
          ${PROJECTS.map((p, idx) => `
          <article
            data-id="${p.id}"
            data-category="${p.category}"
            class="filter-item group cursor-pointer rounded-[20px] bg-[#F4F4F1] border border-[#e0e0db] overflow-hidden transition-all duration-300 hover:border-[#b8b8b0] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1.5"
          >
            <!-- Thumbnail Container (16:9 aspect ratio strictly preserved) -->
            <div class="aspect-video w-full relative overflow-hidden bg-black">
              <img
                src="${p.imageUrl}"
                alt="${p.title}"
                ${idx === 0 ? 'loading="eager"' : 'loading="lazy"'}
                width="1280"
                height="720"
                style="aspect-ratio: 16/9;"
                class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
              
              <!-- Subtle dark gradient overlay on hover -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

              <!-- Top Badge -->
              <div class="absolute top-3 left-3 flex items-center gap-2 pointer-events-none">
                <span class="px-2.5 py-1 rounded-full bg-white border border-[#e0e0db] text-[#111111] text-[10px] font-bold uppercase shadow-sm">
                  ${p.category}
                </span>
              </div>

              <!-- Hover Preview Pill -->
              <div class="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-black text-xs font-semibold shadow-lg border border-[#e0e0db]">
                  ${getSvg('maximize', 'w-3.5 h-3.5 text-black')}
                  View Preview
                </span>
              </div>
            </div>

            <!-- Card Meta Content -->
            <div class="p-5">
              <h3 class="text-base font-bold text-[#111111] tracking-tight leading-snug mb-2 group-hover:text-[#111111] transition-colors">
                ${p.title}
              </h3>
              
              <p class="text-xs text-[#666666] line-clamp-2 leading-relaxed mb-4">
                ${p.hook}
              </p>

              <div class="pt-3 border-t border-[#e0e0db] flex items-center justify-between text-[11px] text-[#777777]">
                <span class="flex items-center gap-1">
                  ${getSvg('tag', 'w-3 h-3 text-[#999999]')}
                  ${p.tags[0]}
                </span>
                <span class="font-mono text-[#444444]">
                  ${p.channelName}
                </span>
              </div>
            </div>
          </article>
          `).join('')}
        </div>

        <!-- Bottom Work Note -->
        <div class="mt-12 text-center">
          <p class="text-xs text-[#888888]">
            Need a custom style not shown here? I design tailored concepts based on your video script.
          </p>
        </div>

      </div>
    </section>

    <!-- ================= SPECIALIZATIONS (WHAT I DO) ================= -->
    <section class="py-20 md:py-28 bg-[#FAFAF7] border-t border-[#e0e0db]">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        
        <!-- Section Header -->
        <div class="max-w-3xl mb-12">
          <span class="text-[11px] uppercase tracking-[1px] font-bold text-[#666666] block mb-2 font-mono">
            / Expertise &amp; Focus
          </span>
          <h2 class="text-3xl sm:text-4xl font-semibold tracking-[-1px] text-[#111111] mb-3">
            What I Do
          </h2>
          <p class="text-base text-[#666666]">
            Specialized visual concepts crafted specifically for serious, high-credibility channels.
          </p>
        </div>

        <!-- 5 Compact Items -->
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          ${SPECIALIZATIONS.map((item, index) => `
          <div class="group relative rounded-[20px] bg-white border border-[#e0e0db] p-6 transition-all duration-300 hover:border-[#111111] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-6">
                <div class="w-10 h-10 rounded-full bg-[#F4F4F1] border border-[#e0e0db] flex items-center justify-center text-[#111111] group-hover:bg-[#B7FF35] group-hover:border-[#111111] transition-colors">
                  ${getSvg(item.icon, 'w-4 h-4')}
                </div>
                <span class="text-xs font-mono text-[#999999]">
                  0${index + 1}
                </span>
              </div>

              <h3 class="text-base font-bold text-[#111111] tracking-tight mb-2">
                ${item.title}
              </h3>
              <p class="text-xs font-semibold text-[#444444] mb-3">
                ${item.description}
              </p>
            </div>

            <p class="text-[11px] text-[#666666] leading-relaxed border-t border-[#e0e0db] pt-3 mt-2">
              ${item.detail}
            </p>
          </div>
          `).join('')}
        </div>

      </div>
    </section>

    <!-- ================= WORKFLOW SECTION ================= -->
    <section id="workflow" class="py-20 md:py-32 bg-[#F4F4F0] border-t border-[#e0e0db]">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div class="max-w-3xl mb-16">
          <span class="text-[11px] uppercase tracking-[1px] font-bold text-[#666666] block mb-2 font-mono">
            / Methodology
          </span>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-1px] text-[#111111] mb-4">
            How We Work Together
          </h2>
          <p class="text-base sm:text-lg text-[#666666] leading-relaxed">
            A reliable 4-step creative pipeline that takes you from raw script to a high-impact, click-commanding thumbnail.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          ${WORKFLOW_STEPS.map((step) => `
          <div class="relative bg-white rounded-[24px] p-6 sm:p-7 border border-[#e0e0db] shadow-xs flex flex-col justify-between hover:border-[#111111] transition-colors">
            <div>
              <div class="flex items-center justify-between mb-8">
                <span class="text-2xl font-black text-[#111111] font-mono">
                  ${step.step}
                </span>
                <span class="w-8 h-8 rounded-full bg-[#FAFAF7] border border-[#e0e0db] flex items-center justify-center text-xs font-bold text-[#111111]">
                  ➔
                </span>
              </div>

              <h3 class="text-lg font-bold text-[#111111] mb-2">
                ${step.title}
              </h3>

              <p class="text-xs text-[#666666] leading-relaxed mb-6">
                ${step.description}
              </p>
            </div>

            <div class="pt-4 border-t border-[#f0f0eb]">
              <div class="text-[11px] uppercase tracking-wider text-[#999999] font-mono mb-1">
                Deliverable
              </div>
              <div class="text-xs font-bold text-[#111111]">
                ${step.deliverable}
              </div>
            </div>
          </div>
          `).join('')}
        </div>

      </div>
    </section>

    <!-- ================= ABOUT SECTION ================= -->
    <section id="about" class="py-20 md:py-28 bg-[#FAFAF7] border-t border-[#e0e0db]">
      <div class="max-w-7xl mx-auto px-6 sm:px-8">
        
        <span class="text-[11px] uppercase tracking-[1px] font-bold text-[#666666] block mb-3 font-mono">
          / About
        </span>

        <div class="max-w-4xl">
          <div class="space-y-6">
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-1.5px] text-[#111111] leading-[1.12]">
              I design thumbnails that tell a story.
            </h2>

            <p class="text-base sm:text-lg text-[#555555] font-normal leading-relaxed">
              My focus is turning ideas, scripts, and stories into clear visual concepts that immediately communicate what a video is about. I specialize in documentary, business, tech, and informative content with a strict emphasis on high CTR and mobile clarity.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#e0e0db]">
              <div class="bg-white p-6 rounded-[24px] border border-[#e0e0db] shadow-xs">
                <div class="text-xs font-bold uppercase tracking-wider text-[#111111] mb-2 flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-[#B7FF35] ring-1 ring-black"></span>
                  Script-First Thinking
                </div>
                <p class="text-xs sm:text-sm text-[#666666] leading-relaxed">
                  Every concept is born directly from the core hook of your script, avoiding generic stock clichés.
                </p>
              </div>

              <div class="bg-white p-6 rounded-[24px] border border-[#e0e0db] shadow-xs">
                <div class="text-xs font-bold uppercase tracking-wider text-[#111111] mb-2 flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-[#B7FF35] ring-1 ring-black"></span>
                  Mobile-Optimized Scale
                </div>
                <p class="text-xs sm:text-sm text-[#666666] leading-relaxed">
                  Engineered with bold focal points and high-contrast color separation for 6-inch phone feeds.
                </p>
              </div>
            </div>

            <div class="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] text-white text-xs font-semibold hover:bg-[#222222] transition-colors"
              >
                <span>Let's Discuss Your Channel</span>
                ${getSvg('arrow-up-right', 'w-3.5 h-3.5 text-[#B7FF35]')}
              </a>
              <span class="text-xs text-[#888888]">
                Harsh · Founder &amp; Designer, <span class="font-semibold text-[#111111]">Harsh_Disgn</span>
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- ================= CONTACT SECTION ================= -->
    <section id="contact" class="py-20 md:py-32 bg-[#111111] text-white relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        <div class="max-w-3xl mb-14">
          <span class="text-[11px] uppercase tracking-[1px] font-bold text-[#B7FF35] block mb-3 font-mono">
            / Contact
          </span>

          <h2 class="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-1.5px] text-white mb-4 leading-[1.08]">
            Have a video in mind?
          </h2>

          <p class="text-base sm:text-xl text-white/70 leading-relaxed max-w-xl">
            Send me the idea or script. Let's turn it into a thumbnail worth clicking.
          </p>
        </div>

        <!-- Contact Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          <!-- Email Card -->
          <div class="rounded-[24px] bg-[#1a1a1a] border border-white/10 p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div class="text-[11px] font-bold text-white/50 uppercase tracking-wider mb-2 font-mono">
                Direct Email
              </div>
              <a
                href="mailto:tooharsh82@gmail.com"
                class="text-xl sm:text-2xl font-bold text-white hover:text-[#B7FF35] transition-colors break-all block mb-6"
              >
                tooharsh82@gmail.com
              </a>
            </div>

            <div class="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
              <a
                href="mailto:tooharsh82@gmail.com?subject=Thumbnail%20Project%20Inquiry"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B7FF35] text-[#111111] text-xs font-bold hover:bg-[#c6ff56] transition-colors"
              >
                ${getSvg('mail', 'w-3.5 h-3.5')}
                <span>Send Email</span>
              </a>

              <button
                id="copy-email-btn"
                class="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 text-white text-xs font-medium hover:bg-white/20 transition-colors cursor-pointer"
              >
                <span id="copy-email-icon">${getSvg('copy', 'w-3.5 h-3.5')}</span>
                <span id="copy-email-text">Copy Address</span>
              </button>
            </div>
          </div>

          <!-- Instagram Card -->
          <div class="rounded-[24px] bg-[#1a1a1a] border border-white/10 p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div class="text-[11px] font-bold text-white/50 uppercase tracking-wider mb-2 font-mono">
                Social &amp; Direct Message
              </div>
              <a
                href="https://instagram.com/Harsh_Disgn"
                target="_blank"
                rel="noopener noreferrer"
                class="text-xl sm:text-2xl font-bold text-white hover:text-[#B7FF35] transition-colors block mb-6"
              >
                @Harsh_Disgn
              </a>
            </div>

            <div class="pt-4 border-t border-white/10">
              <a
                href="https://instagram.com/Harsh_Disgn"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white text-xs font-medium hover:bg-[#B7FF35] hover:text-black transition-colors"
              >
                ${getSvg('instagram', 'w-3.5 h-3.5')}
                <span>Message on Instagram</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  </main>

  <!-- ================= FOOTER ================= -->
  <footer class="bg-[#0D0D0D] text-white/80 border-t border-white/10 pt-16 pb-12">
    <div class="max-w-7xl mx-auto px-6 sm:px-8">
      
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
        
        <div>
          <a
            href="#home"
            class="inline-flex items-center gap-2 text-xl font-bold tracking-tight text-white hover:text-[#B7FF35] transition-colors"
          >
            <span class="w-2.5 h-2.5 rounded-full bg-[#B7FF35]"></span>
            <span class="font-sans font-black tracking-tight">Harsh_Disgn</span>
          </a>
          <p class="text-xs text-white/50 mt-1 max-w-sm">
            YouTube thumbnail designer turning documentary &amp; serious video ideas into click-worthy visual stories.
          </p>
        </div>

        <nav class="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-medium text-white/70">
          <a href="#home" class="hover:text-[#B7FF35] transition-colors">Home</a>
          <a href="#work" class="hover:text-[#B7FF35] transition-colors">Work</a>
          <a href="#workflow" class="hover:text-[#B7FF35] transition-colors">Workflow</a>
          <a href="#about" class="hover:text-[#B7FF35] transition-colors">About</a>
          <a href="#contact" class="hover:text-[#B7FF35] transition-colors">Contact</a>
        </nav>

        <div class="flex items-center gap-4">
          <a
            href="https://instagram.com/Harsh_Disgn"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-medium hover:bg-[#B7FF35] hover:text-black transition-colors"
          >
            ${getSvg('instagram', 'w-3.5 h-3.5')}
            <span>Instagram — @Harsh_Disgn</span>
          </a>

          <button
            id="back-to-top-btn"
            class="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            ${getSvg('arrow-up', 'w-4 h-4')}
          </button>
        </div>

      </div>

      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
        <div>
          © 2026 Harsh_Disgn. All rights reserved.
        </div>
        <div class="font-mono text-[11px] text-white/30">
          Designed with Editorial Precision · 16:9 Cinema Ratios
        </div>
      </div>

    </div>
  </footer>

  <!-- ================= CLEAN IMAGE-ONLY LIGHTBOX MODAL ================= -->
  <div
    id="thumbnail-lightbox"
    class="hidden fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md opacity-0 transition-opacity duration-300"
    role="dialog"
    aria-modal="true"
    aria-label="Image Preview"
  >
    <!-- Click outside backdrop to close -->
    <div id="lightbox-backdrop" class="absolute inset-0 cursor-zoom-out"></div>

    <!-- Clean Image Container (No info, pure enlarged preview with smooth animation) -->
    <div
      id="lightbox-content-box"
      class="relative z-10 max-w-3xl lg:max-w-4xl w-full rounded-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-white/15 bg-black transition-all duration-300 transform scale-95 opacity-0 cursor-default"
    >
      <!-- Close button in corner -->
      <button
        id="modal-close-btn"
        class="absolute top-3 right-3 z-20 p-2.5 rounded-full bg-black/65 hover:bg-black/90 text-white/80 hover:text-white border border-white/15 backdrop-blur-md transition-all duration-200 cursor-pointer shadow-lg"
        aria-label="Close image preview"
      >
        ${getSvg('x', 'w-4 h-4')}
      </button>

      <!-- 16:9 Image Preview -->
      <div id="modal-image-wrap" class="w-full aspect-video bg-black flex items-center justify-center cursor-zoom-out">
        <img
          id="modal-image"
          src=""
          alt=""
          width="1280"
          height="720"
          style="aspect-ratio: 16/9;"
          class="w-full h-full object-contain select-none"
        />
      </div>
    </div>
  </div>

  <!-- ================= CLIENT-SIDE VANILLA JAVASCRIPT ================= -->
  <script>
    // Embedded Project Data for Instant Modal & Filtering
    const PROJECTS = ${JSON.stringify(PROJECTS.map(p => ({
      id: p.id,
      title: p.title,
      category: p.category,
      imageUrl: p.imageUrl,
      channelName: p.channelName
    })))};

    // 1. Sticky Navbar Scroll Effect
    const navbar = document.getElementById('main-navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navbar.classList.remove('bg-transparent', 'py-5');
        navbar.classList.add('bg-[#FAFAF7]/90', 'backdrop-blur-md', 'border-b', 'border-[#E8E8E1]', 'py-3', 'shadow-[0_4px_20px_rgba(0,0,0,0.03)]');
      } else {
        navbar.classList.add('bg-transparent', 'py-5');
        navbar.classList.remove('bg-[#FAFAF7]/90', 'backdrop-blur-md', 'border-b', 'border-[#E8E8E1]', 'py-3', 'shadow-[0_4px_20px_rgba(0,0,0,0.03)]');
      }
    });

    // 2. Mobile Drawer Menu Toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
    const menuIconBars = document.getElementById('menu-icon-bars');
    const menuIconClose = document.getElementById('menu-icon-close');

    function toggleMobileMenu(open) {
      const isOpen = open !== undefined ? open : mobileNavDrawer.classList.contains('hidden');
      if (isOpen) {
        mobileNavDrawer.classList.remove('hidden');
        menuIconBars.classList.add('hidden');
        menuIconClose.classList.remove('hidden');
      } else {
        mobileNavDrawer.classList.add('hidden');
        menuIconBars.classList.remove('hidden');
        menuIconClose.classList.add('hidden');
      }
    }

    mobileMenuToggle.addEventListener('click', () => toggleMobileMenu());

    // Close mobile menu when a nav link is clicked
    document.querySelectorAll('.mobile-link').forEach((link) => {
      link.addEventListener('click', () => toggleMobileMenu(false));
    });

    // 3. Category Filter Tabs
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('#gallery-grid article');
    const galleryCount = document.getElementById('gallery-count');

    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-category');

        // Update active tab styles
        filterButtons.forEach((b) => {
          b.classList.remove('bg-[#111111]', 'text-white', 'shadow-sm');
          b.classList.add('bg-[#F2F2EC]', 'text-[#666666]');
        });
        btn.classList.add('bg-[#111111]', 'text-white', 'shadow-sm');
        btn.classList.remove('bg-[#F2F2EC]', 'text-[#666666]');

        // Filter cards
        let visibleCount = 0;
        galleryItems.forEach((item) => {
          const itemCat = item.getAttribute('data-category');
          if (cat === 'All' || itemCat === cat) {
            item.classList.remove('hidden-item');
            visibleCount++;
          } else {
            item.classList.add('hidden-item');
          }
        });

        galleryCount.textContent = visibleCount;
      });
    });

    // 4. Lightbox Modal Functionality (Clean, Image-Only with Smooth Animation)
    const lightbox = document.getElementById('thumbnail-lightbox');
    const lightboxBackdrop = document.getElementById('lightbox-backdrop');
    const lightboxContentBox = document.getElementById('lightbox-content-box');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalImageWrap = document.getElementById('modal-image-wrap');
    const modalImage = document.getElementById('modal-image');

    function openModal(projectId) {
      const project = PROJECTS.find((p) => p.id === projectId);
      if (!project) return;

      modalImage.src = project.imageUrl;
      modalImage.alt = project.title;

      lightbox.classList.remove('hidden');
      document.body.style.overflow = 'hidden';

      // Smooth entrance animation
      requestAnimationFrame(() => {
        lightbox.classList.remove('opacity-0');
        lightbox.classList.add('opacity-100');
        if (lightboxContentBox) {
          lightboxContentBox.classList.remove('scale-95', 'opacity-0');
          lightboxContentBox.classList.add('scale-100', 'opacity-100');
        }
      });
    }

    function closeModal() {
      if (lightboxContentBox) {
        lightboxContentBox.classList.remove('scale-100', 'opacity-100');
        lightboxContentBox.classList.add('scale-95', 'opacity-0');
      }
      lightbox.classList.remove('opacity-100');
      lightbox.classList.add('opacity-0');
      setTimeout(() => {
        lightbox.classList.add('hidden');
        document.body.style.overflow = '';
      }, 200);
    }

    // Attach card click handlers
    galleryItems.forEach((card) => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        openModal(id);
      });
    });

    if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeModal);
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalImageWrap) modalImageWrap.addEventListener('click', closeModal);

    // Escape key closes modal
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
        closeModal();
      }
    });

    // 5. Copy Email Button
    const copyEmailBtn = document.getElementById('copy-email-btn');
    const copyEmailIcon = document.getElementById('copy-email-icon');
    const copyEmailText = document.getElementById('copy-email-text');

    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('tooharsh82@gmail.com');
      copyEmailIcon.innerHTML = '${getSvg('check', 'w-3.5 h-3.5 text-[#B7FF35]')}';
      copyEmailText.textContent = 'Copied!';
      setTimeout(() => {
        copyEmailIcon.innerHTML = '${getSvg('copy', 'w-3.5 h-3.5')}';
        copyEmailText.textContent = 'Copy Address';
      }, 2500);
    });

    // 6. Back to Top Button
    const backToTopBtn = document.getElementById('back-to-top-btn');
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  </script>
</body>
</html>`;

  // VERIFICATION BEFORE FINISHING:
  // 1. Confirm zero occurrences of "base64" anywhere in the generated HTML
  const base64Matches = html.match(/base64/gi) || [];
  if (base64Matches.length > 0) {
    throw new Error(`Verification failed: Found ${base64Matches.length} occurrence(s) of "base64" in output HTML!`);
  }

  // 2. Confirm no inline data URIs exist in src attributes
  if (html.includes('data:image/')) {
    throw new Error('Verification failed: Found inline data:image URI in output HTML!');
  }

  // 3. Confirm all images use plain external URLs
  const imgSrcRegex = /<img[^>]+src="([^">]+)"/g;
  let match;
  const foundImages = [];
  while ((match = imgSrcRegex.exec(html)) !== null) {
    if (match[1]) foundImages.push(match[1]);
  }
  console.log(`Verified ${foundImages.length} <img> tags in HTML template.`);
  foundImages.forEach((src, i) => {
    console.log(`  [Image ${i + 1}] src: ${src}`);
  });

  fs.writeFileSync(OUTPUT_HTML, html, 'utf8');

  const finalStats = fs.statSync(OUTPUT_HTML);
  const finalSizeKB = (finalStats.size / 1024).toFixed(1);
  const finalSizeMB = (finalStats.size / 1024 / 1024).toFixed(2);

  console.log('---------------------------------------------------------');
  console.log(`🎉 SUCCESS: Generated pure-text standalone ${OUTPUT_HTML}`);
  console.log(`📦 Final file size: ${finalSizeKB} KB (${finalSizeMB} MB)`);
  console.log(`🔍 Base64 check: 0 occurrences found (100% pure external links)`);
  if (finalStats.size < 200 * 1024) {
    console.log(`✅ UNDER 200KB BUDGET: ${finalSizeKB} KB is well under the 200 KB target!`);
  } else {
    console.warn(`⚠ Warning: Size exceeds 200KB (${finalSizeKB} KB)`);
  }
  console.log('---------------------------------------------------------');
}

if (require.main === module) {
  generate().catch((err) => {
    console.error('Fatal error generating HTML:', err);
    process.exit(1);
  });
}

module.exports = { generate };
