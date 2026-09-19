import React from 'react';
import { ArrowUp, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D0D0D] text-white/80 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Tagline */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-xl font-bold tracking-tight text-white hover:text-[#B7FF35] transition-colors"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#B7FF35]" />
              <span className="font-sans font-black tracking-tight">Harsh_Disgn</span>
            </a>
            <p className="text-xs text-white/50 mt-1 max-w-sm">
              YouTube thumbnail designer turning documentary & serious video ideas into click-worthy visual stories.
            </p>
          </div>

          {/* Center Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-medium text-white/70">
            <a href="#home" className="hover:text-[#B7FF35] transition-colors">Home</a>
            <a href="#work" className="hover:text-[#B7FF35] transition-colors">Work</a>
            <a href="#workflow" className="hover:text-[#B7FF35] transition-colors">Workflow</a>
            <a href="#about" className="hover:text-[#B7FF35] transition-colors">About</a>
            <a href="#contact" className="hover:text-[#B7FF35] transition-colors">Contact</a>
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/Harsh_Disgn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-medium hover:bg-[#B7FF35] hover:text-black transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram — @Harsh_Disgn</span>
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <div>
            © 2026 Harsh_Disgn. All rights reserved.
          </div>
          <div className="font-mono text-[11px] text-white/30">
            Designed with Editorial Precision · 16:9 Cinema Ratios
          </div>
        </div>

      </div>
    </footer>
  );
};
