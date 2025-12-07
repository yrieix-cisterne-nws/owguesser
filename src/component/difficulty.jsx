export default function Difficulty({ setDifficulty}) {
    return(
        <>
            <div>
                <h2 className="">Difficulty</h2>
                <div className="flex flex-col">
                    <button className="text-[14.4px] cursor-pointer" onClick={() => setDifficulty("easy")}>Easy</button>
                    <button className="text-[14.4px] cursor-pointer" onClick={() => setDifficulty("normal")}>Normal</button>
                    <button className="text-[14.4px] cursor-pointer" onClick={() => setDifficulty("hard")}>Hard</button>
                </div>
            </div>
        </>
    )
}