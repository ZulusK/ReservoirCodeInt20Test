'use strict';
const Utils = require('@utils');
module.exports.methods = {
    get: {
        all (model, pagination) {
            return model.find().exec();
        },
        byID (model, id) {
            return model.findById(id).exec();
        },
        /**
         * find one doc by query
         * @param model model to search
         * @param query query to search
         * @return {Promise} result of search
         */
        oneByQuery (model, query) {
            return model.findOne(query).exec();
        },
        /**
         *
         * @param model model to use
         * @param query query to search
         * @param pagination pagination options (page, limit, sort)
         * @return {*} paginated or not paginated list of entities
         */
        byQuery (model, query, pagination) {
            if (!pagination) {
                return model.find(query).exec();
            } else {
                return model.paginate(query, Utils.pagination(pagination));
            }
        }

    },
    /**
     *
     * @param model model of new entity
     * @param data data of new doc
     * @return {Promise<any>} id of created entity
     */
    create (model, data) {
        let entity = new model(data);
        return new Promise((resolve, reject) => {
            entity.save((err, id) => {
                if (err) {
                    // console.log(err);
                    reject(err);
                }
                else resolve(id);
            });
        });
    },
    remove: {
        byID (model, id) {
            return model.findByIdAndRemove(id).exec();
        }
    }
}
module.exports.User = require('@DBdrivers/user');
module.exports.Meme = require('@DBdrivers/meme');
module.exports.NAU = require('@DBdrivers/notActivatedUser');
