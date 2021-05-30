const express = require("express");
const cors = require("cors");
const app = express();
const Blog = require("./model.blog");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/post", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/", async (req, res) => {
  const { title, body } = req.body;
  const blog = await Blog.create({
    title: title,
    body: body,
  });
  res.json(blog);
});

app.get("/", async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: "desc" });
  res.json(blogs);
});
app.get("/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.json(blog);
});

app.put("/:id", async (req, res) => {
  const { title, body } = req.body;
  await Blog.updateOne(
    { _id: req.params.id },
    {
      title: title,
      body: body,
    }
  );
  res.send("succes update");
});

app.delete("/:id", async (req, res) => {
  await Blog.deleteOne({ _id: req.params.id });
  res.send("succes delete");
});

const port = 4000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
