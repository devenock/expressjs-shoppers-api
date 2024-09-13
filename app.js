const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

// import your routes here
// const authRouter = require("./routes/authRoute");

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
// app.use("/api/v1/books", bookRouter);



module.exports = app;