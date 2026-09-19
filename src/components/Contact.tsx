import React, { useState } from 'react';
import { Mail, Instagram, ArrowUpRight, Copy, Check, Send } from 'lucide-react';

interface ContactProps {
  prefilledTopic?: string;
}

export const Contact: React.FC<ContactProps> = ({ prefilledTopic = '' }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [videoTopic, setVideoTopic] = useState(prefilledTopic);

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

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Thumbnail Project Inquiry: ${videoTopic || 'New Video'}`);
    const body = encodeURIComponent(
      `Hi Harsh,\n\nI have an upcoming video project and would like to collaborate on thumbnail design.\n\nVideo Topic / Script Summary: ${videoTopic || 'N/A'}\n\nLooking forward to working together!`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#111111] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-[11px] uppercase tracking-[1px] font-bold text-[#B7FF35] block mb-3 font-mono">
            / Contact
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-1.5px] text-white mb-4 leading-[1.08]">
            Have a video in mind?
          </h2>

          <p className="text-base sm:text-xl text-white/70 leading-relaxed max-w-xl">
            Send me the idea or script. Let's turn it into a thumbnail worth clicking.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Email Card (6 cols) */}
          <div className="lg:col-span-6 rounded-[24px] bg-[#1a1a1a] border border-white/10 p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-bold text-white/50 uppercase tracking-wider mb-2 font-mono">
                Direct Email
              </div>
              <a
                href={`mailto:${emailAddress}`}
                className="text-xl sm:text-2xl font-bold text-white hover:text-[#B7FF35] transition-colors break-all block mb-6"
              >
                {emailAddress}
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
              <a
                href={`mailto:${emailAddress}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B7FF35] text-[#111111] text-xs font-bold hover:bg-[#c6ff56] transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 text-white text-xs font-medium hover:bg-white/20 transition-colors cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#B7FF35]" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right: Instagram Card (6 cols) */}
          <div className="lg:col-span-6 rounded-[24px] bg-[#1a1a1a] border border-white/10 p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="text-[11px] font-bold text-white/50 uppercase tracking-wider mb-2 font-mono">
                Social & Direct Message
              </div>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl sm:text-2xl font-bold text-white hover:text-[#B7FF35] transition-colors block mb-6"
              >
                {instagramHandle}
              </a>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white text-xs font-medium hover:bg-[#B7FF35] hover:text-black transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Message on Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
