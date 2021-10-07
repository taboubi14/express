const express = require("express");
const time = require("./ServiceTime");
const path = require("path");

const app = express();

app.use(time);

app.use(express.json());

// Serve the static files

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public", "index.html"));
});

// Starting the server

const port = 5000;

app.listen(port, (err) => {
    err
        ? console.log(err)
        : console.log(`the server is running on port ${port}...`);
});