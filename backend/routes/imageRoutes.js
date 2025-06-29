const express = require('express');
const {
    createimages,
    getimages,
    getimageById
 } = require('../controllers/imageController');
const upload = require('../middleware/upload');

const router = express.Router();

router.post('/', upload.single('image'), createimages);
router.get('/', getimages);
router.get('/:id', getimageById);

module.exports = router;
