import React, { StrictMode, useEffect } from "react";
import { useState } from "react";
import {Route, Routes} from "react-router-dom"
import Pants from "./components/Pants";
import Shirts from "./components/Shirts";
import Main from "./components/Main";
import Skateboards from "./components/Skateboards";
import Cart from "./components/Cart";
import Thank from "./components/Thank";


const App = () =>{
  const [checkOutItems, setCheckOutItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  
  const onAdd = (product, productQty) =>{
    const exist = cartItems.find(x => x._id === product._id);
      console.log(exist, "exist")
      console.log("CART ITEMS", cartItems)
     if(exist && product.quantity >= productQty){
      let newArr = [...cartItems];
        for(let i = 0; i < newArr.length; i++){
          if (newArr[i]._id === product._id){
            console.log("NEW ARR", newArr._id)
            console.log("PRODUCT ID", product._id)
            newArr[i].quantity = parseInt(productQty) + parseInt(newArr[i].quantity);
        }};
        setCartItems(newArr);
        console.log(cartItems + " adding more cart items.");
      }else{
        setCartItems([...cartItems, {...product, quantity:parseInt(productQty)}]);
        console.log(cartItems+" empty cart or new item being added")
        setCheckOutItems([...checkOutItems, product])
        console.log("SET CHECKOUT ITEMS", checkOutItems)
      };
  };

const onRemove = (product) =>{
  let newCartArr = [... cartItems];
  let newCheckOutArr = [... checkOutItems]
  for(let i = 0; i < cartItems.length; i++){
    if (cartItems[i]._id === product._id){
        newCartArr[i].quantity --;
        if(cartItems[i].quantity === 0){
         newCartArr.splice(i,i+1)
         newCheckOutArr.splice(i,i+1)
        }
    }
    setCheckOutItems(newCheckOutArr)
    setCartItems(newCartArr)
}
}

const checkOut = (products) => {
 
  for(let i = 0; i < checkOutItems.length; i++){
    if (products[i].id === checkOutItems[i].id ){  // this was cartitems.id
      let idString = products[i]._id;
      let typeString = products[i].product;
      console.log("CHECK OUT ITEM", checkOutItems[i])
      console.log("THIS IS THE ITEM TO BE STORED IN DATABASE", checkOutItems[i].quantity - products[i].quantity)
      
      fetch("http://localhost:5000/api/"+ typeString + "/" + idString , {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
          },
          method: "PATCH",	
          body: JSON.stringify({
          quantity: checkOutItems[i].quantity - products[i].quantity
          })
        })
          .then(function (response) {
          return response.json();
          })
          .then(function (data) {
          // console.log("this is the data", data);
          });
        
    }
    else{
      console.log(products[i].name, " Does not match ", checkOutItems[i].name)
    }
    } 
    setCheckOutItems([])
    setCartItems([])
  }
    
  return(
  
      <Routes>
        <Route path="/" element={<Main onAdd={onAdd}/>}/>
        <Route path="/pants" element={<Pants onAdd={onAdd} cartItems={cartItems}/>}/>
        <Route path="/shirts" element={<Shirts onAdd={onAdd} cartItems={cartItems}/>}/>
        <Route path="/skateboards" element={<Skateboards onAdd={onAdd} cartItems={cartItems}/>}/>
        <Route path="/cart" element={<Cart onAdd={onAdd} cartItems={cartItems} 
        setCartItems={setCartItems} checkOutItems={checkOutItems} onRemove={onRemove} checkOut={checkOut} ></Cart>}/>
        <Route path="/thankyou" element={<Thank/>}/>
      </Routes>
      
  )
  
  }


export default App;