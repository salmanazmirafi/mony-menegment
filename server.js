const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRouter = require("./routers/userRoute");

const app = express();
dotenv.config();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

//route

app.use("/api/users/", userRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Hi salman azmi rafi",
  });
});

// mongoose connect
mongoose.connect(process.env.MONGOOSE_URI, () => {
  console.log("Database Connect");
});

//server run
const PROT = process.env.PROT || 4000;
app.listen(PROT);
console.log("server is run");
