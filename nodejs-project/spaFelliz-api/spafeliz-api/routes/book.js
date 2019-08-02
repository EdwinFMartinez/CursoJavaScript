var express = require('express');
var router = express.Router();

var book_controller = require('../controllers/bookController')

router.post('/', book_controller.saveBook);

module.exports = router;