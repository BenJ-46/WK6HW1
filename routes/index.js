const router = require('express').Router()
const {join} = require('path')


router.use('/api', require('./apiRoutes.js'))
router.use('/', require('./htmlroutes.js'))

module.exports = router