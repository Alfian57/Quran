"use client";

import useAyahAudio from "@/store/useAyahAudio";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

interface AudioPlayerProps {
  audioUrl: string | undefined;
}

const AudioPlayer = ({ audioUrl }: AudioPlayerProps) => {
  const { currentAudioUrl, setCurrentAudioUrl } = useAyahAudio();
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioUrl) {
      audioRef.current = new Audio(audioUrl);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioUrl]);

  useEffect(() => {
    if (currentAudioUrl !== audioUrl) {
      setIsPlaying(false);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [currentAudioUrl, audioUrl]);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      if (currentAudioUrl !== audioUrl) {
        setCurrentAudioUrl(audioUrl || "");
        audioRef.current = new Audio(audioUrl || "");
      }
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  return (
    <div>
      <Image
        src={"/play-icon.png"}
        alt="play"
        width={24}
        height={24}
        className="cursor-pointer"
        onClick={togglePlayPause}
      />
    </div>
  );
};

export default AudioPlayer;
