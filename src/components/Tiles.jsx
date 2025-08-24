import { languages } from "../data/languages";

export const Tiles = () => {
    const languageElements = languages.map((language) => (
        <span style={{ backgroundColor: language.backgroundColor, color: language.color, padding:"3px" }}>{language.name}</span>
    ))
    return (
        <div className="flex flex-wrap w-[325px] mt-5 justify-center gap-2">
            {languageElements}
        </div>

    );
};
