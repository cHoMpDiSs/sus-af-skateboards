import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";


const Cart = (props) =>{
    const {cartItems, onAdd, onRemove, checkOut, checkOutItems} = props;
    const navigate = useNavigate();
    const navigateToThankYou = () => {
        navigate('/thankyou');
    };
    console.log("CART ITEMS IN CART", cartItems)
    return(
    <div>
   <Header/>
   <h2 className="mb-4 ml-9 text-4xl font-extrabold ">Your Cart</h2>
   <div className="flex flex-col items-center ">
    <div className="ml-5 flex-grow">      
            {cartItems.length === 0 && <div>Cart is empty </div>}
        {cartItems.map((item, index) => (
            <div key={item._id} className="text-center">
                <div className="relative mb-6 flex flex-col items-center">
                <div className="absolute bottom-full ">{item.name}</div>
             
                        <img width="15%" src="images/deck.png" alt="deck"></img>
                    
                        <div>
                        {item.quantity} x ${item.price}                        
                    {item.quantity < checkOutItems[index].quantity? <div>
                    <button className="bg-transparent hover:bg-black-400 text-black-700 font-semibold
                             py-.75 px-2 ms-2 border border-black hover:border-transparent rounded" 
                             onClick={()=>onRemove(item)}>-</button>
                    <button className="bg-transparent hover:bg-black-400 text-black-700 font-semibold
                             py-.75 px-2 ms-2 border border-black hover:border-transparent rounded " 
                             onClick={()=>onAdd(item,1)}>+</button>
                    </div>
                     : <div className="flex items-center justify-center">
                     <button className="bg-transparent hover:bg-black-400 text-black-700 font-semibold
                             py-.75 px-2 ms-2 border border-black hover:border-transparent rounded"
                             onClick={()=>onRemove(item)}>-</button>
                     <p>You have the maximum {item.name} available</p>
                     </div>}
                     </div> 
                     </div>  
                </div>
           
        ))}
  
        </div>
        <div className="ml-auto px-20 pb-20 flex justify-end ">
        {cartItems.length !== 0 && <button className="mr-auto bg-transparent hover:bg-black-400 text-black-700  font-semibold
                        py-.75 px-2 border border-black hover:border-transparent rounded "
                      onClick={()=>{checkOut(cartItems);navigateToThankYou()}}>Check Out</button>}
            </div>
        </div>
    </div>
)};





export default Cart;



