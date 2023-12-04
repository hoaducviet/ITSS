const mongoose = require('mongoose');
const mongodbURI = "mongodb+srv://viethoang:viethoang21@cluster0.3hvcfxo.mongodb.net/mom_baby?retryWrites=true&w=majority"
const uri1= 'mongodb://127.0.0.1:27017/nodejs_demo';


async function connect() {
    try {
        await mongoose.connect(mongodbURI);
        console.log('Connected');
    } catch (error) {
        console.log('Failed');
    }
}

module.exports = { connect, mongodbURI };
