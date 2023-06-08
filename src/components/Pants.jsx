import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Pants(props){
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

    function pantCartQty(){
        let pantCartItems = 0;
        for (let i = 0; i < cartItems.length; i++){
            if ( cartItems[i].name === pant[0].name){
                pantCartItems = pantCartItems + parseInt(cartItems[i].quantity);
                console.log("pantCart Items in func", pantCartItems);
                console.log(pant[0].name)
            }
        } return(pantCartItems);
    }


    const rows = [];


    return(
        <div>
        <Link to="/">Home</Link>
            <h3>Pants</h3>
            <ol>
                {pant.map((product)=>{
                    for (let i = 1; i <= product.quantity - pantCartQty(); i++){
                        rows.push(<option value={i}>i</option>)
                        } 
                        
                    return(
                        <li key={product.id}>{product.name} ${product.price} quantity:{product.quantity - pantCartQty()}
                        <select

                        onChange={(e) => setSelector(e.target.value)}>
                            {rows.map((object, i) => <option value={i + 1} key={i + 1}> {i + 1}</option> )}

                        </select>
                        {pantCartQty() < product.quantity ? <button onClick={() => {(localStorage.setItem("localQty",qtySelector));
                        onAdd(pant[0],localStorage.getItem("localQty"),pantCartQty()) }} >Add </button> : <h3>Sorry {product.name} is unavailable.</h3> }
                        
                        </li>
                    )
                })}
            </ol>
        </div>
    )
    }


export default Pants;