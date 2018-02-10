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
    image: String
});

//Model the schema
var Campground = mongoose.model("Campground", campgroundSchema);


//TODO: Move to MongoDB using Seeder file
/*Campground.create(
    {
        name: "Granite Greek",
        image: "https://images.unsplash.com/photo-1496425745709-5f9297566b46?ixlib=rb-0.3.5&s=4d89bf439f74db2b2ff83dd9ed0ceee9&auto=format&fit=crop&w=750&q=80"
    },
    function (err, campground) {
        if(err){
            console.log(err);
        }
        else{
            console.log("Campground created")
            console.log(campground)
        }

    }
);*/


//TODO: Data to seed
/*var campgrounds = [
    {
        name: "Salmon Creek",
        image: "https://images.unsplash.com/photo-1496425745709-5f9297566b46?ixlib=rb-0.3.5&s=4d89bf439f74db2b2ff83dd9ed0ceee9&auto=format&fit=crop&w=750&q=80"
    },
    {
        name: "Annapurna Hills",
        image: "https://images.unsplash.com/photo-1496425745709-5f9297566b46?ixlib=rb-0.3.5&s=4d89bf439f74db2b2ff83dd9ed0ceee9&auto=format&fit=crop&w=750&q=80"
    },
    {
        name: "Annapurna Hills",
        image: "https://images.unsplash.com/photo-1496425745709-5f9297566b46?ixlib=rb-0.3.5&s=4d89bf439f74db2b2ff83dd9ed0ceee9&auto=format&fit=crop&w=750&q=80"
    },
    {
        name: "Annapurna Hills",
        image: "https://images.unsplash.com/photo-1496425745709-5f9297566b46?ixlib=rb-0.3.5&s=4d89bf439f74db2b2ff83dd9ed0ceee9&auto=format&fit=crop&w=750&q=80"
    },
    {
        name: "Besi Rest",
        image: "https://images.unsplash.com/photo-1496425745709-5f9297566b46?ixlib=rb-0.3.5&s=4d89bf439f74db2b2ff83dd9ed0ceee9&auto=format&fit=crop&w=750&q=80"
    }
];
*/


app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    //Get all from DB
    Campground.find({}, function (err, allCampgrounds) {
        if (!err) {
            res.render("campgrounds", {campgrounds: allCampgrounds});
        }
        else {
            console.log(err);
        }
    });
});

app.post("/campgrounds", function (req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    //Push to DB
    Campground.create(newCampground, function (err, newlyCreated) {
        if(err){
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


app.listen(8088, function () {
    console.log("YelpCamp server started!")
});
