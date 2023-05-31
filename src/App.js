import React, { StrictMode, useEffect } from "react";
import { useState } from "react";
import {Route, Routes} from "react-router-dom"
import Pants from "./components/Pants";
import Shirts from "./components/Shirts";
import Main from "./components/Main";
import Skateboards from "./components/Skateboards";
import Cart from "./components/Cart";





function App(){
  
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) =>{
    
    const exist = cartItems.find(x => x.id === product.id);
    
    if(exist && product.quantity != 0){
      
      product.quantity--
      setCartItems(
        cartItems.map(x => 
          x.id === product.id ? {...exist, quantity: exist.quantity} : x
          ))     
          ;
  }
  
  else{
    setCartItems([...cartItems, {...product, qty:1}]);
  }
};
  return(
  
      <Routes>
        <Route path="/" element={<Main onAdd={onAdd}/>}/>
        <Route path="/pants" element={<Pants onAdd={onAdd}/>}/>
        <Route path="/shirts" element={<Shirts onAdd={onAdd}/>}/>
        <Route path="/skateboards" element={<Skateboards onAdd={onAdd}/>}/>
        <Route path="/cart" element={<Cart onAdd={onAdd} cartItems={cartItems}></Cart>}/>
      </Routes>
      
    
  
  )
  }

 

export default App;