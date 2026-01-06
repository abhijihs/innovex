import HeroSection from "@/components/HeroSection";
import TeamGrid from "@/components/TeamGrid";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <TeamGrid />
      
      {/* Footer */}
      <footer id="contact" className="relative py-16 text-center border-t border-border/30 overflow-hidden">
        {/* Background glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-gradient-radial from-ember/10 to-transparent blur-3xl" />
        
        <div className="relative z-10">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-ember rounded-full animate-ember-glow" />
              <div className="w-8 h-px bg-ember/30" />
              <div className="w-1 h-1 bg-ember rounded-full animate-ember-glow" style={{ animationDelay: '-0.5s' }} />
            </div>
          </div>
          <p className="text-muted-foreground text-sm font-display tracking-wider">
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;