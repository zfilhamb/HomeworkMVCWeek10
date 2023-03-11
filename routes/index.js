const express = require('express');
const router = express.Router();
const movieRouter = require("./movies.js");
const userRouter = require("./users.js");

router.use("/users", userRouter);
router.use("/movies", movieRouter);

module.exports = router;