import React, { useState } from 'react';
import { Sparkles, ArrowRight, Eye, CheckCircle, RefreshCw, Send } from 'lucide-react';
import { SAMPLE_TOPIC_CONCEPTS } from '../data/portfolioData';

interface ConceptStudioProps {
  onOpenContactWithTopic: (topic: string) => void;
}

export const ConceptStudio: React.FC<ConceptStudioProps> = ({ onOpenContactWithTopic }) => {
  const [selectedSampleIndex, setSelectedSampleIndex] = useState(0);
  const [customTopic, setCustomTopic] = useState('');
  const [customGenerated, setCustomGenerated] = useState<{
    hook: string;
    focalPoint: string;
    textTreatment: string;
    colorContrast: string;
  } | null>(null);

  const activeSample = SAMPLE_TOPIC_CONCEPTS[selectedSampleIndex];

  const handleCustomAnalyze = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customTopic.trim()) return;

    // Simulate instant editorial design breakdown for creator's topic
    setCustomGenerated({
      hook: `Isolated high-contrast juxtaposition symbolizing "${customTopic.trim()}" with cinematic directional lighting.`,
      focalPoint: 'Key human or structural subject positioned on the golden ratio intersection to draw immediate gaze.',
      textTreatment: '0 to 2 punchy words maximum — letting the visual tension do 90% of the curiosity work.',
      colorContrast: 'Deep shadowy background with piercing saturated spotlight on the primary narrative twist.'
    });
  };

  const currentConcept = customGenerated || activeSample;

  return (
    <section className="py-20 md:py-28 bg-[#FAFAF7] border-y border-[#e0e0db]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-[11px] uppercase tracking-[1px] font-bold text-[#666666] block mb-2 font-mono">
            / Script-To-Hook Breakdown
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-1px] text-[#111111] mb-3">
            How I turn scripts into visual hooks.
          </h2>
          <p className="text-base text-[#666666]">
            Select a sample documentary premise or type your upcoming video idea below to see the visual framework.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Topic Selector & Input (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#e0e0db] rounded-[24px] p-6 shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-[#555555] mb-4">
                1. Select a Sample Video Topic
              </div>

              <div className="space-y-2.5">
                {SAMPLE_TOPIC_CONCEPTS.map((sample, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedSampleIndex(idx);
                      setCustomGenerated(null);
                    }}
                    className={`w-full text-left p-3.5 rounded-xl text-xs font-medium transition-all flex items-start justify-between gap-3 cursor-pointer ${
                      selectedSampleIndex === idx && !customGenerated
                        ? 'bg-[#111111] text-white shadow-sm'
                        : 'bg-[#F4F4F1] text-[#333333] hover:bg-[#eaeae4]'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm mb-0.5">{sample.topic}</div>
                      <div className={`text-[11px] ${selectedSampleIndex === idx && !customGenerated ? 'text-[#B7FF35]' : 'text-[#777777]'}`}>
                        {sample.category}
                      </div>
                    </div>
                    {selectedSampleIndex === idx && !customGenerated && (
                      <CheckCircle className="w-4 h-4 text-[#B7FF35] shrink-0 mt-0.5" />
                    )}
                  </button>
                ))}
              </div>

              {/* Or Type Your Own Topic Form */}
              <div className="mt-6 pt-6 border-t border-[#e0e0db]">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#555555] mb-2">
                  Or Test Your Own Video Script / Topic
                </label>
                <form onSubmit={handleCustomAnalyze} className="space-y-3">
                  <div className="relative">
                    <input
                      type="text"
                      value={customTopic}
                      onChange={(e) => setCustomTopic(e.target.value)}
                      placeholder="e.g. How BlackRock controls food supply..."
                      className="w-full px-4 py-2.5 text-xs rounded-xl bg-[#FAFAF7] border border-[#e0e0db] text-[#111111] placeholder:text-[#999999] focus:outline-none focus:border-[#111111]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#111111] text-white text-xs font-semibold hover:bg-[#222222] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Generate Hook Framework</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B7FF35]" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Breakdown Analysis (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#111111] text-white rounded-[24px] p-6 sm:p-8 border border-[#333333] shadow-lg relative overflow-hidden">
              
              <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B7FF35]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-white/70">
                    Conceptual Thumbnail Blueprint
                  </span>
                </div>
                <span className="text-[11px] text-[#B7FF35] font-mono">
                  Documentary Standard
                </span>
              </div>

              {/* Topic Headline */}
              <div className="mb-6">
                <div className="text-[11px] text-white/50 uppercase tracking-widest font-mono mb-1">
                  Active Video Subject
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  {customGenerated ? customTopic : activeSample.topic}
                </h4>
              </div>

              {/* 4 Pillars of Harsh's Concept Strategy */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-xs font-bold text-[#B7FF35] mb-1 flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    1. The Narrative Hook
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">
                    {currentConcept.hook}
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-xs font-bold text-[#B7FF35] mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    2. Primary Focal Point
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">
                    {currentConcept.focalPoint}
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-xs font-bold text-white mb-1">
                    3. Text Overlay Rule
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">
                    {currentConcept.textTreatment}
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-xs font-bold text-white mb-1">
                    4. Color & Contrast Physics
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed">
                    {currentConcept.colorContrast}
                  </p>
                </div>

              </div>

              {/* Bottom Quick CTA for this specific topic */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-white/60">
                  Have this exact video in production?
                </span>
                <button
                  onClick={() => onOpenContactWithTopic(customGenerated ? customTopic : activeSample.topic)}
                  className="px-5 py-2.5 rounded-full bg-[#B7FF35] text-[#111111] text-xs font-bold hover:bg-[#c4ff54] transition-all flex items-center gap-2 shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Order Thumbnail For This Idea</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
