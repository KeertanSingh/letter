import { useEffect, useRef, useState } from "react";

const memories = [
  {
    title: "The Day We Met",
    text: "Out of billions, the universe brought us together. That day changed everything.",
    emoji: "✨",
  },
  {
    title: "First Conversation",
    text: "Hours felt like minutes. I knew right then — you were different from everyone else.",
    emoji: "💬",
  },
  {
    title: "When I Fell for You",
    text: "I don't know the exact moment, but suddenly you were all I could think about.",
    emoji: "💘",
  },
  {
    title: "Our First Fight",
    text: "We fought, we fixed it, and we stayed. That's when I knew this was real.",
    emoji: "🔥",
  },
  {
    title: "The Distance",
    text: "Miles apart, but never far. Every call, every text — you were always right here.",
    emoji: "🌍",
  },
  {
    title: "Today & Forever",
    text: "Every day I choose you. And I'll keep choosing you in every lifetime.",
    emoji: "💍",
  },
];

export const MemoryTimeline = () => {
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

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2
          className={`font-serif text-2xl md:text-4xl text-center text-foreground italic mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Our Story ✉️
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/60 via-rose/40 to-gold/60" />

          {memories.map((memory, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={i}
                className={`relative flex items-start mb-12 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.6s ease ${i * 0.15}s`,
                }}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-rose border-2 border-parchment shadow-glow z-10" />

                {/* Card */}
                <div
                  className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-5 shadow-warm hover:shadow-glow transition-shadow duration-300">
                    <div className="text-2xl mb-2">{memory.emoji}</div>
                    <h3 className="font-serif text-lg text-foreground font-semibold mb-2">
                      {memory.title}
                    </h3>
                    <p className="font-body text-muted-foreground italic">
                      {memory.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
