export default function BoxColor({r,g,b}) {
    
    return(
        <div
        style={{backgroundColor: `rgb( ${r}, ${g}, ${b} )`}}
        > <p>rgb: {r},{g},{b}</p> </div>
    )
}