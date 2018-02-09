var express = require("express");
var app = express();

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

app.set("view engine", "ejs");
app.get("/", function (req, res) {
    res.render("landing");
});
app.get("/campgrounds", function (req, res) {
    res.render("campgrounds", {campgrounds: campgrounds});
});



app.listen(8088, function () {
    console.log("YelpCamp server started!")
});
