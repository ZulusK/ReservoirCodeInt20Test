'use strict';

module.exports = {
    user: require('@DBdrivers/user'),
    meme: require('@DBdrivers/meme')
};
module.exports.methods = {
    getAll (model) {
        return model.getAll().exec();
    }
}