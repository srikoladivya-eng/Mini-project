const express = require("express");
const mongoose = require("mongoose");

const salesRoutes = require("./routes/salesroutes");

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/salesdb")
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/sales", salesRoutes);

app.get("/", (req, res) => {
  res.send("Sales Management API Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
