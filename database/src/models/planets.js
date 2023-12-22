const { Schema, model } = require('mongoose')
const {
  listItems,
  insertItem,
  listItem,
  deleteItem,
  updateItem
} = require('./staticsMethods')

const planetSchema = new Schema(
  {
    name: String,
    rotation_period: String,
    orbital_period: String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    residents: Array,
    films: [{ type: String, ref: 'film' }]
  },
  {
    timestamps: true
  }
)

planetSchema.statics.list = async () => await listItems(planet)

planetSchema.statics.insert = async (data) => await insertItem(planet, data)

planetSchema.statics.getItemById = async (id) => await listItem(planet, id)

planetSchema.statics.deleteItemById = async (id) => await deleteItem(planet, id)

planetSchema.statics.updateItem = async (id, body) =>
  updateItem(planet, id, body)

const planet = model('planet', planetSchema)
module.exports = planet
