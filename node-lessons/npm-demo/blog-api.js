import express from "express";
import fs from "fs";

const app = express();
app.use(express.json()); // middleware for JSON requests

const FILE = "blogs.json";

// helper: read data
function readData() {
  if (!fs.existsSync(FILE)) return [];
  const data = fs.readFileSync(FILE, "utf-8");  
  return JSON.parse(data || "[]");
}

// helper: save data
function saveData(data) {
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}

// ---------------- ROUTES ----------------

// ✅ GET all blogs
app.get("/blogs", (req, res) => {
  const blogs = readData();
  res.json(blogs);
});

// ✅ POST new blog
app.post("/blogs", (req, res) => {
  const blogs = readData();
  const newBlog = {
    id: Date.now(),
    title: req.body.title,
    content: req.body.content,
  };
  blogs.push(newBlog);
  saveData(blogs);
  res.status(201).json(newBlog);
});

// ✅ GET blog by id
app.get("/blogs/:id", (req, res) => {
  const blogs = readData();
  const blog = blogs.find(b => b.id == req.params.id);
  if (!blog) return res.status(404).json({ error: "Blog not found" });
  res.json(blog);
});

// ✅ UPDATE blog by id
app.put("/blogs/:id", (req, res) => {
  const blogs = readData();
  const index = blogs.findIndex(b => b.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: "Blog not found" });

  blogs[index] = { ...blogs[index], ...req.body };
  saveData(blogs);
  res.json(blogs[index]);
});

// ✅ DELETE blog by id
app.delete("/blogs/:id", (req, res) => {
  let blogs = readData();
  const index = blogs.findIndex(b => b.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: "Blog not found" });

  const deleted = blogs.splice(index, 1);
  saveData(blogs);
  res.json(deleted[0]);
});

// ---------------- SERVER ----------------
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
