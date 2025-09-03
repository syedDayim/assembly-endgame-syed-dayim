import { useState } from 'react';

import { useCurrentWordStore } from '../store/useCurrentWordStore';

import { buttonColorResolver } from '../helper/helperFunctions';

export const Keyboard = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const { currentWord } = useCurrentWordStore();
    const [guessedLetters, setGuessedLetters] = useState([]);
    console.log(guessedLetters);
    
    const handleUserKeyPress = (letter, index) => {
        setGuessedLetters(prevLetters => 
            prevLetters.includes(letter) ? 
                prevLetters : [...prevLetters, letter]
        )
    }


    
    const keyboardElements = alphabet.split("").map((letter, index) => {
        const isCorrect = guessedLetters.includes(letter) && currentWord.toUpperCase().includes(letter);
        const isWrong = guessedLetters.includes(letter) && !currentWord.toUpperCase().includes(letter);
        
        return (
            <button key={ index } className={`w-[40px] h-[40px] ${buttonColorResolver(isCorrect, isWrong)} border-[1px] border-white font-bold p-1.5 rounded-[6px] cursor-pointer`}  onClick={() => handleUserKeyPress(letter)}>{ letter }</button>
        )
    })
    return (
        <div className="mt-5 max-w-[480px] flex flex-wrap gap-2 justify-center">
            { keyboardElements }
        </div>
    )
}