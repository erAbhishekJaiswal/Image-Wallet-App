const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        // required: true,
    },
    url: {
        type: String,
        // required: true,
    },
    public_id: {
        type: String,
        // required: true,
    },
    profilePhoto: {
        type: String,
        // required: true,
    },
}, { timestamps: true });

const Image = mongoose.model('Image', imageSchema);
module.exports = Image;