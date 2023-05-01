const createOne = require('./products/createOne');
const deleteOne = require('./products/deleteOne');
const readAll = require('./products/readAll');
const readOne = require('./products/readOne');
const updateOne = require('./products/updateOne');

const controller = {
    createOne,
    readAll,
    readOne,
    updateOne,
    deleteOne,
};

module.exports = controller;