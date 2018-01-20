const mongoose = require('mongoose');
const config = require('@config');

function connectDB () {
    const database = mongoose.connection;
    mongoose.Promise = Promise;
    console.log(config.DB_URL);
    mongoose.connect(config.DB_URL, {
        useMongoClient: true,
        promiseLibrary: global.Promise
    });
    database.on('error', error => console.log(`-DB: connection failed: ${error}`));
    database.on('connected', async () => {
        console.log(`+DB: connected to ${config.DB_URL}`)
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
    console.log('+Tools: configured');
}