import { useState } from 'react';
import { useCurrentWordStore } from '../store/useCurrentWordStore';

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
        const isGuessed = guessedLetters.includes(letter)
        const isCorrect = isGuessed && currentWord.includes(letter);
        
        return (
            <button key={ index } className={`w-[40px] h-[40px] bg-[#FCBA29] border-white border-[1px] text-black font-bold p-1.5 rounded-[6px] cursor-pointer`}  onClick={() => handleUserKeyPress(letter, index)}>{ letter }</button>
        )
    })
    return (
        <div className="mt-5 max-w-[480px] flex flex-wrap gap-2 justify-center">
            { keyboardElements }
        </div>
    )
}