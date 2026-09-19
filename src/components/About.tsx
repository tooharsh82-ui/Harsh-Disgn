import React from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAFAF7] border-t border-[#e0e0db]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <span className="text-[11px] uppercase tracking-[1px] font-bold text-[#666666] block mb-3 font-mono">
          / About
        </span>

        <div className="max-w-4xl">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-1.5px] text-[#111111] leading-[1.12]">
              I design thumbnails that tell a story.
            </h2>

            <p className="text-base sm:text-lg text-[#555555] font-normal leading-relaxed">
              My focus is turning ideas, scripts, and stories into clear visual concepts that immediately communicate what a video is about. I specialize in documentary, business, tech, and informative content with a strict emphasis on high CTR and mobile clarity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#e0e0db]">
              <div className="bg-white p-6 rounded-[24px] border border-[#e0e0db] shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B7FF35] ring-1 ring-black" />
                  Script-First Thinking
                </div>
                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                  Every concept is born directly from the core hook of your script, avoiding generic stock clichés.
                </p>
              </div>

              <div className="bg-white p-6 rounded-[24px] border border-[#e0e0db] shadow-xs">
                <div className="text-xs font-bold uppercase tracking-wider text-[#111111] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B7FF35] ring-1 ring-black" />
                  Mobile-Optimized Scale
                </div>
                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                  Engineered with bold focal points and high-contrast color separation for 6-inch phone feeds.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] text-white text-xs font-semibold hover:bg-[#222222] transition-colors"
              >
                <span>Let's Discuss Your Channel</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#B7FF35]" />
              </a>
              <span className="text-xs text-[#888888]">
                Harsh · Founder & Designer, <span className="font-semibold text-[#111111]">Harsh_Disgn</span>
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
