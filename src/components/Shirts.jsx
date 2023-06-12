import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"


const Shirts = (props) =>{
    const [shirt, setShirt] = useState([]);
    const {product, onAdd, cartItems} = props;
    useEffect(()=>{
    shirts()
    },[])

    const [qtySelector, setSelector] = useState(1);
    const selectorValue = (qty) =>{
        setSelector();
    }


    const shirts = async () =>{
    const response = await fetch('http://localhost:5000/api/shirts');

    setShirt(await response.json())
}

const shirtCartQty = (prodcuctId) =>{
    let shirtCartItems = 0;
    console.log(cartItems, "CART ITEMS IN SHIRTCARTQTY")
    for (let i = 0; i < cartItems.length; i++){
        if ( prodcuctId === cartItems[i]._id){
            shirtCartItems = shirtCartItems + parseInt(cartItems[i].quantity);
            console.log("Shirt Cart Items in func", shirtCartItems);
        }
    } return(shirtCartItems);
}

    return(
        <div>
        <Link to="/">Home</Link>
            <h3>Shirts</h3>
            <ol>
                {shirt.map((product)=>{
                    const cartAmount = shirtCartQty(product._id)
                    const rows = [];
                    for (let i = 1; i <= product.quantity - cartAmount; i++){
                        rows.push(<option value={i} key={i}>{i}</option>)
                        } 
                        const handleSelectorChange = (e) => {
                            setSelector(parseInt(e.target.value));
                            };
                        const handleAddToCart = () => {
                            console.log("PRODUCT in handle add to cart", product)
                        onAdd(product, qtySelector);
                        };
                        return(
                        <li key={product.id}>
                        {product.name} ${product.price} size: {product.size} quantity:{product.quantity - cartAmount}
                        <select value={qtySelector} onChange={handleSelectorChange}>
                            {rows.map((option) => option )}
                        </select>
                        {cartAmount< product.quantity ? (
                            <button onClick={handleAddToCart} >Add </button> ):(
                            <h3>You have the maximum boards in your cart available</h3>
                        )}    
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}


export default Shirts;