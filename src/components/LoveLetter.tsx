import { useState, useEffect, useRef } from "react";
import paperTexture from "@/assets/paper-texture.jpg";

const letterText = `My Valentine, My Faraway Home ❤️

Hye my love,

Sometimes I sit quietly and think about us… and it still feels unreal. Out of billions of people in this world, I got stuck on you. And I don't even know if it was your talks or your cute face that made me fall flat for you haha… but one thing I know — once I fell, I never wanted to get up.

Maybe it was written somewhere that in this life we were meant to meet. That's why everything started making sense after you came. That's why we fit the way we do. That's why even distance can't break what we have. I truly believe some souls are designed to find each other… and mine found you.

My story would stay incomplete without you. Before you, my life was rough… black and white… silent and heavy. After you, everything got color. You became the color of my life. You became the peace I never knew I was searching for.

You are the first person who made me feel like home. And when I say home, I don't mean a place. I mean peace. I mean safety. I mean that feeling where my heart rests. Since the day I got you in my life, I forgot every bad part of my past. I never felt alone again.

Even now, when I miss you — and I do, more than I show — I just look at the ceiling or close my eyes and think about you. I imagine your smile. Your voice. The way you call me names. And suddenly, the distance doesn't feel that cruel anymore.

I want you in every direction of my life. Every chapter. Every plan. Every dream. You. No one else. Just you.

If I will not be yours, then I will not be anyone's. That's how serious I am about you. And if there is something like rebirth, if I ever get another life — I will still wish for you. I will still search for you. I will still choose you.

Yes, maybe I'm selfish. I want to fight with you, love you, annoy you, fix things with you. We fight, we fix, and we stay. I won't give up on you. Because what we have… it feels permanent. You are my peace. And I don't walk away from peace.

You are the one I'm getting crazier about every single day. The more I know you, the deeper I fall. You are beautiful, smart, kind, caring, loyal, supportive, intelligent… and sometimes so funny without even trying. I fought everything I wanted in life — but with you, I don't want to fight. I just want to stay.

I believe I'm the luckiest guy in this whole world. Because I have you. I'm yours. I'm the one you think about your future with. Do you even understand how special that is to me? Out of everyone… you chose me. That thought alone makes my heart full.

Don't ever overthink. I'm all yours. Completely in love with you. And I'm actually serious about loving you forever. This is not just words for Valentine's Day. This is me choosing you every single day.

I love you. I'm always going to love you — to the end of my days and beyond.

And even if life ever becomes complicated… even if something ever stands between us… I will still want you. And if for some reason we are not together, allow me to love you without expectations. Allow me to love you unconditionally. In ways never heard before. Because you are that one person from billions where my heart decided to stay.

You once might feel like you're hard to love. But let me make love easy for you. You are lovable even in this version of yourself. You don't need to be perfect to be loved. You already deserve love. And I will love you — at your best, at your worst, when you feel heavy, when you overthink. You will never face anything alone. As long as you allow me, I'll stand beside you.

Could I be the one you'll talk about in the future? To your family… to your friends… as the one who never left? Because I want to be that man. I want to be the one you choose proudly.

Remember this always:
I love you very much.
I miss you.
I will wait for the life we imagine.
Don't forget this.
And please… don't forget me.

For as long as you'll have me, I will love you every single day and night.

My cute wifey, my everything.
Happy Valentine's Day ❤️

Forever yours.
You cute hubby- keertan Singh❤️`;

export const LoveLetter = () => {
  const [visible, setVisible] = useState(false);
  const [signatureClicks, setSignatureClicks] = useState(0);
  const [showSurprise, setShowSurprise] = useState(false);
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

  const handleSignatureClick = () => {
    const newClicks = signatureClicks + 1;
    setSignatureClicks(newClicks);
    if (newClicks >= 3) {
      setShowSurprise(true);
    }
  };

  const paragraphs = letterText.split("\n\n");

  return (
    <section ref={ref} className="relative py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div
          className={`relative bg-parchment rounded-sm p-8 md:p-12 lg:p-16 shadow-deep transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          // style={{
          //   // backgroundImage: `url(${paperTexture})`,
          //   backgroundSize: "cover",
          // }}
        >
          {/* Decorative border */}
          <div className="absolute inset-3 md:inset-5 border border-gold/30 rounded-sm pointer-events-none" />
          <div className="absolute inset-4 md:inset-6 border border-gold/15 rounded-sm pointer-events-none" />

          {/* Letter content */}
          <div className="relative z-10 space-y-5">
            {paragraphs.map((para, i) => {
              const isTitle = i === 0;
              const isSignature = para.includes("Keertan Singh");
              const isRemember = para.startsWith("Remember this always:");

              if (isTitle) {
                return (
                  <h2
                    key={i}
                    className="font-serif text-2xl md:text-3xl text-foreground text-center mb-8 italic"
                    style={{
                      animationDelay: `${i * 0.1}s`,
                    }}
                  >
                    {para}
                  </h2>
                );
              }

              if (isRemember) {
                const lines = para.split("\n");
                return (
                  <div key={i} className="my-8 text-center space-y-1">
                    {lines.map((line, j) => (
                      <p
                        key={j}
                        className={`font-script text-lg md:text-xl ${
                          j === 0 ? "text-foreground font-semibold" : "text-ink-light"
                        }`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                );
              }

              if (isSignature) {
                const lines = para.split("\n");
                return (
                  <div
                    key={i}
                    className="mt-12 text-center space-y-1 cursor-pointer select-none"
                    onClick={handleSignatureClick}
                    title="Click me..."
                  >
                    {lines.map((line, j) => (
                      <p
                        key={j}
                        className={`font-script ${
                          line.includes("keertan")
                            ? "text-xl md:text-2xl text-rose font-bold"
                            : "text-lg text-ink-light"
                        }`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                );
              }

              return (
                <p
                  key={i}
                  className="font-script text-lg md:text-xl leading-relaxed text-ink"
                  style={{
                    animationDelay: `${i * 0.05}s`,
                  }}
                >
                  {para}
                </p>
              );
            })}
          </div>

          {/* Corner ornaments */}
          <div className="absolute top-2 left-2 text-gold/40 text-2xl select-none">❦</div>
          <div className="absolute top-2 right-2 text-gold/40 text-2xl select-none rotate-180">❦</div>
          <div className="absolute bottom-2 left-2 text-gold/40 text-2xl select-none rotate-180">❦</div>
          <div className="absolute bottom-2 right-2 text-gold/40 text-2xl select-none">❦</div>
        </div>

        {/* Surprise message */}
        {showSurprise && (
          <div className="mt-8 text-center animate-fade-in-up">
            <div className="inline-block bg-primary/10 border border-primary/30 rounded-lg px-8 py-6 shadow-glow">
              <p className="font-script text-xl md:text-2xl text-rose animate-glow-pulse">
                🌹 You found a hidden surprise! 🌹
              </p>
              <p className="font-body text-lg text-ink-light mt-3 italic">
                "Every love story is beautiful, but ours is my favorite. I will find you in every lifetime. Always."
              </p>
              <p className="font-script text-lg text-rose mt-2">— Your Keertan ❤️</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
