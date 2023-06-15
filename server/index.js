
import models from "./models/models.js";
import path from "path"
import express, { json } from "express"
import mongoose from "mongoose";
import { fileURLToPath } from 'url';
import bodyParser from "body-parser";
import cors from "cors"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express(); // create express app

app.use(cors());
// const urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect("mongodb://127.0.0.1:27017/susafDB")


const Pants = mongoose.model('Pant', models.pantsSchema)
const Skateboards = mongoose.model('Skateboard', models.skateboardSchema)
const Tshirts = mongoose.model('Tshirt', models.tshirtSchema)

const susBaggiesM = new Pants({
  product: "pants",
  name: "90's baggy jeans",
  size: "Medium",
  color: "Black",
  price: 80,
  description: "Bring back the 90's skate scene with this classic cut.",
  quantity: 5,
  instock: true
});

const susBasicDeck85 = new Skateboards({
  product: "skateboards",
  name: "SUS AF Minimalist",
  size: "8.5",
  price: 45,
  quantity: 15,
  instock: true
});

const susBasicDeck83 = new Skateboards({
  product: "skateboards",
  name: "SUS AF Minimalist",
  size: "8.3",
  price: 45,
  quantity: 15,
  instock: true
});

const susBasicDeck8 = new Skateboards({
  product: "skateboards",
  name: "SUS AF Minimalist",
  size: "8",
  price: 45,
  quantity: 15,
  instock: true
});

const susBasicDeck863 = new Skateboards({
  product: "skateboards",
  name: "SUS AF Minimalist",
  size: "8.63",
  price: 45,
  quantity: 15,
  instock: true
});

const tShirtWhite = new Tshirts({
  product: "shirts",
  name: "Plain White smiley Tee ",
  size: "L",
  price: 19.99,
  quantity: 10,
  description: "",
  instock: true
});

// tShirtWhite.save();
// susBaggiesM.save();
// susBasicDeck863.save();
// susBasicDeck85.save();
// susBasicDeck83.save();
// susBasicDeck8.save()



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
  const newQuantity = req.body.quantity
  if (!skateboard) return res.status(404).send("Skateboard not found....");
  try {
    const updatedSkate = await Skateboards.findByIdAndUpdate(req.params.id, {
      quantity: newQuantity     
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
  const newQuantity = req.body.quantity
  if (!shirt) return res.status(404).send("Shirt not found....");
  try {
    const updatedShirt = await Tshirts.findByIdAndUpdate(req.params.id, {
      quantity: newQuantity
    });
    console.log("succesfully updated")
    res.status(200).send(updatedShirt);
  }catch (err){
    res.status(500).send(err.message);
    console.log(err.message);
  } 
  });

app.patch('/api/pants/:id', async (req, res) => {
  const pant = await Pants.findById(req.params.id)
  const newQuantity = req.body.quantity
  if (!pant) return res.status(404).send("Pant not found....");
  try {
    const updatedPant = await Pants.findByIdAndUpdate(req.params.id, {
      quantity: newQuantity
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
app.listen(5000, () => {
  console.log("server started on port 5000");
});

