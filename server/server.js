require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const paymentRoutes = require("./routes/payment");
const studentRoutes = require("./routes/student.js");

const app = express();

//Parse JSON requests
app.use(express.json());
app.use(cors());

mongoose
  // .connect("mongodb://localhost:27017/mock")
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`server up and running on ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/student", studentRoutes);
