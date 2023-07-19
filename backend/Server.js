const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./routes/TaskRoute");

const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

mongoose
  .connect('mongodb://127.0.0.1:27017/CRUD')
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use("/api", routes);

app.listen(PORT, () => console.log(`Listening at ${PORT}`));
