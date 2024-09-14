const express = require("express");
const {createOrder, getAllOrders, updateOrder, getOrder, deleteOrder} = require("../controllers/orderController");
const router = express.Router();

router.route("/").post(createOrder);
router.route("/").get(getAllOrders);
router.route("/:id").get(getOrder);
router.route("/update/:id").post(updateOrder);
router.route("/:id").delete(deleteOrder);

module.exports = router;
