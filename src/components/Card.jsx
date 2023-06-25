import React from "react";
import { useState } from "react";

const Card = (props) => {
    const {name, cartItems, onAdd, product} = props;
    const [sizeSelector, setSelector] = useState("small");

    const cartQty = (productId,size) =>{
        let cartItemsQty = 0;
        for (let i = 0; i < cartItems.length; i++){
            if ( productId === cartItems[i].item._id && size === cartItems[i].size ){
                cartItemsQty = cartItemsQty + cartItems[i].quantity;
                console.log(name, "in cart", cartItemsQty);
            }
        } return(cartItemsQty);
    }
    
    const handleSelectorChange = (e) => {
        setSelector(e.target.value);
        };
    
    const handleAddToCart = (product) => {
        console.log("PRODUCT in handle add to cart", product)
        onAdd(product, sizeSelector);
        
    };

    let cartAmount = 0;
    let stockAmount = 0;
    stockAmount = product.sizes[sizeSelector].quantity
    cartAmount = cartQty(product._id,sizeSelector);
    const rows = [];
    rows.push(<option value={"small"} key={"small"}>{product.sizes.small.size}</option>)
    rows.push(<option value={"medium"} key={"medium"}>{product.sizes.medium.size}</option>)
    rows.push(<option value={"large"} key={"large"}>{product.sizes.large.size}</option>)
    


return(

<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
    
        <p className="mb-2 font-bold tracking-tight dark:text-black">{name}</p>
  
    <img src={product.img} alt={name}></img>
    <div className="text-center">
    <select name="qSelector" className="bg-grey rounded border border-black  py-1 px-1 ms-2 relative"   
                        onChange={handleSelectorChange}>
                            {rows.map((option) => option )}
    </select>
    {cartAmount < stockAmount ? (
                            <button onClick={() => handleAddToCart(product)}
                            className="bg-transparent hover:bg-black-400 text-black-700 font-semibold
                             px-2 ms-2 border border-black hover:border-transparent rounded" >
                            Add </button> ):(
                            <p className="text-right"> </p>
                        )}  
</div>
</div>
)

}


export default Card;