const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        const dbConnected = await mongoose.connect(process.env.MONGODB_CONNECTION_URI)
        console.log('db connected');
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = connectDb;