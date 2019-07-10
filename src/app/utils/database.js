const mongoose = require('mongoose');

const connectionStr = 'mongodb://127.0.0.1:27017/owne';

mongoose.connect(connectionStr, {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongoose connection error: '));

db.once('open', () => console.log('connected to db') );

module.exports = db;
