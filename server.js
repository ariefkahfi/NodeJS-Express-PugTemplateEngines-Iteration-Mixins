var express = require('express');

var app = express();

app.set("views",__dirname+"/templates");
app.set("view engine","pug");


function readHTMLFile(fileName,response){
    response.sendFile(__dirname+"/public_html/"+fileName+".html");
}

app.get("/",function(req,res){
    readHTMLFile("index",res);
});

app.get("/mixins",function(req,res){
    res.render("mixins",{
        
    });
});
app.get("/iteration",function(req,res){
    res.render("iteration",{
        data :[
            {id : 1,nama : "arief"},
            {id : 2 , nama : "putro"},
            {id : 3 , nama : "hello"},
            {id : 4 , nama : "world"}
        ]
    });
});

app.listen(9600,function(){
    console.log("listening on port 9600");
});


