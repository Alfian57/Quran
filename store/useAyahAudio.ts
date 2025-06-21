import { create } from "zustand";

interface AyahAudioState {
  currentAudioUrl: string;
  setCurrentAudioUrl: (url: string) => void;
}

const useAyahAudio = create<AyahAudioState>((set) => ({
  currentAudioUrl: "",
  setCurrentAudioUrl: (url: string) => set({ currentAudioUrl: url }),
}));

export default useAyahAudio;
