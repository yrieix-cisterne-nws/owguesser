import { useState, useEffect } from "react";
import HeroImage from "../component/heroimage";
import HeroGuess from "../component/heroguess";
import { HeroRandom } from "../component/herorandom";
import Difficulty from "../component/difficulty";


export default function Home() {
    const [currentHero, setCurrentHero] = useState(null);
    const [currentStreak, setCurrentStreak] = useState(0);
    const [bestStreak, setBestStreak] = useState(0);
    const [difficulty, setDifficulty] = useState("easy");


    useEffect(() => {
        HeroRandom(setCurrentHero);
    }, []);

    const handleGuess = (guess) => {
        if (guess.toLowerCase() === currentHero.name.toLowerCase()) {
            setCurrentStreak(currentStreak + 1);
            HeroRandom(setCurrentHero);
        } else {
            alert(`Wrong! The correct answer was ${currentHero.name}`);
            if (currentStreak > bestStreak) {
                setBestStreak(currentStreak);
            }
            setCurrentStreak(0);
        }
    };



   return (
        <div className="">
            <div className="flex justify-center">
                <h1 className="text-4xl">OWGuesser</h1>
            </div>
            <div className="flex justify-center items-center">
                <Difficulty difficulty={difficulty} setDifficulty={setDifficulty}/>
                <div className="flex flex-col pt-4 pl-2 pr-2">
                    <div className="bg-[#f99e1a] p-8">
                        <HeroImage hero={currentHero} difficulty={difficulty} />
                    </div>
                    <HeroGuess onSubmit={handleGuess}/>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h2>Streak</h2>
                    <div className="flex flex-col items-center">
                        <h3 className="text-[14.4px]">Current</h3>
                        <p className="text-3xl">{currentStreak}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h3 className="text-[14.4px]">Best</h3>
                        <p className="text-3xl">{bestStreak}</p>
                    </div>
                </div>
            </div>
            {/* <div className="flex flex-col items-center justify-center">
                <p>
                    OWGuesser is a guessing game where you guesses the Overwatch hero with their images, with 3 level of difficulties.
                </p>
                <p>
                    OWGuesser is not affiliated and not endorsed by Blizzard Entertainment. All images are property of Blizzard Entertainment.
                </p>
                <p>
                    Inspired by Wordle and games like "Who's that Pokémon".
                </p>
            </div> */}
        </div>
    );
}