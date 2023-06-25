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

  
    const shirts = async () =>{
    const response = await fetch('https://susaf-b1c07c666ead.herokuapp.com/api/shirts');

    setShirt(await response.json())
}

return(
    <div>
        <Header/>
        <h2 className="mb-4 mt-10 text-4xl font-extrabold text-center ">Shirts</h2>
        <div className="h-56 grid grid-cols-3 gap-4 content-start">
            {shirt.map((product)=>{
         
                    return(
                        <div key={product._id}>
                        <div className="align center py-10 px-10">
                        <div className="text-lg py-1 px-2" >
                        <Card
                        key={product._id}
                        name = {product.name}
                        img = {product.img}
                        price = {product.price}
                        cartItems = {cartItems}
                        onAdd ={onAdd}
                        product={product}
                       
                    />

                    
                    </div>

                    
                    </div>
            </div>
            )}
            )}
        </div>
    </div>
)
}


export default Shirts;