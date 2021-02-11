// Require Express

const express = require("express");

// Initialize Express

const app = express();

// Create the endpoints

// app.get("/", (req, res) => {
//   res.send("Welcome to Express Introduction");
// });

//Show one file

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/contact.html");
// });

//Show all directory files

app.use(express.static(__dirname + "/public"));

// Run Server

app.listen(8000, (err) => {
  err
    ? console.log("Error", err)
    : console.log("The server is running on Port 8000 .");
});
