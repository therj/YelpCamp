var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//Schema
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

//Model the schema
var Campground = mongoose.model("Campground", campgroundSchema);

//TODO: Seed data!


app.get("/", function (req, res) {

    res.render("landing")


});

app.get("/campgrounds", function (req, res) {
    //Get all from DB
    Campground.find({}, function (err, allCampgrounds) {
        if (!err) {
            res.render("index", {campgrounds: allCampgrounds});
        }
        else {
            console.log(err);
        }
    });
});

app.post("/campgrounds", function (req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var description = req.body.description;
    var newCampground = {name: name, image: image, description: description};
    //Push to DB
    Campground.create(newCampground, function (err, newlyCreated) {
        if (err) {
            console.log("Error in data");
        }
        else {
            res.redirect("/campgrounds");
        }
    });
});

app.get("/campgrounds/new", function (req, res) {
    //show form
    res.render("new");
});


app.get("/campgrounds/:id", function (req, res) {
    //show
    Campground.findById(req.params.id, function (err, foundCampground) {
        if (err) {
            console.log(err.message)
        }
        else {
            res.render("show", {campground: foundCampground});
        }
    });
});

app.listen(8088, function () {
    console.log("YelpCamp server started! in 8088")
});
