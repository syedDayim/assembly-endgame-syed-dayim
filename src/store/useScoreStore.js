import { create } from "zustand";

export const useScoreStore = create((set, get) => ({
  score: 0,
  highScore: parseInt(localStorage.getItem('hangman-highscore') || '0'),
  currentLevel: 1,
  
  // Add points when player wins
  addScore: (points) => {
    const newScore = get().score + points;
    const currentHighScore = get().highScore;
    const newHighScore = newScore > currentHighScore ? newScore : currentHighScore;
    
    // Save high score to localStorage
    localStorage.setItem('hangman-highscore', newHighScore.toString());
    
    set({
      score: newScore,
      highScore: newHighScore,
    });
  },
  
  // Reset score for new game
  resetScore: () => set({ score: 0, currentLevel: 1 }),
  
  // Increment level
  nextLevel: () => set((state) => ({ currentLevel: state.currentLevel + 1 })),
  
  // Calculate points based on remaining guesses and word length
  calculatePoints: (remainingGuesses, wordLength) => {
    const basePoints = wordLength * 10; // Base points for word length
    const bonusPoints = remainingGuesses * 5; // Bonus for remaining guesses
    return basePoints + bonusPoints;
  },
}));
