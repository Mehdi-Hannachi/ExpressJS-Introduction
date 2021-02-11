// Require Express

const express = require("express");

// Initialize Express

const app = express();

// Create local middleware

const logger = (req, res, next) => {
  // console.log("Method : ", req.method);
  // console.log("Path : ", req.url);

  /* Display result in console with table format*/
  console.table({ "Method : ": req.method, "Path :": req.path });

  /* 
      if true next  
      if false oups !! Blocked
  */
  false ? next() : res.send("Oups !! , The request is blocked");
};

app.use(logger);

// Create the endpoints

app.get("/", (req, res) => {
  res.send("Welcome to Express Introduction");
});

//Show one file

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/contact.html");
// });

//Show all directory files

/*  static is core middleware of express */

// app.use(express.static(__dirname + "/public"));

// Run Server

const PORT = process.env.PORT || 8000;

app.listen(PORT, (err) => {
  err
    ? console.log("Error", err)
    : console.log(`The server is running on port http://localhost:${PORT}`);
});
