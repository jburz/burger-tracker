//required pacakges and files
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller.js");

const PORT = process.env.PORT || 8080;

//static files to serve from public directory
app.use(express.static("public"));

//parsing set to JSON or url encoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use handlebars as view engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//give server access to routes
app.use(routes);

//start server
app.listen(PORT, function () {
    console.log("Server listinging on: http://localhost:" + PORT);
});
