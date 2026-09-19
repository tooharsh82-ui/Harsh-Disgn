import React from 'react';
import { ArrowDown, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onViewWork: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onViewWork,
  onOpenContact,
}) => {
  return (
    <section id="home" className="pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
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
        <div className="bg-white border border-[#e0e0db] rounded-[24px] p-6 shadow-sm">
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

      </div>
    </section>
  );
};
