// import express
const express = require("express"); //ES5
const TimeValid = require("./middleware/TimeValid");
//instance of all the method of express
const app = express();
// middleware golbale n°1
app.use(TimeValid);
// middleware golbale n°2
app.use(express.static("public"));

// creation route to send file

// app.get("/services", (request, response) => {
//   //   console.log(__dirname);
//   response.sendFile(__dirname + "/public/services.html");
// });
// app.get("/style.css", (request, response) => {
//   //   console.log(__dirname);
//   response.sendFile(__dirname + "/public/style.css");
// });

//create port
const port = 7000;
//create server
app.listen(port, () => console.log("server is running"));
