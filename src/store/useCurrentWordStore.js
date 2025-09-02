import { create } from "zustand";

export const useCurrentWordStore = create((set) => ({
    currentWord: "preact",
    setCurrentWord: (newWord) => set({currentWord: newWord})
}));