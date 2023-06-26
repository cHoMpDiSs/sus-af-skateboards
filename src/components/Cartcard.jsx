import React from 'react';


const Cartcard = (props) => {
    const {product, onAdd, onRemove, img } = props;
    return(
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <div className="rounded-lg shadow-lg align-center">
        <p className="mb-2 pt-2 text-center font-bold tracking-tight dark:text-black">{product.name}</p>
       
            <img className="w-full object-cover h-96" src={img} alt={product.name}></img>
        
    <div className="text-center pb-3 ">
    {product.quantity} x ${product.item.price}                        
                        {product.quantity < product.item.sizes[product.size].quantity ?  <div>
                       
                    <button className="bg-transparent hover:bg-black-400 text-black-700 font-semibold
                             py-.75 px-2 ms-2 border border-black hover:border-transparent rounded" 
                             onClick={()=>onRemove(product)}>-</button>
                    <button className="bg-transparent hover:bg-black-400 text-black-700 font-semibold
                             py-.75 px-2 ms-2 border border-black hover:border-transparent rounded " 
                             onClick={()=>onAdd(product.item,product.size)}>+</button>
                    </div>
                     : <div className="flex items-center justify-center">
                     <button className="bg-transparent hover:bg-black-400 text-black-700 font-semibold
                             py-.75 px-2 ms-2 border border-black hover:border-transparent rounded"
                             onClick={()=>onRemove(product)}>-</button>
                     <p>You have the maximum {product.item.name} available</p>
                    </div>}

                    
</div>
</div>
</div>
    )
}

export default Cartcard;