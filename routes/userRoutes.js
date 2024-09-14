const express = require('express');
const router = express.Router();
const {getAllUsers, getUserById, deleteUser, updateUser, createUser} = require("../controllers/userController");

//user routes
router.route('/').post(createUser);
router.route('/').get(getAllUsers);
router.route('/:id').get(getUserById);
router.route('/update/:id').post(updateUser);
router.route('/:id').delete(deleteUser);

module.exports = router;