var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
//Temporary --> MongoDB
var campgrounds = [
    {
        name: "Salmon Creek",
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



app.get("/", function (req, res) {
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function (req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function (req, res) {
    //show form
    res.render("new");
});





app.listen(8088, function () {
    console.log("YelpCamp server started!")
});
