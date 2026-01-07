import { motion } from "framer-motion";

const achievements = {
  totalPoints: 25010,
  totalTasks: 4,
};

const AchievementsSection = () => {
  return (
    <section id="achievements" className="relative py-28 px-6 overflow-hidden">
      {/* background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-radial from-ember/10 via-blood/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-radial from-ember/15 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-gradient-to-r from-transparent to-ember/50" />
              <div className="w-1.5 h-1.5 bg-ember rounded-full animate-ember-glow" />
              <div className="w-10 h-px bg-gradient-to-l from-transparent to-ember/50" />
            </div>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-glow">
            <span className="text-gradient-fire">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
           
          </p>
        </motion.div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* Points Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group rounded-xl border border-border/50 bg-background/60 backdrop-blur-sm overflow-hidden"
          >
            <div className="absolute -inset-1 bg-gradient-to-b from-ember/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-10 text-center">
              <div className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                Total Points
              </div>
              <div className="text-6xl font-bold text-foreground font-display tracking-tight">
                {achievements.totalPoints}
              </div>
            </div>
          </motion.div>

          {/* Tasks Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative group rounded-xl border border-border/50 bg-background/60 backdrop-blur-sm overflow-hidden"
          >
            <div className="absolute -inset-1 bg-gradient-to-b from-ember/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-10 text-center">
              <div className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
                Total Tasks
              </div>
              <div className="text-6xl font-bold text-ember font-display tracking-tight">
                {achievements.totalTasks}
              </div>
            </div>
          </motion.div>
        </div>

        {/* bottom accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 flex items-center justify-center gap-6"
        >
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-ember/40 to-transparent" />
          <div className="relative">
            <div className="w-2.5 h-2.5 bg-ember/50 rounded-full animate-ember-glow" />
            <div className="absolute inset-0 w-2.5 h-2.5 bg-ember/30 rounded-full animate-ping" />
          </div>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-ember/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
