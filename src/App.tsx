import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientsStrip } from './components/ClientsStrip';
import { WorkGallery } from './components/WorkGallery';
import { Specializations } from './components/Specializations';
import { Workflow } from './components/Workflow';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThumbnailLightbox } from './components/ThumbnailLightbox';
import { THUMBNAIL_PROJECTS, SPECIALIZATIONS } from './data/portfolioData';
import { ThumbnailProject } from './types';

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
        />

        {/* Channel Niches & Metric Strip */}
        <ClientsStrip />

        {/* Selected Work Gallery */}
        <WorkGallery
          projects={THUMBNAIL_PROJECTS}
          onSelectThumbnail={handleSelectThumbnail}
        />

        {/* Specializations / What I Do */}
        <Specializations specializations={SPECIALIZATIONS} />

        {/* Workflow Section */}
        <Workflow />

        {/* About Section */}
        <About />

        {/* Final Contact Section */}
        <Contact prefilledTopic={prefilledContactTopic} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox Inspector Modal */}
      <ThumbnailLightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestStyle={handleRequestStyle}
      />
    </div>
  );
}
