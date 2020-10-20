//require pacakages and files
const orm = require("../config/orm.js");

//define object for burger
const burger = {
    all: function (cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    }
}

module.exports = burger;