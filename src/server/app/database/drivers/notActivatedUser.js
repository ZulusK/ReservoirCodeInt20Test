'use strict';

const DB = require('@DB');
const NAU = require('@DBschemas/notActivatedUser');

module.exports.create = function (data) {
    return DB.methods.create(NAU, data);
};

module.exports.get = {
    byID () {
        return DB.methods.get.byID(NAU, id);
    },
    async byCredentials (email, password) {
        let user = await DB.methods.get.oneByQuery(NAU, {email: email})
        if (user && await user.comparePasswords(password)) {
            return user;
        } else {
            return null;
        }
    },
    byEmail (email) {
        return DB.methods.oneByQuery(NAU, {email: email});
    },
    async byToken (token) {
        const user = await DB.methods.get.byID(NAU, token.id);
        if (user && user.verifyToken(token)) return user;
        else return null;
    },
}
module.exports.remove={
    byID(id){
        return DB.methods.remove.byID(NAU,id);
    }
}
