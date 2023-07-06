import React, { useEffect } from "react";
import { useState } from "react";

const Card = (props) => {
    const {name, cartItems, onAdd, product} = props;
    const [sizeSelector, setSelector] = useState("small");
    const [buttonText, setButtonText] = useState("Add");
    const initialState = "Add";

    useEffect(() => {
        if(buttonText !== initialState){
            setTimeout(() => setButtonText(initialState), [1000])
        }
    },[buttonText])

    const changeText = (text) => {
        setButtonText(text);
    }

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
    <div className="my-1 px-1 w-full lg:my-4 lg:px-4 lg:w-1/3">
        <div className="rounded-lg shadow-lg align-center">
            <img className="object-cover h-96 mx-auto" src={product.img} alt={name}></img>
            <p className="mb-2 pt-2 text-center tracking-tight dark:text-black">{name}</p>
            <div className="text-center pb-3 ">
                <select name="qSelector" className="bg-grey rounded border border-black py-1 px-1 ms-0 relative"   
                                    onChange={handleSelectorChange}>
                                        {rows.map((option) => option )}
                </select>
                {cartAmount < stockAmount ? (
                                        <button onClick={() => {handleAddToCart(product);changeText("Added!")}}
                                        className="bg-transparent hover:bg-black-400 text-black-700 font-semibold
                                        px-2 ms-2 border border-black hover:border-transparent rounded" 
                                        >{buttonText}
                                        </button> ):(
                                        <p className="text-right"></p>
                                    )}  


            </div>
        </div>
    </div>
)

}


export default Card;