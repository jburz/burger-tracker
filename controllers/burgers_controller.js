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

//burger post route
// router.post("/api/burgers", function (req, res) {
    
// });

//burger devoured route
router.put("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;
    console.log(condition);
})

module.exports = router;

