const readOne = ( req, res ) => {
    const productId = req.params.productId;
    // logic to find it on the DB here
    const dummyProduct = {
        id: '0003',
        name: 'hoodie',
        description: 'Warm and comfy!',
        price: 30,
        badge: 'New!',
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Sudadera_urban.jpg',
        tags: ['clothing','winter','urban']
    };
    res.status(200).json({
        ok: true,
        msg: 'Product info retrieved',
        product: dummyProduct
    });
};

module.exports = readOne;