const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_Controller');

router.get('/',homeController.home);
router.post('/submit',homeController.submit)
router.get('/delete/:id',homeController.delete)

module.exports = router;