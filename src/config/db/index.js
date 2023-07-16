const mongoose = require('mongoose');
const mongodbURI = "mongodb+srv://Admin0801:Densaumotnguoi@cluster0.mhgu0bp.mongodb.net/QLNS?retryWrites=true&w=majority";
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
