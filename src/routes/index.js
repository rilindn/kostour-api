const express = require('express')
const CityRouter = require('./city.route')

const router = express.Router()

router.use('/city', CityRouter)

module.exports = router
