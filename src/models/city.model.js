const mongoose = require('mongoose')

const PlacesSchema = new mongoose.Schema(
  {
    name: { type: String },
    description: { type: String },
    image: { type: String },
  },
  {
    timestamps: true,
  },
)

const CitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    emblem: {
      type: String,
      required: true,
    },
    area: {
      type: Number,
      required: true,
    },
    population: {
      type: Number,
      required: true,
    },
    postalCode: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    coords: {
      type: String,
      required: true,
    },
    places: [PlacesSchema],
  },
  {
    timestamps: true,
    collection: 'cities',
  },
)

module.exports = mongoose.model('City', CitySchema)
