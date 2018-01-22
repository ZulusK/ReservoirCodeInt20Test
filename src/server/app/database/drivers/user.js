'use strict';

const DB=require('@DB');
const User = require('../schemas/user');

const create =  function (data) {
    return DB.create(User,data);
};

const findOne = async function (query) {
    return DB.find.one(query);
};

const findById = async function (id) {
    return await User.findById(id).exec();
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
