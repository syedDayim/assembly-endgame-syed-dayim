import { create } from "zustand";

export const useCurrentWordStore = create((set) => ({
    currentWord: "preact",
    setCurrentWord: (newWord) => set({currentWord: newWord})
}));

export const useGuessedLetters = create((set) => ({
    guessedLetters: [],
    addGuessedLetters : (letter) => 
     set((state) => ({
      guessedLetters: state.guessedLetters.includes(letter)
        ? state.guessedLetters
        : [...state.guessedLetters, letter],
    })),

}))