import React from "react";
import {
  ArrowRight,
  ExternalLink,
  Code2,
  Server,
  Layers,
  Sparkles,
  Zap,
  Globe,
  Database,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  ArrowUpRight,
  Send,
  MessageSquare,
} from "lucide-react";

export default function HomeLanding({ onNavigatePortfolio, onNavigateSection }) {
  const whatsappUrl =
    "https://wa.me/2349077108987?text=Hello%20ADETECH%2C%20I%20would%20like%20to%20discuss%20a%20project!";

  const liveProjects = [
    {
      id: "wise-trading",
      name: "Wise-Trading",
      tagline: "Cryptocurrency Trading & Asset Portfolio Platform",
      url: "https://wise-trading-two.vercel.app/",
      badge: "Live Full-Stack App",
      summary:
        "High-performance cryptocurrency trading simulation and portfolio dashboard with real-time market data, interactive asset tracking, authentication, and admin metrics.",
      technologies: ["React", "Node.js", "Express", "Tailwind CSS", "REST API"],
      highlights: [
        "Live market asset simulation and analytics",
        "Encrypted authentication and session management",
        "Administrative dashboard and portfolio controls",
      ],
      metrics: "Live on Vercel",
    },
    {
      id: "ojaconnect",
      name: "OjaConnect",
      tagline: "Lagos Foodstuff & Everyday Essentials Marketplace",
      url: "https://ojaconnect-tau.vercel.app/",
      badge: "Live Marketplace Platform",
      summary:
        "Dynamic digital commerce platform connecting shoppers with verified local foodstuff merchants across Lagos. Features catalog search, real-time cart, and seller order dispatch.",
      technologies: ["React", "Tailwind CSS", "JavaScript ES6+", "REST API", "Vite"],
      highlights: [
        "Foodstuff catalog with localized vendor discovery",
        "Real-time interactive shopping cart and checkout",
        "Mobile-first responsive UX with ultra-fast loading",
      ],
      metrics: "Live on Vercel",
    },
    {
      id: "skillconnect",
      name: "SkillConnect",
      tagline: "Premier Freelance & Talent Marketplace Platform",
      url: "https://skillconnect-wine.vercel.app/",
      badge: "Live Talent Marketplace",
      summary:
        "Global talent discovery catalog connecting top software engineering and creative professionals with international clients. Features interactive profile portfolios and inquiry flows.",
      technologies: ["React", "Node.js", "Express", "Tailwind CSS", "REST API"],
      highlights: [
        "Interactive talent showcases & portfolio profiles",
        "Streamlined service inquiry and matchmaking pipeline",
        "Scalable responsive interface with fast client rendering",
      ],
      metrics: "Live on Vercel",
    },
    {
      id: "ibadan-life",
      name: "Ibadan Life",
      tagline: "Interactive City Map & Life Simulator Web App",
      url: "https://badan-life-em3d.vercel.app/map",
      badge: "Live Interactive Map",
      summary:
        "Immersive geospatial interactive city map and life simulator set in Ibadan, Oyo State. Features real-time landmark waypoints, cultural discovery hubs, and responsive game-engine architecture.",
      technologies: ["React", "Tailwind CSS", "Interactive Canvas", "Vite"],
      highlights: [
        "Interactive city map with clickable waypoints & landmarks",
        "Cultural simulation mechanics and exploration systems",
        "High-speed client-side rendering with fluid responsiveness",
      ],
      metrics: "Live on Vercel",
    },
  ];

  const corePillars = [
    {
      icon: Code2,
      title: "Modern Frontend Engineering",
      desc: "Pixel-perfect, component-driven interfaces built with React, modern JavaScript, and Tailwind CSS. Focused on intuitive usability and fluid motion.",
    },
    {
      icon: Server,
      title: "Resilient Backend Architecture",
      desc: "Robust APIs, clean server controllers, secure authentication, and data integrity with Node.js, Express, MongoDB, and Firebase.",
    },
    {
      icon: Zap,
      title: "Speed, SEO & Optimization",
      desc: "Lightweight bundles, optimized rendering, search-engine visibility, and exceptional Core Web Vitals across every device viewport.",
    },
    {
      icon: Layers,
      title: "End-to-End Delivery",
      desc: "From initial system architecture and wireframing to continuous deployment, hosting on Vercel, and scalable database schemas.",
    },
  ];

  const quickStats = [
    { label: "Architecture", value: "Full-Stack" },
    { label: "Frontend Reactivity", value: "React 19" },
    { label: "Deployment", value: "Vercel / Cloud" },
    { label: "Design System", value: "Tailwind CSS" },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute top-10 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#C9A227]/12 blur-[140px]" />
        <div className="absolute top-[35%] right-[-10%] h-[450px] w-[500px] rounded-full bg-[#E0B84C]/8 blur-[130px]" />
        <div className="absolute bottom-20 left-[-10%] h-[450px] w-[500px] rounded-full bg-[#C9A227]/8 blur-[130px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* HERO SECTION */}
      <section className="relative z-10 px-6 pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="mx-auto max-w-6xl text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 px-4 py-1.5 text-xs font-semibold text-[#F3D47A] shadow-inner backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>Available for Full-Stack & Web Engineering</span>
          </div>

          {/* Company Brand Callout */}
          <div className="mt-8">
            <span className="text-xs font-bold tracking-[0.35em] uppercase text-[#E0B84C]">
              ADETECH
            </span>
          </div>

          {/* Primary Headlines as Requested */}
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-[#F9E79F] via-[#E0B84C] to-[#C9A227] bg-clip-text text-transparent">
              ADETECH
            </span>
          </h1>

          <p className="mt-4 text-xl font-semibold tracking-wide text-zinc-200 sm:text-2xl md:text-3xl">
            Web Development & Engineering
          </p>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-zinc-300 sm:text-lg md:text-xl">
            Building modern, responsive, and innovative digital experiences.
          </p>

          {/* Hero CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {/* The primary button explicitly requested: [ View My Portfolio -> ] */}
            <button
              onClick={onNavigatePortfolio}
              className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#C9A227] to-[#E0B84C] px-8 py-4 text-base font-bold text-black shadow-xl shadow-[#C9A227]/25 transition duration-300 hover:scale-105 hover:brightness-110 active:scale-95 cursor-pointer"
            >
              <span>View My Portfolio</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>

            {/* Quick action to explore live links */}
            <a
              href="#live-projects"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-7 py-4 text-base font-semibold text-zinc-200 backdrop-blur-md transition hover:border-[#C9A227]/50 hover:bg-[#C9A227]/10 hover:text-[#E0B84C]"
            >
              <span>Explore Live Projects</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            {/* Direct WhatsApp Consultation */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-6 py-4 text-base font-semibold text-emerald-400 backdrop-blur-md transition hover:border-emerald-400 hover:bg-emerald-500/20 hover:text-white"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-16 grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-[#0d0d12]/70 p-6 backdrop-blur-md sm:grid-cols-4 md:mt-20">
            {quickStats.map((item, i) => (
              <div
                key={i}
                className="text-center sm:border-r sm:border-white/10 sm:last:border-none"
              >
                <div className="text-sm font-semibold tracking-wide text-zinc-400 uppercase">
                  {item.label}
                </div>
                <div className="mt-1 text-lg font-bold text-[#E0B84C] sm:text-xl">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED LIVE APPS SPOTLIGHT (WISE-TRADING & OJACONNECT) */}
      <section id="live-projects" className="relative z-10 px-6 py-20 border-t border-white/[0.08] bg-[#08080c]/80">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#E0B84C]">
              Featured Live Applications
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Engineered for Real-World Impact
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-300">
              Explore active production web applications developed by ADETECH. Click below to launch live deployments.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {liveProjects.map((project) => (
              <div
                key={project.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#0f0e15] p-7 transition duration-300 hover:-translate-y-1.5 hover:border-[#C9A227]/60 hover:shadow-2xl hover:shadow-[#C9A227]/10"
              >
                <div>
                  {/* Top Bar with Badge and Status */}
                  <div className="flex items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
                    <span className="rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 px-3 py-1 text-xs font-semibold text-[#F3D47A]">
                      {project.badge}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      {project.metrics}
                    </span>
                  </div>

                  {/* Project Title & Tagline */}
                  <h3 className="mt-5 text-2xl font-bold text-white transition group-hover:text-[#E0B84C]">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-zinc-400">
                    {project.tagline}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                    {project.summary}
                  </p>

                  {/* Highlights */}
                  <div className="mt-5 space-y-2 border-t border-white/[0.06] pt-4">
                    {project.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#E0B84C]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-[#C9A227]/20 bg-[#C9A227]/5 px-2.5 py-1 text-[11px] font-medium text-[#F3D47A]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Link Button */}
                <div className="mt-8 border-t border-white/[0.08] pt-5 flex items-center justify-between">
                  <span className="text-xs text-zinc-400 font-mono">
                    {project.url.replace("https://", "")}
                  </span>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#C9A227] to-[#E0B84C] px-5 py-2.5 text-xs font-bold text-black shadow-md shadow-[#C9A227]/20 transition hover:brightness-110 hover:scale-105 active:scale-95"
                  >
                    <span>Launch Live App</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Quick link to main portfolio */}
          <div className="mt-12 text-center">
            <button
              onClick={onNavigatePortfolio}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#E0B84C] transition hover:text-white group cursor-pointer"
            >
              <span>View all projects, client work & codebases in the full portfolio</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES AT ADETECH */}
      <section className="relative z-10 px-6 py-24 border-t border-white/[0.08]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#E0B84C]">
              What We Do
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Web Development & Engineering Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-300">
              Modern engineering practices built around clean code, speed, responsive layouts, and rock-solid architecture.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {corePillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-[#0d0d12]/80 p-6 backdrop-blur transition hover:border-[#C9A227]/50 hover:bg-[#121118]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A227]/15 text-[#E0B84C]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-300">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="relative z-10 px-6 py-20 border-t border-white/[0.08] bg-[#0c0b11]">
        <div className="mx-auto max-w-5xl rounded-3xl border border-[#C9A227]/30 bg-gradient-to-br from-[#18150c] via-[#0f0e13] to-[#08080a] p-8 text-center sm:p-12 md:p-16 shadow-2xl shadow-[#C9A227]/10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-3.5 py-1 text-xs font-semibold text-[#F3D47A]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Discover the Complete Portfolio</span>
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Explore All Projects, Skills & Services
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            Take a deep dive into my complete technical portfolio featuring case studies, frontend and backend skills, service offerings, and direct contact options.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onNavigatePortfolio}
              className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#C9A227] to-[#E0B84C] px-8 py-4 text-base font-bold text-black shadow-lg shadow-[#C9A227]/25 transition hover:brightness-110 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>View My Portfolio</span>
              <ArrowRight className="h-5 w-5" />
            </button>

            <button
              onClick={() => onNavigateSection("contact")}
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-7 py-4 text-base font-semibold text-white backdrop-blur transition hover:border-[#C9A227]/50 hover:bg-[#C9A227]/10 hover:text-[#E0B84C] cursor-pointer"
            >
              <Send className="h-4 w-4" />
              <span>Contact ADETECH</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
