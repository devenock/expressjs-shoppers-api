const express = require('express');
const {createReview, getAllReviews, getReview, updateReview, deleteReview} = require("../controllers/reviewController");
const router = express.Router();

//create review
router.route("/").post(createReview)
router.route("/").get(getAllReviews)
router.route("/:id").get(getReview)
router.route("/update/:id").post(updateReview)
router.route("/:id").delete(deleteReview)

module.exports = router;