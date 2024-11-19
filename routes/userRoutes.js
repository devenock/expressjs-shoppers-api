const express = require('express');
const router = express.Router();
const {getAllUsers, getUserById, deleteUser, updateUser, createUser} = require("../controllers/userController");

//user routes
/**
 * @swagger
 * /user:
 *   post:
 *     summary: Create a new user
 *     responses:
 *       200:
 *         description: Returns the new user
 */
router.route('/').post(createUser);
/**
 * @swagger
 * /api/v1/user:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: A list of users
 */
router.route('/').get(getAllUsers);
/**
 * @swagger
 * /api/v1/user:
 *   get:
 *     summary: Get user by ID
 *     responses:
 *       200:
 *         description: User object
 */
router.route('/:id').get(getUserById);
/**
 * @swagger
 * /api/v1/user:
 *   update:
 *     summary: Update a user
 *     responses:
 *       200:
 *         description: Updated user
 */
router.route('/update/:id').post(updateUser);
/**
 * @swagger
 * /api/v1/user:
 *   delete:
 *     summary: Delete a user
 *     responses:
 *       200:
 *         description: success
 */
router.route('/:id').delete(deleteUser);

module.exports = router;