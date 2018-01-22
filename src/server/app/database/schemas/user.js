'use strict';

const Mongoose = require('mongoose');
const Utils = require('@utils');
const config=require('@config');
//Every user has a username, password, and a picture.
let User = new Mongoose.Schema({
    username:
        {
            type: String,
            required: true
        },
    password:
        {
            type: String,
            required: true
        },
    secrets: {
        access: {
            type: String
        },
        refresh: {
            type: String
        }
    },
    created: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        required: true,
        default: 'user'
    }
});

/**
 * make new index in database by username
 */

User.index({username: 1}, {unique: true});
User.plugin(require('mongoose-paginate'));

/**
 * Before save a user document, Make sure:
 * 1. Hash user's password
 * 2. Regenerate secrets
 */
User.pre('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
        this.salt = await Utils.crypto.random(8);
        if (!this.password) {
            this.password = await Utils.crypto.random(32);
        } else {
            this.password = await Utils.crypto.hash(this.password, this.salt);
        }
        // fill tokens by random bytes
        this.generateSecret('access');
        this.generateSecret('refresh');
    }
    next();
})

/**
 * compare, is this user, has such password
 * @param password plain string with string
 * @returns {boolean} is the password used by the user
 */
User.methods.comparePasswords = function (password) {
    return Utils.crypto.compare(password, this.password, this.salt);
}

/**
 * define virtual property, accessToken, generate token
 */
User.virtual('accessToken')
    .get(function () {
        return Utils.tokens.generate('access', this.payloadAccess)
    });

/**
 * define virtual property, refreshToken, generate token
 */
User.virtual('refreshToken')
    .get(function () {
        return Utils.tokens.generate('refresh', this.payloadRefresh)
    });
/**
 * define virtual property, payloadRefresh, contains id of user and his secret
 */
User.virtual('payloadRefresh')
    .get(function () {
        return {
            id: this.id,
            secret: this.secrets.refresh
        }
    });
/**
 * define virtual property, payloadAccess, contains id of user and his secret
 */
User.virtual('payloadAccess')
    .get(function () {
        return {
            id: this.id,
            secret: this.secrets.access
        }
    });

/**
 * define virtual property, credentials, eq. {tokens.access.value, tokens.refresh.value}
 */
User.virtual('credentials')
    .get(function () {
        return {
            access: this.accessToken,
            refresh: this.refreshToken
        }
    });
/**
 * check, is token is valid
 * @param name name of token, eq. 'access' or 'refresh'
 * @param decode string with decoded token
 * @returns {boolean} is token is valid
 */
User.methods.verifyToken = function (name, decode) {
    return decode.secret == this.secrets[name];
}
/**
 * check is token is outdated
 * @param name name of token: access or refresh
 * @returns {boolean} true, if outdated
 */
User.methods.isTokenOutdated = function (name) {
    return Math.round((Date.now() - this.tokens[name].created) / 1000) > config.security.TOKEN_LIFE[name];
}
/**
 * generate new token's secret for user
 * @param name name of token
 */
User.methods.generateSecret = function (name) {
    this.secrets[name] = Utils.crypto.random(32);
}

User.methods.info = function () {
    return {
        id: this.id,
        username: this.username,
        role: this.role,
        created: this.created
    }
}

// Create a user model
let userModel = Mongoose.model('User', User);

module.exports = userModel;