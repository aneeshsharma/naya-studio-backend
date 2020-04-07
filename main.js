var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

app.use(bodyParser.json());

app.use(cors());

var _db, _dbo;

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("nayadb");
    dbo.createCollection("users", function (err, res) {
        if (err) throw err;
        console.log("Collection Created");
    });

    _dbo = dbo;
    _db = db;
});

app.get("/", (req, res) => {
    console.log(req.query);
    _dbo.collection("users").insertOne(req.query, function (err, dbres) {
        if (err) {
            res.send("FAILED");
        } else {
            console.log("Inerted Data!");
            res.send("SUCCESS");
        }
    });
});

var server = app.listen(7800, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});
