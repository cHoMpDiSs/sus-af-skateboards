import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Card from "../components/Card";

const Pants = (props) =>{
    const [pant, setPant] = useState([]);
    const {onAdd, cartItems} = props;
    useEffect(() =>{
    pants()
    },[])
    
    const [qtySelector, setSelector] = useState(1);

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
        <Header/>
            <h2 className="mb-4 text-4xl font-extrabold">Pants</h2>
            <div className="h-56 grid grid-cols-3 gap-4 content-start">
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
                            <div className="align center py-10 px-10">

                            <div className="text-lg py-1 px-2" key={product._id}>
                            <Card
                            name = {product.name}
                            size = {product.size}
                            price = {product.price}
                            quantity = {product.quantity -  cartAmount}
                            />
                        <select className="bg-grey border border-black  py-0.75 px-1 ms-2 relative"  value={qtySelector} onChange={handleSelectorChange}>
                            {rows.map((option) => option )}
                        </select>
                        </div>
                        {cartAmount< product.quantity ? (
                            <button onClick={handleAddToCart} 
                            className="bg-transparent hover:bg-black-400 text-black-700 font-semibold
                            py-.75 px-2 ms-2 border border-black hover:border-transparent rounded" 
                            >Add </button> ):(
                            <h3>You have the maximum boards in your cart available</h3>
                        )}    
                        </div>
                    )}
                    )}
            </div>
        </div>
    )
 }


export default Pants;