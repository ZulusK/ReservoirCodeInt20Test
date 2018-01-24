const mongoose = require('mongoose');
const config = require('@config');
const auth = require('@services/auth');
const emailVarification = require('@services/emailVarification');

const NineGag = require('9gag'),
    Scraper = NineGag.Scraper,
    NumOfPosts = 50;

const meme = require('@DB').Meme;

async function addNewMemesToDB() {
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

function connectDB() {
    const database = mongoose.connection;
    mongoose.Promise = Promise;
    mongoose.connect(config.DB_URL, {
        useMongoClient: true,
        promiseLibrary: global.Promise
    });
    database.on('error', error => console.log(`-DB: connection failed: ${error}`));
    database.on('connected', async () => {
        console.log(`+DB: connected to ${config.DB_URL}`);
        addNewMemesToDB();
        setInterval(() => { addNewMemesToDB() }, 2 * 1000 * 60 * 60);
    });
    database.on('disconnected', () => console.log('-DB: disconnected'));
    process.on('SIGINT', () => {
        database.close(() => {
            console.log('+DB: connection closed');
            process.exit(0);
        })
    });
}

exports.init = (app) => {
    connectDB();
    auth(app);
    console.log('+Tools: configured');
}