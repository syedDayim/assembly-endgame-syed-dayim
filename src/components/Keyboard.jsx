import { useState } from 'react';
import { useCurrentWordStore, useGuessedLetters, useNoOfGuesses } from '../store/useCurrentWordStore';
import { buttonColorResolver } from '../helper/helperFunctions';

export const Keyboard = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const { currentWord } = useCurrentWordStore();
    const { guessedLetters, addGuessedLetters } = useGuessedLetters();
    const { noOfGuesses, decrementGuesses } = useNoOfGuesses();
    const handleUserKeyPress = (letter) => {
        addGuessedLetters(letter);
        if (!currentWord.toUpperCase().includes(letter)) {
            decrementGuesses();
        }
    }

    const keyboardElements = alphabet.split("").map((letter, index) => {
        const isCorrect = guessedLetters.includes(letter) && currentWord.toUpperCase().includes(letter);
        const isWrong = guessedLetters.includes(letter) && !currentWord.toUpperCase().includes(letter);
        return (
            <button
                key={index}
                disabled={noOfGuesses === 0 || isCorrect || isWrong} 
                className={`w-[40px] h-[40px] 
                    ${noOfGuesses === 0 ? "opacity-50 cursor-not-allowed" : ""} 
                    ${buttonColorResolver(isCorrect, isWrong)} 
                    border-[1px] border-white font-bold p-1.5 rounded-[6px]`}
                    onClick={() => handleUserKeyPress(letter)}
                >
                {letter}
            </button>

        )
    })
    return (
        <div className={`mt-5 max-w-[480px] flex flex-wrap gap-2 justify-center`}>
            {keyboardElements}
        </div>
    )
}