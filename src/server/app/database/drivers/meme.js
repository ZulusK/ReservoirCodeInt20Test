'use strict';

const Meme = require('@DBschemas/meme');
const NineGag = require('9gag');
const Scraper = NineGag.Scraper;
const NumOfPosts = 50;
const BD=require('@DB');

async function getNewMemes () {
    const scraper = new Scraper(NumOfPosts);
    let added = 0;

    try {
        const posts = await scraper.scrap();

        for (let post of posts) {
            let data = {
                title: post.title,
                content: post.content
            };

            await meme.create(data);

            added++;
        }

        console.log(`Added ${NumOfPosts} memes to DB`);
    }
    catch (err) {
        if (added != 0) console.log(`Added ${added} memes to DB`);
    }
}

async function create (data) {
    if (await Meme.findOne(data)) throw new Error('Meme is already exist');

    const newMeme = new Meme(data);
    return await newMeme.save();
}

async function getById (id) {
    return await Meme.findById(id).exec();
}

async function find (params) {
    return await Meme.findOne(params).exec();
}

async function removeById (id) {
    return await Meme.findByIdAndRemove(id).exec();
}

async function getAll () {
    return await BD.getAll(Meme);
}

module.exports = {
    create,
    getById,
    find,
    removeById,
    getAll
}