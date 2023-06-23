import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Card from "../components/Card";

const Shirts = (props) =>{
    const [shirt, setShirt] = useState([]);
    const {onAdd, cartItems} = props;
    useEffect(()=>{
    shirts()
    },[])

    const [sizeSelector, setSelector] = useState("small");
  
    const shirts = async () =>{
    const response = await fetch('http://localhost:5000/api/shirts');

    setShirt(await response.json())
}

const shirtCartQty = (productId, size) =>{
    let shirtCartItems = 0;
    for (let i = 0; i < cartItems.length; i++){
        if ( productId === cartItems[i].item._id && size === cartItems[i].size ){
            shirtCartItems = shirtCartItems + cartItems[i].quantity;
            console.log("shirtCart Items in func", shirtCartItems);
        }
    } return(shirtCartItems);
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
            <h2 className="mb-4 mt-10 text-4xl font-extrabold text-center ">Shirts</h2>
            <div className="h-56 grid grid-cols-3 gap-4 content-start ">
                {shirt.map((product)=>{
                       let cartAmount = 0;
                       let stockAmount = 0;
                       stockAmount = product.sizes[sizeSelector].quantity
                       cartAmount = shirtCartQty(product._id,sizeSelector);
                       const rows = [];
                       rows.push(<option value={product.sizes.small.size} key={product.sizes.small.size}>{product.sizes.small.size}</option>)
                       rows.push(<option value={product.sizes.medium.size} key={product.sizes.medium.size}>{product.sizes.medium.size}</option>)
                       rows.push(<option value={product.sizes.large.size} key={product.sizes.large.size}>{product.sizes.large.size}</option>)
                        return(
                            <div key={product._id} >
                            <div className="py-10 px-10">
                            <div className="text-lg py-1 px-2" >
                            <Card
                            key={product._id}
                            name = {product.name}
                            img = {product.img}
                            price = {product.price}
                           
                            />
                            <select name="sSelector" className="bg-grey border border-black  py-0.75 px-1 ms-2 relative " onChange={handleSelectorChange}>
                                {rows.map((option) => option )}
                            </select>
                            </div>
                            {cartAmount < stockAmount ? (
                                <button onClick={() => handleAddToCart(product)}
                                className="bg-transparent hover:bg-black-400 text-black-700 font-semibold 
                                py-.75 px-2 ms-2 border border-black hover:border-transparent rounded">
                                Add </button> ):(
                                <h3>You have the maximum boards in your cart available</h3>
                            )}    
                            </div>
                            </div>
                    )
                })}
            </div>
        </div>
    )
}


export default Shirts;