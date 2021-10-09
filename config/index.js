'use strict'

require('dotenv').config({ encoding: 'utf8' });

/**
 * global config Obj
 */
const config = {
    production: {
        PORT: process.env.PORT,
        MONGO_URI: process.env.MONGO_URI,
    },
    development: {
        PORT: process.env.PORT,
        MONGO_URI: process.env.MONGO_URI,
    },
    test: {
        PORT: process.env.PORT,
        MONGO_URI: process.env.MONGO_URI,
    },
}

const environment = process.env.NODE_ENV;
module.exports = config[environment] || config['development'];