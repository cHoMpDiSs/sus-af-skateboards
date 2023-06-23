
import models from "./models/models.js";
import path from "path"
import express, { json } from "express"
import mongoose from "mongoose";
import { fileURLToPath } from 'url';
import bodyParser from "body-parser";
import cors from "cors"
import dotenv from "dotenv";

dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express(); // create express app
const PORT = process.env.PORT || 5000

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


mongoose.connect(process.env.REACT_APP_CONNECTION_STRING)

const Pants = mongoose.model('Pant', models.pantsSchema)
const Skateboards = mongoose.model('Skateboard', models.skateboardSchema)
const Tshirts = mongoose.model('Tshirt', models.tshirtSchema)

const susBaggiesStone = new Pants({
  product: "pants",
  name: "90's baggy jeans stone",
  img: "https://susaf.s3.us-west-1.amazonaws.com/static/pants/baggy_stone.jpg",
  sizes : { small: {
    size: "small",
    quantity: 15
  },
  medium: {
    size: "medium",
    quantity: 15
  },
  large: {
    size: "large",
    quantity: 15
  }},
  color: "Black",
  price: 80,
  description: "Bring back the 90's skate scene with this classic cut.",
});
const susBaggiesBlack = new Pants({
  product: "pants",
  name: "90's baggy jeans black",
  img: "https://susaf.s3.us-west-1.amazonaws.com/static/pants/baggy_black.jpg",
  sizes : { small: {
    size: "small",
    quantity: 15
  },
  medium: {
    size: "medium",
    quantity: 15
  },
  large: {
    size: "large",
    quantity: 15
  }},
  color: "Blue",
  price: 80,
  description: "Bring back the 90's skate scene with this classic cut.",
});

const susBaggiesBlue = new Pants({
  product: "pants",
  name: "90's baggy jeans blue",
  img: "https://susaf.s3.us-west-1.amazonaws.com/static/pants/baggy_blue.jpg",
  sizes : { small: {
    size: "small",
    quantity: 15
  },
  medium: {
    size: "medium",
    quantity: 15
  },
  large: {
    size: "large",
    quantity: 15
  }},
  color: "Blue",
  price: 80,
  description: "Bring back the 90's skate scene with this classic cut.",
});

const susBasicDeckBlack = new Skateboards({
  product: "skateboards",
  name: "SUS AF Minimalist Black",
  img: "https://susaf.s3.us-west-1.amazonaws.com/static/skateboards/black_deck.jpeg",
  sizes : {small: {
    size: "8.38",
    quantity: 15
  },
  medium: {
    size: "8.5",
    quantity: 15
  },
  large: {
    size: "8.63",
    quantity: 15
  }},
  price: 45,
  quantity: 15
 
});
const susBasicDeckRed = new Skateboards({
  product: "skateboards",
  name: "SUS AF Minimalist Red",
  img: "https://susaf.s3.us-west-1.amazonaws.com/static/skateboards/red_deck.jpeg",
  sizes : {small: {
    size: "8.38",
    quantity: 15
  },
  medium: {
    size: "8.5",
    quantity: 15
  },
  large: {
    size: "8.63",
    quantity: 15
  }},
  price: 45,
  quantity: 15
 
});


const susBasicDeckPurple = new Skateboards({
  product: "skateboards",
  name: "SUS AF Minimalist Purple",
  img: "https://susaf.s3.us-west-1.amazonaws.com/static/skateboards/purple_deck.jpeg",
  sizes : {small: {
    size: "8.38",
    quantity: 15
  },
  medium: {
    size: "8.5",
    quantity: 15
  },
  large: {
    size: "8.63",
    quantity: 15
  }},
  price: 45,
  quantity: 15
 
});

const tShirtGrey = new Tshirts({
  product: "shirts",
  name: "Plain Grey sus Tee ",
  img: "https://susaf.s3.us-west-1.amazonaws.com/static/shirts/grey_shirt.jpg",
  sizes : {small: {
    size: "small",
    quantity: 15
  },
  medium: {
    size: "medium",
    quantity: 15
  },
  large: {
    size: "large",
    quantity: 15
  }},
  price: 19.99,
  quantity: 10,
  description: "",
  instock: true
});

const tShirtGreen = new Tshirts({
  product: "shirts",
  name: "Plain Green sus Tee ",
  img: "https://susaf.s3.us-west-1.amazonaws.com/static/shirts/green_shirt.JPG",
  sizes : {small: {
    size: "small",
    quantity: 15
  },
  medium: {
    size: "medium",
    quantity: 15
  },
  large: {
    size: "large",
    quantity: 15
  }},
  price: 19.99,
  quantity: 10,
  description: "",
  instock: true
});

const tShirtRed= new Tshirts({
  product: "shirts",
  name: "Plain Red sus Tee ",
  img: "https://susaf.s3.us-west-1.amazonaws.com/static/shirts/red_shirt.JPG",
  sizes : {small: {
    size: "small",
    quantity: 15
  },
  medium: {
    size: "medium",
    quantity: 15
  },
  large: {
    size: "large",
    quantity: 15
  }},
  price: 19.99,
  quantity: 10,
  description: "",
  instock: true
});


// susBaggiesBlack.save()
// susBaggiesBlue.save()
// susBaggiesStone.save()
// susBasicDeckBlack.save()
// susBasicDeckPurple.save()
// susBasicDeckRed.save()
// tShirtGrey.save()
// tShirtGreen.save()
// tShirtRed.save()

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

app.get('/api/pants', async (req, res) => {
  try{
    const allPants = await Pants.find({});
    res.send(allPants);
  }catch (err){
    res.send(err)
  }
})

app.get('/api/pants:id', async (req, res) => {
  try{
    const allPants = await Pants.find({});
    res.send(allPants);
  }catch (err){
    res.send(err)
  }
})

app.get('/api/shirts', async (req, res)=> {
  try{
    const allShirts = await Tshirts.find({});
    res.json(allShirts);
  }catch (err){
    res.json(err)
  }
})

app.get('/api/skateboards/', async (req, res)=> {
  try{
    const allSkateboards = await Skateboards.find({});
    res.json(allSkateboards);
  }catch (err){
    res.json(err)
  }
})

app.get('/api/skateboards/:id', async (req, res)=> {
  try{
    const allSkateboards = await Skateboards.find({});
    res.json(allSkateboards);
  }catch (err){
    res.json(err)
  }
})

app.post('/api/skateboards', async(req , res) =>{
  const newBoard = Skateboards(req.body);
  console.log(newBoard);
  await newBoard.save();
  res.send(newBoard);
})

app.patch('/api/skateboards/:id', async (req, res) => {
  
  const skateboard = await Skateboards.findById(req.params.id)
  const newQuantity = req.body.sizes
  if (!skateboard) return res.status(404).send("Skateboard not found....");
  try {
    const updatedSkate = await Skateboards.findByIdAndUpdate(req.params.id, {
      sizes: newQuantity     
    });
    console.log("succesfully updated")
    res.status(200).send(updatedSkate);
  }catch (err){
    res.status(500).send(err.message);
    console.log(err.message);
  } 
  });


app.patch('/api/shirts/:id', async (req, res) => {
  const shirt = await Tshirts.findById(req.params.id)
  const newQuantity = req.body.sizes
  if (!shirt) return res.status(404).send("Shirt not found....");
  try {
    const updatedShirt = await Tshirts.findByIdAndUpdate(req.params.id, {
      sizes: newQuantity
    });
    console.log("succesfully updated")
    res.status(200).send(updatedShirt);
  }catch (err){
    res.status(500).send(err.message);
    console.log(err.message);
  } 
  });


// WORKING ON PATCH FOR PANTS FIRST

app.patch('/api/pants/:id', async (req, res) => {
  const pant = await Pants.findById(req.params.id)
  const newQuantity = req.body.sizes
  console.log(newQuantity, "SERVER PATCH QUANTITY")
  if (!pant) return res.status(404).send("Pant not found....");
  try {
    const updatedPant = await Pants.findByIdAndUpdate(req.params.id, {
      sizes: newQuantity
    });
    console.log("succesfully updated")
    res.status(200).send(updatedPant);
  }catch (err){
    res.status(500).send(err.message);
    console.log(err.message);
  } 
  });

  app.get('*',(req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});


// start express server on port 5000
app.listen(PORT, () => {
  console.log("server started on port 5000");
});

