/*
    Product routes
    host + /api/products
 */

const { Router } = require('express');
const router = Router();
const { readAll, createOne, readOne, updateOne, deleteOne } = require('../controllers/productController');

router.get('/', readAll );

router.post('/', createOne );

router.get('/:productId', readOne);

router.put('/:productId', updateOne);

router.delete('/:productId', deleteOne);

module.exports = router;