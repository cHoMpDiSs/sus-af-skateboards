
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Skateboards(props){
    const [skateboard, setSkateboard] = useState([]);
    const {product, onAdd, cartItems} = props;
  

    useEffect(()=>{
    skateboards()
    },[]) 

    const [qtySelector, setSelector] = useState(1);
    const selectorValue = (qty) =>{
        setSelector(qty);
    }
    const skateboards = async () =>{
    const response = await fetch('http://localhost:5000/api/skateboards');
    setSkateboard(await response.json())
    
}
    console.log("cart Items",cartItems);
    
function boardCartQty(prodcuctId){
    let boardCartItems = 0;
    for (let i = 0; i < cartItems.length; i++){
        if ( prodcuctId === cartItems[i].id){
            boardCartItems = boardCartItems + parseInt(cartItems[i].quantity);
            console.log("boardCart Items in func", boardCartItems);
        }
    } return(boardCartItems);
}



    return(
        <div>
            <Link to="/">Home</Link>
            <h3>Skateboards</h3>
            <ol>
                
                {skateboard.map((product)=>{
                    const cartAmount = boardCartQty(product.id);
                    const rows = [];
                    for (let i = 1; i <= product.quantity - cartAmount; i++){
                        rows.push(<option value={i} key={i}>{i}</option>)
                        } 
                        const handleSelectorChange = (e) => {
                        setSelector(parseInt(e.target.value));
                        };
                        const handleAddToCart = () => {
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
                )}
                )}
            </ol>
        </div>
    )
}


export default Skateboards;



