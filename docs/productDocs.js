/**
 * @swagger
 * tags:
 *   name: Product
 *   description: Product management endpoints
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Retrieve a list of all products
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The product ID
 *                   name:
 *                     type: string
 *                     description: The product name
 *                   description:
 *                     type: string
 *                     description: A brief description of the product
 *                   price:
 *                     type: number
 *                     description: The product price
 *                   categoryId:
 *                     type: string
 *                     description: The category ID the product belongs to
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Retrieve a specific product by ID
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The product ID
 *     responses:
 *       200:
 *         description: Product details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The product ID
 *                 name:
 *                   type: string
 *                   description: The product name
 *                 description:
 *                   type: string
 *                   description: A brief description of the product
 *                 price:
 *                   type: number
 *                   description: The product price
 *                 categoryId:
 *                   type: string
 *                   description: The category ID the product belongs to
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     tags: [Product]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The product name
 *               description:
 *                 type: string
 *                 description: A brief description of the product
 *               price:
 *                 type: number
 *                 description: The product price
 *               categoryId:
 *                 type: string
 *                 description: The category ID the product belongs to
 *             required:
 *               - name
 *               - description
 *               - price
 *               - categoryId
 *     responses:
 *       201:
 *         description: Product created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Update an existing product's details
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The product ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The product name
 *               description:
 *                 type: string
 *                 description: A brief description of the product
 *               price:
 *                 type: number
 *                 description: The product price
 *               categoryId:
 *                 type: string
 *                 description: The category ID the product belongs to
 *             required:
 *               - name
 *               - description
 *               - price
 *               - categoryId
 *     responses:
 *       200:
 *         description: Product updated successfully
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Delete a product
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The product ID
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 */
