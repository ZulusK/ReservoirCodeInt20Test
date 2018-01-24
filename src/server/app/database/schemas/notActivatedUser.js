'use strict';

const Mongoose = require('mongoose');
const Utils = require('@utils');
const config = require('@config');
//Every user has a email, password, and a picture.
let NAU = new Mongoose.Schema({
    email:
        {
            type: String,
            required: true
        },
    password:
        {
            type: String,
            required: true
        },
    secret: {
            type: String
    },
    created: {
        type: Date,
        default: Date.now
    }
});

/**
 * make new index in database by username
 */

NAU.index({email: 1}, {unique: true});
NAU.plugin(require('mongoose-paginate'));

/**
 * Before save a user document, Make sure:
 * 1. Hash user's password
 * 2. Regenerate secrets
 */
NAU.pre('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
        // this.password = await Utils.crypto.hash(this.password, config.security.SERVER_SALT);
        // fill tokens by random bytes
        this.generateSecret();
    }
    next();
})

/**
 * compare, is this user, has such password
 * @param password plain string with string
 * @returns {boolean} is the password used by the user
 */
NAU.methods.comparePasswords = function (password) {
    return password==this.password
}

/**
 * define virtual property, refreshToken, generate token
 */
NAU.virtual('activationToken')
    .get( function () {
        this.generateSecret();
        this.save().then();
        return Utils.tokens.generate('activation', this.payloadActivation)
    });
/**
 * define virtual property, payloadActivation, contains id of user and his secret
 */
NAU.virtual('payloadActivation')
    .get(function () {
        return {
            id: this.id,
            secret: this.secret
        }
    });
/**
 * check, is token is valid
 * @param decode string with decoded token
 * @returns {boolean} is token is valid
 */
NAU.methods.verifyToken = function (decode) {
    return decode.secret == this.secret;
}
/**
 * generate new token's secret for user
 * @param name name of token
 */
NAU.methods.generateSecret = function () {
    this.secret= Utils.crypto.random(32);
}

NAU.methods.info = function () {
    return {
        id: this.id,
        email: this.email,
        created: this.created
    }
}
// Create a NAu model
let model = Mongoose.model('NotActivatedUser', NAU);

module.exports = model;