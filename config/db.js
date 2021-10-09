'use strict';

const mongoose = require('mongoose');
const { MONGO_URI } = require('./index.js');

/**
 * Mongose connection options
 */
const options = {
    autoIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// disable autoIndex option in production mode
if (process.env.NODE_ENV === 'production') {
    options.autoIndex = false;
}

/**
 * @module
 * exporting Mongoose database
 * @returns {any} mongodb connection
 */
module.exports = async () => {
    try {
        await mongoose.connect(MONGO_URI, options);
        console.log(`::> Database connected successfully`);
    } catch (error) {
        console.error(`<:: Database connection Error: ${error.message}`);
    }

    mongoose.connection.on('disconnected', () => {
        console.warn(`Database disconnected`)
    });
}

