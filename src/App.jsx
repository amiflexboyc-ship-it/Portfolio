import { useState } from "react";
import portfolio from "./assets/portfolio.png";
import {
  ExternalLink,
  Code2,
  Sparkles,
  Terminal,
  CheckCircle2,
  ChevronRight,
  Briefcase,
  MapPin,
  Download,
  Copy,
  Check,
  Menu,
  X,
  ArrowUpRight,
  Layers,
  Cpu,
  Database,
  Globe,
  Smartphone,
  Server,
  Send,
  ArrowRight,
  Star,
  User,
  BookOpen,
  Clock,
  ShieldCheck,
  Mail,
} from "lucide-react";

// Crisp SVG Icons for GitHub, LinkedIn, and X/Twitter
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

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [skillCategory, setSkillCategory] = useState("all");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Full-Stack Web App",
    message: "",
  });

  const emailAddress = "adekunle.dev@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({ name: "", email: "", service: "Full-Stack Web App", message: "" });
      setTimeout(() => setFormSubmitted(false), 5000);
    }, 1000);
  };

  const stats = [
    { value: "3+", label: "Years Experience", detail: "Developing web applications" },
    { value: "15+", label: "Projects Completed", detail: "Frontend & Full-Stack" },
    { value: "100%", label: "Client Satisfaction", detail: "Clean, responsive results" },
    { value: "10+", label: "Technologies", detail: "Modern development stack" },
  ];

  const skillCategories = [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend & Database" },
    { id: "tools", name: "Tools & Workflow" },
  ];

  const skillsData = [
    { name: "React", category: "frontend", level: "Advanced", icon: Globe, desc: "Hooks, Router, State & Context" },
    { name: "JavaScript (ES6+)", category: "frontend", level: "Advanced", icon: Terminal, desc: "Async/Await, DOM, Modern JS" },
    { name: "Tailwind CSS", category: "frontend", level: "Expert", icon: Layers, desc: "Custom themes, responsiveness" },
    { name: "HTML5 & CSS3", category: "frontend", level: "Expert", icon: Code2, desc: "Semantic tags, CSS Grid, Flexbox" },
    { name: "Node.js", category: "backend", level: "Advanced", icon: Server, desc: "Runtime, Event Loop, File I/O" },
    { name: "Express.js", category: "backend", level: "Advanced", icon: Cpu, desc: "REST APIs, Middleware, Auth" },
    { name: "MongoDB", category: "backend", level: "Intermediate", icon: Database, desc: "Mongoose, Schema Modeling" },
    { name: "Firebase", category: "backend", level: "Intermediate", icon: Sparkles, desc: "Auth, Firestore, Hosting" },
    { name: "REST APIs", category: "backend", level: "Advanced", icon: Globe, desc: "Endpoints, JSON, Status Codes" },
    { name: "Git & GitHub", category: "tools", level: "Advanced", icon: Terminal, desc: "Branching, Pull Requests, CI/CD" },
    { name: "Responsive Design", category: "frontend", level: "Expert", icon: Smartphone, desc: "Mobile-first, cross-browser" },
    { name: "Postman & Vite", category: "tools", level: "Advanced", icon: Code2, desc: "API testing & rapid tooling" },
  ];

  const filteredSkills =
    skillCategory === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === skillCategory);

  const services = [
    {
      icon: Globe,
      title: "Frontend Development",
      description:
        "Building pixel-perfect, lightning-fast, and accessible user interfaces with React, modern JavaScript, and Tailwind CSS.",
      features: ["Single Page Applications (SPAs)", "Fluid Mobile-First Design", "State Management & Interactions"],
    },
    {
      icon: Server,
      title: "Backend & RESTful APIs",
      description:
        "Architecting clean, scalable server applications with Node.js and Express that safely handle business logic and external integrations.",
      features: ["Custom REST API Endpoints", "JWT & Session Authentication", "Performance & Error Handling"],
    },
    {
      icon: Database,
      title: "Database Architecture",
      description:
        "Designing structured data models, queries, and persistence layers using MongoDB, Mongoose, and Firebase solutions.",
      features: ["Document & Schema Modeling", "Firebase Realtime / Firestore", "Secure Data Validation"],
    },
    {
      icon: ShieldCheck,
      title: "Full-Stack Web Solutions",
      description:
        "Delivering end-to-end applications from database to interactive UI, optimized for security, SEO, and fast load times.",
      features: ["End-to-End Implementation", "Vite & Modern Tooling", "Deployment & Maintenance"],
    },
  ];

  const projects = [
    {
      id: "wisetrade",
      title: "WiseTrade Crypto Platform",
      category: "fullstack",
      badge: "Full-Stack App",
      description:
        "A feature-rich cryptocurrency trading simulation and portfolio dashboard with secure user authentication, real-time market metrics, balance management, and an administrative control panel.",
      keyPoints: [
        "User authentication and encrypted session storage",
        "Interactive market asset overview and transaction history",
        "Administrative dashboard for platform management",
      ],
      technologies: ["React", "Node.js", "Express", "Firebase", "MongoDB", "Tailwind CSS"],
      liveUrl: "#projects",
      githubUrl: "https://github.com",
    },
    {
      id: "movieapp",
      title: "CineStream Movie Explorer",
      category: "frontend",
      badge: "Web Application",
      description:
        "An engaging entertainment discovery platform that integrates external REST APIs to showcase trending movies, search by genre or title, display ratings, and deliver an immersive media browsing experience.",
      keyPoints: [
        "Dynamic live search and genre filtering",
        "Rich movie detail views with cast and synopsis",
        "Adaptive grid layout optimized across all screen sizes",
      ],
      technologies: ["React", "REST API", "Tailwind CSS", "JavaScript ES6+"],
      liveUrl: "#projects",
      githubUrl: "https://github.com",
    },
    {
      id: "business",
      title: "Apex Corporate Platform",
      category: "frontend",
      badge: "Commercial Website",
      description:
        "A corporate business website designed with modern aesthetics, fast loading speeds, smooth scroll navigation, and high-converting lead generation forms for commercial clientele.",
      keyPoints: [
        "Conversion-focused layouts and compelling CTAs",
        "Lighthouse 95+ score for accessibility and performance",
        "Custom responsive navigation and micro-interactions",
      ],
      technologies: ["React", "Tailwind CSS", "Modern JavaScript", "Vite"],
      liveUrl: "#projects",
      githubUrl: "https://github.com",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  const workProcess = [
    {
      step: "01",
      title: "Discovery & Strategy",
      desc: "Understanding target audience, core requirements, system goals, and designing the technical architecture.",
    },
    {
      step: "02",
      title: "UI Design & Prototyping",
      desc: "Creating modern, intuitive, and mobile-friendly visual layouts that ensure effortless user experiences.",
    },
    {
      step: "03",
      title: "Clean Code & Integration",
      desc: "Developing frontend components, connecting backend APIs, and establishing secure database models.",
    },
    {
      step: "04",
      title: "Testing & Launch",
      desc: "Testing across browsers and devices, optimizing performance, and deploying to high-availability servers.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#060608] text-[#e4e4e7] selection:bg-[#C9A227] selection:text-black">
      {/* Background ambient lighting */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[550px] w-[750px] -translate-x-1/2 rounded-full bg-[#C9A227]/10 blur-[130px]" />
        <div className="absolute top-[40%] right-[-10%] h-[400px] w-[500px] rounded-full bg-[#E0B84C]/5 blur-[120px]" />
        <div className="absolute bottom-20 left-[-10%] h-[450px] w-[500px] rounded-full bg-[#C9A227]/5 blur-[120px]" />
      </div>

      {/* TOP ANNOUNCEMENT BAR */}
      <div className="relative z-50 border-b border-[#C9A227]/20 bg-[#0c0c10]/90 px-4 py-2 text-center text-xs tracking-wide backdrop-blur-md">
        <span className="inline-flex items-center gap-2 text-zinc-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <strong className="text-[#E0B84C]">Available for hire:</strong> Open for full-time software engineering roles & select freelance projects.
        </span>
      </div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#060608]/85 backdrop-blur-xl transition-all">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* LOGO */}
          <a href="#home" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C9A227]/40 bg-gradient-to-br from-[#1b170b] to-[#0A0805] text-[#E0B84C] font-bold shadow-lg shadow-[#C9A227]/10 transition group-hover:scale-105 group-hover:border-[#E0B84C]">
              A
            </div>
            <div>
              <span className="text-xl font-bold tracking-wider text-white">
                ADE<span className="text-[#E0B84C]">KUNLE</span>
              </span>
              <span className="block text-[10px] tracking-widest text-zinc-400 uppercase">
                Software Engineer
              </span>
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-md md:flex">
            <a href="#home" className="rounded-full px-4 py-1.5 text-sm font-medium text-zinc-300 transition hover:text-[#E0B84C]">
              Home
            </a>
            <a href="#about" className="rounded-full px-4 py-1.5 text-sm font-medium text-zinc-300 transition hover:text-[#E0B84C]">
              About
            </a>
            <a href="#services" className="rounded-full px-4 py-1.5 text-sm font-medium text-zinc-300 transition hover:text-[#E0B84C]">
              Services
            </a>
            <a href="#skills" className="rounded-full px-4 py-1.5 text-sm font-medium text-zinc-300 transition hover:text-[#E0B84C]">
              Skills
            </a>
            <a href="#projects" className="rounded-full px-4 py-1.5 text-sm font-medium text-zinc-300 transition hover:text-[#E0B84C]">
              Projects
            </a>
            <a href="#contact" className="rounded-full px-4 py-1.5 text-sm font-medium text-zinc-300 transition hover:text-[#E0B84C]">
              Contact
            </a>
          </div>

          {/* RIGHT ACTION BUTTONS */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-zinc-400 transition hover:border hover:border-[#C9A227]/30 hover:bg-[#C9A227]/10 hover:text-[#E0B84C]"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-zinc-400 transition hover:border hover:border-[#C9A227]/30 hover:bg-[#C9A227]/10 hover:text-[#E0B84C]"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#C9A227] to-[#E0B84C] px-5 py-2.5 text-sm font-semibold text-black shadow-lg shadow-[#C9A227]/20 transition hover:brightness-110 hover:scale-105 active:scale-95"
            >
              Let's Talk
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-200 transition hover:border-[#C9A227]/50 hover:text-[#E0B84C] md:hidden"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {menuOpen && (
          <div className="border-b border-[#C9A227]/20 bg-[#0A0805]/98 px-6 py-6 backdrop-blur-2xl md:hidden">
            <div className="flex flex-col gap-4">
              {[
                { label: "Home", href: "#home" },
                { label: "About Me", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Skills & Tech", href: "#skills" },
                { label: "Featured Projects", href: "#projects" },
                { label: "Get In Touch", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-zinc-300 transition hover:bg-[#C9A227]/10 hover:text-[#E0B84C]"
                >
                  {item.label}
                  <ChevronRight className="h-4 w-4 text-[#C9A227]/60" />
                </a>
              ))}

              <div className="mt-4 flex gap-3 pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 rounded-xl bg-[#C9A227] py-3 text-center text-sm font-semibold text-black"
                >
                  Contact Me
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center justify-center rounded-xl border border-[#C9A227]/40 px-4 py-3 text-sm text-[#E0B84C]"
                >
                  {copiedEmail ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="relative z-10 px-6 pt-12 pb-20 md:pt-20 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* HERO LEFT CONTENT */}
            <div className="text-center lg:col-span-7 lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 px-4 py-1.5 text-xs font-semibold text-[#F3D47A] shadow-inner">
                <Sparkles className="h-3.5 w-3.5 text-[#E0B84C]" />
                Full-Stack Software Engineer
              </div>

              {/* Main Headline */}
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Building Modern, Scalable{" "}
                <span className="bg-gradient-to-r from-[#F9E79F] via-[#E0B84C] to-[#C9A227] bg-clip-text text-transparent">
                  Web Experiences
                </span>
              </h1>

              {/* Bio Subtitle */}
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg lg:text-xl">
                Hello, I'm <strong className="text-white">Adekunle</strong>. I design and build full-stack web applications combining modern frontend reactivity with resilient backend architecture using <span className="text-[#E0B84C]">React</span>, <span className="text-[#E0B84C]">Node.js</span>, <span className="text-[#E0B84C]">MongoDB</span>, and <span className="text-[#E0B84C]">Firebase</span>.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#C9A227] to-[#E0B84C] px-7 py-3.5 text-base font-semibold text-black shadow-xl shadow-[#C9A227]/25 transition hover:brightness-110 hover:scale-105 active:scale-95"
                >
                  Explore Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#C9A227]/40 bg-white/[0.03] px-6 py-3.5 text-base font-semibold text-[#E0B84C] backdrop-blur transition hover:border-[#E0B84C] hover:bg-[#C9A227]/15 hover:text-white"
                >
                  <Send className="h-4 w-4" />
                  Get In Touch
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3.5 text-sm font-medium text-zinc-300 transition hover:border-[#C9A227]/40 hover:text-[#E0B84C]"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-400" />
                      <span className="text-emerald-400">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social links row */}
              <div className="mt-10 flex items-center justify-center gap-6 lg:justify-start">
                <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  Connect With Me
                </span>
                <div className="h-px w-10 bg-zinc-800" />
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-400 transition hover:border-[#C9A227] hover:text-[#E0B84C]"
                    aria-label="GitHub"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-400 transition hover:border-[#C9A227] hover:text-[#E0B84C]"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-400 transition hover:border-[#C9A227] hover:text-[#E0B84C]"
                    aria-label="Twitter"
                  >
                    <TwitterIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* HERO RIGHT VISUAL */}
            <div className="relative flex justify-center lg:col-span-5">
              <div className="relative">
                {/* Glowing ambient ring */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#C9A227]/40 via-amber-400/20 to-transparent blur-2xl" />

                {/* Decorative outer orbit ring */}
                <div className="absolute -inset-6 rounded-full border border-dashed border-[#C9A227]/25 animate-[spin_40s_linear_infinite]" />

                {/* Profile image container */}
                <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-[#C9A227]/60 bg-[#121216] shadow-2xl shadow-[#C9A227]/20 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                  <img
                    src={portfolio}
                    alt="Adekunle - Full-Stack Developer"
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060608]/60 via-transparent to-transparent" />
                </div>

                {/* Floating Micro-Badge Top Right */}
                <div className="absolute -top-3 -right-3 hidden items-center gap-2 rounded-xl border border-[#C9A227]/40 bg-[#0e0e13]/90 px-3.5 py-2 shadow-xl backdrop-blur-md sm:flex">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#C9A227]/20 text-[#E0B84C]">
                    <Code2 className="h-4 w-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-bold text-white">Frontend & UI</p>
                    <p className="text-[10px] text-zinc-400">React • Tailwind</p>
                  </div>
                </div>

                {/* Floating Micro-Badge Bottom Left */}
                <div className="absolute -bottom-4 -left-4 hidden items-center gap-2 rounded-xl border border-[#C9A227]/40 bg-[#0e0e13]/90 px-3.5 py-2 shadow-xl backdrop-blur-md sm:flex">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                    <Server className="h-4 w-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-bold text-white">Backend Systems</p>
                    <p className="text-[10px] text-zinc-400">Node • MongoDB • Firebase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STATS STRIP */}
          <div className="mt-16 grid grid-cols-2 gap-4 border-y border-white/[0.08] py-8 sm:grid-cols-4 lg:mt-24">
            {stats.map((s, idx) => (
              <div key={idx} className="px-4 text-center sm:border-r sm:border-white/[0.08] sm:last:border-none">
                <p className="text-3xl font-extrabold text-[#E0B84C] sm:text-4xl lg:text-5xl">
                  {s.value}
                </p>
                <p className="mt-1 text-sm font-semibold text-white">{s.label}</p>
                <p className="mt-0.5 text-xs text-zinc-400">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="relative z-10 border-t border-white/[0.06] bg-[#09080d]/60 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#E0B84C]">
                <User className="h-4 w-4" />
                About Adekunle
              </div>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Turning complex problems into elegant digital realities.
              </h2>

              <p className="mt-6 text-base leading-relaxed text-zinc-300">
                I am a dedicated software developer passionate about creating fast, responsive, and reliable web applications. My journey spans the entire web development lifecycle: from drafting clean, accessible UI components in React to engineering resilient server logic with Node.js and managing databases like MongoDB and Firebase.
              </p>

              <p className="mt-4 text-base leading-relaxed text-zinc-400">
                Whether creating interactive dashboards, integrating third-party APIs, or optimizing rendering speed, I emphasize readable code, robust architecture, and mobile-first responsiveness.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-[#0f0e14] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#C9A227]/20 text-[#E0B84C]">
                      <Briefcase className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400">Employment Status</p>
                      <p className="text-sm font-semibold text-white">Open to Opportunities</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#0f0e14] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#C9A227]/20 text-[#E0B84C]">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400">Work Model</p>
                      <p className="text-sm font-semibold text-white">Remote & Worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-xl bg-[#C9A227] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#E0B84C]"
                >
                  Hire Me Today
                </a>
                <a
                  href="#projects"
                  className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#C9A227] hover:text-[#E0B84C]"
                >
                  Review My Work
                </a>
              </div>
            </div>

            {/* Right Core Pillars Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-[#C9A227]/25 bg-gradient-to-b from-[#131219] to-[#0A090E] p-7 shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <h3 className="text-lg font-bold text-[#E0B84C]">Core Engineering Values</h3>
                  <Star className="h-5 w-5 text-[#E0B84C]" />
                </div>

                <div className="mt-6 space-y-5">
                  {[
                    {
                      title: "Performance & Responsiveness",
                      desc: "Lightning-fast page load speeds, mobile optimization, and lightweight assets across any device.",
                    },
                    {
                      title: "Clean & Maintainable Code",
                      desc: "Adhering to modular components, predictable state patterns, and clean repository structures.",
                    },
                    {
                      title: "Secure & Resilient Architecture",
                      desc: "Safeguarding user authentication, input validation, and reliable database operations.",
                    },
                    {
                      title: "Continuous Learning & Agility",
                      desc: "Staying abreast of modern web standards, modern tooling, and best developer practices.",
                    },
                  ].map((pillar, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C9A227]/20 text-[#E0B84C]">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">{pillar.title}</h4>
                        <p className="mt-1 text-xs leading-relaxed text-zinc-400">{pillar.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E0B84C]">
              What I Offer
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Specialized Development Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              Delivering high-value engineering solutions tailored to start-ups, business platforms, and modern web applications.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl border border-white/[0.08] bg-[#0c0c11] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#C9A227]/60 hover:shadow-xl hover:shadow-[#C9A227]/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#C9A227]/30 bg-[#C9A227]/10 text-[#E0B84C] transition-colors group-hover:bg-[#C9A227] group-hover:text-black">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white group-hover:text-[#E0B84C] transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                    {service.description}
                  </p>

                  <div className="mt-6 space-y-2 border-t border-white/[0.06] pt-4">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#E0B84C]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="relative z-10 border-t border-white/[0.06] bg-[#09080e]/70 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E0B84C]">
                Technical Proficiency
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Technologies & Tools I Use
              </h2>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-1.5 backdrop-blur">
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSkillCategory(cat.id)}
                  className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
                    skillCategory === cat.id
                      ? "bg-[#C9A227] text-black shadow-md"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="group relative rounded-xl border border-white/[0.08] bg-[#0c0c11] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#C9A227]/60 hover:bg-[#121118]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#C9A227]/20 bg-[#C9A227]/10 text-[#E0B84C] group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] font-medium text-zinc-400">
                      {skill.level}
                    </span>
                  </div>

                  <h3 className="mt-4 text-base font-bold text-white group-hover:text-[#E0B84C] transition-colors">
                    {skill.name}
                  </h3>

                  <p className="mt-1 text-xs text-zinc-400">
                    {skill.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects" className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E0B84C]">
                Portfolio Showcase
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Featured Projects
              </h2>
            </div>

            {/* Project Category Filter */}
            <div className="flex gap-2 rounded-xl border border-white/10 bg-white/[0.02] p-1.5 backdrop-blur">
              {[
                { id: "all", label: "All Projects" },
                { id: "fullstack", label: "Full-Stack" },
                { id: "frontend", label: "Frontend / Web" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
                    activeTab === tab.id
                      ? "bg-[#C9A227] text-black shadow-md"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c11] transition duration-300 hover:-translate-y-2 hover:border-[#C9A227]/60 hover:shadow-2xl hover:shadow-[#C9A227]/10"
              >
                {/* Browser top-bar mock window styling */}
                <div className="border-b border-white/[0.08] bg-[#121118] px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 px-2.5 py-0.5 text-[10px] font-semibold text-[#F3D47A]">
                    {project.badge}
                  </span>
                </div>

                {/* Project Body */}
                <div className="flex-1 p-6 sm:p-7">
                  <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-[#E0B84C]">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                    {project.description}
                  </p>

                  {/* Highlights list */}
                  <div className="mt-5 space-y-2 border-t border-white/[0.06] pt-4">
                    {project.keyPoints.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#E0B84C]" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Tags */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-[#C9A227]/25 bg-[#C9A227]/5 px-2.5 py-1 text-[11px] font-medium text-[#F3D47A]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="border-t border-white/[0.08] bg-[#09080e] p-5 flex items-center justify-between">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 transition hover:text-white"
                  >
                    <GithubIcon className="h-4 w-4" />
                    Source Code
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E0B84C] transition hover:text-white"
                  >
                    Live Demo
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW PROCESS */}
      <section className="relative z-10 border-t border-white/[0.06] bg-[#09080e]/60 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E0B84C]">
              Methodology
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              How I Bring Ideas to Life
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-zinc-400">
              A structured and transparent development process ensuring seamless execution and timely delivery.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workProcess.map((step) => (
              <div
                key={step.step}
                className="relative rounded-2xl border border-white/[0.08] bg-[#0c0c11] p-6 transition hover:border-[#C9A227]/40"
              >
                <span className="text-4xl font-extrabold text-[#C9A227]/30">
                  {step.step}
                </span>
                <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="relative z-10 border-t border-white/[0.06] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Contact Info */}
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E0B84C]">
                Get In Touch
              </span>

              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Let's create something extraordinary together.
              </h2>

              <p className="mt-5 text-base leading-relaxed text-zinc-300">
                I am currently open to full-time roles, engineering contracts, and freelance projects. Whether you have an idea in mind or need assistance with your existing web application, I'd love to connect.
              </p>

              {/* Direct email quick card */}
              <div className="mt-8 rounded-2xl border border-[#C9A227]/30 bg-gradient-to-br from-[#16140f] to-[#0b0a0e] p-6 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A227]/20 text-[#E0B84C]">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400">Direct Email</p>
                      <a
                        href={`mailto:${emailAddress}`}
                        className="text-sm font-bold text-white hover:text-[#E0B84C] transition-colors"
                      >
                        {emailAddress}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:border-[#C9A227] hover:text-[#E0B84C]"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                {copiedEmail && (
                  <p className="mt-3 text-xs text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Email address copied to clipboard!
                  </p>
                )}
              </div>

              {/* Social Channels */}
              <div className="mt-8 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Profiles & Repositories
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-[#0c0c11] px-5 py-3.5 transition hover:border-[#C9A227]/50 hover:bg-[#121118]"
                  >
                    <div className="flex items-center gap-3">
                      <GithubIcon className="h-5 w-5 text-[#E0B84C]" />
                      <div>
                        <p className="text-sm font-semibold text-white">GitHub</p>
                        <p className="text-xs text-zinc-400">Explore open source code & repositories</p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-zinc-500" />
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-[#0c0c11] px-5 py-3.5 transition hover:border-[#C9A227]/50 hover:bg-[#121118]"
                  >
                    <div className="flex items-center gap-3">
                      <LinkedinIcon className="h-5 w-5 text-[#E0B84C]" />
                      <div>
                        <p className="text-sm font-semibold text-white">LinkedIn</p>
                        <p className="text-xs text-zinc-400">Professional network & recommendations</p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-zinc-500" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-white/[0.08] bg-[#0c0c11] p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                <p className="mt-1 text-sm text-zinc-400">
                  Fill out this form and I will respond to you within 24 hours.
                </p>

                {formSubmitted ? (
                  <div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center">
                    <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-400" />
                    <h4 className="mt-3 text-lg font-bold text-white">Thank You!</h4>
                    <p className="mt-1 text-sm text-zinc-300">
                      Your message has been received. I'll get back to you shortly at {formData.email || "your email"}.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="mt-8 space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Doe"
                          className="mt-2 w-full rounded-xl border border-white/10 bg-[#14141a] px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                          Your Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="mt-2 w-full rounded-xl border border-white/10 bg-[#14141a] px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                        Project / Inquired Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="mt-2 w-full rounded-xl border border-white/10 bg-[#14141a] px-4 py-3 text-sm text-white outline-none transition focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]"
                      >
                        <option value="Full-Stack Web App">Full-Stack Web Application</option>
                        <option value="Frontend Development">Frontend Development (React/Tailwind)</option>
                        <option value="API & Backend">Backend Architecture / API Development</option>
                        <option value="Full-Time Role">Full-Time Software Engineer Role</option>
                        <option value="Other Inquiry">Other Inquiry / Collaboration</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me a bit about your project or role requirements..."
                        className="mt-2 w-full rounded-xl border border-white/10 bg-[#14141a] px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C9A227] to-[#E0B84C] py-3.5 text-base font-semibold text-black shadow-lg shadow-[#C9A227]/20 transition hover:brightness-110 active:scale-95 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/[0.08] bg-[#040406] px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#C9A227]/40 bg-[#1b170b] text-[#E0B84C] font-bold">
              A
            </div>
            <span className="text-lg font-bold tracking-wider text-white">
              ADE<span className="text-[#E0B84C]">KUNLE</span>
            </span>
          </div>

          <p className="text-center text-xs text-zinc-500">
            © {new Date().getFullYear()} Adekunle. All rights reserved. Designed & built with React, Vite & Tailwind CSS.
          </p>

          <a
            href="#home"
            className="flex items-center gap-1.5 text-xs font-semibold text-[#E0B84C] transition hover:text-white"
          >
            Back to Top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;