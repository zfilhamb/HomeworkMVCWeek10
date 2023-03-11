const express = require('express')
const app = express()
const router = require("./routes/index.js")
const pool = require("./config/config.js")
const errorHandler = require("./middlewares/errorhandler.js")
const uploadRouter = require("./upload.js")
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(router)
app.use("/upload", uploadRouter, express.static(path.join(__dirname, "upload")));
app.use(errorHandler);

pool.connect(() => {
    console.log("connected");
});

app.listen(3000);