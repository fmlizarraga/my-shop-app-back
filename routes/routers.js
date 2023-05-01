const products = require('./productRoutes');

const routers = [
    {
        path: "/api/products",
        route: products
    },
];

module.exports = routers;