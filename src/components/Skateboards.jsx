
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Skateboards(props){
    const [skateboard, setSkateboard] = useState([]);
    const {product, onAdd, cartItems} = props;
    useEffect(()=>{
    skateboards()
    },[]) 



    // const [skateboardQty, setSkateboardQty] = useState(0);

    const [qtySelector, setSelector] = useState(1);
    const selectorValue = (qty) =>{
        setSelector();
    }
    const skateboards = async () =>{
    const response = await fetch('http://localhost:5000/api/skateboards');
    setSkateboard(await response.json())
    
}

    console.log("cart Items",cartItems);
    

function boardCartQty(){
    let boardCartItems = 0;
    for (let i = 0; i < cartItems.length; i++){
        if ( cartItems[i].name === skateboard[0].name){
            boardCartItems = boardCartItems + parseInt(cartItems[i].quantity);
            console.log("boardCart Items in func", boardCartItems);
            console.log(skateboard[0].name)
        }
    } return(boardCartItems);
}



console.log("rows" + rows)


const rows = [];



    return(
        <div>
            <Link to="/">Home</Link>
            <h3>Skateboards</h3>
            <ol>
                {skateboard.map((product)=>{
                    
                    for (let i = 1; i <= product.quantity - boardCartQty(); i++){
                        rows.push(<option value={i}>i</option>)
                        } 
                        return(
                            
                        <li key={product.id}>{product.name} ${product.price} quantity:{product.quantity - boardCartQty()}
                        <select

                        onChange={(e) => setSelector(e.target.value)}>
                            {rows.map((object, i) => <option value={i + 1} key={i + 1}> {i + 1}</option> )}

                        </select>
                        {boardCartQty() < product.quantity ? <button onClick={() => {(localStorage.setItem("localQty",qtySelector));
                        onAdd(skateboard[0],localStorage.getItem("localQty")) }} >Add </button> : <h3>You have the maximum boards in your cart available</h3> }
                        
                        </li>
                )}
                )}
            </ol>
        </div>
    )
}


export default Skateboards;