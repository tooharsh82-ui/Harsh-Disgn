import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { ThumbnailProject } from '../types';

interface ThumbnailLightboxProps {
  project: ThumbnailProject | null;
  onClose: () => void;
  onRequestStyle?: (project: ThumbnailProject) => void;
}

export const ThumbnailLightbox: React.FC<ThumbnailLightboxProps> = ({
  project,
  onClose,
}) => {
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

  return (
    <div
      id="thumbnail-lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md transition-all duration-300 animate-in fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview"
    >
      {/* Click outside backdrop to close */}
      <div
        className="absolute inset-0 cursor-zoom-out"
        onClick={onClose}
      />

      {/* Clean Image Container (Enlarged slightly, no info, clean smooth animation) */}
      <div
        className="relative z-10 max-w-3xl lg:max-w-4xl w-full rounded-2xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-white/20 bg-black transition-all duration-300 transform scale-100 animate-in zoom-in-95"
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-2.5 rounded-full bg-black/65 hover:bg-black/90 text-white/80 hover:text-white border border-white/15 backdrop-blur-md transition-all duration-200 cursor-pointer shadow-lg"
          aria-label="Close image preview"
        >
          <X className="w-4 h-4" />
        </button>

        {/* 16:9 Image Preview */}
        <div
          className="w-full aspect-video bg-black flex items-center justify-center cursor-zoom-out"
          onClick={onClose}
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain select-none"
          />
        </div>
      </div>
    </div>
  );
};

