import React from "react";


const Card = (props) => {
    const {name, price, size, img} = props;
return(
<div>
    <img src={img} alt={props.name}></img>
    <p className="font-sans">{name}</p>
    <p>${price}</p>
</div>

)

}


export default Card;