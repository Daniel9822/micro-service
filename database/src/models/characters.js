const { model, Schema } = require('mongoose')
const {
  insertItem,
  listItems,
  listItem,
  deleteItem,
  updateItem
} = require('./staticsMethods')

const characterSchema = new Schema(
  {
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: { type: String, ref: 'planet' },
    films: [{ type: String, ref: 'film' }]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

characterSchema.statics.list = async () => await listItems(character)

characterSchema.statics.insert = async (data) =>
  await insertItem(character, data)
  
characterSchema.statics.getItemById = async (id) =>
  await listItem(character, id)

characterSchema.statics.deleteItemById = async (id) =>
  await deleteItem(character, id)

characterSchema.statics.updateItem = async (id, body) =>
  updateItem(character, id, body)

const character = model('character', characterSchema)
module.exports = character
