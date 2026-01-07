import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import logo from "@/members/logo.jpeg";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <div className="relative">
              <img
                src={logo}
                alt="Team Innovex Logo"
                className="h-12 w-12 object-contain rounded-full"
              />
              <div className="absolute inset-0 rounded-full bg-ember/20 blur-md animate-ember-glow" />
            </div>
            <span className="text-xl font-display font-bold text-gradient-fire">
              INNOVEX
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavItem label="Home" onClick={() => scrollToSection("hero")} />
            <NavItem label="Team" onClick={() => scrollToSection("team")} />
            <NavItem label="Achievements" onClick={() => scrollToSection("achievements")} />
            <NavItem label="Photos" onClick={() => scrollToSection("photos")} />
            <NavItem label="About" onClick={() => scrollToSection("about")} />
            <NavItem label="Contact" onClick={() => scrollToSection("contact")} />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-ember rounded-full"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-ember rounded-full"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-ember rounded-full"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4 border-t border-border/30">
            <MobileNavItem label="Home" onClick={() => scrollToSection("hero")} />
            <MobileNavItem label="Team" onClick={() => scrollToSection("team")} />
            <MobileNavItem label="Achievements" onClick={() => scrollToSection("achievements")} />
            <MobileNavItem label="Photos" onClick={() => scrollToSection("photos")} />
            <MobileNavItem label="About" onClick={() => scrollToSection("about")} />
            <MobileNavItem label="Contact" onClick={() => scrollToSection("contact")} />
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

const NavItem = ({ label, onClick }: { label: string; onClick: () => void }) => {
  return (
    <motion.button
      onClick={onClick}
      className="relative text-muted-foreground hover:text-ember transition-colors duration-300 font-display tracking-wider text-sm uppercase group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-ember to-fire group-hover:w-full transition-all duration-300" />
    </motion.button>
  );
};

const MobileNavItem = ({ label, onClick }: { label: string; onClick: () => void }) => {
  return (
    <motion.button
      onClick={onClick}
      className="block w-full text-left text-muted-foreground hover:text-ember transition-colors duration-300 font-display tracking-wider text-sm uppercase py-2 px-4"
      whileTap={{ scale: 0.98, x: 5 }}
    >
      <div className="flex items-center gap-2">
        <div className="w-1 h-1 bg-ember rounded-full" />
        {label}
      </div>
    </motion.button>
  );
};

export default Navigation;
