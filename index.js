
const express = require("express");
const mysql = require("mysql");
const inquire = require("inquirer");

const app = express();

const PORT = process.env.PORT || 8080;

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employees_db",
});


connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//create inquirer prompts to as user and direct code (use get/post/update)
//create get routes to console.log requests
//create post routes to save new inputs 
//create update routes
//join tables to get other values together

app.listen(PORT, () => {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });