'use strict';

const Mongoose 	= require('mongoose');

const MemeSchema = new Mongoose.Schema({
   title: {
       type: String,
       required: true
   },
   content: {
       type: String,
       required: true
   },
   rating: {
       type: Number,
       default: 400
   }
});

MemeSchema.methods.updateRating = async function (newRating) {
    this.rating = newRating;
    return await this.save();
}

let memeModel = Mongoose.model('memes', MemeSchema);

module.exports = memeModel;