// Experiment 11 Recitation: MongoDB Shell Commands + Express Mongoose Server
// Name: Aditya Soni
// Department: AIML
// College: St. Francis Institute of Technology

// ============================================================
// Part 1: MongoDB Shell Commands Reference
// ============================================================

// Insert multiple students:
// db.students.insertMany([
//   { name: "Aditya Soni", age: 20, department: "AIML" },
//   { name: "Rahul Sharma", age: 21, department: "AIML" },
//   { name: "Test User", age: 22, department: "CS" }
// ])

// Find students in AIML department:
// db.students.find({ department: "AIML" })

// Update a student's age:
// db.students.updateOne({ name: "Aditya Soni" }, { $set: { age: 21 } })

// Delete a student:
// db.students.deleteOne({ name: "Test User" })

// ============================================================
// Part 2: Basic Express + Mongoose Server
// ============================================================

const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/recitationdb")
  .then(() => console.log("Connected to MongoDB (recitationdb)"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Student Schema and Model
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  department: { type: String },
});

const Student = mongoose.model("Student", studentSchema);

// GET /students - Get all students
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /add - Add a student
app.post("/add", async (req, res) => {
  try {
    const student = new Student(req.body);
    const savedStudent = await student.save();
    res.status(201).json(savedStudent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT /students/:id - Update a student
app.put("/students/:id", async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedStudent) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json(updatedStudent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /students/:id - Delete a student
app.delete("/students/:id", async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json({ message: "Student deleted", student: deletedStudent });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Recitation server running on http://localhost:${PORT}`);
});
