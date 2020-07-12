const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/testdb",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    ).catch(error => handleError(error));

requireDir("./src/models");

app.use("/api",require("./src/routes"));

app.listen(4444);


