const express = require('express')
const CityController = require('../controllers/city.controller')

const CityRouter = express.Router()

CityRouter.get('/', CityController.getAllCities)

CityRouter.get('/:name', CityController.getCityByName)

CityRouter.post('/', CityController.registerCity)

CityRouter.put('/:id', CityController.updateCity)

CityRouter.delete('/:id', CityController.deleteCity)

module.exports = CityRouter
