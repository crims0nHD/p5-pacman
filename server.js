var express = require("express");

var app = express();

app.use("/", express.static("./website"));

app.get("/", function(req, res){
    res.redirect("/pacman.html");
});

app.listen(8080);
console.log("Server started");