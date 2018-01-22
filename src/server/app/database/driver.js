'use strict';

module.exports = {
    user: require('@DBdrivers/user'),
    meme: require('@DBdrivers/meme')
};
module.exports.methods = {
    get: {
        all (model) {
            return model.find().exec();
        },
        byID (model, id) {
            return model.findById(id).exec();
        },
        byData (model, data) {
            return model.findOne(data).exec();
        }
    },
    create (model, data) {
        let entity = new model(data);
        return entity.save();
    },
    remove: {
        byID(model, id) {
            return model.findByIdAndRemove(id).exec();
        }
    }
}