import React, { StrictMode, useEffect } from "react";
import { useState } from "react";
import {Route, Routes} from "react-router-dom"
import Pants from "./components/Pants";
import Shirts from "./components/Shirts";
import Main from "./components/Main";
import Skateboards from "./components/Skateboards";
import Cart from "./components/Cart";
import Thank from "./components/Thank";



function App(){
  const [checkOutItems, setCheckOutItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);



  const onAdd = (product, productQty) =>{
    const exist = cartItems.find(x => x._id === product._id);
     if(exist && product.quantity >= productQty){
      let newArr = [...cartItems];
        for(let i = 0; i < cartItems.length; i++){
          if (cartItems[i].name === product.name){
              
              newArr[i].quantity = parseInt(productQty) + parseInt(cartItems[i].quantity);
             
        }};
        setCartItems(newArr);
      
        console.log(cartItems + " adding more cart items.");
      }else{
        setCheckOutItems([...checkOutItems, product])
        console.log("SET CHECKOUT ITEMS", checkOutItems)
        setCartItems([...cartItems, {...product, quantity:parseInt(productQty)}]);
        console.log(cartItems+" empty cart or new item being added")
      };
};
const onRemove = (product) =>{
  let newArr = [... cartItems];
  for(let i = 0; i < cartItems.length; i++){
    if (cartItems[i].name === product.name){
        newArr[i].quantity --;
        if(cartItems[i].quantity === 0){
         newArr.splice(i,1)
        }
    }
 setCartItems(newArr)
}
}


function checkOutLoop(checkOutItems){
  for(let i = 0; i < checkOutItems.length; i++){
    checkOut(checkOutItems[i])
  }
}






let checkOut = (product) => {
  let idString = product._id;
  let typeString = product.type;
  let newAmount = 0;

  for(let i = 0; i < cartItems.length; i++){
    if (checkOutItems[i].id === cartItems[i].id){
      newAmount = checkOutItems[i].quantity - product.quantity
    }
  }


  console.log("CHECK OUT ITEMS", checkOutItems)

 

  fetch("http://localhost:5000/api/"+ typeString + "/" + idString , {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
      },

      method: "PATCH",	

      body: JSON.stringify({
      quantity: newAmount
      })
    })
      .then(function (response) {
    
      return response.json();
      })
      .then(function (data) {
      console.log("this is the data", data);
      });

      setCartItems([]);

    }
      

  return(
  
      <Routes>
        <Route path="/" element={<Main onAdd={onAdd}/>}/>
        <Route path="/pants" element={<Pants onAdd={onAdd} cartItems={cartItems}/>}/>
        <Route path="/shirts" element={<Shirts onAdd={onAdd} cartItems={cartItems}/>}/>
        <Route path="/skateboards" element={<Skateboards onAdd={onAdd} cartItems={cartItems}/>}/>
        <Route path="/cart" element={<Cart onAdd={onAdd} cartItems={cartItems} 
        setCartItems={setCartItems} onRemove={onRemove} checkOut={checkOut} checkOutLoop={checkOutLoop}></Cart>}/>
        <Route path="/thankyou" element={<Thank/>}/>
      </Routes>
      
    
  
  )
  }



export default App;