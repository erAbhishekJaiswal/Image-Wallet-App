// import { v2 as cloudinary } from 'cloudinary';
const multer = require('multer');

// Configuration
// cloudinary.config({ 
//     cloud_name: 'dm9g4lkx8', 
//     api_key: '373849952831995', 
//     api_secret: '<your_api_secret>' // Click 'View API Keys' above to copy your API secret
// });


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage: storage });

module.exports = upload;
