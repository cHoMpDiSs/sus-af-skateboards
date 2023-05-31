import React from "react";
import { Link } from "react-router-dom"



export default function Cart(props){
    const {cartItems, onAdd, onRemove} = props;
    return(
    <aside className="block col-1">
        <Link to="/">Home</Link>
        <h3>Cart Items</h3>
        <div>
            {cartItems.length === 0 && <div>Cart is empty </div>}
        </div>
        {cartItems.map((item) => (
            <div key={item.id} className="row">
                <div className="col-2">{item.name}</div>
                <div className="col-2">
                    <button onClick={()=>onAdd(item)} className="add">+</button>
                    <button onClick={()=>onRemove(item)} className="remove">-</button>
                </div>
                <div className="col-2">
                    {item.qty} x ${item.price.toFixed(2)}
                </div>
            </div>
        ))}
    </aside>
)};









