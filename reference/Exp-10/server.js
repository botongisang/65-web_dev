const express = require("express");
const app = express();

// Define Port
const PORT = 3000;

// --------------------
// Middleware (Logs request info)
// --------------------
app.use((req, res, next) => {
  console.log("Request Method:", req.method);
  console.log("Request URL:", req.url);
  console.log("-----------------------------");
  next();
});

// --------------------
// Hello World Route
// --------------------
app.get("/", (req, res) => {
  res.send("Hello World");
});

// --------------------
// Simple API Route (JSON)
// --------------------
app.get("/api/message", (req, res) => {
  res.json({
    message: "Hello from Express API",
    course: "AIML",
    year: "SE"
  });
});

// --------------------
// 404 Handler
// --------------------
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

// --------------------
// Start Server
// --------------------
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});