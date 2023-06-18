import React from "react";


const Card = (props) => {
    const {name, price, size, quantity } = props;
return(
<div>
    <img width="20%" src="images/deck.png" alt="deck"></img>
    <p>{name}</p>
    <p>{size}</p>
    <p>$ {price}</p>
    <p>in stock {quantity}</p>
</div>

)

}









export default Card;