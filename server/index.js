const express = require("express");
const cors = require("cors");
const colors = require("colors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middlewares
app.use(cors());

// Endpoints
app.get("/", async (req, res) => {
  res.send("TODO Server is running");
});

// Listening Port
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
