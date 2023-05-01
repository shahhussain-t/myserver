const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Home</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>Welcome to About</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Welcome to Contact</h1>");
});

app.get("/homepage", (req, res) => {
    res.send("<h1>Welcome to homepage</h1>");
  });

app.listen(port, () => {
  console.log(`listing at post${port}...`);
});
