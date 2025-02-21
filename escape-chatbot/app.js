// ejs template engine tutorial

import express from "express";

const app = express();

// Config ejs
app.set("view engine", "ejs");
// Set the views folder to 'views'
app.set("views", "views");

// Routes

// Home route
app.get("/", (req, res) => {
  //looks for index page in my 'views' folder and fills in the title, heading and message (useful with database)
  res.render("index", {
    title: "Welcome to my blog",
    heading: "Welcome to my blog",
    message: "This is my blog where I write about things I love.",
    people: ["John", "Sara", "Peter"],
  });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
