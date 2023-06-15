import React from "react";
import Pants from "./Pants";
import Shirts from "./Shirts";
import Header from "../components/Header";
import Cart from "./Cart";
import { Link  } from "react-router-dom";
import Skateboards from "./Skateboards";



const Main = (props) =>{
    const {cartItems} = props
    return (
        <div>
            <Header/>
           </div>
       
    )
}

export default Main;