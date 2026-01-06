import { motion } from "framer-motion";
import logo from "@/members/logo.jpeg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 bg-background" />
      
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-ember/40 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
              scale: 0,
              opacity: 0
            }}
            animate={{ 
              y: -100,
              scale: [0, 1, 1, 0],
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              delay: Math.random() * 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </motion.div>
      
      {/* Atmospheric dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      {/* Central ember glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-ember opacity-40 animate-mystical-pulse" />
      
      {/* Secondary fire glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-gradient-radial from-ember/20 via-blood/10 to-transparent blur-3xl animate-pulse-slow" />
      
      {/* Side glows - like torches */}
      <div className="absolute top-1/4 left-[10%] w-20 h-40 animate-torch-flicker">
        <div className="w-full h-full bg-gradient-radial from-fire/40 via-ember/20 to-transparent blur-2xl" />
      </div>
      <div className="absolute top-1/4 right-[10%] w-20 h-40 animate-torch-flicker" style={{ animationDelay: '-0.3s' }}>
        <div className="w-full h-full bg-gradient-radial from-fire/40 via-ember/20 to-transparent blur-2xl" />
      </div>

      {/* Floating embers */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-ember rounded-full animate-ember-float"
          style={{
            left: `${10 + Math.random() * 80}%`,
            bottom: '-5%',
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        />
      ))}
      
      {/* Additional ember particles */}
      {[...Array(10)].map((_, i) => (
        <div
          key={`ember-${i}`}
          className="absolute w-0.5 h-0.5 bg-fire rounded-full animate-ember-float opacity-60"
          style={{
            left: `${15 + Math.random() * 70}%`,
            bottom: '-5%',
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Smoke wisps */}
      <div className="absolute bottom-0 left-1/4 w-32 h-20 bg-ash/10 blur-3xl animate-smoke-rise" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-0 right-1/3 w-24 h-16 bg-ash/10 blur-3xl animate-smoke-rise" style={{ animationDelay: '-1.5s' }} />

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-vignette opacity-60" />
      
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Decorative top element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-ember to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-ember rounded-full animate-ember-glow" />
          </div>
        </motion.div>

        {/* Overline - slide in from left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="mb-6"
        >
          <span className="text-ember text-sm font-display tracking-[0.4em] uppercase animate-flicker">
            Team
          </span>
        </motion.div>

        {/* Main title - with dramatic entrance */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.4,
            type: "spring",
            stiffness: 100
          }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-glow"
        >
          <motion.span 
            className="text-gradient-fire inline-block"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(255, 107, 53, 0.5)",
                "0 0 40px rgba(255, 107, 53, 0.8)",
                "0 0 20px rgba(255, 107, 53, 0.5)",
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            INNOVEX
          </motion.span>
        </motion.h1>

        {/* Subtitle - fade in with blur */}
        <motion.p
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-muted-foreground text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-light"
        >
          Where Potential Comes Alive
        </motion.p>

        {/* Decorative bottom element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 flex justify-center"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-ember/50" />
            <div className="w-1 h-1 bg-ember rounded-full animate-ember-glow" />
            <div className="w-1.5 h-1.5 bg-fire rounded-full animate-ember-glow" style={{ animationDelay: '-0.5s' }} />
            <div className="w-1 h-1 bg-ember rounded-full animate-ember-glow" style={{ animationDelay: '-1s' }} />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-ember/50" />
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-muted-foreground text-xs font-display tracking-[0.3em] uppercase"></span>
            <div className="w-px h-16 bg-gradient-to-b from-ember/50 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;