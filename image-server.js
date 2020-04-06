const express = require("express");
const parser = require("body-parser");

// create connection to database
require("./handlers/dataConnector.js").connect();

// create an express app
const app = express();
// get our data model
const Image = require("./models/Image");
// tell node to use json and HTTP header features in body-parser
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
// use the route handlers
const bookRouter = require("./handlers/imageRouter.js");
bookRouter.handleAllImages(app, Image);
bookRouter.handleSingleImage(app, Image);
bookRouter.handleSingleCityImage(app, Image);
bookRouter.handleAllCityImages(app, Image);

let port = 8080;
app.listen(port, function() {
  console.log("Server running at port= " + port);
});
