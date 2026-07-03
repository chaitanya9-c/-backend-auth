require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/userRoutes");

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.send("Backend Server Running");
});

app.get("/favicon.ico", (req, res) => {
  res.status(204).end();
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});