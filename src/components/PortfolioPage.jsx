import React, { useState } from "react";
import portfolio from "../assets/portfolio.png";
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
  ArrowUpRight,
  Layers,
  Cpu,
  Database,
  Globe,
  Smartphone,
  Server,
  Send,
  ArrowRight,
  User,
  BookOpen,
  Clock,
  ShieldCheck,
  Mail,
  Phone,
  Layout,
  Flame,
  ArrowLeft,
} from "lucide-react";

// Crisp SVG Icons
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

export default function PortfolioPage({ onNavigateHome }) {
  const [activeTab, setActiveTab] = useState("all");
  const [skillCategory, setSkillCategory] = useState("all");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Full-Stack Web App",
    message: "",
  });

  const emailAddress = "amiflexboyc@gmail.com";
  const phoneNumber = "09077108987";
  const formattedPhone = "+234 907 710 8987";
  const whatsappUrl =
    "https://wa.me/2349077108987?text=Hello%20Adekunle%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!";
  const twitterUrl = "https://x.com/amiflexboyc";
  const githubUrl = "https://github.com/amiflexboyc-ship-it";
  const linkedinUrl = "https://linkedin.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      setFormData({
        name: "",
        email: "",
        service: "Full-Stack Web App",
        message: "",
      });
      setTimeout(() => setFormSubmitted(false), 6000);
    }, 1000);
  };

  const stats = [
    { label: "Core Competency", value: "Full-Stack", detail: "Frontend & Backend Systems" },
    { label: "Modern Reactivity", value: "React 19", detail: "Vite, Hooks & Component Logic" },
    { label: "API & Data", value: "Node & Express", detail: "REST APIs, MongoDB & Firebase" },
    { label: "Styling Precision", value: "Tailwind CSS", detail: "Responsive & High-Performance UI" },
  ];

  const skillGroups = [
    {
      category: "frontend",
      categoryName: "Frontend Development",
      skills: [
        { name: "React / React 19", level: "Expert", desc: "Hooks, Context, State, Component Lifecycle" },
        { name: "JavaScript (ES6+)", level: "Advanced", desc: "Async/Await, DOM, Event-Driven, Functional" },
        { name: "Tailwind CSS", level: "Expert", desc: "Responsive Design, Custom Utilities, Glassmorphism" },
        { name: "HTML5 & Semantic Web", level: "Expert", desc: "Accessibility (a11y), SEO Architecture" },
        { name: "CSS3 / Modern Styling", level: "Advanced", desc: "Flexbox, CSS Grid, Transitions, Keyframes" },
        { name: "Vite Tooling", level: "Advanced", desc: "Hot Reload, Build Optimization, Production Bundling" },
      ],
    },
    {
      category: "backend",
      categoryName: "Backend & Systems",
      skills: [
        { name: "Node.js", level: "Advanced", desc: "Runtime Architecture, Event Loop, Server Scripting" },
        { name: "Express.js", level: "Advanced", desc: "RESTful Endpoints, Middleware, Routing, CORS" },
        { name: "REST APIs", level: "Advanced", desc: "JSON Contracts, Status Codes, Error Interceptors" },
        { name: "Firebase Backend", level: "Proficient", desc: "Firestore, Realtime DB, Authentication" },
      ],
    },
    {
      category: "database",
      categoryName: "Database & Cloud",
      skills: [
        { name: "MongoDB", level: "Proficient", desc: "Document Modeling, Querying, Aggregation" },
        { name: "Mongoose ODM", level: "Proficient", desc: "Data Schemas, Validation, Indexes" },
        { name: "Vercel Deployment", level: "Advanced", desc: "Continuous Deployment, Edge Serverless Functions" },
        { name: "Cloud Integration", level: "Proficient", desc: "Asset Storage, Secure Environment Variables" },
      ],
    },
    {
      category: "tools",
      categoryName: "Workflow & Tools",
      skills: [
        { name: "Git & GitHub", level: "Advanced", desc: "Version Control, Branching, Pull Requests" },
        { name: "Responsive UI/UX", level: "Expert", desc: "Mobile-First Design, Breakpoints, Cross-Browser" },
        { name: "Performance Optimization", level: "Advanced", desc: "Asset Compression, Lazy Loading, Clean Bundles" },
        { name: "VS Code & DevTools", level: "Advanced", desc: "Debugging, Network Profiling, DOM Inspection" },
      ],
    },
  ];

  const services = [
    {
      icon: Layout,
      title: "Frontend Development",
      description:
        "Building responsive, high-performance user interfaces in React with reusable modular component architectures and smooth interactions.",
      features: ["Single Page Applications (SPAs)", "Mobile-First Responsive Layouts", "Modern CSS & Tailwind UI"],
    },
    {
      icon: Server,
      title: "Backend API Engineering",
      description:
        "Developing secure, maintainable RESTful services and controllers with Node.js and Express to power client-side web apps.",
      features: ["Custom REST API Architecture", "Authentication & JWT Middleware", "Error Handling & Validation"],
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

  // Updated projects array with 6 comprehensive projects
  const projects = [
    {
      id: "wisetrading",
      title: "Wise-Trading",
      category: "fullstack",
      badge: "Full-Stack Web App",
      description:
        "A feature-rich cryptocurrency trading simulation and portfolio dashboard with secure user authentication, real-time market metrics, balance management, and an administrative control panel.",
      keyPoints: [
        "User authentication and encrypted session storage",
        "Interactive market asset overview and transaction history",
        "Administrative dashboard for platform management",
      ],
      technologies: ["React", "Node.js", "Express", "Firebase", "MongoDB", "Tailwind CSS"],
      liveUrl: "https://wise-trading-two.vercel.app/",
      githubUrl: "https://github.com/amiflexboyc-ship-it",
    },
    {
      id: "ojaconnect",
      title: "OjaConnect",
      category: "fullstack",
      badge: "Marketplace Platform",
      description:
        "A comprehensive digital marketplace connecting shoppers with verified foodstuff sellers across Lagos. Features real-time catalog discovery, shopping cart, merchant listings, and seamless checkout.",
      keyPoints: [
        "Lagos foodstuff marketplace with seller catalog discovery",
        "Real-time cart management, pricing calculations, and order dispatch",
        "Mobile-optimized high-speed interface built with modern architecture",
      ],
      technologies: ["React", "Tailwind CSS", "JavaScript ES6+", "REST API", "Vite"],
      liveUrl: "https://ojaconnect-tau.vercel.app/",
      githubUrl: "https://github.com/amiflexboyc-ship-it",
    },
    {
      id: "skillconnect",
      title: "SkillConnect",
      category: "fullstack",
      badge: "Talent & Freelance Platform",
      description:
        "The premier freelance marketplace platform connecting top-tier talent with high-impact clients worldwide. Features comprehensive profile management, talent discovery catalogs, and direct inquiry flows.",
      keyPoints: [
        "Talent and client matching with interactive profile showcases",
        "Streamlined service listings, dynamic catalog, and inquiry flows",
        "Responsive, high-performance UI built with modern React architecture",
      ],
      technologies: ["React", "Node.js", "Express", "Tailwind CSS", "REST API", "Vite"],
      liveUrl: "https://skillconnect-wine.vercel.app/",
      githubUrl: "https://github.com/amiflexboyc-ship-it",
    },
    {
      id: "ibadan-life",
      title: "Ibadan Life - Interactive Map & RPG",
      category: "frontend",
      badge: "Interactive Map & Game",
      description:
        "An immersive Nigerian Life Simulator and interactive city map web application set in Ibadan, Oyo State. Features real-time landmark navigation, interactive location waypoints, culture hubs, and high-performance game-engine UI.",
      keyPoints: [
        "Interactive geospatial map with clickable landmark waypoints",
        "Dynamic life simulation systems and cultural quest mechanics",
        "Fast client-side rendering with fluid responsiveness across mobile and desktop",
      ],
      technologies: ["React", "Tailwind CSS", "Interactive Canvas/Map", "JavaScript ES6+", "Vite"],
      liveUrl: "https://badan-life-em3d.vercel.app/map",
      githubUrl: "https://github.com/amiflexboyc-ship-it",
    },
    {
      id: "bice-hairdresser",
      title: "Bice Hairdresser",
      category: "frontend",
      badge: "Commercial Web Application",
      description:
        "A luxury African hair salon and beauty platform in Westcliff-on-Sea, Essex. Delivers an opulent client experience featuring interactive styling menus, bridal glam showcases, and seamless appointment booking.",
      keyPoints: [
        "Bespoke service showcase for knotless braids, cornrows, and bridal styling",
        "Mobile-first consultation booking and rapid inquiry integration",
        "Refined luxury aesthetic with smooth micro-interactions and top-tier performance",
      ],
      technologies: ["React", "Tailwind CSS", "JavaScript ES6+", "Vite"],
      liveUrl: "https://sister-bice.vercel.app/",
      githubUrl: "https://github.com/amiflexboyc-ship-it",
    },
    {
      id: "devforge-cloud",
      title: "DevForge Cloud Suite",
      category: "fullstack",
      badge: "Cloud Architecture",
      description:
        "Scalable developer toolkit and administrative system featuring real-time API monitoring, role-based authentication, database query analytics, and encrypted webhook controllers.",
      keyPoints: [
        "Live API performance monitoring and payload inspector",
        "Granular user permissions and JWT authentication middleware",
        "Database schema explorer with automated backup triggers",
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "REST API", "Tailwind CSS"],
      liveUrl: "#contact",
      githubUrl: "https://github.com/amiflexboyc-ship-it",
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
    <div className="relative">
      {/* Return to Landing Page Banner */}
      <div className="relative z-20 border-b border-white/[0.08] bg-[#0c0c12]/80 px-6 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <button
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#E0B84C] transition hover:text-white cursor-pointer"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return to ADETECH Home Landing</span>
          </button>

          <span className="text-xs text-zinc-400 font-medium hidden sm:inline-block">
            Main Engineering Portfolio & Case Studies
          </span>
        </div>
      </div>

      {/* PORTFOLIO HERO HEADER */}
      <section id="portfolio-overview" className="relative z-10 px-6 pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* HERO LEFT CONTENT */}
            <div className="text-center lg:col-span-7 lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 px-4 py-1.5 text-xs font-semibold text-[#F3D47A] shadow-inner">
                <Sparkles className="h-3.5 w-3.5 text-[#E0B84C]" />
                Full-Stack Software Engineer & Web Developer
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
                Welcome to my engineering portfolio. I am <strong className="text-white">Adekunle</strong> at <strong className="text-[#E0B84C]">ADETECH</strong>. I design and build full-stack web applications combining modern frontend reactivity with resilient backend architecture using <span className="text-[#E0B84C]">React</span>, <span className="text-[#E0B84C]">Node.js</span>, <span className="text-[#E0B84C]">MongoDB</span>, and <span className="text-[#E0B84C]">Firebase</span>.
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

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-5 py-3.5 text-sm font-semibold text-emerald-400 backdrop-blur transition hover:border-emerald-400 hover:bg-emerald-500/20 hover:text-white"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>WhatsApp Chat</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3.5 text-sm font-medium text-zinc-300 transition hover:border-[#C9A227]/40 hover:text-[#E0B84C] cursor-pointer"
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
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  Connect With Me
                </span>
                <div className="hidden sm:block h-px w-8 bg-zinc-800" />
                <div className="flex items-center gap-2.5">
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
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 transition hover:border-emerald-400 hover:bg-emerald-500 hover:text-white"
                    aria-label="WhatsApp"
                    title="Chat on WhatsApp"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-400 transition hover:border-[#C9A227] hover:text-[#E0B84C]"
                    aria-label="Email"
                    title={`Email: ${emailAddress}`}
                  >
                    <Mail className="h-4 w-4" />
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
                    alt="Adekunle - Full-Stack Developer at ADETECH"
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

      {/* FEATURED PROJECTS SECTION */}
      <section id="projects" className="relative z-10 px-6 py-24 border-t border-white/[0.08]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E0B84C]">
                Portfolio Showcase
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Featured Projects
              </h2>
              <p className="mt-2 text-sm text-zinc-400">
                Direct live demonstrations and repository source codes of key applications.
              </p>
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
                  className={`rounded-lg px-4 py-2 text-xs font-semibold transition cursor-pointer ${
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
                  {project.liveUrl && project.liveUrl.startsWith("http") ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/title inline-flex items-center gap-2 text-2xl font-bold text-white transition-colors hover:text-[#E0B84C]"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight className="h-5 w-5 opacity-0 transition-all group-hover/title:opacity-100 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 text-[#E0B84C]" />
                    </a>
                  ) : (
                    <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-[#E0B84C]">
                      {project.title}
                    </h3>
                  )}

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
                    href={project.githubUrl || githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 transition hover:text-white"
                  >
                    <GithubIcon className="h-4 w-4" />
                    Source Code
                  </a>

                  {project.liveUrl && project.liveUrl.startsWith("http") ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[#C9A227]/40 bg-[#C9A227]/10 px-3.5 py-1.5 text-xs font-semibold text-[#E0B84C] transition hover:border-[#E0B84C] hover:bg-[#C9A227] hover:text-black"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <a
                      href={project.liveUrl || "#contact"}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-zinc-300 transition hover:border-[#C9A227]/40 hover:text-[#E0B84C]"
                    >
                      <span>Request Demo</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS & TECHNICAL STACK */}
      <section id="skills" className="relative z-10 border-t border-white/[0.06] bg-[#09080e]/70 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E0B84C]">
              Technical Repertoire
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Skills & Engineering Expertise
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400">
              Modern frontend architecture, resilient backend APIs, and structured database engineering.
            </p>

            {/* Category Filter */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {[
                { id: "all", label: "All Skills" },
                { id: "frontend", label: "Frontend" },
                { id: "backend", label: "Backend" },
                { id: "database", label: "Database" },
                { id: "tools", label: "Tools & Deployment" },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSkillCategory(cat.id)}
                  className={`rounded-xl px-4 py-2 text-xs font-semibold transition cursor-pointer ${
                    skillCategory === cat.id
                      ? "bg-[#C9A227] text-black shadow-lg shadow-[#C9A227]/20"
                      : "border border-white/10 bg-white/[0.03] text-zinc-300 hover:border-[#C9A227]/40 hover:text-[#E0B84C]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-14 space-y-12">
            {skillGroups
              .filter((group) => skillCategory === "all" || group.category === skillCategory)
              .map((group) => (
                <div key={group.category} className="rounded-2xl border border-white/[0.08] bg-[#0b0a10] p-6 sm:p-8">
                  <div className="flex items-center gap-3 border-b border-white/[0.06] pb-4">
                    <div className="h-2 w-2 rounded-full bg-[#E0B84C]" />
                    <h3 className="text-lg font-bold text-white">{group.categoryName}</h3>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="rounded-xl border border-white/[0.06] bg-[#121117]/60 p-4 transition hover:border-[#C9A227]/40 hover:bg-[#16151f]"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-white">{skill.name}</span>
                          <span className="rounded-md border border-[#C9A227]/30 bg-[#C9A227]/10 px-2 py-0.5 text-[10px] font-semibold text-[#F3D47A]">
                            {skill.level}
                          </span>
                        </div>
                        <p className="mt-2 text-xs text-zinc-400">{skill.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="relative z-10 px-6 py-24 border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E0B84C]">
              What I Offer
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Services & Engineering Solutions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400">
              End-to-end web engineering delivered with clean code, structured APIs, and modern aesthetics.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0c0c11] p-6 transition duration-300 hover:-translate-y-1.5 hover:border-[#C9A227]/50 hover:shadow-xl"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A227]/10 text-[#E0B84C] transition group-hover:bg-[#C9A227] group-hover:text-black">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-white group-hover:text-[#E0B84C] transition">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                      {service.description}
                    </p>
                  </div>

                  <ul className="mt-6 space-y-2 border-t border-white/[0.06] pt-4">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-zinc-400">
                        <Check className="h-3.5 w-3.5 text-[#E0B84C]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
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
                      <p className="text-xs text-zinc-400">Professional Status</p>
                      <p className="text-sm font-semibold text-white">Full-Stack Engineer</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-[#0f0e14] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400">Availability</p>
                      <p className="text-sm font-semibold text-emerald-400">Ready for Immediate Engagement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Information Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-[#0d0d12] p-8 shadow-2xl">
                <h3 className="text-lg font-bold text-white">Key Engineering Highlights</h3>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C9A227]/20 text-[#E0B84C]">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Component-Driven Architecture</p>
                      <p className="text-xs text-zinc-400">Reusable, cleanly separated UI modules using modern React best practices.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C9A227]/20 text-[#E0B84C]">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Production REST APIs</p>
                      <p className="text-xs text-zinc-400">Express servers with robust routing, error handling, and clean database hooks.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C9A227]/20 text-[#E0B84C]">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Cross-Device Responsiveness</p>
                      <p className="text-xs text-zinc-400">Fluid layouts tested for phones, tablets, laptops, and large desktop screens.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-white/[0.08] pt-6 flex flex-col gap-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C9A227] to-[#E0B84C] py-3 text-sm font-bold text-black shadow-md hover:brightness-110 transition"
                  >
                    <span>Connect with Adekunle</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
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
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Engineering Work Process
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-400">
              A structured approach from initial idea to high-availability deployment.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {workProcess.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-white/[0.08] bg-[#0c0c11] p-6 transition duration-300 hover:border-[#C9A227]/50"
              >
                <div className="text-4xl font-extrabold text-[#C9A227]/40 font-mono">
                  {step.step}
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">{step.title}</h3>
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
            {/* Contact Details Left */}
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#E0B84C]">
                Get In Touch
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Let's discuss your next project.
              </h2>
              <p className="mt-4 text-base text-zinc-400">
                I am currently open to full-time roles, engineering contracts, and freelance projects. Whether you have an idea in mind or need assistance with your existing web application, I'd love to connect.
              </p>

              {/* Direct Info Cards */}
              <div className="mt-8 space-y-4">
                {/* Email card */}
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-[#0f0e15] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#C9A227]/20 text-[#E0B84C]">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400">Email Address</p>
                      <a href={`mailto:${emailAddress}`} className="text-sm font-semibold text-white hover:text-[#E0B84C]">
                        {emailAddress}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="rounded-lg border border-white/10 p-2 text-zinc-400 hover:text-white cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                {/* Phone card */}
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-[#0f0e15] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-400">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400">Direct Phone / WhatsApp</p>
                      <a href={`tel:${phoneNumber}`} className="text-sm font-semibold text-white hover:text-emerald-400">
                        {formattedPhone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="rounded-lg border border-white/10 p-2 text-zinc-400 hover:text-white cursor-pointer"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>

                {/* WhatsApp Chat Card */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 transition hover:bg-emerald-500/20"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/30 text-emerald-400">
                      <WhatsAppIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs text-emerald-300">Instant Messaging</p>
                      <p className="text-sm font-bold text-white">Chat directly on WhatsApp</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-emerald-400" />
                </a>
              </div>
            </div>

            {/* Contact Form Right */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-white/10 bg-[#0c0c12] p-8 shadow-2xl">
                <h3 className="text-xl font-bold text-white">Send a Message</h3>
                <p className="mt-1 text-xs text-zinc-400">
                  Fill out the form below and I will respond to your inquiry promptly.
                </p>

                {formSubmitted ? (
                  <div className="mt-8 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-6 text-center">
                    <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-400" />
                    <h4 className="mt-3 text-lg font-bold text-white">Message Transmitted!</h4>
                    <p className="mt-2 text-xs text-zinc-300">
                      Thank you for reaching out. I have received your submission and will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-300">Your Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Alex Johnson"
                          className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-[#E0B84C] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-zinc-300">Email Address</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alex@example.com"
                          className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-[#E0B84C] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300">Project / Inquiry Focus</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="mt-1.5 w-full rounded-xl border border-white/10 bg-[#0d0d12] px-4 py-3 text-sm text-white focus:border-[#E0B84C] focus:outline-none"
                      >
                        <option value="Full-Stack Web App">Full-Stack Web Application</option>
                        <option value="Frontend Interface">Frontend / React Interface</option>
                        <option value="Backend & API">Backend & API Integration</option>
                        <option value="Freelance Consultation">Freelance Web Consultation</option>
                        <option value="Full-Time Engineering Role">Full-Time Engineering Opportunity</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-300">Project Details or Message</label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your project requirements, goals, or role..."
                        className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-[#E0B84C] focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#C9A227] to-[#E0B84C] py-3.5 text-sm font-bold text-black shadow-lg shadow-[#C9A227]/25 transition hover:brightness-110 active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Transmitting Message...</span>
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
    </div>
  );
}
