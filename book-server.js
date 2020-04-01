const express = require("express");
const parser = require("body-parser");

// create connection to database
require("./handlers/dataConnector.js").connect();

// create an express app
const app = express();
// get our data model
const Book = require("./models/Book");
// tell node to use json and HTTP header features in body-parser
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
// use the route handlers
const bookRouter = require("./handlers/bookRouter.js");
bookRouter.handleAllBooks(app, Book);
bookRouter.handleSingleBook(app, Book);
bookRouter.handleBooksByPageRange(app, Book);
bookRouter.handleAllCategories(app, Book);

let port = 8080;
app.listen(port, function() {
  console.log("Server running at port= " + port);
});
