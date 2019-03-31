const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.PROD_MONGODB || 'mongodb://localhost:27017/CRC',{ useNewUrlParser: true});
mongoose.set('useCreateIndex', true);

let db = mongoose.connection;

db.on('error', (e)=> {
    throw new Error('> UNABLE TO CONNECT TO THE MONGO DATABASE! CHECK CONNECTION');
});


module.exports = {mongoose};