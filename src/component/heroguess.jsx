import { useState } from "react";

export default function HeroGuess({ onSubmit}) {
    const [guess, setGuess] = useState("");

    const inputChange = (e) => {
        e.preventDefault();
        onSubmit(guess);
        setGuess("");
    }
    return(
        <div>
            <form onSubmit={inputChange}>
                <input type="text" placeholder="Enter your guess here" value={guess} onChange={(e) => setGuess(e.target.value)}/>
                <button type="submit">Soumettre</button>
            </form>
        </div>
    )
}