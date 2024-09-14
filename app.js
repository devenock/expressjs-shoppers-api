const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

// import your route handlers here
const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productRoutes");
const reviewRouter = require("./routes/reviewRoutes");
const orderRouter = require("./routes/orderRoutes");
const categoryRouter = require("./routes/categoryRoutes");
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
app.use("/api/v1/users", userRouter)
app.use("/api/v1/products", productRouter)
app.use("/api/v1/reviews", reviewRouter)
app.use("/api/v1/orders", orderRouter)
app.use("/api/v1/categories", categoryRouter)



module.exports = app;