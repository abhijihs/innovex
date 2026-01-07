import { motion, AnimatePresence } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useState } from "react";
import p1 from "@/program photos/1.jpeg";
import p2 from "@/program photos/2.jpeg";
import p3 from "@/program photos/3.jpeg";
import p4 from "@/program photos/4.jpeg";
import p5 from "@/program photos/5.jpeg";
import p6 from "@/program photos/6.jpeg";
import p7 from "@/program photos/7.jpeg";
import p8 from "@/program photos/8.jpeg";
import p9 from "@/program photos/9.jpeg";

type Photo = {
  id: number;
  src: string;
  alt: string;
};

const photos: Photo[] = [
  { id: 1, src: p1, alt: "Program photo 1" },
  { id: 2, src: p2, alt: "Program photo 2" },
  { id: 3, src: p3, alt: "Program photo 3" },
  { id: 4, src: p4, alt: "Program photo 4" },
  { id: 5, src: p5, alt: "Program photo 5" },
  { id: 6, src: p6, alt: "Program photo 6" },
  { id: 7, src: p7, alt: "Program photo 7" },
  { id: 8, src: p8, alt: "Program photo 8" },
  { id: 9, src: p9, alt: "Program photo 9" },
];

const ProgramPhotos = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const handlePrevious = () => {
    if (!selectedPhoto) return;
    const currentIndex = photos.findIndex((p) => p.id === selectedPhoto.id);
    const previousIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
    setSelectedPhoto(photos[previousIndex]);
  };

  const handleNext = () => {
    if (!selectedPhoto) return;
    const currentIndex = photos.findIndex((p) => p.id === selectedPhoto.id);
    const nextIndex = currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
    setSelectedPhoto(photos[nextIndex]);
  };

  return (
    <section id="photos" className="relative py-28 px-6 overflow-hidden">
      {/* background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-radial from-ember/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-ember/10 to-transparent blur-3xl" />
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
            <span className="text-gradient-fire">Program Photos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Moments from our events, workshops, and project showcases.
          </p>
        </motion.div>

        {/* gallery */}
        <div className="flex justify-center items-center min-h-96">
          <div className="relative w-full max-w-sm h-96">
            {/* Stacked cards */}
            {photos.slice(0, 3).map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedPhoto(photos[0])}
                className="group absolute w-full h-full rounded-xl overflow-hidden border border-border/50 bg-background/50 backdrop-blur-sm cursor-pointer"
                style={{
                  transform: `translateY(${index * 24}px) translateX(${index * 16}px) rotateZ(${index * 2}deg)`,
                  zIndex: photos.length - index,
                }}
              >
                <AspectRatio ratio={4 / 3}>
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="h-full w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </AspectRatio>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {index === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="text-center"
                    >
                      <div className="text-white text-lg font-display font-bold drop-shadow-lg">
                        View All Photos
                      </div>
                      <div className="text-white/80 text-sm mt-2 drop-shadow-lg">
                        Click to explore {photos.length} memories
                      </div>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
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

      {/* Lightbox Modal - Gallery View */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            key="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-6xl h-full max-h-[90vh] flex flex-col"
            >
              {/* Main Photo Display */}
              <motion.div
                key={`main-${selectedPhoto.id}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex-1 flex items-center justify-center rounded-lg border border-border/50 bg-background overflow-hidden"
              >
                <img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Photo Thumbnails Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mt-6 overflow-x-auto pb-4"
              >
                <div className="flex gap-3 min-w-full">
                  {photos.map((photo, index) => (
                    <motion.button
                      key={photo.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.03 }}
                      onClick={() => setSelectedPhoto(photo)}
                      className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedPhoto.id === photo.id
                          ? "border-ember ring-2 ring-ember/50"
                          : "border-border/50 hover:border-ember/50"
                      }`}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover"
                      />
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Info and Controls */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mt-4 flex items-center justify-between"
              >
                <div>
                  <p className="text-muted-foreground">{selectedPhoto.alt}</p>
                  <p className="text-xs text-muted-foreground/60 mt-1">
                    {photos.findIndex((p) => p.id === selectedPhoto.id) + 1} / {photos.length}
                  </p>
                </div>

                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePrevious}
                    className="px-5 py-2 rounded-lg border border-border/50 bg-background/60 backdrop-blur-sm hover:bg-background/80 hover:border-ember/50 transition-colors text-sm font-display"
                  >
                    ← Previous
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedPhoto(null)}
                    className="px-5 py-2 rounded-lg border border-border/50 bg-background/60 backdrop-blur-sm hover:bg-background/80 hover:border-ember/50 transition-colors text-sm font-display"
                  >
                    Close
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNext}
                    className="px-5 py-2 rounded-lg border border-border/50 bg-background/60 backdrop-blur-sm hover:bg-background/80 hover:border-ember/50 transition-colors text-sm font-display"
                  >
                    Next →
                  </motion.button>
                </div>
              </motion.div>

              {/* Close button - Top right */}
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-10 right-0 text-muted-foreground hover:text-ember transition-colors text-xl font-bold"
              >
                ✕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProgramPhotos;
