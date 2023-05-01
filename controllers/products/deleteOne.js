const deleteOne = ( req, res ) => {
    const productId = req.params.productId;
    // logic to find it on the DB here
    res.status(200).json({
        ok: true,
        msg: 'Product deleted',
    });
};

module.exports = deleteOne;