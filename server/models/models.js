
const models = {
  
 skateboardSchema:{
      
      product: String,
      name: String,
      img: String,
      sizes : {small: {
        size: String,
        quantity: Number
      },
      medium: {
        size: String,
        quantity: Number
      },
      large: {
        size: String,
        quantity: Number
      }},
      price: Number
    },
    
     pantsSchema:{
     
      product: String,
      name: String,
      img: String,
      sizes : {small: {
        size: String,
        quantity: Number
      },
      medium: {
        size: String,
        quantity: Number
      },
      large: {
        size: String,
        quantity: Number
      }},
      color: String,
      price: Number,
      description: String
    },

    tshirtSchema:{
     
      product: String,
      name: String,
      img: String,
      sizes : {small: {
        size: String,
        quantity: Number
      },
      medium: {
        size: String,
        quantity: Number
      },
      large: {
        size: String,
        quantity: Number
      }},
      color: String,
      price: Number,
      description: String
    }

}
  export default models;