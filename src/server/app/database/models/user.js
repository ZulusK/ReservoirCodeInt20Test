'use strict';

const userModel = require('../schemas/user');

const create = function (data, callback) {
    const newUser = new userModel(data);
    newUser.save(callback);
};

const findOne = function (data, callback) {
    userModel.findOne(data, callback);
};

const findById = function (id, callback) {
    userModel.findById(id, callback);
};



/**
 * A middleware allows user to get access to pages ONLY if the user is already logged in.
 *
 */
const isAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/');
    }
};

module.exports = {
    create,
    findOne,
    findById,
    isAuthenticated,

};
