import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { ThumbnailProject } from '../types';

interface HeroProps {
  onViewWork: () => void;
  onOpenContact: () => void;
  onSelectThumbnail: (project: ThumbnailProject) => void;
  featuredProjects: ThumbnailProject[];
}

export const Hero: React.FC<HeroProps> = ({
  onViewWork,
  onOpenContact,
  onSelectThumbnail,
  featuredProjects,
}) => {
  const mainHeroProject = featuredProjects[0] || null;
  const secondaryProjects = featuredProjects.slice(1, 5);

  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Top Header / Status Pill */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F2F2EC] border border-[#E4E4DC] text-xs font-semibold tracking-wide text-[#333333]">
            <span className="w-2 h-2 rounded-full bg-[#B7FF35] ring-2 ring-black/10 animate-pulse" />
            <span>HARSH_DISGN — YOUTUBE THUMBNAIL DESIGNER</span>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-xs text-[#666666] font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#111111]" />
              Serious & Documentary Specialists
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#111111]" />
              100% Script-Driven Concepts
            </span>
          </div>
        </div>

        {/* Hero Editorial Heading */}
        <div className="max-w-4xl mb-8">
          <h1 className="text-4xl sm:text-6xl md:text-[68px] font-semibold text-[#111111] tracking-[-2px] leading-[1.04] mb-6">
            I turn boring ideas into{' '}
            <span className="font-serif italic font-normal text-[#666666] block sm:inline">
              interesting thumbnails.
            </span>
          </h1>

          <p className="text-base sm:text-[16px] text-[#666666] font-normal leading-[1.6] max-w-[460px]">
            I'm Harsh, a thumbnail designer focused on serious, documentary and story-driven visuals.
            Give me the script, and I'll turn it into a hook.
          </p>
        </div>

        {/* Hero CTA Action Group */}
        <div className="flex flex-wrap items-center gap-3.5 mb-12">
          <button
            id="hero-view-work-btn"
            onClick={onViewWork}
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#111111] bg-transparent text-[#111111] text-sm font-semibold transition-all duration-200 hover:bg-[#111111] hover:text-white active:scale-98 cursor-pointer"
          >
            <span>View My Work</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
          </button>

          <button
            id="hero-contact-btn"
            onClick={onOpenContact}
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#111111] text-white text-sm font-semibold transition-all duration-200 hover:bg-[#222222] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] active:scale-98 cursor-pointer"
          >
            <span>Contact Me</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#B7FF35] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <div className="ml-auto hidden lg:flex items-center gap-4 text-xs text-[#777777] border-l border-[#e0e0db] pl-6">
            <div>
              <span className="block text-sm font-bold text-[#111111]">16.2% Avg</span>
              <span>Client CTR Benchmark</span>
            </div>
            <div className="w-px h-8 bg-[#e0e0db]" />
            <div>
              <span className="block text-sm font-bold text-[#111111]">24–48h</span>
              <span>Turnaround Time</span>
            </div>
          </div>
        </div>

        {/* Workflow Process Overview Quick Capsule */}
        <div className="mb-14 bg-white border border-[#e0e0db] rounded-[24px] p-6 shadow-sm">
          <div className="flex justify-between items-center mb-5 pb-3 border-b border-[#f0f0eb]">
            <span className="text-[11px] uppercase tracking-[1px] font-bold text-[#666666]">
              / Workflow
            </span>
            <span className="text-[11px] text-[#999999]">
              Process Overview
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <span className="text-[#111111] font-extrabold text-base bg-[#B7FF35] w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0">
                01
              </span>
              <div className="text-xs">
                <b className="block text-[#111111] font-bold mb-0.5">Script Analysis</b>
                <span className="text-[#777777]">Send the concept</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#111111] font-extrabold text-base bg-[#B7FF35] w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0">
                02
              </span>
              <div className="text-xs">
                <b className="block text-[#111111] font-bold mb-0.5">Asset Selection</b>
                <span className="text-[#777777]">References shared</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#111111] font-extrabold text-base bg-[#B7FF35] w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0">
                03
              </span>
              <div className="text-xs">
                <b className="block text-[#111111] font-bold mb-0.5">Design Draft</b>
                <span className="text-[#777777]">Concept creation</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#111111] font-extrabold text-base bg-[#B7FF35] w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0">
                04
              </span>
              <div className="text-xs">
                <b className="block text-[#111111] font-bold mb-0.5">Final Delivery</b>
                <span className="text-[#777777]">High-res export</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Visual Showcase Collage */}
        <div id="hero-showcase-collage" className="mt-4">
          <div className="flex items-center justify-between mb-4">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#777777]">
              Featured Thumbnail Showcase
            </div>
            <div className="text-xs text-[#888888]">
              Click any thumbnail for concept breakdown
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
            
            {/* Primary Featured Large Card (7 cols) */}
            {mainHeroProject && (
              <div
                onClick={() => onSelectThumbnail(mainHeroProject)}
                className="md:col-span-7 group cursor-pointer relative rounded-2xl overflow-hidden bg-[#111111] border border-[#E0E0D8] shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1"
              >
                <div className="aspect-video w-full overflow-hidden relative">
                  <img
                    src={mainHeroProject.imageUrl}
                    alt={mainHeroProject.title}
                    width={1280}
                    height={720}
                    fetchPriority="high"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {/* Subtle dark overlay gradient for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Top Left Tag */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-white border border-[#e0e0db] text-[#111111] text-xs font-bold uppercase shadow-sm">
                      {mainHeroProject.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#B7FF35] text-[#111111] border border-[#111111] text-xs font-bold flex items-center gap-1 shadow-sm">
                      <Sparkles className="w-3 h-3 text-[#111111]" />
                      {mainHeroProject.ctr}
                    </span>
                  </div>

                  {/* Bottom Info */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg sm:text-xl font-bold leading-snug mb-1 group-hover:text-[#B7FF35] transition-colors">
                      {mainHeroProject.title}
                    </h3>
                    <p className="text-xs text-white/80 line-clamp-1">
                      {mainHeroProject.hook}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Secondary Thumbnails Grid (5 cols) */}
            <div className="md:col-span-5 grid grid-cols-2 gap-4">
              {secondaryProjects.map((project, idx) => (
                <div
                  key={project.id}
                  onClick={() => onSelectThumbnail(project)}
                  className="group cursor-pointer relative rounded-xl overflow-hidden bg-[#111111] border border-[#E0E0D8] shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="aspect-video w-full overflow-hidden relative">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      width={640}
                      height={360}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-0.5 rounded-full bg-white border border-[#e0e0db] text-[9px] font-bold text-[#111111] uppercase shadow-sm">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute bottom-2 left-2 right-2 text-white">
                      <p className="text-xs font-semibold line-clamp-1 group-hover:text-[#B7FF35] transition-colors">
                        {project.title}
                      </p>
                      <span className="text-[10px] text-[#B7FF35] font-bold">
                        {project.ctr} CTR
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
