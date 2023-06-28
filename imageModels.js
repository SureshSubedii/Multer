const  mongoose =require("mongoose");

const imageSchema=mongoose.Schema({
    name:{
        type:String,
    required:true,},
    image:{
        data:Buffer,
        contentType:String
    }
})
module.exports=imageModels=mongoose.model("imgModel",imageSchema)