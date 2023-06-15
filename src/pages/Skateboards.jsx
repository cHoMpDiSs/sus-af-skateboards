import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header";

const Skateboards = (props) =>{
    const [skateboard, setSkateboard] = useState([]);
    const {onAdd, cartItems} = props;
 
    useEffect(()=>{
    skateboards()
    },[]) 
    const [qtySelector, setSelector] = useState(1);

    const skateboards = async () =>{
    const response = await fetch('http://localhost:5000/api/skateboards');
    setSkateboard(await response.json())
}
    console.log("cart Items",cartItems);
    

const boardCartQty = (prodcuctId) =>{
    let boardCartItems = 0;
    console.log(cartItems, "CART ITEMS IN BOARDCARTQTY")
    for (let i = 0; i < cartItems.length; i++){
        if ( prodcuctId === cartItems[i]._id){
            boardCartItems = boardCartItems + parseInt(cartItems[i].quantity);
            console.log("boardCart Items in func", boardCartItems);
        }
    } return(boardCartItems);
}

    return(
        <div>
            <Header/>
            <h2 className="mb-4 text-4xl font-extrabold ">Skateboards</h2>
            <ol>
                {skateboard.map((product)=>{
                    const cartAmount = boardCartQty(product._id);
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
                            <div>
                        <li className="text-lg text-left py-1 px-2 list-outside" key={product._id}>
                        {product.name} ${product.price} size: {product.size}  quantity:{product.quantity - cartAmount}
                        
                        <select className="bg-grey border border-black  py-0.75 px-1 ms-2 relative "   onChange={handleSelectorChange}  >
                            {rows.map((option) => option )}
                        </select>
                        </li>
                        {cartAmount< product.quantity ? (
                            <button onClick={handleAddToCart}
                            className="bg-transparent hover:bg-black-400 text-black-700 font-semibold hover:text-white py-.75 px-2 ms-2 border border-black hover:border-transparent rounded" >Add </button> ):(
                            <h3>You have the maximum boards in your cart available</h3>
                        )}    
                        
                        </div>
                )}
                )}
            </ol>
        </div>
    )
}


export default Skateboards;



