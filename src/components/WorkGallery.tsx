import React, { useState } from 'react';
import { Sparkles, Maximize2, Tag } from 'lucide-react';
import { ThumbnailProject, Category } from '../types';

interface WorkGalleryProps {
  projects: ThumbnailProject[];
  onSelectThumbnail: (project: ThumbnailProject) => void;
}

const CATEGORIES: Category[] = [
  'All',
  'Documentary',
  'Geopolitics',
  'AI & Business',
  'True Crime & History',
  'Informative'
];

export const WorkGallery: React.FC<WorkGalleryProps> = ({
  projects,
  onSelectThumbnail,
}) => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-20 md:py-32 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[1px] font-bold text-[#666666] block mb-2 font-mono">
              / Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-1px] text-[#111111] mb-3">
              Selected Work
            </h2>
            <p className="text-base sm:text-[16px] text-[#666666] max-w-2xl">
              Different topics. Different stories. One goal — make the idea impossible to ignore.
            </p>
          </div>

          <div className="text-xs text-[#666666] border-b border-[#111111] pb-0.5 font-medium self-start md:self-auto">
            Showing <span className="font-bold text-[#111111]">{filteredProjects.length}</span> curated projects
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#111111] text-white shadow-sm'
                    : 'bg-[#F2F2EC] text-[#666666] hover:bg-[#E8E8E0] hover:text-[#111111]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => onSelectThumbnail(project)}
              className="group cursor-pointer rounded-[20px] bg-[#F4F4F1] border border-[#e0e0db] overflow-hidden transition-all duration-300 hover:border-[#b8b8b0] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:-translate-y-1"
            >
              {/* Thumbnail Container (16:9 ratio strictly preserved) */}
              <div className="aspect-video w-full relative overflow-hidden bg-black">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                
                {/* Subtle dark gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-2.5 py-1 rounded-full bg-white border border-[#e0e0db] text-[#111111] text-[10px] font-bold uppercase shadow-sm">
                    {project.category}
                  </span>
                  
                  {project.ctr && (
                    <span className="px-2.5 py-1 rounded-full bg-[#B7FF35] text-[#111111] border border-[#111111] text-[10px] font-bold flex items-center gap-1 shadow-sm">
                      <Sparkles className="w-3 h-3 text-[#111111]" />
                      {project.ctr}
                    </span>
                  )}
                </div>

                {/* Hover Inspect Icon Pill */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-black text-xs font-semibold shadow-md border border-[#e0e0db]">
                    <Maximize2 className="w-3.5 h-3.5" />
                    Inspect Hook
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5">
                <h3 className="text-base font-bold text-[#111111] tracking-tight leading-snug mb-2 group-hover:text-[#111111] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-xs text-[#666666] line-clamp-2 leading-relaxed mb-4">
                  {project.hook}
                </p>

                <div className="pt-3 border-t border-[#e0e0db] flex items-center justify-between text-[11px] text-[#777777]">
                  <span className="flex items-center gap-1">
                    <Tag className="w-3 h-3 text-[#999999]" />
                    {project.tags[0]}
                  </span>
                  <span className="font-mono text-[#444444]">
                    {project.channelName}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Work Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#888888]">
            Need a custom style not shown here? I design tailored concepts based on your video script.
          </p>
        </div>

      </div>
    </section>
  );
};
