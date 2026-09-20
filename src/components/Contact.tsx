import React, { useState } from 'react';
import { Mail, Instagram, ArrowUpRight, Copy, Check, Send, Sparkles } from 'lucide-react';

interface ContactProps {
  prefilledTopic?: string;
}

export const Contact: React.FC<ContactProps> = ({ prefilledTopic = '' }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [creatorName, setCreatorName] = useState('');
  const [channelLink, setChannelLink] = useState('');
  const [videoTopic, setVideoTopic] = useState(prefilledTopic);
  const [sentNotice, setSentNotice] = useState(false);

  // Sync if prefilledTopic changes
  React.useEffect(() => {
    if (prefilledTopic) {
      setVideoTopic(prefilledTopic);
    }
  }, [prefilledTopic]);

  const emailAddress = 'tooharsh82@gmail.com';
  const instagramHandle = '@Harsh_Disgn';
  const instagramUrl = 'https://instagram.com/Harsh_Disgn';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Thumbnail Project Inquiry: ${videoTopic || 'New Video'}`);
    const body = encodeURIComponent(
      `Hi Harsh,\n\nI would like to discuss a thumbnail design for my upcoming video.\n\nCreator/Channel: ${creatorName || 'N/A'}\nChannel Link: ${channelLink || 'N/A'}\nVideo Topic / Script Idea: ${videoTopic || 'N/A'}\n\nLooking forward to hearing your thoughts.\n\nBest regards,\n${creatorName || 'Creator'}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
    setSentNotice(true);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#111111] text-white relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#B7FF35]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono uppercase text-[#B7FF35] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#B7FF35]" />
            / Project Inquiries
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4 leading-[1.08]">
            Have a video in mind?
          </h2>

          <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-xl">
            Send me the idea or script. Let's turn it into a thumbnail worth clicking.
          </p>
        </div>

        {/* 2-Column Split: Direct Contact Cards (Left) + Quick Brief Composer (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="rounded-2xl bg-[#1A1A1A] border border-white/10 p-6 sm:p-7 shadow-lg">
              <div className="text-xs text-white/50 font-mono uppercase mb-2">
                Direct Email
              </div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-lg sm:text-xl font-bold text-white hover:text-[#B7FF35] transition-colors break-all"
                >
                  {emailAddress}
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${emailAddress}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#111111] text-xs font-bold hover:bg-[#B7FF35] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Open Mail Client</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/10 text-white text-xs font-medium hover:bg-white/20 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#B7FF35]" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Instagram Card */}
            <div className="rounded-2xl bg-[#1A1A1A] border border-white/10 p-6 sm:p-7 shadow-lg">
              <div className="text-xs text-white/50 font-mono uppercase mb-2">
                Social & DM
              </div>
              <div className="flex items-center justify-between gap-3 mb-4">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl font-bold text-white hover:text-[#B7FF35] transition-colors"
                >
                  {instagramHandle}
                </a>
              </div>

              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-medium hover:bg-[#B7FF35] hover:text-black transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Message on Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Turnaround Pill */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-xs text-white/70">
              <Sparkles className="w-4 h-4 text-[#B7FF35] shrink-0" />
              <span>Available for ongoing channel partnerships and individual high-impact videos.</span>
            </div>

          </div>

          {/* Right Column: Interactive Brief Sender (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#181818] border border-white/15 p-6 sm:p-8 shadow-2xl">
              
              <div className="border-b border-white/10 pb-4 mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Send a Quick Project Brief
                  </h3>
                  <p className="text-xs text-white/60">
                    Fill in your topic to generate a pre-formatted email to Harsh.
                  </p>
                </div>
                <span className="text-xs font-mono text-[#B7FF35]">24h Reply</span>
              </div>

              <form onSubmit={handleSendInquiry} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-1.5">
                      Your Name / Channel Name
                    </label>
                    <input
                      type="text"
                      value={creatorName}
                      onChange={(e) => setCreatorName(e.target.value)}
                      placeholder="e.g. Alex (Apex Docs)"
                      className="w-full px-4 py-3 rounded-xl bg-[#222222] border border-white/10 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-[#B7FF35]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-1.5">
                      Channel Link (YouTube)
                    </label>
                    <input
                      type="text"
                      value={channelLink}
                      onChange={(e) => setChannelLink(e.target.value)}
                      placeholder="youtube.com/@yourchannel"
                      className="w-full px-4 py-3 rounded-xl bg-[#222222] border border-white/10 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-[#B7FF35]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1.5">
                    Video Topic, Working Title, or Script Summary
                  </label>
                  <textarea
                    rows={4}
                    value={videoTopic}
                    onChange={(e) => setVideoTopic(e.target.value)}
                    placeholder="Describe the central twist, premise, or paste key script paragraphs..."
                    className="w-full px-4 py-3 rounded-xl bg-[#222222] border border-white/10 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-[#B7FF35] resize-none"
                    required
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-[11px] text-white/50">
                    Opens your email client directly with your formatted brief.
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#B7FF35] text-[#111111] font-bold text-sm hover:bg-[#c6ff56] transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(183,255,53,0.3)] active:scale-98"
                  >
                    <span>Let's Work</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>

                {sentNotice && (
                  <div className="p-3 rounded-xl bg-white/10 border border-[#B7FF35]/40 text-xs text-[#B7FF35] flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>Email client opened! You can also email directly at {emailAddress}</span>
                  </div>
                )}

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
