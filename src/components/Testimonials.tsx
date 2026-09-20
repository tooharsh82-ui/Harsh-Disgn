import React from 'react';
import { Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAF7] border-t border-[#e0e0db]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[1px] font-bold text-[#666666] block mb-2 font-mono">
              / Creator Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-1px] text-[#111111] mb-2">
              Trusted by documentary & deep-dive creators.
            </h2>
            <p className="text-sm sm:text-base text-[#666666]">
              Real feedback from channel runners who value storytelling over cheap gimmicks.
            </p>
          </div>

          <div className="text-xs font-bold text-[#111111] flex items-center gap-1.5 bg-white px-4 py-2 rounded-full border border-[#e0e0db] shadow-xs">
            <Sparkles className="w-4 h-4 text-[#B7FF35]" />
            <span>Consistent Double-Digit CTR Gains</span>
          </div>
        </div>

        {/* Testimonials 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="rounded-[20px] bg-white border border-[#e0e0db] p-7 flex flex-col justify-between shadow-xs transition-all duration-200 hover:border-[#111111] hover:shadow-sm"
            >
              <div>
                <Quote className="w-8 h-8 text-[#B7FF35] mb-4 fill-[#B7FF35]/30" />
                <p className="text-sm text-[#222222] font-normal leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#e0e0db] flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#111111]">
                    {t.creator}
                  </div>
                  <div className="text-[11px] text-[#777777]">
                    {t.channel} · <span className="font-mono text-[#555555]">{t.subscribers}</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#F4F4F1] border border-[#e0e0db] text-[#444444]">
                  {t.niche}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
