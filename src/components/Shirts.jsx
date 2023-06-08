import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"


function Shirts(props){
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

function shirtCartQty(){
    let shirtCartItems = 0;
    for (let i = 0; i < cartItems.length; i++){
        if ( cartItems[i].name === shirt[0].name){
            shirtCartItems = shirtCartItems + parseInt(cartItems[i].quantity);
            console.log("shirtCart Items in func", shirtCartItems);
            console.log(shirt[0].name)
        }
    } return(shirtCartItems);
}



console.log("rows" + rows)


const rows = [];



    return(
        <div>
        <Link to="/">Home</Link>
            <h3>Shirts</h3>
            <ol>
                {shirt.map((product)=>{
                    for (let i = 1; i <= product.quantity - shirtCartQty(); i++){
                        rows.push(<option value={i}>i</option>)
                        } 
                        
                    return(
                        <li key={product.id}>{product.name} ${product.price} quantity:{product.quantity - shirtCartQty()}
                        <select

                        onChange={(e) => setSelector(e.target.value)}>
                            {rows.map((object, i) => <option value={i + 1} key={i + 1}> {i + 1}</option> )}

                        </select>
                        {shirtCartQty() < product.quantity ? <button onClick={() => {(localStorage.setItem("localQty",qtySelector));
                        onAdd(shirt[0],localStorage.getItem("localQty"),shirtCartQty()) }} >Add </button> : <h3>You have the maximum shirts in your cart available</h3> }
                        
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}


export default Shirts;