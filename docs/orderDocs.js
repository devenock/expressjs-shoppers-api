/**
 * @swagger
 * tags:
 *   name: Order
 *   description: Order management endpoints
 */

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Retrieve a list of all orders
 *     tags: [Order]
 *     responses:
 *       200:
 *         description: A list of orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The order ID
 *                   name:
 *                     type: string
 *                     description: The order name
 *                   description:
 *                     type: string
 *                     description: A brief description of the order
 *                   price:
 *                     type: number
 *                     description: The order price
 *                   categoryId:
 *                     type: string
 *                     description: The category ID the order belongs to
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: Retrieve a specific order by ID
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The order ID
 *     responses:
 *       200:
 *         description: Order details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The order ID
 *                 name:
 *                   type: string
 *                   description: The order name
 *                 description:
 *                   type: string
 *                   description: A brief description of the order
 *                 price:
 *                   type: number
 *                   description: The order price
 *                 categoryId:
 *                   type: string
 *                   description: The category ID the order belongs to
 *       404:
 *         description: Order not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The order name
 *               description:
 *                 type: string
 *                 description: A brief description of the order
 *               price:
 *                 type: number
 *                 description: The order price
 *               categoryId:
 *                 type: string
 *                 description: The category ID the order belongs to
 *             required:
 *               - name
 *               - description
 *               - price
 *               - categoryId
 *     responses:
 *       201:
 *         description: Order created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /orders/{id}:
 *   put:
 *     summary: Update an existing order's details
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The order ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The order name
 *               description:
 *                 type: string
 *                 description: A brief description of the order
 *               price:
 *                 type: number
 *                 description: The order price
 *               categoryId:
 *                 type: string
 *                 description: The category ID the order belongs to
 *             required:
 *               - name
 *               - description
 *               - price
 *               - categoryId
 *     responses:
 *       200:
 *         description: Order updated successfully
 *       404:
 *         description: Order not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /orders/{id}:
 *   delete:
 *     summary: Delete a order
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The order ID
 *     responses:
 *       200:
 *         description: Order deleted successfully
 *       404:
 *         description: Order not found
 *       500:
 *         description: Internal server error
 */
