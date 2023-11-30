const mongoose=require('mongoose');

const uri="mongodb+srv://mani:gearfive@cluster0.kxdqrri.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri)
.then(()=>console.log("Database connected"))
.catch(()=>console.log("error"))


const newSchema=new mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    category: String
})

const collection=mongoose.model("users",newSchema);
module.exports=collection;