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
    insertOne: function(table, name, cb) {
        console.log('hit orm.js');
        const queryString = "INSERT INTO ?? (burger_name) VALUES (?);";
        connection.query(queryString, [table, name], function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    
    //update devoured boolean from false to true
    updateOne: function(table, colsToVal, condition, cb) {
        const queryString = "UPDATE ?? SET devoured = ? WHERE id = ?;";
        connection.query(queryString, [table, colsToVal, condition], function (err, res) {
            if (err) throw err;
            cb(res);
        });
    }
};

//Export orm for burger.js to use
module.exports = orm;