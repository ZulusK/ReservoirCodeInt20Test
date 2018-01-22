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
        oneByQuery (model, query) {
            return model.findOne(query).exec();
        }
    },
    create (model, data) {
        let entity = new model(data);
        return new Promise((resolve, reject) => {
            entity.save((err, id) => {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                else resolve(id);
            });
        });
    },
    remove: {
        byID(model, id) {
            return model.findByIdAndRemove(id).exec();
        }
    }
}