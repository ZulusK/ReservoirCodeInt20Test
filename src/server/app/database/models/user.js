'use strict';

const userModel = require('../schemas/user');

const create = async function (data) {
    const newUser = new userModel(data);
    return await newUser.save();
};

const findOne = async function (data) {
    return await userModel.findOne(data).exec();
};

const findById = async function (id) {
    return await userModel.findById(id).exec();
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

function checkAdmin(req, res, next) {
    if (req.user.role !== 'admin') return res.redirect('/');
    next();
}

module.exports = {
    create,
    findOne,
    findById,
    isAuthenticated,
    checkAdmin

};
