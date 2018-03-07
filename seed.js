var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

//Model the schema
var Campground = mongoose.model("Campground", campgroundSchema);


var campgrounds = [
    {
        name: "Granite Greek",
        image: "https://images.unsplash.com/photo-1496425745709-5f9297566b46?ixlib=rb-0.3.5&s=4d89bf439f74db2b2ff83dd9ed0ceee9&auto=format&fit=crop&w=750&q=80",
        description: "lorem ipsum I can't write more!"
    },
    {
        name: "Salmon Creek",
        image: "https://images.unsplash.com/photo-1496425745709-5f9297566b46?ixlib=rb-0.3.5&s=4d89bf439f74db2b2ff83dd9ed0ceee9&auto=format&fit=crop&w=750&q=80",
        description: "lorem ipsum I can't write more!"
    },
    {
        name: "Annapurna Hills",
        image: "https://images.unsplash.com/photo-1496425745709-5f9297566b46?ixlib=rb-0.3.5&s=4d89bf439f74db2b2ff83dd9ed0ceee9&auto=format&fit=crop&w=750&q=80",
        description: "lorem ipsum I can't write more!"
    },
    {
        name: "Annapurna Hills",
        image: "https://images.unsplash.com/photo-1496425745709-5f9297566b46?ixlib=rb-0.3.5&s=4d89bf439f74db2b2ff83dd9ed0ceee9&auto=format&fit=crop&w=750&q=80",
        description: "lorem ipsum I can't write more!"
    },
    {
        name: "Annapurna Hills",
        image: "https://images.unsplash.com/photo-1496425745709-5f9297566b46?ixlib=rb-0.3.5&s=4d89bf439f74db2b2ff83dd9ed0ceee9&auto=format&fit=crop&w=750&q=80",
        description: "lorem ipsum I can't write more!"
    },
    {
        name: "Besi Rest",
        image: "https://images.unsplash.com/photo-1496425745709-5f9297566b46?ixlib=rb-0.3.5&s=4d89bf439f74db2b2ff83dd9ed0ceee9&auto=format&fit=crop&w=750&q=80",
        description: "lorem ipsum I can't write more!"
    }
];

Campground.create(
    campgrounds, function (err) {
        if (err) {
            console.log("Error seeding!");
        }
        else {
            console.log("Seeding successful!");
        }
        process.exit(0);
    });

