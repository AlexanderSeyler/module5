const express = require('express');
const router = express.Router();


router.get('/test',(req, res) => {res.send('Hello world123!')})

router.get('/test2',(req, res) => {res.send('Second test')})

module.exports = router;