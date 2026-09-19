import { ThumbnailProject, WorkflowStep, Specialization, Testimonial } from '../types';

export const THUMBNAIL_PROJECTS: ThumbnailProject[] = [
  {
    id: 'tech-ai-03',
    title: 'Cyber Intelligence & Next-Gen Automation',
    category: 'Tech & AI',
    imageUrl: 'https://i.ibb.co/S4ZGPvgd/FINAL-1.jpg',
    channelName: 'Tech & AI Channel',
    hook: 'Compelling visual tension establishing a clear curiosity gap based on the video hook.',
    strategy: 'Editorial-grade compositing with balanced lighting and zero generic clickbait clutter.',
    featured: true,
    colorPalette: ['#0B0F19', '#1E1B4B', '#A855F7', '#B7FF35'],
    tags: ['Tech & AI', 'Cyber', 'Editorial'],
    scriptExcerpt: '"The automation tools reshaping industry workflows and digital intelligence."',
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
    featured: false,
    colorPalette: ['#1A1713', '#451A03', '#F59E0B', '#F5F5F0'],
    tags: ['Documentary', 'Cinematic', 'Storytelling'],
    scriptExcerpt: '"The untold accounts preserved in historical archives that changed everything."',
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
    featured: false,
    colorPalette: ['#0F172A', '#1E293B', '#E2E8F0', '#B7FF35'],
    tags: ['Documentary', 'Investigation', 'Narrative'],
    scriptExcerpt: '"Piecing together the subtle details and critical moments from the investigation."',
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
    featured: false,
    colorPalette: ['#18181B', '#3F3F46', '#D4D4D8', '#B7FF35'],
    tags: ['Documentary', 'Storytelling', 'Compositing'],
    scriptExcerpt: '"The defining moments that shaped real-world outcomes against all odds."',
    focalPoint: 'High-impact central action anchor with controlled contrast',
    textTreatment: 'Bold visual storytelling with clear narrative focal points'
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    stepNumber: '01',
    title: 'Send the Script',
    description: 'You send me the video script or explain the video\'s core idea and angle.',
    deliverable: 'Initial Hook Analysis',
    details: 'I study the pacing, target audience emotional trigger, and identify the single most powerful visual hook in the story.'
  },
  {
    stepNumber: '02',
    title: 'Share Assets',
    description: 'If specific images, faces, screenshots, or references are needed, you can provide them.',
    deliverable: 'Asset Curation & Prep',
    details: 'High-res cutout extraction, professional color balance matching, and lighting alignment to fit the thumbnail scene.'
  },
  {
    stepNumber: '03',
    title: 'Concept & Direction',
    description: 'I understand the story and create rough thumbnail concepts based on the video\'s strongest hook.',
    deliverable: '2-3 Composition Concepts',
    details: 'Visual hierarchy sketches with lighting contrast, focal point placement, and typography tests to test curiosity gaps.'
  },
  {
    stepNumber: '04',
    title: 'Final Thumbnail',
    description: 'After your feedback and requirements, I refine the selected concept and deliver the final thumbnail.',
    deliverable: 'Full Resolution (16:9 4K Export)',
    details: 'Pixel-perfect color grading, mobile readability verification, and ready-to-publish exports.'
  }
];

export const SPECIALIZATIONS: Specialization[] = [
  {
    id: 'documentary',
    title: 'Documentary',
    description: 'Story-driven visual concepts.',
    detail: 'Cinematic lighting, narrative depth, and subtle symbolism that respect serious topics.',
    accent: '#B7FF35'
  },
  {
    id: 'serious-content',
    title: 'Serious Content',
    description: 'Clean and impactful thumbnails.',
    detail: 'Eliminating cartoonish clutter in favor of journalistic authority and prestige.',
    accent: '#111111'
  },
  {
    id: 'script-based',
    title: 'Script-Based Concepts',
    description: 'Ideas built around the video\'s actual story.',
    detail: 'No generic clickbait — every thumbnail connects directly to the core twist of your video.',
    accent: '#B7FF35'
  },
  {
    id: 'visual-storytelling',
    title: 'Visual Storytelling',
    description: 'Turning information into an instantly understandable visual.',
    detail: 'Instant cognitive comprehension in under 0.3 seconds on mobile feeds.',
    accent: '#111111'
  },
  {
    id: 'custom-concepts',
    title: 'Custom Concepts',
    description: 'Different visual directions depending on the content.',
    detail: 'Tailored aesthetic choices matched to your channel\'s distinct brand tone.',
    accent: '#B7FF35'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'Harsh completely transformed our channel\'s CTR. Instead of generic AI junk, he actually reads our 40-page scripts and creates thumbnails that look like HBO documentary posters.',
    creator: 'Julian Vance',
    channel: 'Global Depth Docs',
    subscribers: '780K Subscribers',
    niche: 'Documentary & History'
  },
  {
    id: 't2',
    quote: 'Our average CTR climbed from 6.2% to 11.4% within 3 weeks of working with Harsh. The turnaround speed and conceptual understanding are unmatched in the YouTube space.',
    creator: 'Marcus Sterling',
    channel: 'Future Paradox',
    subscribers: '1.2M Subscribers',
    niche: 'Tech & Economy'
  },
  {
    id: 't3',
    quote: 'The level of restraint and sophistication Harsh brings is rare. No screaming faces, no obnoxious arrows — just pure visual storytelling that commands clicks.',
    creator: 'Elena Rostova',
    channel: 'Noir Archives',
    subscribers: '450K Subscribers',
    niche: 'Investigative Documentaries'
  }
];

export const SAMPLE_TOPIC_CONCEPTS = [
  {
    topic: 'How the Swiss Guard Secretly Protects the Vatican',
    category: 'Documentary / Security',
    hook: 'Antique halberd weapon contrasting against modern hidden submachine gun beneath the ceremonial tunic.',
    focalPoint: 'Shadowed guard face with tactical earpiece wire against Saint Peter\'s marble archway.',
    textTreatment: '0 words or subtle timestamp: "03:42 AM"',
    colorContrast: 'Deep Vatican gold vs. shadowy charcoal and cold steel.'
  },
  {
    topic: 'The $2 Trillion Collapse of Commercial Real Estate',
    category: 'Business / Finance',
    hook: 'A 60-story glass skyscraper at dusk with 85% of floors pitch black, except one solitary lit boardroom.',
    focalPoint: 'The lone illuminated floor casting a red reflection onto the foggy street below.',
    textTreatment: 'Minimal stamp: "EMPTY"',
    colorContrast: 'Cold steely blue twilight with piercing amber beacon.'
  },
  {
    topic: 'Why Commercial Airlines Refuse to Fly Over Tibet',
    category: 'Informative / Aviation',
    hook: 'A massive passenger jet flying at eye level alongside frozen Himalayan serrated peaks with ominous storm fronts.',
    focalPoint: 'Jet engine intake illuminated by lightning in high-altitude freezing fog.',
    textTreatment: 'Warning badge: "NO SURVIVAL ZONE"',
    colorContrast: 'Polar glacier white and slate blue vs. aircraft beacon red.'
  }
];
