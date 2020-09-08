const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { PORT } = require("./config");
const cors = require('cors');
const morgan = require("morgan");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"))

app.get("/", (req, res) => {
    res.send("This is from express.js");
});

//? start express server on port 5000
app.listen(PORT || 8080, () => {
    console.log("server started on port 5000");
});