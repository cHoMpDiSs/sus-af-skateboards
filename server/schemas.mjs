
const schemas = {
  
 skateboardSchema:{
      type: String,
      name: String,
      size: String,
      price: Number,
      quantity: Number,
      inStock: Boolean
    },
    
     pantsSchema:{
      type: String,
      name: String,
      size: String,
      color: String,
      price: Number,
      description: String,
      quantity: Number,
      inStock: Boolean
    },

    tshirtSchema:{
      type: String,
      name: String,
      size: String,
      color: String,
      price: Number,
      description: String,
      quantity: Number,
      inStock: Boolean
    }

}
  export default schemas;