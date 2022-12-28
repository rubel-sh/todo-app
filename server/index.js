const express = require("express");
const cors = require("cors");
const colors = require("colors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middlewares
app.use(cors());

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

// Endpoints
app.get("/", async (req, res) => {
  res.send("TODO Server is running");
});

// Listening Port
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
