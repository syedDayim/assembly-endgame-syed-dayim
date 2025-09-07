import { create } from "zustand";
import { languages } from "../data/languages";
import { letters } from "../data/letters";

export const useCurrentWordStore = create((set) => ({
    currentWord: letters[Math.floor(Math.random() * 200)],
    setCurrentWord: (newWord) => set({currentWord: newWord}),
    getNewRandomWord: () => set({currentWord: letters[Math.floor(Math.random() * 200)]})
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
export const useHasWon = create((set) => ({
    hasWon: false,
    playerWon: () => set({ hasWon: true }),
    reset: () => set({ hasWon: false })
}));
