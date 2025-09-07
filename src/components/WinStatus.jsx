import { useHasWon, useNoOfGuesses } from "../store/useCurrentWordStore";

export const WinStatus = () => {
    const { hasWon } = useHasWon();
    const { noOfGuesses } = useNoOfGuesses();
    const showStatus = hasWon || noOfGuesses === 0;
    if (!showStatus) return null;
    return (
        <div className={`w-[352px] h-[70px] ${hasWon ? "bg-green-600" : "bg-red-600"} flex flex-col items-center justify-center rounded-[4px] mt-5`}>
            <p className='text-white text-[20px]'>{hasWon ? "You Won 🎉" : "Oops You Lost!"}</p>
            <p className='text-white text-[16px]'>{hasWon ? "Well done!" : "But, you can try again!"}</p>
        </div>
    );
}