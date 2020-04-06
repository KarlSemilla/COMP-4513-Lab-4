const express = require("express");
const parser = require("body-parser");

// create connection to database
require("./handlers/dataConnector.js").connect();

// create an express app
const app = express();

/* --- middleware section --- */

// view engine setup
app.set("views", "./views");
app.set("view engine", "pug");

// serves up static files from the public folder.
app.use(express.static("public"));
// also add a path to static
app.use("/static", express.static("public"));

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
bookRouter.handleCreateBook(app, Book);
bookRouter.handlePageIndex(app, Book);
bookRouter.handlePageBooks(app, Book);
bookRouter.handlePageSingleBook(app, Book);

// customize the 404 error with our own middleware function
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!");
});

let port = 8080;
app.listen(port, function () {
  console.log("Server running at port= " + port);
});
