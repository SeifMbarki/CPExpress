// import express
const express = require("express");
const TimeValid = require("./middleware/TimeValid");

// instance of all methods const app
const app = express();
// console.log(app);

// CRUD
// Create=>POST
// Read=>GET
// Update=>PUT
// DELETE=>delete

// to use json type
// middleware global
app.use(express.json()); //bodyparser
app.use(TimeValid);

// create a route =>
// Method:GET
// path: /
app.get("/", TimeValid, (request, response) => {
  //   //   console.log(__dirname);
  response.sendFile(__dirname + "/public/Home.html");
});

app.get("/services", TimeValid, (request, response) => {
  //   //   console.log(__dirname);
  response.sendFile(__dirname + "/public/Services.html");
});
app.get("/contact", TimeValid, (request, response) => {
  //   //   console.log(__dirname);
  response.sendFile(__dirname + "/public/contact.html");
  response.sendFile(__dirname + "/public/contact.css");
});
app.get("/css", TimeValid, (request, response) => {
  //   //   console.log(__dirname);
  response.sendFile(__dirname + "/public/contact.css");
});

// port
const port = 5000;

// create server
app.listen(port, (err) => {
  err ? console.error(err) : console.log(`server is running on ${port}`);
});
