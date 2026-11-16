import React from "react";
import {
  Menu,
  X,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export default function Navbar({
  activeSection,
  onNavigateSection,
}) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#060608]/90 backdrop-blur-xl transition-all">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* BRAND LOGO */}
          <button
            onClick={() => onNavigateSection("home")}
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
              onClick={() => onNavigateSection("home")}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition cursor-pointer ${activeSection === "home" || !activeSection
                ? "bg-[#C9A227] text-black shadow-sm"
                : "text-zinc-300 hover:text-[#E0B84C]"
                }`}
            >
              Home
            </button>

            <button
              onClick={() => onNavigateSection("projects")}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition cursor-pointer ${activeSection === "projects"
                ? "bg-[#C9A227] text-black shadow-sm"
                : "text-zinc-300 hover:text-[#E0B84C]"
                }`}
            >
              Projects
            </button>

            <button
              onClick={() => onNavigateSection("skills")}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition cursor-pointer ${activeSection === "skills"
                ? "bg-[#C9A227] text-black shadow-sm"
                : "text-zinc-300 hover:text-[#E0B84C]"
                }`}
            >
              Skills
            </button>

            <button
              onClick={() => onNavigateSection("services")}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition cursor-pointer ${activeSection === "services"
                ? "bg-[#C9A227] text-black shadow-sm"
                : "text-zinc-300 hover:text-[#E0B84C]"
                }`}
            >
              Services
            </button>

            <button
              onClick={() => onNavigateSection("about")}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition cursor-pointer ${activeSection === "about"
                ? "bg-[#C9A227] text-black shadow-sm"
                : "text-zinc-300 hover:text-[#E0B84C]"
                }`}
            >
              About
            </button>

            <button
              onClick={() => onNavigateSection("contact")}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold transition cursor-pointer ${activeSection === "contact"
                ? "bg-[#C9A227] text-black shadow-sm"
                : "text-zinc-300 hover:text-[#E0B84C]"
                }`}
            >
              Contact
            </button>
          </div>

          {/* RIGHT ACTION BUTTONS */}
          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={() => onNavigateSection("contact")}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#C9A227] to-[#E0B84C] px-5 py-2.5 text-xs font-bold text-black shadow-lg shadow-[#C9A227]/20 transition hover:brightness-110 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Get In Touch</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
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
              {[
                { label: "Home", target: "home" },
                { label: "Projects", target: "projects" },
                { label: "Skills", target: "skills" },
                { label: "Services", target: "services" },
                { label: "About", target: "about" },
                { label: "Contact", target: "contact" },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    onNavigateSection(item.target);
                    setMenuOpen(false);
                  }}
                  className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition cursor-pointer ${activeSection === item.target || (item.target === "home" && !activeSection)
                    ? "bg-[#C9A227]/20 text-[#E0B84C]"
                    : "text-zinc-300 hover:bg-[#C9A227]/10 hover:text-[#E0B84C]"
                    }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="h-4 w-4 text-[#C9A227]/60" />
                </button>
              ))}

              <div className="mt-4 flex flex-col gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    onNavigateSection("contact");
                    setMenuOpen(false);
                  }}
                  className="rounded-xl bg-gradient-to-r from-[#C9A227] to-[#E0B84C] py-3 text-center text-sm font-bold text-black cursor-pointer"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
  );
}
