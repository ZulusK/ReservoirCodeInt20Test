const mongoose = require('mongoose');
const config = require('@config');

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
        //  const user = require('@DB').user;
        // // await user.create({username: 'admin', password: 'RollTheBones', role: 'admin'});
        // console.log(await user.findById('5a63a9d62441f05a2b9fd27f'));
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