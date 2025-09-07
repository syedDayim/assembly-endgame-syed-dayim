import { showNewGameButtonResolver } from "../helper/helperFunctions";
import { useNoOfGuesses, useGuessedLetters } from "../store/useCurrentWordStore";

export const NewGame = () => {
    const { resetGuessedLetters } = useGuessedLetters();
    const { noOfGuesses, resetGame } = useNoOfGuesses();

    return (
        <div className={`${noOfGuesses === 0 ? "" : "hidden"}`}>
            <button
                className="bg-[#11B5E5] text-black font-bold w-[228px] h-[44px] rounded-sm cursor-pointer"
                onClick={() => {
                    resetGame();
                    resetGuessedLetters();
                }}
            >
                New Game
            </button>
        </div>
    );
};
