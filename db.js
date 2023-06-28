const mongoose = require("mongoose");
const dotenv=require('dotenv')
dotenv.config()

const connection=async()=>{
    await mongoose.connect(process.env.DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
console.log("Connected to db")}
module.exports = connection