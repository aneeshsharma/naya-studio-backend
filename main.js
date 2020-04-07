var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader(
        "Access-Control-Allow-Origin",
        "http://localhost:3000/register"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.get("/", function (req, res) {
    res.send("INVALID REQUEST");
});

app.get("/register", (req, res) => {
    console.log(req.body);
    res.send("FAILED");
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});
