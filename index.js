var port = (process.env.PORT || 1600);
var express = require("express");
var app =express();
var helmet = require("helmet");
var bodyParser = require("body-parser");
var path = require("path");
var cors = require("cors");

app.use(bodyParser.json());
app.use(helmet());
app.use("/", express.static(path.join(__dirname + "/public")));

app.listen(port, () => {
    console.log("Server ready on port: " + port + "!");
}).on("error", (e) => {
    console.log("Server NOT READY:" + e);
});

console.log("Server setting up...");