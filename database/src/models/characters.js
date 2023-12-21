const { model, Schema } = require('mongoose')

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


characterSchema.statics.list = async () => {
  const data = await character.find({})
  return data
}

characterSchema.statics.insert = async (data) => {
  const create = await character.create(data)
  return create
}

characterSchema.statics.getItemById = async (id) => {
  const item = await character.findById(id)
  return item
  
}

const character = model('character', characterSchema)
module.exports = character
