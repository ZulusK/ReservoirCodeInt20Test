'use strict';

const Mongoose = require('mongoose');
const Utils = require('@utils');
const config = require('@config');
//Every user has a email, password, and a picture.
let User = new Mongoose.Schema({
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

User.index({email: 1}, {unique: true});
User.plugin(require('mongoose-paginate'));

/**
 * Before save a user document, Make sure:
 * 1. Hash user's password
 * 2. Regenerate secrets
 */
User.pre('save', async function (next) {
    if (this.isModified('password') || this.isNew) {
        this.password = await Utils.crypto.hash(this.password, config.security.SERVER_SALT);
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
    return Utils.crypto.compare(password, this.password, config.security.SERVER_SALT);
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
User.virtual('isAdmin')
    .get(function () {
        return this.role == 'admin';
    })
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
 * generate new token's secret for user
 * @param name name of token
 */
User.methods.generateSecret = function (name) {
    this.secrets[name] = Utils.crypto.random(32);
}

User.methods.info = function () {
    return {
        id: this.id,
        email: this.email,
        role: this.role,
        created: this.created
    }
}
// Create a user model
let userModel = Mongoose.model('User', User);

module.exports = userModel;