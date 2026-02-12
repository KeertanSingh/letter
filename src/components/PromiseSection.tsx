import { useEffect, useRef, useState } from "react";

const promises = [
  "I will love you at your best and your worst.",
  "I will never let you face anything alone.",
  "I will choose you every single day.",
  "I will be the one who never leaves.",
  "I will love you — forever and beyond.",
];

export const PromiseSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h2
          className={`font-serif text-2xl md:text-4xl text-foreground italic mb-12 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          My Promises to You 🤞
        </h2>

        <div className="space-y-6">
          {promises.map((promise, i) => (
            <div
              key={i}
              className="relative"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.7s ease ${i * 0.2}s`,
              }}
            >
              <p className="font-script text-xl md:text-2xl text-foreground animate-glow-pulse leading-relaxed">
                "{promise}"
              </p>
              {i < promises.length - 1 && (
                <div className="mt-6 text-gold/50 text-lg">✦</div>
              )}
            </div>
          ))}
        </div>

        <div
          className="mt-16"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 1s ease 1.5s",
          }}
        >
          <div className="inline-block bg-gradient-to-r from-rose/20 via-gold/20 to-rose/20 rounded-full px-10 py-4 border border-gold/30 shadow-glow">
            <p className="font-serif text-lg md:text-xl text-foreground italic">
              You are my forever ❤️
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
