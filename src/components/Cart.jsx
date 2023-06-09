import React from "react";
import { Link, useNavigate } from "react-router-dom";




export default function Cart(props){
    const {cartItems, onAdd, onRemove, checkOut, checkOutItems} = props;
    const navigate = useNavigate();
    const navigateToThankYou = () => {
        navigate('/thankyou');
    };
    return(
    <aside className="block col-1">
        <Link to="/">Home</Link>
        <h3>Cart Items</h3>
        <div>
            {cartItems.length === 0 && <div>Cart is empty </div>}
        </div>
        {cartItems.map((item, index) => (
            <div key={item._id} className="row">
                <div className="col-2">{item.name}</div>
                <div className="col-2">
                    {item.quantity > 0 && <div>{item.quantity} x ${item.price}</div>}
                </div>
                <div className="col-2">
                    {item.quantity > 0 ? <div>
                    {item.quantity < checkOutItems[index].quantity? <div>
                    <button onClick={()=>onRemove(item)} className="remove">-</button>
                    <button onClick={()=>onAdd(item,1)} className="add">+</button>
                    </div>
                     : <div>
                     <button onClick={()=>onRemove(item)} className="remove">-</button>
                     <p>You have the maximum {item.name} available</p></div>}
                     </div>
                    : <div></div>}
                    
                </div>
                
            </div>
        ))}
        {cartItems.length != 0 && <button onClick={()=>{checkOut(cartItems);navigateToThankYou()}}>Check Out</button>}
    </aside>
)};









