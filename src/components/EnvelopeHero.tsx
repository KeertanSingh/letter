import { useState } from "react";
import waxSeal from "@/assets/wax-seal.png";

interface EnvelopeHeroProps {
  isOpen: boolean;
  onOpen: () => void;
}

export const EnvelopeHero = ({ isOpen, onOpen }: EnvelopeHeroProps) => {
  const [animating, setAnimating] = useState(false);

  const handleClick = () => {
    if (isOpen || animating) return;
    setAnimating(true);
    setTimeout(() => {
      onOpen();
    }, 800);
  };

  return (
    <section
      className={`relative flex flex-col items-center justify-center transition-all duration-1000 ${
        isOpen ? "min-h-[60vh] pt-20" : "min-h-screen"
      }`}
    >
      {/* Title */}
      <h1
        className={`font-serif text-3xl md:text-5xl text-foreground text-center mb-8 transition-all duration-700 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-100"
        }`}
        style={{ fontStyle: "italic" }}
      >
        {isOpen ? "My Valentine ❤️" : "You Have a Letter..."}
      </h1>

      {!isOpen && (
        <p className="font-body text-lg text-muted-foreground mb-12 animate-shimmer">
          A message from the heart awaits you
        </p>
      )}

      {/* Envelope */}
      <div
        className={`relative cursor-pointer transition-all duration-1000 ${
          isOpen ? "scale-75 opacity-0 -translate-y-20" : "hover:scale-105"
        } ${animating ? "animate-float" : ""}`}
        onClick={handleClick}
        style={{ perspective: "600px" }}
      >
        {/* Envelope body */}
        <div className="relative w-72 h-48 md:w-96 md:h-64 rounded-lg shadow-deep overflow-hidden">
          {/* Envelope back */}
          <div className="absolute inset-0 bg-gradient-to-b from-envelope to-envelope-dark" />

          {/* Envelope flap */}
          <div
            className={`absolute top-0 left-0 right-0 h-1/2 origin-top transition-transform duration-700 ease-in-out ${
              animating ? "[transform:rotateX(180deg)]" : ""
            }`}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Front of flap */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-envelope-dark to-envelope"
              style={{
                clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                backfaceVisibility: "hidden",
              }}
            />
            {/* Back of flap */}
            <div
              className="absolute inset-0 bg-envelope-inner"
              style={{
                clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                backfaceVisibility: "hidden",
                transform: "rotateX(180deg)",
              }}
            />
          </div>

          {/* Inner paper peek */}
          <div
            className={`absolute top-4 left-1/2 -translate-x-1/2 w-[85%] bg-parchment rounded-t-sm transition-all duration-700 delay-300 ${
              animating ? "h-32 md:h-44 -translate-y-20 md:-translate-y-28" : "h-16 md:h-20"
            }`}
          >
            <div className="p-3 md:p-4">
              <div className="h-1.5 bg-ink/20 rounded w-3/4 mb-2" />
              <div className="h-1 bg-ink/10 rounded w-1/2" />
            </div>
          </div>

          {/* Envelope front triangle */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[65%] bg-gradient-to-t from-envelope to-envelope/95"
            style={{ clipPath: "polygon(0 100%, 50% 15%, 100% 100%)" }}
          />
        </div>

        {/* Wax seal */}
        <div
          className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-16 md:w-20 md:h-20 z-10 transition-all duration-500 ${
            animating ? "scale-0 rotate-180 opacity-0" : "animate-float-slow"
          }`}
        >
          <img src={waxSeal} alt="Wax seal" className="w-full h-full object-contain drop-shadow-lg" />
        </div>

        {/* CTA */}
        {!isOpen && !animating && (
          <div className="mt-10 text-center">
            <button
              onClick={handleClick}
              className="font-serif italic text-lg px-8 py-3 bg-primary/90 text-primary-foreground rounded-full shadow-warm hover:bg-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Open the Letter 💌
            </button>
          </div>
        )}
      </div>

      {isOpen && (
        <div className="mt-4 animate-fade-in-up">
          <p className="font-body italic text-muted-foreground text-center">
            Scroll down to read my heart... ↓
          </p>
        </div>
      )}
    </section>
  );
};
