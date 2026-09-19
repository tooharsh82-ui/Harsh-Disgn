import React from 'react';
import { Eye, TrendingUp, Layers, Film, Compass } from 'lucide-react';

export const ClientsStrip: React.FC = () => {
  const highlights = [
    {
      icon: Film,
      label: 'Serious Documentaries',
      sub: 'Cinema-grade storytelling'
    },
    {
      icon: TrendingUp,
      label: 'Tech & AI Systems',
      sub: 'Modern computational topics'
    },
    {
      icon: Compass,
      label: 'Investigative Essays',
      sub: 'High curiosity hooks'
    },
    {
      icon: Eye,
      label: 'Mobile-Optimized',
      sub: 'Instant 0.3s clarity'
    },
    {
      icon: Layers,
      label: 'Script-To-Visual',
      sub: 'Zero clickbait filler'
    }
  ];

  return (
    <section className="border-y border-[#e0e0db] bg-[#F4F4F1] py-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 items-center">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-full bg-white border border-[#e0e0db] flex items-center justify-center text-[#111111] group-hover:bg-[#B7FF35] transition-colors shrink-0 shadow-xs">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#111111] tracking-tight">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-[#666666]">
                    {item.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
