const express = require("express");
const path = require("path");

const app = express();
const port = 5500;

// Setting path for public directory
const static_path = path.join(__dirname, "./public");
app.use(express.static(static_path));
app.use(express.urlencoded({ extended: true }));

// Handling request
app.post("/request", (req, res) => {
  res.json({
    username: req.body.username,
    password: req.body.password,
  });
});

// Server Setup
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
