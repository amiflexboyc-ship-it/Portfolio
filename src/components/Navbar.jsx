import React from "react";
import {
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

// Crisp SVG Icons for GitHub, LinkedIn, Twitter/X, and WhatsApp
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

export default function Navbar({
  currentView,
  onNavigateHome,
  onNavigatePortfolio,
  onNavigateSection,
}) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const emailAddress = "amiflexboyc@gmail.com";
  const whatsappUrl =
    "https://wa.me/2349077108987?text=Hello%20ADETECH%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!";
  const twitterUrl = "https://x.com/amiflexboyc";
  const githubUrl = "https://github.com/amiflexboyc-ship-it";
  const linkedinUrl = "https://linkedin.com";

  return (
    <>
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="relative z-50 border-b border-[#C9A227]/20 bg-[#0c0c10]/95 px-4 py-2 text-center text-xs tracking-wide backdrop-blur-md">
        <span className="inline-flex items-center gap-2 text-zinc-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <strong className="text-[#E0B84C]">ADETECH Engineering:</strong> Open for full-stack software development & freelance web solutions.
        </span>
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#060608]/90 backdrop-blur-xl transition-all">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* BRAND LOGO */}
          <button
            onClick={onNavigateHome}
            className="group flex items-center gap-3 text-left cursor-pointer"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C9A227]/40 bg-gradient-to-br from-[#1c180d] to-[#0A0805] text-[#E0B84C] font-extrabold shadow-lg shadow-[#C9A227]/10 transition group-hover:scale-105 group-hover:border-[#E0B84C]">
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

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 backdrop-blur-md md:flex">
            <button
              onClick={onNavigateHome}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition cursor-pointer ${
                currentView === "home"
                  ? "bg-[#C9A227] text-black shadow-sm"
                  : "text-zinc-300 hover:text-[#E0B84C]"
              }`}
            >
              Home
            </button>

            <button
              onClick={onNavigatePortfolio}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition cursor-pointer ${
                currentView === "portfolio"
                  ? "bg-[#C9A227] text-black shadow-sm"
                  : "text-zinc-300 hover:text-[#E0B84C]"
              }`}
            >
              Portfolio
            </button>

            <button
              onClick={() => onNavigateSection("projects")}
              className="rounded-full px-4 py-1.5 text-xs font-medium text-zinc-300 transition hover:text-[#E0B84C] cursor-pointer"
            >
              Projects
            </button>

            <button
              onClick={() => onNavigateSection("skills")}
              className="rounded-full px-4 py-1.5 text-xs font-medium text-zinc-300 transition hover:text-[#E0B84C] cursor-pointer"
            >
              Skills
            </button>

            <button
              onClick={() => onNavigateSection("services")}
              className="rounded-full px-4 py-1.5 text-xs font-medium text-zinc-300 transition hover:text-[#E0B84C] cursor-pointer"
            >
              Services
            </button>

            <button
              onClick={() => onNavigateSection("contact")}
              className="rounded-full px-4 py-1.5 text-xs font-medium text-zinc-300 transition hover:text-[#E0B84C] cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* RIGHT ACTION BUTTONS */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-zinc-400 transition hover:border hover:border-[#C9A227]/30 hover:bg-[#C9A227]/10 hover:text-[#E0B84C]"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GithubIcon className="h-4 w-4" />
            </a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-zinc-400 transition hover:border hover:border-[#C9A227]/30 hover:bg-[#C9A227]/10 hover:text-[#E0B84C]"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-400 transition hover:bg-emerald-600 hover:text-white"
              aria-label="WhatsApp"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              <span>WhatsApp</span>
            </a>

            {currentView === "home" ? (
              <button
                onClick={onNavigatePortfolio}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#C9A227] to-[#E0B84C] px-5 py-2.5 text-xs font-bold text-black shadow-lg shadow-[#C9A227]/20 transition hover:brightness-110 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>View Portfolio</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            ) : (
              <button
                onClick={onNavigateHome}
                className="inline-flex items-center gap-2 rounded-xl border border-[#C9A227]/40 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-[#E0B84C] transition hover:border-[#E0B84C] hover:bg-[#C9A227]/15 cursor-pointer"
              >
                <span>Back to Home</span>
              </button>
            )}
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-200 transition hover:border-[#C9A227]/50 hover:text-[#E0B84C] md:hidden cursor-pointer"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {menuOpen && (
          <div className="border-b border-[#C9A227]/20 bg-[#0A0805]/98 px-6 py-6 backdrop-blur-2xl md:hidden">
            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  onNavigateHome();
                  setMenuOpen(false);
                }}
                className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition cursor-pointer ${
                  currentView === "home"
                    ? "bg-[#C9A227]/20 text-[#E0B84C]"
                    : "text-zinc-300 hover:bg-[#C9A227]/10 hover:text-[#E0B84C]"
                }`}
              >
                <span>Home Landing Page</span>
                <ChevronRight className="h-4 w-4 text-[#C9A227]/60" />
              </button>

              <button
                onClick={() => {
                  onNavigatePortfolio();
                  setMenuOpen(false);
                }}
                className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition cursor-pointer ${
                  currentView === "portfolio"
                    ? "bg-[#C9A227]/20 text-[#E0B84C]"
                    : "text-zinc-300 hover:bg-[#C9A227]/10 hover:text-[#E0B84C]"
                }`}
              >
                <span>Main Portfolio</span>
                <ChevronRight className="h-4 w-4 text-[#C9A227]/60" />
              </button>

              {[
                { label: "Projects", target: "projects" },
                { label: "Skills", target: "skills" },
                { label: "Services", target: "services" },
                { label: "Contact", target: "contact" },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    onNavigateSection(item.target);
                    setMenuOpen(false);
                  }}
                  className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-zinc-300 transition hover:bg-[#C9A227]/10 hover:text-[#E0B84C] cursor-pointer"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="h-4 w-4 text-[#C9A227]/60" />
                </button>
              ))}

              <div className="mt-4 flex flex-col gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    onNavigatePortfolio();
                    setMenuOpen(false);
                  }}
                  className="rounded-xl bg-gradient-to-r from-[#C9A227] to-[#E0B84C] py-3 text-center text-sm font-bold text-black"
                >
                  View My Portfolio
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600/20 border border-emerald-500/40 py-3 text-sm font-semibold text-emerald-400"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
