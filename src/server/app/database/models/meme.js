'use strict';

const memeModel = require('../schemas/meme');

async function create(data) {
    const newMeme = new memeModel(data);
    return await newMeme.save();
}

async function getById(id) {
    return await memeModel.findById(id).exec();
}

async function removeById(id) {
    return await memeModel.findByIdAndRemove(id).exec();
}