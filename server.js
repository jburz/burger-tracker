//required pacakges and files
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

//static files to serve from public directory
app.use(express.static("public"));


//start server
app.listen(PORT, function() {
    console.log("Server listinging on: http://localhost:" + PORT);
});
