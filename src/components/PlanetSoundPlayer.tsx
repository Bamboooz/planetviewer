import { useEffect, useRef } from "react";

interface PlanetSoundPlayerProps {
  planetSound: string | null;
}

export default function PlanetSoundPlayer({
  planetSound,
}: PlanetSoundPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
    }

    if (planetSound) {
      const audio = new Audio(planetSound);

      audio.loop = true;
      audio.play().catch(console.error);
      audioRef.current = audio;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [planetSound]);

  return null;
}
