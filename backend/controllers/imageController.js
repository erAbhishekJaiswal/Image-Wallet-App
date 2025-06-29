// const Student = require('../models/Student');
// const { v2: cloudinary } = require('cloudinary');
// const fs = require('fs');
const Image = require('../models/Image');
const { imageuploader} = require('../utils/cloudinary');
// const path = require('path')





// exports.createimages = async (req, res) => {
//     try {
//         const result = await cloudinary.uploader.upload(req.file.path);
//         const image = new Image({
//             name: req.body.name,
//             discription: req.body.discription,
//             // profilePhoto: req.file.path,
//             url: result.secure_url,
//             public_id: result.public_id,
//         });
//         await image.save();
//         fs.unlinkSync(req.file.path); // cleanup
//         res.json({ success: true, data: image });
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

exports.createimages = async (req, res) => {
    try {
        const { name, description } = req.body;
        const filePath = req.file.path;
        const result = await imageuploader(filePath);

        // Create and save to MongoDB
        const image = new Image({
            name: name,
            description: description, // corrected spelling
            url: result.secure_url,
            public_id: result.public_id,
        });

        await image.save();

        // // Delete file from uploads only after successful DB save
        // if (fs.existsSync(filePath)) {
        //     fs.unlinkSync(filePath);
        // }

        res.json({ success: true, data: image });
    } catch (error) {
        console.error('Image Upload Error:', error.message);
        res.status(400).json({ success: false, message: error.message });

        // Optional: try to clean up uploaded file in case of failure
        if (req.file && fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path);
        }
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
