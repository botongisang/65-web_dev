const express = require("express");
const app = express();

// Middleware
app.use((req, res, next) => {
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  next();
});

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.get("/contact", (req, res) => {
  res.send("This is Contact Page");
});

app.get("/help", (req, res) => {
  res.send("This is Help Page");
});

app.get("/api/user", (req, res) => {
  res.json({
    name: "Rahul",
    age: 20,
    course: "AIML"
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});