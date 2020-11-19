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
        res.render("index", hbsObject);
    });
});

//burger post route
router.post("/api/burgers/", function (req, res) {
    burger.add(req.body.data, function (result) {
        res.json({ id: result.insertId })
    });

});

//burger devoured route
router.put("/api/burgers/:id", function (req, res) {
    burger.update(req.body.devoured, req.params.id, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//Export routes for server.js
module.exports = router;

