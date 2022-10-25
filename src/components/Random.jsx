export default function Random({min, max}) {
    
    const randomNum = Math.floor(Math.random() * (max - min) + min);

    return(
        <div className="containerCard">
            <p>Random value between {min} and {max}: {randomNum}</p>
        </div>
    )
}