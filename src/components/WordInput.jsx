import { useCurrentWordStore, useGuessedLetters } from "../store/useCurrentWordStore";

export const WordInput = () => {
  const { currentWord, setCurrentWord } = useCurrentWordStore();
  const { guessedLetters } = useGuessedLetters();
  const renderedElement = currentWord.split("").map((letter, index) => {
    return (
      <span key={index} className='text-4xl font-bold bg-[#323232] text-white h-15 w-15 flex justify-center items-center border-b-2'>{guessedLetters.includes(letter.toUpperCase()) ? letter.toUpperCase() : ""}</span>
    )
  })

  return (
    <div className='flex items-center justify-center gap-2 w-[352px] mt-5 '>
      {renderedElement}
    </div>
  )
}