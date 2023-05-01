const createOne = ( req, res ) => {
    // get form info from request
    // const name = req.body.name;
    // create resource in DB
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
        msg: 'Product created',
        product: dummyProduct
    });
};

module.exports = createOne;