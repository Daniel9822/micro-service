const { Schema, model } = require('mongoose')
const {
  listItems,
  insertItem,
  listItem,
  deleteItem,
  updateItem
} = require('./staticsMethods')

const filmSchema = new Schema(
  {
    title: String,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: Date,
    characters: [{ type: String, ref: 'character' }],
    planets: [{ type: String, ref: 'planet' }]
  },
  {
    timestamps: true
  }
)

filmSchema.statics.list = async () => listItems(films)
filmSchema.statics.insert = async (data) => insertItem(films, data)
filmSchema.statics.getItemById = async (id) => listItem(films, id)
filmSchema.statics.deleteItemById = async (id) => deleteItem(films, id)
filmSchema.statics.updateItem = async (id, data) => updateItem(films, id, data)

const films = model('film', filmSchema)

module.exports = films
