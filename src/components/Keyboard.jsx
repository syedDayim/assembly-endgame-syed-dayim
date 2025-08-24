export const Keyboard = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const keyboardElements = alphabet.split("").map((letter, index) => {
        return (
            <button key={ index } className="w-[40px] h-[40px] bg-[#FCBA29] border-white border-[1px] text-black font-bold p-1.5 rounded-[6px] cursor-pointer" onClick={() => console.log(letter)}>{ letter }</button>
        )
    })
    return (
        <div className="mt-5 max-w-[480px] flex flex-wrap gap-2 justify-center">
            { keyboardElements }
        </div>
    )
}