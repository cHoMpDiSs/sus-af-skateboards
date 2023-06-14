import React from "react";
import Pants from "./Pants";
import Shirts from "./Shirts";
import Header from "./Header";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import Skateboards from "./Skateboards";
import Navbar from "./Navbar/Navbar";


const Main = (props) =>{
    const {product, onAdd} = props
    return (
        <div>
            <Header/>
            <Navbar/>
            {/* <Link to="/">Home</Link>
            <Link to="/skateboards">Skateboards</Link>
            <Link to="/pants">Pants</Link>
            <Link to="/shirts">Shirts</Link>
            <Link to="/cart">Cart</Link> */}
           
        </div>
    )
}

export default Main;