const express=require("express");
const app=express();

app.get("/",function(req,res){
    res.send("hello world")
});

app.listen(9000,function(){
    console.log("hello");
});