import { useNoOfGuesses, useGuessedLetters, useHasWon } from "../store/useCurrentWordStore";

export const NewGame = () => {
    const { resetGuessedLetters } = useGuessedLetters();
    const { noOfGuesses, resetGame } = useNoOfGuesses();
    const { hasWon } = useHasWon();
    return (
        <div className={`${noOfGuesses === 0 || hasWon ? "" : "hidden"}`}>
            <button
                className="bg-[#11B5E5] text-black font-bold w-[228px] h-[44px] rounded-sm cursor-pointer"
                onClick={() => {
                    resetGame();
                    resetGuessedLetters();
                    window.location.reload();
                }}
            >
                New Game
            </button>
        </div>
    );
};
