import React from 'react';
import { Layers, ShieldCheck, Zap, Sparkles, Instagram, Mail } from 'lucide-react';

export const About: React.FC = () => {
  const principles = [
    {
      title: 'Story First, Effects Second',
      desc: 'No random arrows, red circles, or fake expressions. The thumbnail must honor the genuine truth of the script.'
    },
    {
      title: 'Mobile-Scale Clarity',
      desc: '80%+ of views originate on 6-inch phone screens. Every design is rigorously tested at 120px scale.'
    },
    {
      title: 'Curiosity Without Misleading',
      desc: 'Creating irresistible psychological curiosity gaps while maintaining long-term channel authority.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-[#FAFAF7] border-t border-[#e0e0db]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <span className="text-[11px] uppercase tracking-[1px] font-bold text-[#666666] block mb-3 font-mono">
          / Who I Am
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Harsh Editorial Photo / Visual (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-[24px] overflow-hidden bg-[#111111] border border-[#e0e0db] shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
              
              {/* Natural Professional Portrait */}
              <div className="aspect-[4/5] w-full relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop"
                  alt="Harsh — Thumbnail Designer"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale contrast-110"
                />
                
                {/* Subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Bottom Badge inside photo */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-bold tracking-tight">Harsh</h4>
                      <p className="text-xs text-white/70">Founder & Designer, Harsh_Disgn</p>
                    </div>
                    <span className="w-8 h-8 rounded-full bg-[#B7FF35] border border-[#111111] flex items-center justify-center text-black font-bold text-xs">
                      HD
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Info bar below image */}
              <div className="p-4 bg-[#181818] border-t border-white/10 flex items-center justify-between text-xs text-white/80">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#B7FF35]" />
                  Dedicated YouTube Specialist
                </span>
                <span className="font-mono text-white/50">Est. 2022</span>
              </div>

            </div>
          </div>

          {/* Right Column: About Narrative & Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-1.5px] text-[#111111] leading-[1.12]">
              I'm Harsh. I design thumbnails that tell a story.
            </h2>

            <p className="text-base sm:text-[16px] text-[#666666] font-normal leading-relaxed">
              My focus is turning ideas, scripts and stories into clear visual concepts that immediately communicate what a video is about. I especially enjoy working on serious, documentary and informative content, but I can adapt the visual direction to different topics when the script demands it.
            </p>

            <div className="pt-4 border-t border-[#e0e0db] space-y-4">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#666666] font-mono">
                Core Design Philosophy
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {principles.map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-[18px] border border-[#e0e0db] shadow-xs">
                    <div className="text-xs font-bold text-[#111111] mb-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF35] ring-1 ring-black" />
                      {item.title}
                    </div>
                    <p className="text-[11px] text-[#666666] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Skills & Tooling */}
            <div className="pt-4 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-[#888888] font-medium mr-2">Core Tools:</span>
              <span className="px-3 py-1 rounded-full bg-[#EAEAE2] text-[#333333] font-semibold">Photoshop (Advanced Compositing)</span>
              <span className="px-3 py-1 rounded-full bg-[#EAEAE2] text-[#333333] font-semibold">Blender 3D</span>
              <span className="px-3 py-1 rounded-full bg-[#EAEAE2] text-[#333333] font-semibold">Lightroom Color Grading</span>
              <span className="px-3 py-1 rounded-full bg-[#B7FF35] text-black font-bold">CTR Psychology</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
