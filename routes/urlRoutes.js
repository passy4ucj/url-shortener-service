const express = require('express')
const { redirectUrl } = require('../controllers/redirect')
const { createUrl } = require('../controllers/url')


const router = express.Router()

router.route('/shorten')
    .post(createUrl)

router.route('/:code')
    .get(redirectUrl)

module.exports = router