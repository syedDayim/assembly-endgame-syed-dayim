import { useMemo, useEffect } from "react";
import { useCurrentWordStore, useGuessedLetters, useHasWon, useNoOfGuesses } from "../store/useCurrentWordStore";
import { useToastStore } from "../store/useToastStore";
import { buttonColorResolver } from "../helper/helperFunctions";

export const Keyboard = () => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const { currentWord } = useCurrentWordStore();
  const { guessedLetters, addGuessedLetters } = useGuessedLetters();
  const { noOfGuesses, decrementGuesses } = useNoOfGuesses();
  const { hasWon, playerWon, reset } = useHasWon();
  const { showWordToast } = useToastStore();

  const handleUserKeyPress = (letter) => {
    addGuessedLetters(letter);
    if (!currentWord.toUpperCase().includes(letter)) {
      decrementGuesses();
    }
  };

  
  const didWin = useMemo(() => {
    return currentWord
      .toUpperCase()
      .split("")
      .every((letter) => guessedLetters.includes(letter));
  }, [guessedLetters, currentWord]);
  
  
  useEffect(() => {
    if (didWin && !hasWon) {
      playerWon();
    }
  }, [didWin, hasWon, playerWon]);

  // Show toast when player loses
  useEffect(() => {
    if (noOfGuesses === 0 && !hasWon) {
      showWordToast(currentWord);
    }
  }, [noOfGuesses, hasWon, currentWord, showWordToast]);



  const keyboardElements = alphabet.split("").map((letter, index) => {
    const isCorrect =
      guessedLetters.includes(letter) && currentWord.toUpperCase().includes(letter);
    const isWrong =
      guessedLetters.includes(letter) && !currentWord.toUpperCase().includes(letter);

    return (
      <button
        key={index}
        disabled={guessedLetters.includes(letter) || noOfGuesses === 0 || hasWon}
        className={`w-[40px] h-[40px] 
          ${noOfGuesses === 0 || hasWon ? "opacity-50 cursor-not-allowed" : ""} 
          ${buttonColorResolver(isCorrect, isWrong)} 
          border-[1px] border-white font-bold p-1.5 rounded-[6px]`}
        onClick={() => handleUserKeyPress(letter)}
      >
        {letter}
      </button>
    );
  });

  return (
    <div className="mt-5 max-w-[480px] flex flex-wrap gap-2 justify-center">
      {keyboardElements}
    </div>
  );
};
