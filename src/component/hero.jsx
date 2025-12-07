export default function HeroImage({ hero }) {
    return(
        <div>
            {hero ? (
                <img src={hero.image} alt={hero.name} />
            ) : (
                <p>Loading...</p>
            )}

        </div>
    )
}