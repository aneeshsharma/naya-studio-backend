var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();

app.use(bodyParser.json());


app.use(cors());

app.get("/", (req, res) => {
    console.log(req.query);
    res.send("FAILED");
});

var server = app.listen(7800, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});
