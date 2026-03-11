// Recitation - Experiment 10: Node.js & Express Basics
// Name: Aditya Soni
// Department: AIML
// Institute: St. Francis Institute of Technology

// ============================================================
// PART 1: Basic HTTP Server using Node.js http module
// (Commented out - uncomment to run on port 3000)
// ============================================================

// const http = require("http");
//
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(`
//       <html>
//         <head><title>Home</title></head>
//         <body>
//           <h1>Hello from Node.js HTTP Server - Aditya Soni</h1>
//           <p>Department: AIML</p>
//           <p>Institute: St. Francis Institute of Technology</p>
//         </body>
//       </html>
//     `);
//   } else if (req.url === "/about") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(`
//       <html>
//         <head><title>About</title></head>
//         <body>
//           <h1>About</h1>
//           <p>This is a basic Node.js HTTP server created by Aditya Soni.</p>
//           <p>Experiment 10 - Recitation</p>
//         </body>
//       </html>
//     `);
//   } else {
//     res.writeHead(404, { "Content-Type": "text/html" });
//     res.end(`
//       <html>
//         <head><title>404</title></head>
//         <body>
//           <h1>404 - Page Not Found</h1>
//           <p>The requested URL ${req.url} was not found on this server.</p>
//         </body>
//       </html>
//     `);
//   }
// });
//
// server.listen(3000, () => {
//   console.log("HTTP Server running on http://localhost:3000");
// });

// ============================================================
// PART 2: Express Server
// (Active - runs on port 3001)
// ============================================================

const express = require("express");
const app = express();
const PORT = 3001;

// Middleware: Log method and URL
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Route: GET / - Redirect to /home
app.get("/", (req, res) => {
  res.redirect("/home");
});

// Route: GET /home
app.get("/home", (req, res) => {
  res.send(`
    <html>
      <head><title>Home</title></head>
      <body>
        <h1>Home Page</h1>
        <p>Welcome, Aditya Soni!</p>
        <p>Department: AIML</p>
        <p>Institute: St. Francis Institute of Technology</p>
        <nav>
          <a href="/home">Home</a> |
          <a href="/contact">Contact</a> |
          <a href="/help">Help</a>
        </nav>
      </body>
    </html>
  `);
});

// Route: GET /contact
app.get("/contact", (req, res) => {
  res.send(`
    <html>
      <head><title>Contact</title></head>
      <body>
        <h1>Contact Aditya Soni</h1>
        <p>Department: AIML</p>
        <p>Institute: St. Francis Institute of Technology</p>
        <p>Email: aditya.soni@sfit.ac.in</p>
        <nav>
          <a href="/home">Home</a> |
          <a href="/contact">Contact</a> |
          <a href="/help">Help</a>
        </nav>
      </body>
    </html>
  `);
});

// Route: GET /help
app.get("/help", (req, res) => {
  res.send(`
    <html>
      <head><title>Help</title></head>
      <body>
        <h1>Help Page</h1>
        <p>Available routes for Aditya Soni's Express Server:</p>
        <ul>
          <li><a href="/home">/home</a> - Home Page</li>
          <li><a href="/contact">/contact</a> - Contact Page</li>
          <li><a href="/help">/help</a> - Help Page</li>
        </ul>
        <nav>
          <a href="/home">Home</a> |
          <a href="/contact">Contact</a> |
          <a href="/help">Help</a>
        </nav>
      </body>
    </html>
  `);
});

// 404 fallback handler
app.use((req, res) => {
  res.status(404).send(`
    <html>
      <head><title>404</title></head>
      <body>
        <h1>404 - Page Not Found</h1>
        <p>The requested URL ${req.url} was not found on this server.</p>
        <a href="/home">Go to Home</a>
      </body>
    </html>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
