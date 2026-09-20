import React from 'react';
import { ArrowRight, Clock, Zap } from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/portfolioData';

export const Workflow: React.FC = () => {
  return (
    <section id="workflow" className="py-20 md:py-32 bg-[#FAFAF7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-bold tracking-wider text-[#777777] uppercase mb-2 font-mono">
              / Workflow
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] mb-3">
              From script to thumbnail.
            </h2>
            <p className="text-base sm:text-lg text-[#666666] max-w-2xl">
              A transparent, streamlined process designed to protect creator time and maximize click-through rate.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F2F2EC] border border-[#E4E4DC] text-xs font-semibold text-[#333333]">
            <Clock className="w-3.5 h-3.5 text-[#111111]" />
            <span>Average Delivery: 24–48 Hours</span>
          </div>
        </div>

        {/* 4 Connected Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {WORKFLOW_STEPS.map((step, index) => (
            <div
              key={step.stepNumber}
              className="group relative rounded-[24px] bg-white border border-[#e0e0db] p-7 transition-all duration-300 hover:border-[#111111] hover:shadow-[0_12px_32px_rgba(0,0,0,0.05)] flex flex-col justify-between"
            >
              <div>
                {/* Step Number & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="w-8 h-8 rounded-full bg-[#B7FF35] border border-[#111111] text-[#111111] font-black text-xs flex items-center justify-center">
                    {step.stepNumber}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F4F4F1] border border-[#e0e0db] text-[#444444] group-hover:bg-[#111111] group-hover:text-white transition-colors">
                    Step {index + 1}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-[#111111] tracking-tight mb-3">
                  {step.title}
                </h3>

                {/* Primary Description */}
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6 font-normal">
                  {step.description}
                </p>
              </div>

              {/* Sub-Details & Deliverable */}
              <div className="pt-4 border-t border-[#e0e0db] space-y-2">
                <div className="text-[11px] text-[#777777]">
                  <span className="font-semibold text-[#111111]">Deliverable: </span>
                  {step.deliverable}
                </div>
                <div className="text-[11px] text-[#888888] leading-normal">
                  {step.details}
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Process Guarantee Strip */}
        <div className="mt-12 rounded-[24px] bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#e0e0db]">
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-full bg-[#B7FF35] border border-[#111111] flex items-center justify-center text-black shrink-0 font-bold">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#111111]">
                Revision & Feedback Included
              </div>
              <div className="text-xs text-[#666666]">
                Every project includes fine-tuning iterations to ensure maximum contrast and readability on mobile screens.
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="whitespace-nowrap px-6 py-3 rounded-full bg-[#111111] text-white text-xs font-semibold hover:bg-[#222222] transition-colors flex items-center gap-2 shrink-0"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#B7FF35]" />
          </a>
        </div>

      </div>
    </section>
  );
};
