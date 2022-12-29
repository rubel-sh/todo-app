const express = require("express");
const cors = require("cors");
const colors = require("colors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middlewares
app.use(cors());
app.use(express.json());

// Connect MongoDB
const ATLAS_URL = `mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@cluster0.f3qt6qk.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(ATLAS_URL);
async function connectDB() {
  try {
    await client.connect();
    console.log("DB Connected");
  } catch (err) {
    console.log(err);
  }
}
connectDB();

// Collections
const todosCollection = client.db("TodoApp").collection("todos");
const commentsCollection = client.db("TodoApp").collection("comments");

// Endpoints
app.get("/", async (req, res) => {
  res.send("TODO Server is running");
});

// Send todo to todos collection
app.post("/todos", async (req, res) => {
  try {
    const post = req.body;
    // console.log(post);
    const posted = await todosCollection.insertOne(post);
    res.send(posted);
  } catch (err) {
    console.log(err);
  }
});

// Get all todos
app.get("/todos", async (req, res) => {
  try {
    const todos = await todosCollection.find({}).toArray();
    res.send(todos);
  } catch (err) {
    console.log(err);
  }
});

// Update todo
app.put("/todos", async (req, res) => {
  try {
    const { _id, title, desc, image, COD, status, color } = req.body;
    const filter = { _id: ObjectId(_id) };
    const options = { upsert: false };
    const updateDoc = { $set: { title, desc, image, COD, status, color } };
    const updateTodo = await todosCollection.updateOne(
      filter,
      updateDoc,
      options
    );
    // console.log(updateTodo);
    res.send(updateTodo);
  } catch (err) {
    console.log(err);
  }
});

// Delete todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const filter = { _id: ObjectId(id) };
    const deleteTodo = await todosCollection.deleteOne(filter);
    res.send(deleteTodo);
  } catch (err) {
    console.log(err);
  }
});

// Add comment to db via todo id
app.post("/comments/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const comment = req.body;
    const doc = { todoId: id, ...comment };
    const commentAdded = await commentsCollection.insertOne(doc);
    res.send(commentAdded);
  } catch (err) {
    console.log(err);
  }
});

// get comment
app.get("/comments", async (req, res) => {
  try {
    const allComments = await commentsCollection.find({}).toArray();
    res.send(allComments);
  } catch (err) {
    console.log(err);
  }
});
// Listening Port
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
