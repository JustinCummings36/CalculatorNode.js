const express = require('express');
const bodyParser = require("body-parser");
var path = require("path");
const app = express();





app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static(path.join(__dirname, 'others')));

app.get("/home", function(req, res){
  res.sendFile(__dirname + "/public/home.html");
});

app.post("/home", function(req, res){

var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2);
var op = String(req.body.op);


if (op == "-"){
 var result = num1 - num2;
res.send("The results of the calculation is " + result);
}
if (op == "+"){
  var result = num1 + num2;
 res.send("The results of the calculation is " + result);
 };
 if (op == "/"){
  var result = num1 / num2;
 res.send("The results of the calculation is " + result);
 };
 if (op == "*"){
  var result = num1 - num2;
 res.send("The results of the calculation is " + result);
 };


});


app.listen(3000, function(req, res){
   console.log('port running on 3000'); 
})