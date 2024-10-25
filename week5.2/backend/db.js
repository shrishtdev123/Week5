const mongoose=require("mongoose");

 mongoose.connect("mongodb://127.0.0.1:27017/todosdata");
// now we will create the todoShema


 const TodoShema=mongoose.Schema({
       title:String,
       description:String,
       completed:Boolean,
 })

 // now we create the model

 const todo=mongoose.model("todo",TodoShema);
 module.exports={
     todo
 }