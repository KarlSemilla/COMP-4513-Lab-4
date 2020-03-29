// Create express app
const path = require('path');
const parser = require('body-parser');
var express = require("express");
var app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));


// root endpoint will retrieve all paintings


// this endpoint will retrieve single painting



// Default response for any other request
app.use(function(req, res){
    res.status(404);
});

let port = 8080;
app.listen(port, () => {
    console.log("Server running at port= " + port);
});