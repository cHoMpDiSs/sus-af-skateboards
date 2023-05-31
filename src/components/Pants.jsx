import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Pants(props){
    const [pant, setPant] = useState([]);
    const {product, onAdd} = props;
    
    useEffect(() =>{
    pants()
    },[])
    
    const pants = async () =>{
    const response = await fetch('http://localhost:5000/pants.json');

    setPant(await response.json())
    }
        return(
            <div>
                <Link to="/">Home</Link>
                <h3>Pants</h3>
                
                <ol>
                    {pant.map((data)=>{
                        return(
                            <li key={data.id}>{data.name} ${data.price} quantity:{data.quantity}<button onClick={onAdd}>add to cart</button></li>
                        )
                    })}
                </ol>
            </div>
        )
    }


export default Pants;