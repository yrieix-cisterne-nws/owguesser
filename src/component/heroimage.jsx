export default function HeroImage({ hero, difficulty }) {
    return(
        <div>
            {hero ? (
                <img src={hero.image} alt={hero.name} 
                className={difficulty == "normal" ? "blur-xl" : difficulty == "hard" ? "brightness-0" : ""}/>
            ) : (
                <p>Loading...</p>
            )}

        </div>
    )
}