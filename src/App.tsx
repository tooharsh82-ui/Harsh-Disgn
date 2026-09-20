import React, { useState, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientsStrip } from './components/ClientsStrip';
import { WorkGallery } from './components/WorkGallery';
import { FeaturedProject } from './components/FeaturedProject';
import { Specializations } from './components/Specializations';
import { ConceptStudio } from './components/ConceptStudio';
import { Workflow } from './components/Workflow';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { THUMBNAIL_PROJECTS, SPECIALIZATIONS } from './data/portfolioData';
import { ThumbnailProject } from './types';

const ThumbnailLightbox = lazy(() =>
  import('./components/ThumbnailLightbox').then((m) => ({ default: m.ThumbnailLightbox }))
);

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ThumbnailProject | null>(null);
  const [prefilledContactTopic, setPrefilledContactTopic] = useState<string>('');

  const handleOpenContact = (customTopic?: string) => {
    if (customTopic) {
      setPrefilledContactTopic(customTopic);
    }
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewWork = () => {
    const workElement = document.getElementById('work');
    if (workElement) {
      workElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectThumbnail = (project: ThumbnailProject) => {
    setSelectedProject(project);
  };

  const handleRequestStyle = (project: ThumbnailProject) => {
    handleOpenContact(`Documentary style inspired by: "${project.title}"`);
  };

  const featuredCaseStudy = THUMBNAIL_PROJECTS.find((p) => p.featured) || THUMBNAIL_PROJECTS[0];

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#111111] font-sans antialiased selection:bg-[#B7FF35] selection:text-black">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenContact={() => handleOpenContact()} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onViewWork={handleViewWork}
          onOpenContact={() => handleOpenContact()}
          onSelectThumbnail={handleSelectThumbnail}
          featuredProjects={THUMBNAIL_PROJECTS}
        />

        {/* Channel Niches & Metric Strip */}
        <ClientsStrip />

        {/* Selected Work Gallery */}
        <WorkGallery
          projects={THUMBNAIL_PROJECTS}
          onSelectThumbnail={handleSelectThumbnail}
        />

        {/* Flagship Featured Case Study */}
        <FeaturedProject
          project={featuredCaseStudy}
          onInspect={handleSelectThumbnail}
          onOpenContact={() => handleOpenContact(`Case Study style: "${featuredCaseStudy.title}"`)}
        />

        {/* Specializations / What I Do */}
        <Specializations specializations={SPECIALIZATIONS} />

        {/* Interactive Script-to-Thumbnail Concept Studio */}
        <ConceptStudio onOpenContactWithTopic={handleOpenContact} />

        {/* Workflow Section */}
        <Workflow />

        {/* About Section */}
        <About />

        {/* Creator Testimonials */}
        <Testimonials />

        {/* Final Contact Section */}
        <Contact prefilledTopic={prefilledContactTopic} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox Inspector Modal */}
      {selectedProject && (
        <Suspense fallback={null}>
          <ThumbnailLightbox
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onRequestStyle={handleRequestStyle}
          />
        </Suspense>
      )}
    </div>
  );
}
