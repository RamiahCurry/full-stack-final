const mongoose = require('mongoose');
const DATABASE_URL = 'mongodb://localhost:27017/yourDatabaseName';

const connectDB = async () => {
    try {
        await mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

module.exports = connectDB;
