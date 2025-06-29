const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'daf5abr3x',
    api_key: process.env.CLOUDINARY_API_KEY || '614871955289598',
    api_secret: process.env.CLOUDINARY_API_SECRET || 'i2upONpI5DfZJYjMWFaV7X_UCXw'
});

exports.imageuploader = async (filepath) =>{
    try {
        const result = await cloudinary.uploader.upload(filepath,{
            folder: 'imagewallet',
            resource_type: 'auto'
        });
        fs.unlinkSync(filepath);
        return result;
    } catch (error) {
        if (fs.existsSync(filepath)) {
            fs.unlinkSync(filepath);
        }
        throw error;
    }
} 