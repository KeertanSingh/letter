import { useEffect, useState } from "react";

interface Petal {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
}

export const RosePetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const initial: Petal[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: 10 + Math.random() * 14,
      duration: 8 + Math.random() * 10,
      delay: Math.random() * 8,
      rotation: Math.random() * 360,
    }));
    setPetals(initial);

    const interval = setInterval(() => {
      setPetals((prev) => {
        const petal: Petal = {
          id: Date.now(),
          x: Math.random() * 100,
          size: 10 + Math.random() * 14,
          duration: 8 + Math.random() * 10,
          delay: 0,
          rotation: Math.random() * 360,
        };
        return [...prev.slice(-15), petal];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute text-rose-petal/60"
          style={{
            left: `${petal.x}%`,
            top: "-20px",
            fontSize: `${petal.size}px`,
            animation: `fall ${petal.duration}s linear ${petal.delay}s forwards`,
            transform: `rotate(${petal.rotation}deg)`,
          }}
        >
          🌸
        </div>
      ))}
    </div>
  );
};
