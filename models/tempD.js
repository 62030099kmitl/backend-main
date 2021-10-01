const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tempDSchema = new Schema({
  date: Date,
  time: String,
  sensor_id: Number,
  humidity_1: Number
})

const tempDModel = mongoose.model('tempD', tempDSchema)

module.exports = tempDModel

