//require pacakages and files
const orm = require("../config/orm.js");

//define object for burger
const burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    add: function (name, cb) {
        orm.insertOne("burgers", name, function (res) {
            cb(res);
        });

    },
    update: function (objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }
}

//Export burger model for burgers_conroller.js to use
module.exports = burger;