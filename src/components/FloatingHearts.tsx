import { useEffect, useState } from "react";

interface FloatingHeartsProps {
  active: boolean;
}

interface HeartParticle {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export const FloatingHearts = ({ active }: FloatingHeartsProps) => {
  const [hearts, setHearts] = useState<HeartParticle[]>([]);

  useEffect(() => {
    if (!active) return;

    const handleScroll = () => {
      if (Math.random() > 0.7) {
        const heart: HeartParticle = {
          id: Date.now() + Math.random(),
          x: Math.random() * 100,
          size: 12 + Math.random() * 18,
          duration: 3 + Math.random() * 3,
          delay: 0,
          opacity: 0.3 + Math.random() * 0.4,
        };
        setHearts((prev) => [...prev.slice(-8), heart]);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-rose-petal"
          style={{
            left: `${heart.x}%`,
            bottom: "-20px",
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
            animation: `heart-float ${heart.duration}s ease-out forwards`,
          }}
        >
          ❤
        </div>
      ))}
    </div>
  );
};
