export default function IdCard({lastName, firstName, gender, height, birth, picture}) {
    return(
        <div className="containerCard">
            <div>
                <img src={picture} alt="imgProfile" className="imgProfile" />
            </div>
            <div>
                <p>firstName: {firstName}</p>
                <p>lastName: {lastName}</p>
                <p>gender: {gender}</p>
                <p>height: {height}</p>
                <p>birth: {birth.toString().slice(0, 16)}</p>
            </div>
        </div>
    )
}