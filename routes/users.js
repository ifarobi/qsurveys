var express = require('express');
var router = express.Router();
var userController = require('../controllers/user.controller.js');

router.get('/nim/:stdNumber', userController.getNilai);
router.param('stdNumber', userController.nilaiByNim);
module.exports = router;
