import React from 'react';
import { Film, ShieldCheck, FileText, Eye, Palette } from 'lucide-react';
import { Specialization } from '../types';

interface SpecializationsProps {
  specializations: Specialization[];
}

export const Specializations: React.FC<SpecializationsProps> = ({ specializations }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'documentary':
        return Film;
      case 'serious-content':
        return ShieldCheck;
      case 'script-based':
        return FileText;
      case 'visual-storytelling':
        return Eye;
      default:
        return Palette;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#FAFAF7] border-t border-[#e0e0db]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-[11px] uppercase tracking-[1px] font-bold text-[#666666] block mb-2 font-mono">
            / Expertise & Focus
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-1px] text-[#111111] mb-3">
            What I Do
          </h2>
          <p className="text-base text-[#666666]">
            Specialized visual concepts crafted specifically for serious, high-credibility channels.
          </p>
        </div>

        {/* 5 Compact Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {specializations.map((item, index) => {
            const Icon = getIcon(item.id);
            return (
              <div
                key={item.id}
                className="group relative rounded-[20px] bg-white border border-[#e0e0db] p-6 transition-all duration-300 hover:border-[#111111] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between"
              >
                <div>
                  {/* Top Index & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#F4F4F1] border border-[#e0e0db] flex items-center justify-center text-[#111111] group-hover:bg-[#B7FF35] group-hover:border-[#111111] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono text-[#999999]">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-base font-bold text-[#111111] tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#444444] mb-3">
                    {item.description}
                  </p>
                </div>

                <p className="text-[11px] text-[#666666] leading-relaxed border-t border-[#e0e0db] pt-3 mt-2">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
