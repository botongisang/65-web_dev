// Experiment 10: Node.js & Express Basics
// Name: Aditya Soni
// Department: AIML
// Institute: St. Francis Institute of Technology

const express = require("express");
const app = express();
const PORT = 3000;

// Middleware: Request Logger
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
});

// Route: GET / - Welcome page
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head><title>Welcome</title></head>
      <body>
        <h1>Welcome to Express Server</h1>
        <p>Student: Aditya Soni</p>
        <p>Department: AIML</p>
        <p>Institute: St. Francis Institute of Technology</p>
        <p>Experiment 10: Node.js & Express Basics</p>
      </body>
    </html>
  `);
});

// Route: GET /api/message - Returns JSON message
app.get("/api/message", (req, res) => {
  res.json({
    message: "Hello from Express API!",
    student: "Aditya Soni",
    department: "AIML",
  });
});

// Route: GET /api/user - Returns JSON user object
app.get("/api/user", (req, res) => {
  res.json({
    name: "Aditya Soni",
    age: 20,
    course: "B.Tech AIML",
    institute: {
      name: "St. Francis Institute of Technology",
      department: "AIML",
    },
  });
});

// 404 Handler for unknown routes
app.use((req, res) => {
  res.status(404).json({
    error: "404 - Route Not Found",
    message: `The route ${req.url} does not exist on this server.`,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
