import React from "react";
import { Link, useNavigate } from "react-router-dom";




export default function Cart(props){
    const {cartItems, onAdd, onRemove, checkOut} = props;
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
                    {item.quantity <= 14? <div>
                    <button onClick={()=>onRemove(item)} className="remove">-</button>
                    <button onClick={()=>onAdd(item,1)} className="add">+</button>
                    </div>
                     : <div>
                     <button onClick={()=>onRemove(item)} className="remove">-</button>
                     <p>You have the maximum {item.name} available</p></div>}
                     </div>
                    : <div></div>}
                    <button onClick={()=>{checkOut(item);navigateToThankYou()}}>Check Out</button>
                </div>
                
            </div>
        ))}
    </aside>
)};









