import { useState, useEffect, useCallback, useRef } from "react";
import paperTexture from "@/assets/paper-texture.jpg";
import { EnvelopeHero } from "@/components/EnvelopeHero";
import { LoveLetter } from "@/components/LoveLetter";
import { ReasonsILoveYou } from "@/components/ReasonsILoveYou";
import { MemoryTimeline } from "@/components/MemoryTimeline";
import { PromiseSection } from "@/components/PromiseSection";
import { FloatingHearts } from "@/components/FloatingHearts";
import { RosePetals } from "@/components/RosePetals";
import { DustParticles } from "@/components/DustParticles";
import { MusicPlayer } from "@/components/MusicPlayer";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPetals, setShowPetals] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 1200);
  }, []);

  return (
    <div
      className="relative min-h-screen"
      style={{
        backgroundImage: `url(${paperTexture})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Warm overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-transparent to-foreground/5 pointer-events-none z-0" />

      {/* Candle glow corners */}
      <div className="fixed top-0 left-0 w-96 h-96 rounded-full bg-candlelight/10 blur-[120px] pointer-events-none animate-candle-flicker" />
      <div className="fixed bottom-0 right-0 w-96 h-96 rounded-full bg-candlelight/8 blur-[120px] pointer-events-none animate-candle-flicker" style={{ animationDelay: "1s" }} />

      <DustParticles />
      {showPetals && <RosePetals />}
      <FloatingHearts active={isOpen} />

      {/* Music Player */}
      <MusicPlayer />

      {/* Petal toggle */}
      {isOpen && (
        <button
          onClick={() => setShowPetals(!showPetals)}
          className="fixed bottom-6 left-6 z-50 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border text-sm font-body text-muted-foreground hover:text-foreground transition-colors shadow-warm"
        >
          {showPetals ? "🌹 Petals Off" : "🌹 Petals On"}
        </button>
      )}

      {/* Hero */}
      <EnvelopeHero isOpen={isOpen} onOpen={handleOpen} />

      {/* Main content */}
      {isOpen && (
        <div ref={contentRef} className="relative z-10">
          <LoveLetter />
          <ReasonsILoveYou />
          <MemoryTimeline />
          <PromiseSection />

          {/* Footer */}
          <footer className="text-center py-16 px-4">
            <p className="font-script text-2xl text-rose animate-glow-pulse">
              Forever & Always ❤️
            </p>
            <p className="font-body text-sm text-muted-foreground mt-2 italic">
              Made with all my love, just for you.
            </p>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Index;
