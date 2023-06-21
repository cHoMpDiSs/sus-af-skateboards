
const models = {
  
 skateboardSchema:{
      
      product: String,
      name: String,
      attributes: {
        size: String,
        quantity: String},
      price: Number
    },
    
     pantsSchema:{
     
      product: String,
      name: String,
      sizes : {small: {
        size: String,
        quantity: String
      },
      medium: {
        size: String,
        quantity: String
      },
      large: {
        size: String,
        quantity: String
      }},
      color: String,
      price: Number,
      description: String
    },

    tshirtSchema:{
     
      product: String,
      name: String,
      small: {
        size: String,
        quantity: String
      },
      medium: {
        size: String,
        quantity: String
      },
      large: {
        size: String,
        quantity: String
      },
      color: String,
      price: Number,
      description: String
    }

}
  export default models;