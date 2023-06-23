
import React, { StrictMode, useEffect } from "react";
import { useState } from "react";
import {Route, Routes} from "react-router-dom"
import Pants from "./pages/Pants";
import Shirts from "./pages/Shirts";
import Main from "./pages/Main";
import Skateboards from "./pages/Skateboards";
import Cart from "./pages/Cart";
import Thank from "./pages/Thank";


const App = () =>{
  const [checkOutItems, setCheckOutItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  
  const onAdd = (item, size) =>{
    const exist = cartItems.find(x => x.item._id === item._id && x.size === size);
      console.log(exist, "exist")
     if(exist && item.sizes[size].quantity >= 1 && exist.size === size ){
      let newArr = [...cartItems];
        for(let i = 0; i < newArr.length; i++){
          if (newArr[i].item._id === item._id && newArr[i].size === size){
            console.log("NEW ARR", newArr[i].item._id)
            console.log("PRODUCT ID", item._id)
            newArr[i].quantity ++
            console.log(newArr[i].quantity, "NEW ARRRAYYYYYY Quantity")
        }};
        setCartItems(newArr);
        console.log(cartItems + " adding more cart items.");
      }else{
        setCartItems([...cartItems, {item, size, quantity:1}]);
        console.log(cartItems+" empty cart or new item being added")
        // setCheckOutItems([...checkOutItems, product])
        // console.log("SET CHECKOUT ITEMS", checkOutItems)
      };
  };

// console.log(checkOutItems, "CHECK OUT ITEMS")
console.log(cartItems, "CART ITEMS")


const onRemove = (item) =>{
  let newCartArr = [...cartItems];
  for(let i = 0; i < cartItems.length; i++){
    if (cartItems[i].item._id === item.item._id && cartItems[i].size === item.size){
        newCartArr[i].quantity --;
        if(cartItems[i].quantity === 0){
         newCartArr.splice(i,i+1)
        }
    }
    setCartItems(newCartArr)
}
}

const checkOut = () => {
//  console.log(checkOutItems, "CHECK OUT ITEMS IN CHECKOUT")
 console.log(cartItems, "CART ITEMS IN CHECKOUT")

  
  for(let i = 0; i < cartItems.length; i++){
      const newSizes = cartItems[i].item.sizes
      let idString = cartItems[i].item._id;
      let typeString = cartItems[i].item.product;
      let size = cartItems[i].size
      newSizes[size].quantity = cartItems[i].item.sizes[size].quantity - cartItems[i].quantity 
      console.log(typeString, "TYPE STRING")
      console.log(idString, "ID STRING")
      let productSize = cartItems[i].size;
      console.log(productSize, "PRODUCT SIZE")


      
      fetch("https://susaf-b1c07c666ead.herokuapp.com/api/"+ typeString + "/" + idString , {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
          },
          method: "PATCH",	
          body: JSON.stringify({
            sizes: newSizes
          })
        })
          .then(function (response) {
          return response.json();
          })
          .then(function (data) {
          // console.log("this is the data", data);
          });
        
    }
    // else{
    //   console.log(products[i]._id, " Does not match ", checkOutItems[i]._id)
    // }
    // } 
    setCheckOutItems([])
    setCartItems([])
  }
    
  return(
     
      <Routes>
        <Route path="/" element={<Main onAdd={onAdd} cartItems={cartItems}/>}/>
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