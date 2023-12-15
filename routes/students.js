const express = require('express')
const { getAllStudents, createStudent, getSingleStudent, deleteStudent, updateStudent } = require('../controllers/students')
const router = express();

router.get('/',getAllStudents)
router.post('/',createStudent)
router.get('/:id',getSingleStudent)
router.patch('/:id', updateStudent)
router.delete('/:id',deleteStudent)

module.exports = router;