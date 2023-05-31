import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"


function Shirts(){
    const [shirt, setShirt] = useState([]);
    useEffect(()=>{
    shirts()
    },[])

    const shirts = async () =>{
    const response = await fetch('http://localhost:5000/shirts.json');

    setShirt(await response.json())
}
    return(
        <div>
        <Link to="/">Home</Link>
            <h3>Shirts</h3>
            <ol>
                {shirt.map((data)=>{
                    return(
                        <li key={data.id}>{data.name} ${data.price} quantity:{data.quantity}<button>add to cart</button></li>
                    )
                })}
            </ol>
        </div>
    )
}


export default Shirts;