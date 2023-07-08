const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/nodejs_demo');
        console.log('Connected');
    } catch (error) {
        console.log('Failed');
    }
}

module.exports = { connect };
