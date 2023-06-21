
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
  
  // const onAdd = (product, productQty) =>{
  //   const exist = cartItems.find(x => x._id === product._id);
  //     console.log(exist, "exist")
  //     console.log("CART ITEMS", cartItems)
  //    if(exist && product.quantity >= productQty){
  //     let newArr = [...cartItems];
  //       for(let i = 0; i < newArr.length; i++){
  //         if (newArr[i]._id === product._id){
  //           console.log("NEW ARR", newArr._id)
  //           console.log("PRODUCT ID", product._id)
  //           newArr[i].quantity = parseInt(productQty) + parseInt(newArr[i].quantity);
  //       }};
  //       setCartItems(newArr);
  //       console.log(cartItems + " adding more cart items.");
  //     }else{
  //       setCartItems([...cartItems, {...product, quantity:parseInt(productQty)}]);
  //       console.log(cartItems+" empty cart or new item being added")
  //       setCheckOutItems([...checkOutItems, product])
  //       console.log("SET CHECKOUT ITEMS", checkOutItems)
  //     };
  // };

  const onAdd = (product, size) =>{
    const exist = cartItems.find(x => x._id === product._id);
      console.log(exist, "exist")
      // console.log("CART ITEMS", cartItems)
     if(exist && product.sizes[size].quantity >= 1){
      let newArr = [...cartItems];
        for(let i = 0; i < newArr.length; i++){
          if (newArr[i]._id === product._id){
            console.log("NEW ARR", newArr._id)
            console.log("PRODUCT ID", product._id)
            newArr[i].sizes[size].quantity --
        }};
        setCartItems(newArr);
        console.log(cartItems + " adding more cart items.");
      }else{
        setCartItems([...cartItems, {product, size, quantity:1}]);
        console.log(cartItems+" empty cart or new item being added")
        setCheckOutItems([...checkOutItems, product])
        console.log("SET CHECKOUT ITEMS", checkOutItems)
      };
  };

console.log(checkOutItems, "CHECK OUT ITEMS")
console.log(cartItems, "CART ITEMS")


const onRemove = (product) =>{
  let newCartArr = [...cartItems];
  let newCheckOutArr = [...checkOutItems]
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

const checkOut = (products,size) => {
 console.log(checkOutItems, "CHECK OUT ITEMS IN CHECKOUT")
 console.log(cartItems, "CART ITEMS IN CHECKOUT")
  for(let i = 0; i < products.length; i++){
    // if (products[i].product._id === cartItems[i]._id ){  // this was cartitems.id
      let idString = products[i].product._id;
      let typeString = products[i].product.product;
      console.log(typeString, "TYPE STRING")
      console.log(idString, "ID STRING")
      let productSize = products[i].product.size;
      // console.log("CHECK OUT ITEM", checkOutItems[i])
      let newVal = cartItems[i].product.sizes["small"].quantity - products[i].quantity
      console.log("THIS IS THE ITEM TO BE STORED IN DATABASE", cartItems[i].product.sizes["small"].quantity - products[i].quantity)
      
      fetch("http://localhost:5000/api/"+ typeString + "/" + idString , {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
          },
          method: "PATCH",	
          body: JSON.stringify({
            sizes: {
              [productSize]: {
                quantity: newVal 
              }
            }
          // quantity: checkOutItems[i].quantity - products[i].quantity
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