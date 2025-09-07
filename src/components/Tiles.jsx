import { languages } from "../data/languages";
import { useNoOfGuesses } from "../store/useCurrentWordStore";

export const Tiles = () => {
    const { noOfGuesses } = useNoOfGuesses(); // number of wrong guesses made

    const languageElements = languages.map((language, index) => {
        const isDisabled = index < noOfGuesses; // grey out the first N tiles for each wrong guess
        return (
            <span
                key={index}
                style={{
                    backgroundColor: !isDisabled ? "#888888" : language.backgroundColor,
                    color: !isDisabled ? "#cccccc" : language.color,
                    textDecoration: !isDisabled ? "line-through" : "none",
                    textDecorationColor: !isDisabled ? "red" : "inherit", // sets line-through color
                    textDecorationThickness: !isDisabled ? "2px" : "auto", // optional: thickness
                    padding: "3px",
                    transition: "all 0.3s"
                }}
            >
                {language.name}
            </span>
        );
    });

    return (
        <div className="flex flex-wrap w-[325px] mt-5 justify-center gap-2">
            {languageElements}
        </div>
    );
};
