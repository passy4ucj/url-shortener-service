const express = require('express')
const { createUrl } = require('../controllers/url')


const router = express.Router()

router.route('/shorten')
    .post(createUrl)

module.exports = router