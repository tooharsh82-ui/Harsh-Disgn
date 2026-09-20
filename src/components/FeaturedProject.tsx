import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, Eye, Layers, Compass, Check } from 'lucide-react';
import { ThumbnailProject } from '../types';

interface FeaturedProjectProps {
  project: ThumbnailProject;
  onInspect: (project: ThumbnailProject) => void;
  onOpenContact: () => void;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  project,
  onInspect,
  onOpenContact,
}) => {
  const [activeTab, setActiveTab] = useState<'hook' | 'strategy' | 'script'>('hook');

  return (
    <section className="py-16 md:py-24 bg-[#111111] text-white overflow-hidden relative">
      {/* Subtle background ambient texture */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B7FF35]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Top Label */}
        <div className="flex items-center justify-between gap-4 mb-8 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#B7FF35] text-[#111111] text-xs font-bold uppercase tracking-wider">
              Featured Case Study
            </span>
            <span className="text-xs text-white/50 font-mono">
              / Documentary Breakdown
            </span>
          </div>

          <div className="text-xs text-white/60 hidden sm:flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#B7FF35]" />
            <span>{project.ctr} Performance</span>
          </div>
        </div>

        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Large Cinema 16:9 Thumbnail Showcase (7 cols) */}
          <div className="lg:col-span-7">
            <div
              onClick={() => onInspect(project)}
              className="group cursor-pointer relative rounded-2xl overflow-hidden border border-white/15 bg-black shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-[#B7FF35]/50"
            >
              <div className="aspect-video w-full overflow-hidden relative">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                
                {/* Cinema grain gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-md bg-black/80 backdrop-blur-sm border border-white/20 text-xs font-medium text-white">
                    {project.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs text-[#B7FF35] font-semibold mb-1 flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    High-Curiosity Visual Anchor
                  </div>
                  <h4 className="text-lg sm:text-2xl font-bold text-white tracking-tight leading-snug">
                    {project.title}
                  </h4>
                </div>

                {/* Inspect Button in center on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <span className="px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wide shadow-xl flex items-center gap-2">
                    <MaximizeIcon className="w-4 h-4" />
                    Inspect Strategy Breakdown
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Case Study Narrative (5 cols) */}
          <div className="lg:col-span-5">
            <div className="text-xs text-white/50 uppercase tracking-widest font-mono mb-2">
              The Creative Challenge
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
              Turning complex geopolitics into an irresistible visual story.
            </h3>

            <p className="text-sm text-white/70 leading-relaxed mb-6">
              When working with multi-thousand-word deep-dive scripts, standard thumbnails fail because they cram too many elements. Harsh isolated the single microchip wafer as the emotional and geopolitical anchor.
            </p>

            {/* Interactive Concept Breakdown Tabs */}
            <div className="bg-[#1A1A1A] border border-white/10 rounded-xl p-5 mb-6">
              <div className="flex border-b border-white/10 pb-3 mb-4 gap-4 text-xs font-semibold">
                <button
                  onClick={() => setActiveTab('hook')}
                  className={`pb-1 transition-colors flex items-center gap-1.5 ${
                    activeTab === 'hook' ? 'text-[#B7FF35] border-b-2 border-[#B7FF35]' : 'text-white/60 hover:text-white'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  The Visual Hook
                </button>
                <button
                  onClick={() => setActiveTab('strategy')}
                  className={`pb-1 transition-colors flex items-center gap-1.5 ${
                    activeTab === 'strategy' ? 'text-[#B7FF35] border-b-2 border-[#B7FF35]' : 'text-white/60 hover:text-white'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  Contrast Strategy
                </button>
                <button
                  onClick={() => setActiveTab('script')}
                  className={`pb-1 transition-colors flex items-center gap-1.5 ${
                    activeTab === 'script' ? 'text-[#B7FF35] border-b-2 border-[#B7FF35]' : 'text-white/60 hover:text-white'
                  }`}
                >
                  <Compass className="w-3.5 h-3.5" />
                  Script Link
                </button>
              </div>

              {activeTab === 'hook' && (
                <div className="space-y-2 text-xs">
                  <div className="text-white/90 leading-relaxed font-medium">
                    {project.hook}
                  </div>
                  <div className="text-white/50 text-[11px]">
                    Focal point: {project.focalPoint}
                  </div>
                </div>
              )}

              {activeTab === 'strategy' && (
                <div className="space-y-2 text-xs">
                  <div className="text-white/90 leading-relaxed font-medium">
                    {project.strategy}
                  </div>
                  <div className="text-white/50 text-[11px]">
                    Text Treatment: {project.textTreatment}
                  </div>
                </div>
              )}

              {activeTab === 'script' && (
                <div className="space-y-2 text-xs italic text-white/80 border-l-2 border-[#B7FF35] pl-3">
                  {project.scriptExcerpt}
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onInspect(project)}
                className="px-5 py-2.5 rounded-full bg-[#B7FF35] text-[#111111] text-xs font-bold hover:bg-[#c6ff59] transition-all flex items-center gap-1.5"
              >
                <span>View Full Breakdown</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenContact}
                className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium hover:bg-white/20 transition-all"
              >
                Request Similar Concept
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

const MaximizeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
  </svg>
);
