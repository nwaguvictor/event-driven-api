'use strict';

const { Schema, model } = require('mongoose');

/**
 * User Model
 * @returns {Object} user
 */
const UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Name field is required']
    },
    email: {
        type: String,
        required: [true, 'Email field is required'],
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Password field is required'],
        trim: true
    }
})

module.exports = model(UserSchema, 'User');