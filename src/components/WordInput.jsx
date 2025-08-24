import { useState } from "react";

export const WordInput = () => {
    const [currentWord, setCurrentWord] = useState('PReact');
    const renderedElement = currentWord.split("").map((letter, index) => (
      <span key={index} className='text-4xl font-bold bg-[#323232] text-white px-5 py-4 border-b-2'>{letter.toUpperCase()}</span>
    ))
    return (
        <div className='flex items-center justify-center gap-2 w-[352px] mt-5 '>
          {renderedElement}
        </div>
    )
}