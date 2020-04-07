const express = require('express')
const router = express.Router();
const studentCtl=require('./controller/student.controller');
router.post('/', studentCtl.createStudent);
router.get('/', studentCtl.getAllStudent);
module.exports = router