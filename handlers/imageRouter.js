// handle GET requests for [domain]/api/books - return all books
const handleAllImages = (app, Image) => {
  app.route("/api/images").get(function(req, resp) {
    // use mongoose to retrieve all books from Mongo
    Image.find({}, function(err, data) {
      if (err) {
        resp.json({ message: "Unable to connect to images" });
      } else {
        // return JSON retrieved by Mongo as response
        resp.json(data);
      }
    });
  });
};

// handle requests for specific image: e.g., /api/image/0321886518
const handleSingleImage = (app, Image) => {
  app.route("/api/images/:id").get(function(req, resp) {
    Image.find({ id: req.params.id }, (err, data) => {
      if (err) {
        resp.json({ message: "Image not found" });
      } else {
        resp.json(data);
      }
    });
  });
};

// handle requests for specific cities
const handleSingleCityImage = (app, Image) => {
  app.route("/api/images/city/:city").get(function(req, resp) {
    Image.find(
      { "location.city": new RegExp(req.params.city, "i") },
      (err, data) => {
        if (err) {
          resp.json({ message: "Image not found" });
        } else {
          resp.json(data);
        }
      }
    );
  });
};

// requests for [domain]/api/cities e.g. return all cities
const handleAllCityImages = (app, Image) => {
  app.route("/api/images/country/:country").get(function(req, resp) {
    Image.find(
      { "location.country": new RegExp(req.params.country, "i") },
      (err, data) => {
        if (err) {
          resp.json({ message: "Image not found" });
        } else {
          resp.json(data);
        }
      }
    );
  });
};

module.exports = {
  handleAllImages,
  handleSingleImage,
  handleSingleCityImage,
  handleAllCityImages
};
