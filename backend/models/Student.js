const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,
    },
    discription: {
        type: String,
        // required: true,
    },
    // email: {
    //     type: String,
    //     // required: true,
    // },
    profilePhoto: {
        type: String,
    },
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
