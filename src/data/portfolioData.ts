import { ThumbnailProject, WorkflowStep, Specialization, Testimonial } from '../types';

export const THUMBNAIL_PROJECTS: ThumbnailProject[] = [
  {
    id: 'microchip-war',
    title: 'The $400B Microchip War: Inside the Secret Silicon Siege',
    category: 'Geopolitics',
    imageUrl: 'https://i.ibb.co/8nZq0j00/IMG-20260910-202002.jpg',
    channelName: 'Global Depth Docs',
    views: '1.4M views',
    ctr: '16.8% CTR',
    hook: 'A glowing microscopic wafer illuminated in high-contrast cyan-amber against a shadowy military satellite backdrop.',
    strategy: 'Maximum contrast between the tiny fragile silicon chip and the immense geopolitical stakes. Zero text clutter.',
    featured: true,
    colorPalette: ['#0B132B', '#1C2541', '#48CAE4', '#B7FF35'],
    tags: ['Geopolitics', 'Tech War', 'High Contrast'],
    scriptExcerpt: '"Whoever controls the fabrication facilities in Taiwan controls the world\'s computing power for the next 50 years."',
    focalPoint: 'Silicon wafer held with titanium tweezers under harsh directional spotlight',
    textTreatment: 'Minimal 2-word hook: "THE CHIP SIEGE"'
  },
  {
    id: 'ai-labor-reality',
    title: 'The Dark Reality of Invisible AI Labor in 2026',
    category: 'AI & Business',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1600&auto=format&fit=crop',
    channelName: 'Future Paradox',
    views: '920K views',
    ctr: '15.4% CTR',
    hook: 'A human silhouette staring into a monolithic glowing server stack with distorted digital reflections.',
    strategy: 'Deep cold monochrome palette with sharp neon accents to evoke technological alienation and human vulnerability.',
    featured: false,
    colorPalette: ['#0A0A0A', '#1A1A24', '#00F0FF', '#EAEAEA'],
    tags: ['Artificial Intelligence', 'Investigation', 'Cyber'],
    scriptExcerpt: '"Behind every clean chat prompt is a million underpaid workers categorizing toxicity in windowless offices."',
    focalPoint: 'Lonely operator silhouette facing towering humming server rack',
    textTreatment: 'No text needed — pure visual tension and curiosity gap'
  },
  {
    id: 'water-monopoly',
    title: 'How One Company Silently Bought America\'s Deepest Aquifers',
    category: 'Documentary',
    imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1600&auto=format&fit=crop',
    channelName: 'Atlas Investigative',
    views: '2.1M views',
    ctr: '18.2% CTR',
    hook: 'A vast cracked desert landscape abruptly cut by a massive chrome pipeline locked behind razor wire.',
    strategy: 'Stark visual dichotomy between environmental devastation and corporate control. High curiosity gap.',
    featured: false,
    colorPalette: ['#1A1713', '#795548', '#B7FF35', '#F5F5F0'],
    tags: ['Investigative', 'Environment', 'Corporate Greed'],
    scriptExcerpt: '"In 2018, private equity funds began buying water rights under family farms across three states without public notice."',
    focalPoint: 'Industrial valve lock against dry cracked desert floor',
    textTreatment: 'Warning badge style: "RESTRICTED WATER"'
  },
  {
    id: 'lehman-collapse',
    title: 'The 24-Hour Collapse That Broke Modern Wall Street',
    category: 'AI & Business',
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1600&auto=format&fit=crop',
    channelName: 'Market Chronicles',
    views: '1.8M views',
    ctr: '14.9% CTR',
    hook: 'An empty trading floor frozen at 4:00 AM with chaotic spilled paperwork and red digital ticker tape.',
    strategy: 'Cinematic film-noir atmosphere emphasizing panic and irreversible financial freefall.',
    featured: false,
    colorPalette: ['#111111', '#2C2C2C', '#E63946', '#FFFFFF'],
    tags: ['Finance', 'History', 'Documentary'],
    scriptExcerpt: '"By Sunday evening, the treasury secretary\'s phone stopped ringing. There was no bailout coming."',
    focalPoint: 'Abandoned executive chair overlooking chaotic glowing ticker board',
    textTreatment: 'Bold stamp: "ZERO LIQUIDITY"'
  },
  {
    id: 'deep-sea-cables',
    title: 'The 16 Undersea Cables That Keep the Internet Alive',
    category: 'Informative',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1600&auto=format&fit=crop',
    channelName: 'Infrastructure Deep Dive',
    views: '840K views',
    ctr: '15.1% CTR',
    hook: 'A glowing optical fiber cross-section slicing through abyssal oceanic darkness with a solitary submarine inspection light.',
    strategy: 'Scale contrast: tiny armored cable versus vast oceanic void. Captures immediate awe and vulnerability.',
    featured: false,
    colorPalette: ['#03071E', '#0A2463', '#3E92CC', '#B7FF35'],
    tags: ['Infrastructure', 'Internet', 'Ocean'],
    scriptExcerpt: '"If just 4 specific junction points in the Atlantic are severed, global financial markets go dark in 3 milliseconds."',
    focalPoint: 'Fiber cable emitting optic laser beam in pitch-black trench',
    textTreatment: 'Subtle coordinates stamp: "POINT OF FAILURE"'
  },
  {
    id: 'room-1046-mystery',
    title: 'The Unsolved Hotel Room 1046 Incident: What Did He Hide?',
    category: 'True Crime & History',
    imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1600&auto=format&fit=crop',
    channelName: 'Noir Archives',
    views: '1.6M views',
    ctr: '17.3% CTR',
    hook: 'A vintage 1930s hotel key tag resting beside a bloodstained receiver under harsh lamplight.',
    strategy: 'Vintage analogue grain combined with hyper-focused tactile details for irresistible narrative suspense.',
    featured: false,
    colorPalette: ['#1C1917', '#44403C', '#CA8A04', '#F5F5F4'],
    tags: ['True Crime', 'Mystery', 'Vintage Noir'],
    scriptExcerpt: '"The maid found him sitting in the pitch dark. When asked why the curtains were drawn, he whispered: \'Don\'t turn on the light.\'"',
    focalPoint: 'Rotary phone off the hook in moody warm motel shadow',
    textTreatment: 'Distressed stamp: "DO NOT DISTURB"'
  },
  {
    id: 'norway-sovereign-fund',
    title: 'How Norway Secretly Built a $1.7 Trillion Mountain Vault',
    category: 'Documentary',
    imageUrl: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1600&auto=format&fit=crop',
    channelName: 'Sovereign States',
    views: '1.2M views',
    ctr: '16.0% CTR',
    hook: 'An architectural steel bunker nestled inside a frozen Svalbard blizzard with glowing amber security beacons.',
    strategy: 'Clean Scandinavian aesthetic mixed with high-tech financial secrecy. Clean geometric layout.',
    featured: false,
    colorPalette: ['#0F172A', '#334155', '#94A3B8', '#B7FF35'],
    tags: ['Documentary', 'Nordic', 'Sovereign Wealth'],
    scriptExcerpt: '"While other nations spent their oil windfalls on skyscrapers, Norway quietly bought 1.5% of every publicly listed company on earth."',
    focalPoint: 'Concrete bunker entrance lit in cold blue mountain twilight',
    textTreatment: 'Monospace code: "THE VAULT"'
  },
  {
    id: 'electric-car-myth',
    title: 'Why 90% of EV Startups Are Going Bankrupt This Year',
    category: 'Informative',
    imageUrl: 'https://images.unsplash.com/photo-1558441719-8b489c652790?q=80&w=1600&auto=format&fit=crop',
    channelName: 'Auto Paradox',
    views: '760K views',
    ctr: '14.2% CTR',
    hook: 'A stripped-down aluminum supercar chassis surrounded by unsold inventory lots under desolate overcast sky.',
    strategy: 'Industrial realism with sharp metallic highlights. Breaks the glossy promo cliché with brutal factual truth.',
    featured: false,
    colorPalette: ['#18181B', '#27272A', '#71717A', '#F43F5E'],
    tags: ['Automotive', 'Tech Bubble', 'Business'],
    scriptExcerpt: '"Building a prototype car takes $50 million. Scaling mass production without burning $4 billion is statistically impossible."',
    focalPoint: 'Exposed battery cell array with caution wire harness',
    textTreatment: 'Clean label: "THE COST TRAP"'
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
    niche: 'Geopolitics & History'
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
