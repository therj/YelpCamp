var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.get("/", function (req, res) {
    res.render("landing");
});

app.listen(8088, function () {
    console.log("YelpCamp server started!")
});
