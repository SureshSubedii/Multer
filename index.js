const  multer =require("multer");
const  imageModels =require("./imageModels.js");

const mongoose = require("mongoose");
const connection = require("./db.js");
const express = require("express");
const app = express();

connection();


//Storage
const storage1=multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload=multer({
    storage:storage1
}).single('testIMG')



app.get("/",  (req, res) => {
    res.send("Done!!")
 
});
app.post('/upload',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)}
        
        else{
            const newImg=new imageModels({
                name:req.body.name,
                image:{
                    data:req.file.filename,
                    contentType:'image/png'
                }

            })
            newImg.save()
            .then(()=>console.log("Successful"))
            .catch(err=>console.log(err))
        }})

})



const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));