import { useNoOfGuesses, useGuessedLetters, useHasWon, useCurrentWordStore } from "../store/useCurrentWordStore";
import { useScoreStore } from "../store/useScoreStore";

export const NewGame = () => {
    const { resetGuessedLetters } = useGuessedLetters();
    const { noOfGuesses, resetGame } = useNoOfGuesses();
    const { hasWon, reset } = useHasWon();
    const { currentWord } = useCurrentWordStore();
    const { addScore, calculatePoints, nextLevel, resetScore } = useScoreStore();
    
    const handleNextLevel = () => {
        // Calculate and add score for winning
        const points = calculatePoints(noOfGuesses, currentWord.length);
        addScore(points);
        
        // Move to next level
        nextLevel();
        
        // Reset game state
        resetGame();
        resetGuessedLetters();
        reset();
        
        // Reload to get new word
        window.location.reload();
    };
    
    const handleEndGame = () => {
        // Calculate and add final score
        const points = calculatePoints(noOfGuesses, currentWord.length);
        addScore(points);
        
        // Reset everything
        resetScore();
        resetGame();
        resetGuessedLetters();
        reset();
        
        // Reload to start fresh
        window.location.reload();
    };
    
    const handleStartOver = () => {
        // Reset everything without adding score
        resetScore();
        resetGame();
        resetGuessedLetters();
        reset();
        
        // Reload to start fresh
        window.location.reload();
    };
    
    return (
        <div className={`${noOfGuesses === 0 || hasWon ? "" : "hidden"}`}>
            {hasWon ? (
                <div className="flex gap-4">
                    <button
                        className="bg-green-600 text-white font-bold w-[120px] h-[44px] rounded-sm cursor-pointer hover:bg-green-700 transition-colors"
                        onClick={handleNextLevel}
                    >
                        Next Level
                    </button>
                    <button
                        className="bg-red-600 text-white font-bold w-[120px] h-[44px] rounded-sm cursor-pointer hover:bg-red-700 transition-colors"
                        onClick={handleEndGame}
                    >
                        End Game
                    </button>
                </div>
            ) : (
                <button
                    className="bg-[#11B5E5] text-black font-bold w-[228px] h-[44px] rounded-sm cursor-pointer hover:bg-blue-500 transition-colors"
                    onClick={handleStartOver}
                >
                    Start Over
                </button>
            )}
        </div>
    );
};
