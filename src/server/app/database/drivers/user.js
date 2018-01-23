'use strict';

const DB = require('@DB');
const User = require('@DBschemas/user');

module.exports.create = function (data) {
    return DB.methods.create(User, data);
};

module.exports.get = {
    byID () {
        return DB.methods.get.byID(User, id);
    },
    async byCredentials (username, password) {
        let user = await DB.methods.get.oneByQuery(User, {username: username})
        console.log(password)
        if (user && await user.comparePasswords(password)) {
            return user;
        } else {
            return null;
        }
    },
    byEmail (email) {
        return DB.methods.oneByQuery(User, {email: email});
    },
    async byToken (name, token) {
        const user = await DB.methods.get.byID(User, token.id);
        if (user && user.verifyToken(name, token)) return user;
        else return null;
    },
}
