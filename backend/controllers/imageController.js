// const Student = require('../models/Student');
const { v2: cloudinary } = require('cloudinary');
const fs = require('fs');
const Image = require('../models/Image');

cloudinary.config({
    cloud_name: 'daf5abr3x',
    api_key: '614871955289598',
    api_secret: 'i2upONpI5DfZJYjMWFaV7X_UCXw',
});


exports.createimages = async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);
        const image = new Image({
            name: req.body.name,
            discription: req.body.discription,
            // profilePhoto: req.file.path,
            url: result.secure_url,
            public_id: result.public_id,
        });
        await image.save();
        fs.unlinkSync(req.file.path); // cleanup
        res.json({ success: true, data: image });
        // res.status(201).json(image);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getimages = async (req, res) => {
    try {
        const images = await Image.find();
        res.status(200).json(images);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getimageById = async (req, res) => {
    try {
        const image = await Image.findById(req.params.id);
        if (!image) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(image);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
