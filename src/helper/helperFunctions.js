const buttonColorResolver = (isCorrect, isWrong) => {
    if (isWrong) {
        return "bg-red-600 text-white"
    } else if (isCorrect) {
        return "bg-green-600 text-white"
    } else {
        return "bg-[#FCBA29] text-black"
    }
} 

const showNewGameButtonResolver = (noOfGuesses, guessedLetters) => {
    return noOfGuesses === 0 && guessedLetters.length === 0; 
}


export { 
    buttonColorResolver,
    showNewGameButtonResolver
}