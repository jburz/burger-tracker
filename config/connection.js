//require packages
const mysql = require("mysql");
require("dotenv").config();

//setup sql connection
let connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: process.env.password,
        database: "burger_db"
    });
}

//initialize connection
connection.connect(function (err) {
    if (err) {
        console.error("Error connection: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

//export to use for ORM
module.exports = connection;