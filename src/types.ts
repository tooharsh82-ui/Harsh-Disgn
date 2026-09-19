export type Category = 
  | 'All'
  | 'Tech & AI'
  | 'Documentary';

export interface ThumbnailProject {
  id: string;
  title: string;
  category: 'Tech & AI' | 'Documentary';
  imageUrl: string;
  channelName?: string;
  views?: string;
  hook: string;
  strategy: string;
  featured?: boolean;
  colorPalette: string[];
  tags: string[];
  scriptExcerpt?: string;
  focalPoint: string;
  textTreatment: string;
}

export interface WorkflowStep {
  stepNumber: string;
  title: string;
  description: string;
  deliverable: string;
  details: string;
}

export interface Specialization {
  id: string;
  title: string;
  description: string;
  detail: string;
  accent: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  creator: string;
  channel: string;
  subscribers: string;
  niche: string;
}
