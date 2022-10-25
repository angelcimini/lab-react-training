export default function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}){
    const lastNumCreditCard = number.slice(12,16)

    return(
        <div
        style={{backgroundColor: bgColor, color: color, border: '1px solid black', borderRadius: '15px', width: '40%', height: '30%', margin: '10px'}}
        >
            <p>{type}</p>
            <p>···· ···· ···· {lastNumCreditCard}</p>
            <p>Expires: {expirationMonth}/{expirationYear}  {bank}</p>
            <p>owner: {owner} </p>
        </div>
    )
}