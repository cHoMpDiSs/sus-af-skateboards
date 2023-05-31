
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



function Skateboards(props){
    const [skateboard, setSkateboard] = useState([]);
    const {product, onAdd} = props;
    useEffect(()=>{
    skateboards()
    },[])

      // trying to add a qauntity selector //
  const [qtySelector, setSelector] = useState(0);
  const selectorValue = (qty) =>{
    setSelector();
  }

   // testing ends here //
    const skateboards = async () =>{
    const response = await fetch('http://localhost:5000/skateboards.json');

    setSkateboard(await response.json())
}
    return(
        <div>
            <Link to="/">Home</Link>
            <h3>Skateboards</h3>
            <ol>
                {skateboard.map((product)=>{
                    return(
                        <li key={product.id}>{product.name} ${product.price} quantity:{product.quantity}
                        <select
                        onChange={(choice) => setSelector(choice)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        <button onClick={() => onAdd(product)}>add to cart</button>
                        </li>
                    )
                })} 
            </ol>
        </div>
    )
}


export default Skateboards;