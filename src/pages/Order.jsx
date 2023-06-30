import React from "react";
import Ordercard from "../components/Ordercard";
import { NavLink } from "react-router-dom";




const Order = () =>{
   

return(
    <div>
        <div className="pt-10 text-center">
        <   NavLink to="/">Back to shop</NavLink>
        </div>
    <div className="px-10" >
        <img src="images/susaf.png" alt="sus-logo"/>
    <Ordercard/>
    </div>
    </div>
)
}



export default Order;