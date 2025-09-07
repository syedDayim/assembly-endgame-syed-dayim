import { create } from "zustand";
import { languages } from "../data/languages";

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

    resetGuessedLetters : () => 
        set(() => ({
            guessedLetters: []
        }))

}))

export const useNoOfGuesses = create((set) => ({
  noOfGuesses: languages.length,
  decrementGuesses: () =>
    set((state) => ({
      noOfGuesses: state.noOfGuesses > 0 ? state.noOfGuesses - 1 : 0, 
    })),
  resetGame: () =>
    set(() => ({
        noOfGuesses: languages.length
    }))
}));