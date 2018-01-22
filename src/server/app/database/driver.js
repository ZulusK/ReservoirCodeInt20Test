'use strict';

const NineGag = require('9gag'),
    Scraper = NineGag.Scraper,
    NumOfPosts = 50;

//const config = require('@config');
//const mongoose = require('mongoose');

const user = require('./models/user'),
    meme = require('./models/meme');

async function getNewMemes() {
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
        if(added != 0) console.log(`Added ${added} memes to DB`);
    }
}

getNewMemes();
setInterval(() => { getNewMemes() }, 1000 * 60 * 60);

module.exports = {
    user,
    meme
};
