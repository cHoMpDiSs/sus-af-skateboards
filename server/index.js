
import schemas from "./schemas.mjs";
import path from "path"
import express, { json } from "express"
import mongoose from "mongoose";
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express(); // create express app


mongoose.connect("mongodb://127.0.0.1:27017/susafDB")

const Pants = mongoose.model('Pant', schemas.pantsSchema)
const Skateboards = mongoose.model('Skateboard', schemas.skateboardSchema)
const Tshirts = mongoose.model('Tshirt', schemas.tshirtSchema)

const susBaggiesM = new Pants({
  name: "90's baggy jeans",
  size: "Medium",
  color: "Black",
  price: 80,
  description: "Bring back the 90's skate scene with this classic cut.",
  quantity: 5,
  stock: true
});

const susBasicDeck85 = new Skateboards({
  name: "SUS AF Minimalist",
  size: "8.5",
  price: 45,
  quantity: 15,
  stock: true
});

const tShirtWhite = new Tshirts({
  name: "Plain White smiley Tee ",
  size: "L",
  price: 19.99,
  quantity: 10,
  stock: true
});

// tShirtWhite.save();
// susBaggiesM.save();
// susBasicDeck85.save();

// add middlewares
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));



app.get('/pants.json', async (req, res)=> {
  try{
    const allPants = await Pants.find({});
    res.send(allPants);
  }catch (err){
    res.send(err)
  }
})

app.get('/shirts.json', async (req, res)=> {
  try{
    const allShirts = await Tshirts.find({});
    res.json(allShirts);
  }catch (err){
    res.json(err)
  }
})

app.get('/skateboards.json', async (req, res)=> {
  try{
    const allSkateboards = await Skateboards.find({});
    res.json(allSkateboards);
  }catch (err){
    res.json(err)
  }
})

app.get('*',(req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});

