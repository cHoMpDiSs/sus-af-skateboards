import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Cartcard from "../components/Cartcard";

const Cart = (props) =>{
    const {cartItems, onAdd, onRemove, checkOut} = props;
    // const [total, setTotal] = useEffect(0)
    const navigate = useNavigate();
    const navigateToThankYou = () => {
        navigate('/thankyou');
    };
    console.log("CART ITEMS IN CART", cartItems)
    
    let total = 0
    let tax = 0;
    const calculateTotal = () =>{
        for(let i = 0; i < cartItems.length; i++){
            total = cartItems[i].quantity * cartItems[i].item.price + total
            tax = total * .075
            
        } 
    }
   
    return(
    <div>
   <Header/>
   <h2 className="mb-4 ml-9 text-4xl font-extrabold ">Your Cart</h2>
   
        <div class="container my-12 mx-auto px-4 md:px-12">
                <div class="flex flex-wrap -mx-1 lg:-mx-">
            {calculateTotal()}     
            {cartItems.length === 0 && <div>Cart is empty </div>}
        {cartItems.map((item) => {
            return(
            <Cartcard
            key={item._id}
            product={item}
            img={item.item.img}
            onAdd={onAdd}
            onRemove={onRemove}
            />
            )}
            // <div key={item.item._id + item.size} className="text-center">
            //     <div className="relative mb-6 flex flex-col items-center">
            //     <div className="absolute bottom-full ">{item.item.name}</div>
            //             <img width="15%" src={item.item.img} alt="deck"></img>
            //             <div>
            //             {item.quantity} x ${item.item.price}                        
            //             {item.quantity < item.item.sizes[item.size].quantity ?  <div>
                       
            //         <button className="bg-transparent hover:bg-black-400 text-black-700 font-semibold
            //                  py-.75 px-2 ms-2 border border-black hover:border-transparent rounded" 
            //                  onClick={()=>onRemove(item)}>-</button>
            //         <button className="bg-transparent hover:bg-black-400 text-black-700 font-semibold
            //                  py-.75 px-2 ms-2 border border-black hover:border-transparent rounded " 
            //                  onClick={()=>onAdd(item.item,item.size)}>+</button>
            //         </div>
            //          : <div className="flex items-center justify-center">
            //          <button className="bg-transparent hover:bg-black-400 text-black-700 font-semibold
            //                  py-.75 px-2 ms-2 border border-black hover:border-transparent rounded"
            //                  onClick={()=>onRemove(item)}>-</button>
            //          <p>You have the maximum {item.item.name} available</p>
            //          </div>}
            //          </div> 
            //          </div>  
            //     </div>
         
        )}
         </div>
            </div>
        <div className="ml-auto px-20 pb-20 flex justify-end ">
            <div className="relative">
                {/* {calculateTotal()} */}
            
            </div>
                <p>Your Total:${total.toFixed(2)} + Tax:${tax.toFixed(2)} </p>
                <p>Total:${total.toFixed(2) + tax.toFixed(2)}</p>
        {cartItems.length !== 0 && <button className="mr-auto bg-transparent hover:bg-black-400 text-black-700  font-semibold
                        py-.75 px-2 border border-black hover:border-transparent rounded "
                      onClick={()=>{checkOut();navigateToThankYou()}}>Check Out</button>}
            </div>
        
    </div>
)};





export default Cart;



