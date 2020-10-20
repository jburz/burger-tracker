//require packages and files
const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

//burger get route
router.get("/", function (req, res) {
    burger.all(function (data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

module.exports = router;

