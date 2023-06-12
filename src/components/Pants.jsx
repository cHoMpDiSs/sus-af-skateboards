import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Pants = (props) =>{
    const [pant, setPant] = useState([]);
    const {product, onAdd, cartItems} = props;
    useEffect(() =>{
    pants()
    },[])
    
    const [qtySelector, setSelector] = useState(1);
    const selectorValue = (qty) =>{
        setSelector();
    }

    const pants = async () =>{
    const response = await fetch('http://localhost:5000/api/pants');

    setPant(await response.json())
    }

    const pantCartQty = (prodcuctId) =>{
        let pantCartItems = 0;
        for (let i = 0; i < cartItems.length; i++){
            if ( prodcuctId === cartItems[i]._id){
                pantCartItems = pantCartItems + parseInt(cartItems[i].quantity);
                console.log("boardCart Items in func", pantCartItems);
            }
        } return(pantCartItems);
    }



    return(
        <div>
        <Link to="/">Home</Link>
            <h3>Pants</h3>
            <ol>
                {pant.map((product)=>{
                    const cartAmount = pantCartQty(product._id);
                    const rows = [];
                    for (let i = 1; i <= product.quantity - pantCartQty(); i++){
                        rows.push(<option value={i}>{i}</option>)
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


export default Pants;