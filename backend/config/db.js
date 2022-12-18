const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/iyak');
        console.log(`Connected to ${conn.connection.host}`)
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;