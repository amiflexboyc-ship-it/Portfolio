import React from "react";
import { ArrowUpRight, Mail } from "lucide-react";

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const TwitterIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.186 8.186 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08s.89 2.41 1.02 2.58c.12.17 1.75 2.67 4.24 3.75.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/>
  </svg>
);

export default function Footer({ onNavigateHome, onNavigatePortfolio, onNavigateSection }) {
  const emailAddress = "amiflexboyc@gmail.com";
  const whatsappUrl =
    "https://wa.me/2349077108987?text=Hello%20ADETECH%2C%20I%20saw%20your%20portfolio!";
  const twitterUrl = "https://x.com/amiflexboyc";
  const githubUrl = "https://github.com/amiflexboyc-ship-it";
  const linkedinUrl = "https://linkedin.com";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#050507] py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-4 lg:gap-12">
          {/* Col 1: Brand */}
          <div className="md:col-span-2">
            <button
              onClick={onNavigateHome}
              className="flex items-center gap-3 text-left cursor-pointer group"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C9A227]/40 bg-gradient-to-br from-[#1c180d] to-[#0A0805] text-[#E0B84C] font-extrabold shadow-lg shadow-[#C9A227]/10 transition group-hover:border-[#E0B84C]">
                A
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-wider text-white">
                  ADE<span className="text-[#E0B84C]">TECH</span>
                </span>
                <span className="block text-[10px] tracking-widest text-zinc-400 uppercase">
                  Web Development & Engineering
                </span>
              </div>
            </button>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
              Building modern, responsive, and innovative digital experiences. Specializing in React, Node.js, and end-to-end full-stack web applications.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 transition hover:bg-emerald-500 hover:text-white"
                aria-label="WhatsApp"
                title="Chat on WhatsApp"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-400 transition hover:border-[#C9A227] hover:text-[#E0B84C]"
                aria-label="GitHub"
                title="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>

              <a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-400 transition hover:border-[#C9A227] hover:text-[#E0B84C]"
                aria-label="Twitter / X"
                title="Twitter / X"
              >
                <TwitterIcon className="h-4 w-4" />
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-400 transition hover:border-[#C9A227] hover:text-[#E0B84C]"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>

              <a
                href={`mailto:${emailAddress}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-400 transition hover:border-[#C9A227] hover:text-[#E0B84C]"
                aria-label="Email"
                title={emailAddress}
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E0B84C]">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              <li>
                <button
                  onClick={onNavigateHome}
                  className="hover:text-white transition cursor-pointer"
                >
                  Home Landing Page
                </button>
              </li>
              <li>
                <button
                  onClick={onNavigatePortfolio}
                  className="hover:text-white transition cursor-pointer"
                >
                  Main Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection("projects")}
                  className="hover:text-white transition cursor-pointer"
                >
                  Featured Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection("skills")}
                  className="hover:text-white transition cursor-pointer"
                >
                  Skills & Tech
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection("services")}
                  className="hover:text-white transition cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection("contact")}
                  className="hover:text-white transition cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Live Applications */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E0B84C]">
              Live Projects
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-zinc-400">
              <li>
                <a
                  href="https://wise-trading-two.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#E0B84C] transition"
                >
                  <span>Wise-Trading</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://ojaconnect-tau.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#E0B84C] transition"
                >
                  <span>OjaConnect</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://skillconnect-wine.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#E0B84C] transition"
                >
                  <span>SkillConnect</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://badan-life-em3d.vercel.app/map"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#E0B84C] transition"
                >
                  <span>Ibadan Life Map</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://sister-bice.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-[#E0B84C] transition"
                >
                  <span>Bice Hairdresser</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-zinc-500 sm:flex-row">
          <p>
            Copyright {new Date().getFullYear()} ADETECH. All rights reserved. Designed & built with React, Vite & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 font-semibold text-[#E0B84C] transition hover:text-white cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
