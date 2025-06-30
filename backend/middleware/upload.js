// import { v2 as cloudinary } from 'cloudinary';
// const multer = require('multer');

// Configuration
// cloudinary.config({ 
//     cloud_name: 'dm9g4lkx8', 
//     api_key: '614871955289598', 
//     api_secret: 'i2upONpI5DfZJYjMWFaV7X_UCXw' // Click 'View API Keys' above to copy your API secret
// });


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' + file.originalname);
//     },
// });

// const upload = multer({ storage: storage });

// module.exports = upload;











// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const { v2: cloudinary } = require('cloudinary');
// const Image = require('../models/Image');
// const fs = require('fs');

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_API_KEY,
//   api_secret: process.env.CLOUD_API_SECRET,
// });

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, 'uploads/'),
//   filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
// });

// const upload = multer({ storage: storage });

// module.exports = upload;

// router.post('/', upload.single('image'), async (req, res) => {
//   try {
//     const result = await cloudinary.uploader.upload(req.file.path);
//     const image = new Image({
//       url: result.secure_url,
//       public_id: result.public_id,
//     });
//     await image.save();
//     fs.unlinkSync(req.file.path); // cleanup
//     res.json({ success: true, data: image });
//   } catch (err) {
//     res.status(500).json({ success: false, error: err.message });
//   }
// });









const multer = require('multer');
const storage = multer.memoryStorage(); // Use memory instead of disk
const upload = multer({ storage });
module.exports = upload;
