const mongoose = require('mongoose');
const config = require('@config');
const auth = require('@services/auth');
function connectDB () {
    const database = mongoose.connection;
    mongoose.Promise = Promise;
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
    auth(app);
    console.log('+Tools: configured');
}