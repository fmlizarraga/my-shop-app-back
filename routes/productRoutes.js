/*
    Product routes
    host + /api/products
 */

const { Router } = require('express');
const router = Router();
const { readAll } = require('../controllers/productController');

router.get('/', readAll );

module.exports = router;