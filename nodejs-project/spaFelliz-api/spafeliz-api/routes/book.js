var express = require('express');
var router = express.Router();

var book_controller = require('../controllers/bookController')

router.get('/', book_controller.saveBook);