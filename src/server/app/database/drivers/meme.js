'use strict';

const DB = require('@DB');
const Meme = require('@DBschemas/meme');

// const NineGag = require('9gag');
// const Scraper = NineGag.Scraper;
// const NumOfPosts = 50;

// async function getNewMemes() {
//     const scraper = new Scraper(NumOfPosts);
//     let added = 0;

//     try {
//         const posts = await scraper.scrap();

//         for (let post of posts) {
//             let data = {
//                 title: post.title,
//                 content: post.content
//             };

//             await meme.create(data);

//             added++;
//         }

//         console.log(`Added ${NumOfPosts} memes to DB`);
//     }
//     catch (err) {
//         if (added != 0) console.log(`Added ${added} memes to DB`);
//     }
// }

async function create(data) {
    if (await DB.methods.get.byData(data)) throw new Error('Meme is already exist');

    return await DB.methods.create(Meme, data);
}

function getById(id) {
    return DB.methods.get.byID(Meme, id);
}

function find(params) {
    return DB.methods.get.byData(params);
}

function removeById(id) {
    return DB.methods.remove.byID(Meme, id);
}

function getAll() {
    return DB.get.all(Meme);
}

module.exports = {
    create,
    getById,
    find,
    removeById,
    getAll
}