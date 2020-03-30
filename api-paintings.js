// Create express app
const path = require("path");
const parser = require("body-parser");
var express = require("express");
var app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
const provider = require("./scripts/painting-provider.js");

// root endpoint will retrieve all paintings
app.get("/", (req, resp) => {
  provider.retrievePaintings(req, resp);
});

// this endpoint will retrieve single painting
app.get("/:id", (req, resp) => {
  provider.retrieveSinglePainting(req, resp);
});

// root endpoint will retrieve all paintings
app.get("/", (req, resp) => {
  provider.retrievePaintings(req, resp);
});

// this endpoint will retrieve single painting
app.get("/:id", (req, resp) => {
  provider.retrieveSinglePainting(req, resp);
});

// Default response for any other request
app.use(function(req, res) {
  res.status(404);
});

let port = 8080;
app.listen(port, () => {
  console.log("Server running at port= " + port);
});
