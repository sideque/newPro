import { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);

      const sections = navItems.map(item => item.id);
      const sectionElements = sections.map((id) => document.getElementById(id));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    const handleKeyPress = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("resize", handleResize);
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, navItems]);

  const scrollToSection = useCallback((sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      }
    }
    setIsOpen(false);
  }, [location.pathname, navigate]);

  const handleMobileNavClick = useCallback((sectionId) => {
    setIsOpen(false);
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 150);
  }, [scrollToSection]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-300 ${
              scrolled
                ? "bg-neutral-950/80 backdrop-blur-lg border border-neutral-800/60 rounded-full px-6 py-2.5 shadow-lg shadow-black/20"
                : "px-2 py-2"
            }`}
          >
            {/* Logo */}
            <button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-9 h-9 rounded-full bg-neutral-800 border border-neutral-700/50 flex items-center justify-center overflow-hidden group-hover:border-amber-500/40 transition-colors duration-300">
                <img 
                  src="/logo-bg.png" 
                  alt="Logo" 
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="hidden sm:block text-lg font-semibold text-neutral-100 tracking-tight">
                Gia Si
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full ${
                    activeSection === item.id
                      ? "text-amber-400"
                      : "text-neutral-400 hover:text-neutral-100"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber-400"
                      layoutId="nav-dot"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <button
                onClick={() => scrollToSection("contact")}
                className="group px-5 py-2 bg-amber-500 hover:bg-amber-400 text-neutral-900 text-sm font-semibold rounded-full transition-colors duration-200 flex items-center gap-2"
              >
                Let's Talk
                <FaArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-neutral-800/60 border border-neutral-700/40 flex items-center justify-center text-neutral-300 hover:text-white transition-colors duration-200"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <FaTimes className="w-4 h-4" /> : <FaBars className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 h-full w-full max-w-xs bg-neutral-950 border-l border-neutral-800/60 z-50 lg:hidden flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-800/60">
                <span className="text-base font-semibold text-neutral-100">Navigation</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-full bg-neutral-800/60 border border-neutral-700/40 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 px-4 py-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleMobileNavClick(item.id)}
                    className={`w-full text-left px-4 py-3.5 rounded-xl text-sm font-medium transition-colors duration-200 ${
                      activeSection === item.id
                        ? "text-amber-400 bg-amber-500/8"
                        : "text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/40"
                    }`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 + 0.1 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="px-4 py-5 border-t border-neutral-800/60">
                <button
                  onClick={() => handleMobileNavClick("contact")}
                  className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-neutral-900 text-sm font-semibold rounded-xl transition-colors duration-200"
                >
                  Let's Talk
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
