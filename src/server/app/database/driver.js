'use strict';

module.exports = {
    user: require('@DBdrivers/user'),
    meme: require('@DBdrivers/meme')
};
module.exports.methods = {
    get: {
        all (model) {
            return model.getAll().exec();
        }
    },
    create (model, data) {
        let entity = new model(data);
        return new Promise((resolve, reject) => {
            entity.save((err, grid) => {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                else resolve(grid);
            });
        });
    }
}