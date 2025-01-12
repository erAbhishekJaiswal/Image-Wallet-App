const express = require('express');
const { createStudent, getStudents, getStudentById } = require('../controllers/studentController');
const upload = require('../middleware/upload');

const router = express.Router();

router.post('/', upload.single('profilePhoto'), createStudent);
router.get('/', getStudents);
router.get('/:id', getStudentById);

module.exports = router;
