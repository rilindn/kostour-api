const City = require('../models/city.model')

const getAllCities = async (req, res) => {
  try {
    const city = await City.find()
    return res.send(city)
  } catch (error) {
    return res.status(500).send(error)
  }
}

const getCityByName = async (req, res) => {
  try {
    const city = await Admin.find({ name: req.params.name })
    return res.send(city)
  } catch (error) {
    return res.status(500).send(error)
  }
}

const registerCity = async (req, res) => {
  const newCity = new City({ ...req.body })
  try {
    await newCity.save()
    return res.send(newCity)
  } catch (error) {
    return res.status(500).send(error)
  }
}

const updateCity = async (req, res) => {
  const cityId = req.params.id

  try {
    const updatedCity = await City.findByIdAndUpdate(cityId, req.body, { returnOriginal: false })
    if (!updatedCity) return res.status(404).send('City not found!')
    return res.send(updatedCity)
  } catch (error) {
    res.status(500).send(error)
  }
}

const deleteCity = async (req, res) => {
  try {
    const deletedCity = await City.findByIdAndDelete(req.params.id)
    if (!deletedCity) res.status(404).send('City not found!')
    res.status(200).send(deletedCity)
  } catch (error) {
    res.status(500).send(error)
  }
}

module.exports = { getAllCities, getCityByName, registerCity, updateCity, deleteCity }
