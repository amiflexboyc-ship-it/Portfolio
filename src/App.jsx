import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomeLanding from "./components/HomeLanding";
import PortfolioPage from "./components/PortfolioPage";
import Footer from "./components/Footer";

// Clean SVG WhatsApp Icon (no emoji)
const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.41a8.225 8.225 0 012.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.186 8.186 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.08s.89 2.41 1.02 2.58c.12.17 1.75 2.67 4.24 3.75.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z" />
  </svg>
);

export default function App() {
  const [currentView, setCurrentView] = useState("home");

  const whatsappUrl =
    "https://wa.me/2349077108987?text=Hello%20ADETECH%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!";

  // Sync with browser hash routing on load and hash change
  useEffect(() => {
    const handleHashSync = () => {
      const hash = window.location.hash.replace("#", "");
      if (
        hash === "portfolio" ||
        hash === "projects" ||
        hash === "skills" ||
        hash === "services" ||
        hash === "about" ||
        hash === "contact"
      ) {
        setCurrentView("portfolio");
        if (hash !== "portfolio") {
          setTimeout(() => {
            const el = document.getElementById(hash);
            if (el) {
              el.scrollIntoView({ behavior: "smooth" });
            }
          }, 100);
        }
      } else {
        setCurrentView("home");
      }
    };

    handleHashSync();
    window.addEventListener("hashchange", handleHashSync);
    return () => window.removeEventListener("hashchange", handleHashSync);
  }, []);

  const navigateToHome = () => {
    setCurrentView("home");
    window.history.pushState(null, "", "#home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToPortfolio = () => {
    setCurrentView("portfolio");
    window.history.pushState(null, "", "#portfolio");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToSection = (sectionId) => {
    setCurrentView("portfolio");
    window.history.pushState(null, "", `#${sectionId}`);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 80);
  };

  return (
    <div className="min-h-screen bg-[#060608] text-[#e4e4e7] selection:bg-[#C9A227] selection:text-black">
      {/* Background ambient lighting */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[550px] w-[750px] -translate-x-1/2 rounded-full bg-[#C9A227]/10 blur-[130px]" />
        <div className="absolute top-[40%] right-[-10%] h-[400px] w-[500px] rounded-full bg-[#E0B84C]/5 blur-[120px]" />
        <div className="absolute bottom-20 left-[-10%] h-[450px] w-[500px] rounded-full bg-[#C9A227]/5 blur-[120px]" />
      </div>

      {/* TOP NAVIGATION BAR */}
      <Navbar
        currentView={currentView}
        onNavigateHome={navigateToHome}
        onNavigatePortfolio={navigateToPortfolio}
        onNavigateSection={navigateToSection}
      />

      {/* MAIN CONTENT VIEW SWITCHER */}
      <main className="relative z-10">
        {currentView === "home" ? (
          <HomeLanding
            onNavigatePortfolio={navigateToPortfolio}
            onNavigateSection={navigateToSection}
          />
        ) : (
          <PortfolioPage onNavigateHome={navigateToHome} />
        )}
      </main>

      {/* FOOTER */}
      <Footer
        onNavigateHome={navigateToHome}
        onNavigatePortfolio={navigateToPortfolio}
        onNavigateSection={navigateToSection}
      />

      {/* FLOATING WHATSAPP BUTTON (NO EMOJIS) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-[#25D366] px-4 py-3 font-semibold text-white shadow-xl shadow-emerald-950/60 transition hover:scale-110 active:scale-95 border border-emerald-400/30"
        aria-label="Chat on WhatsApp"
        title="Chat with ADETECH on WhatsApp (+234 907 710 8987)"
      >
        <WhatsAppIcon className="h-5 w-5 text-white" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline-block">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}