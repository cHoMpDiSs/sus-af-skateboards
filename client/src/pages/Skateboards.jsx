import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Card from "../components/Card";


const Skateboards = (props) =>{
    const [skateboard, setSkateboard] = useState([]);
    const {onAdd, cartItems} = props;
 
    useEffect(()=>{
    skateboards()
    },[]) 
    const [sizeSelector, setSelector] = useState("small");

    const skateboards = async () =>{
    const response = await fetch('https://susaf-b1c07c666ead.herokuapp.com/api/skateboards');
    setSkateboard(await response.json())
}
    

const boardCartQty = (productId,size) =>{
    let boardCartItems = 0;
    for (let i = 0; i < cartItems.length; i++){
        if ( productId === cartItems[i].item._id && size === cartItems[i].size ){
            boardCartItems = boardCartItems + cartItems[i].quantity;
            console.log("pantCart Items in func", boardCartItems);
        }
    } return(boardCartItems);
}

const handleSelectorChange = (e) => {
    setSelector(e.target.value);
    };

const handleAddToCart = (product) => {
    console.log("PRODUCT in handle add to cart", product)
    onAdd(product, sizeSelector);
    
};


    return(
        <div>
            <Header/>
            <h2 className="mb-4 mt-10 text-4xl font-extrabold text-center ">Skateboards</h2>
            <div className="h-56 grid grid-cols-3 gap-4 content-start">
                {skateboard.map((product)=>{
                    let cartAmount = 0;
                    let stockAmount = 0;
                    stockAmount = product.sizes[sizeSelector].quantity
                    cartAmount = boardCartQty(product._id,sizeSelector);
                    const rows = [];
                    rows.push(<option value={"small"} key={"small"}>{product.sizes.small.size}</option>)
                    rows.push(<option value={"medium"} key={"medium"}>{product.sizes.medium.size}</option>)
                    rows.push(<option value={"large"} key={"large"}>{product.sizes.large.size}</option>)
                        return(
                            <div key={product._id}>
                            <div className="align center py-10 px-10">
                            <div className="text-lg py-1 px-2" >
                            <Card
                            key={product._id}
                            name = {product.name}
                            img = {product.img}
                            price = {product.price}
                           
                        />
                        <select name="qSelector" className="bg-grey border border-black  py-0.75 px-1 ms-2 relative"   
                        onChange={handleSelectorChange}>
                            {rows.map((option) => option )}
                        </select>
                        </div>
                        {cartAmount < stockAmount ? (
                            <button onClick={() => handleAddToCart(product)}
                            className="bg-transparent hover:bg-black-400 text-black-700 font-semibold
                             py-.75 px-2 ms-2 border border-black hover:border-transparent rounded" >
                            Add </button> ):(
                            <h3>You have the maximum boards in your cart available</h3>
                        )}    
                        
                        </div>
                </div>
                )}
                )}
            </div>
        </div>
    )
}


export default Skateboards;



