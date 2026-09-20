import React, { useEffect } from 'react';
import { X, Sparkles, Eye, Layers, Compass, ArrowUpRight, Share2, Check } from 'lucide-react';
import { ThumbnailProject } from '../types';

interface ThumbnailLightboxProps {
  project: ThumbnailProject | null;
  onClose: () => void;
  onRequestStyle: (project: ThumbnailProject) => void;
}

export const ThumbnailLightbox: React.FC<ThumbnailLightboxProps> = ({
  project,
  onClose,
  onRequestStyle,
}) => {
  const [copiedLink, setCopiedLink] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Lightbox Modal Container */}
      <div className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#181818] border border-white/15 rounded-3xl text-white shadow-2xl overflow-hidden flex flex-col">
        
        {/* Top Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10 bg-[#121212]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#B7FF35] text-black text-xs font-bold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="text-xs text-white/60 font-mono hidden sm:inline">
              {project.channelName}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full bg-white/10 text-white/80 hover:bg-white/20 transition-colors"
              title="Share project"
            >
              {copiedLink ? <Check className="w-4 h-4 text-[#B7FF35]" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 text-white/80 hover:bg-white/20 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 16:9 Image Preview */}
        <div className="w-full bg-black relative aspect-video overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            decoding="async"
            width={1280}
            height={720}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1.5 rounded-md bg-black/80 backdrop-blur-sm border border-white/20 text-xs font-bold text-[#B7FF35] flex items-center gap-1.5 shadow-lg">
              <Sparkles className="w-3.5 h-3.5" />
              {project.ctr}
            </span>
          </div>
        </div>

        {/* Content & Breakdown */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-sm text-white/70 leading-relaxed">
              {project.hook}
            </p>
          </div>

          {/* 3 Strategy Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
              <div className="text-xs font-bold text-[#B7FF35] mb-1 flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5" />
                Focal Point Anchor
              </div>
              <p className="text-xs text-white/80 leading-relaxed">
                {project.focalPoint}
              </p>
            </div>

            <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
              <div className="text-xs font-bold text-[#B7FF35] mb-1 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                Text Overlay & Rules
              </div>
              <p className="text-xs text-white/80 leading-relaxed">
                {project.textTreatment}
              </p>
            </div>

            <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
              <div className="text-xs font-bold text-[#B7FF35] mb-1 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                Color Harmony Palette
              </div>
              <div className="flex items-center gap-2 mt-2">
                {project.colorPalette.map((color, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div
                      className="w-6 h-6 rounded-full border border-white/20 shadow-sm"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-[9px] font-mono text-white/50 mt-1">
                      {color}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Script Excerpt */}
          {project.scriptExcerpt && (
            <div className="p-4 rounded-2xl bg-white/5 border-l-2 border-[#B7FF35] text-xs text-white/80 italic">
              <span className="font-semibold text-white not-italic block mb-1">
                Source Script Premise:
              </span>
              {project.scriptExcerpt}
            </div>
          )}

          {/* Bottom Action */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-white/50">
              Ready to commission a thumbnail with this visual direction?
            </div>
            <button
              onClick={() => {
                onRequestStyle(project);
                onClose();
              }}
              className="px-6 py-3 rounded-full bg-[#B7FF35] text-black font-bold text-xs hover:bg-[#c4ff54] transition-colors flex items-center gap-2"
            >
              <span>Order Thumbnail in This Style</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
