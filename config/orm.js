//required packages and/or files
const connection = require("./connection.js");

const orm = {
    //function declaration for sql statements
    //select all burgers 
    selectAll: function(table, cb) {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, res) {
            if(err) throw err;
            cb(res);
        });
    },
    
    //insert one new burger to table
    insertOne: function() {
    
    },
    
    //update devoured boolean from false to true
    updateOne: function() {
    
    }
}

module.exports = orm;