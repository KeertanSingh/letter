import { useRef, useState } from "react";
import { Volume2, Music } from "lucide-react";

export const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Playback blocked:", err));
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        preload="auto"
      />

      <button
        onClick={togglePlay}
        className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-white shadow-lg transition-all duration-300"
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-rose-600" />
            <span className="text-sm hidden sm:inline">Playing</span>
          </>
        ) : (
          <>
            <Music className="w-4 h-4" />
            <span className="text-sm hidden sm:inline">Play Music</span>
          </>
        )}
      </button>
    </>
  );
};
