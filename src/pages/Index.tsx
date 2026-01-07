import HeroSection from "@/components/HeroSection";
import TeamGrid from "@/components/TeamGrid";
import Navigation from "@/components/Navigation";
import AchievementsSection from "@/components/AchievementsSection";
import ProgramPhotos from "@/components/ProgramPhotos";
import instaQR from "@/members/insta.jpeg";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TeamGrid />
      <AchievementsSection />
      <ProgramPhotos />
      
      {/* Footer */}
      <footer id="contact" className="relative py-20 text-center border-t border-border/30 overflow-hidden">
        {/* Background glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gradient-radial from-ember/10 to-transparent blur-3xl" />
        
        <div className="relative z-10 container mx-auto px-6">
          {/* Decorative top element */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-ember rounded-full animate-ember-glow" />
              <div className="w-8 h-px bg-ember/30" />
              <div className="w-1 h-1 bg-ember rounded-full animate-ember-glow" style={{ animationDelay: '-0.5s' }} />
            </div>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-glow mb-4">
            <span className="text-gradient-fire">Connect With Us</span>
          </h2>
          <p className="text-muted-foreground mb-10">Follow us on Instagram</p>

          {/* QR Code */}
          <motion.a
            href="https://www.instagram.com/innove.x?igsh=YzJiaW56NWR4NzYw"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="inline-block relative group"
          >
            <div className="absolute inset-0 bg-gradient-radial from-ember/20 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-4 rounded-2xl border border-border/50 bg-background/60 backdrop-blur-sm group-hover:border-ember/50 transition-colors">
              <img
                src={instaQR}
                alt="Instagram QR Code"
                className="w-48 h-48 object-contain"
              />
            </div>
            <p className="text-muted-foreground text-sm mt-4 group-hover:text-ember transition-colors">
              Scan to follow @innove.x
            </p>
          </motion.a>
        </div>
      </footer>
    </main>
  );
};

export default Index;