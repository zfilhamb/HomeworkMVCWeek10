const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const pool = require("./config/config.js");

const diskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "/upload"))
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        + path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix)
    },
});

router.post("/:id/image", multer({storage: diskStorage}).single("image"),
    (req, res) => {

        const file = req.file.path;
        const {id} = req.params;
        if (!file) {
            res.status(400).send({
                message: "No file selected"
            })
        } else {
            const updateGameUrl = `
                UPDATE movies
                SET photo = $1
                WHERE id = $2
            `

            const imageUrl = `http://localhost:3000/upload/${req.file.filename}`
            pool.query(updateGameUrl, [imageUrl, id], (err, result) => {
                if (err) {
                    throw err
                } else { 
                    res.status(200).send({
                        message: "File uploaded successfully",
                })
            }
        })
    }
})

module.exports = router;