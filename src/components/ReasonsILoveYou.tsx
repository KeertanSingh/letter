import { useState, useEffect, useRef } from "react";
import { Heart } from "lucide-react";

const reasons = [
  "Your smile lights up my whole world ✨",
  "The way you say my name makes everything better",
  "You understand me like no one else ever could",
  "Your laugh is my favorite sound in the universe",
  "You make even ordinary days feel magical",
  "The way you care about the smallest things 🌸",
  "Your strength inspires me every single day",
  "You chose me, and that's my greatest blessing",
  "Your voice calms every storm inside me",
  "Because loving you is the easiest thing I've ever done ❤️",
  "You make me want to be a better person",
  "The way your eyes sparkle when you're happy 💫",
];

export const ReasonsILoveYou = () => {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const toggleReveal = (index: number) => {
    setRevealed((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2
          className={`font-serif text-2xl md:text-4xl text-center text-foreground italic mb-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Reasons I Love You
        </h2>
        <p
          className={`font-body text-center text-muted-foreground mb-12 transition-all duration-700 delay-200 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          Click each heart to reveal a secret 💕
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {reasons.map((reason, i) => (
            <button
              key={i}
              onClick={() => toggleReveal(i)}
              className={`group relative flex flex-col items-center justify-center p-4 min-h-[120px] rounded-lg border transition-all duration-500 ${
                revealed.has(i)
                  ? "bg-primary/10 border-primary/30 shadow-glow"
                  : "bg-card/60 border-border hover:border-primary/30 hover:shadow-warm"
              }`}
              style={{
                animationDelay: `${i * 0.1}s`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.5s ease ${i * 0.05}s`,
              }}
            >
              <Heart
                className={`w-8 h-8 mb-2 transition-all duration-500 ${
                  revealed.has(i)
                    ? "text-rose fill-rose scale-110"
                    : "text-rose-light group-hover:scale-110 group-hover:text-rose"
                }`}
              />
              {revealed.has(i) ? (
                <p className="font-script text-sm text-ink text-center animate-fade-in-up">
                  {reason}
                </p>
              ) : (
                <p className="font-body text-xs text-muted-foreground">
                  #{i + 1}
                </p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
