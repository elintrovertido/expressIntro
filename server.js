const express  = require("express");
const app = express();

app.get("/",function(request,response){
    response.send("<h1>HELLO WORLD<h1>");
});

app.get("/contact",function(request,response){
    response.send("<h1>Contact Me<h1>");
});

app.get("/about",function(request,response){
    response.send("<h1>About me<h1>");
});

app.get("/hobbies",function(request,response){
    response.send("<h1>Watching anime<h1>");
});

app.listen(3000,function(){
    console.log("server started at port 3000");
});