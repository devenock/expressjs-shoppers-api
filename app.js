const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

// import your route handlers here
const userRouter = require("./routes/userRoutes");
require("dotenv").config();

// database connection
connectDB();

// use the middleware
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}
app.use(cors());
app.use(express.json());



// define routes here
app.use("/", (req, res) => {
    res.status(200).send("Welcome to our shopper api!");
})

app.use("/api/v1/users", userRouter)



module.exports = app;