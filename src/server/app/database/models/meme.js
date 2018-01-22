'use strict';

const memeModel = require('../schemas/meme');

async function create(data) {
    if(await memeModel.findOne(data)) throw new Error('Meme is already exist'); 

    const newMeme = new memeModel(data);
    return await newMeme.save();
}

async function getById(id) {
    return await memeModel.findById(id).exec();
}

async function find(params) {
    return await memeModel.findOne(params).exec();
}

async function removeById(id) {
    return await memeModel.findByIdAndRemove(id).exec();
}

async function getAll() {
    return await memeModel.find().exec();
}

module.exports = {
    create,
    getById,
    find,
    removeById,
    getAll
}