const { Schema, model } = require("mongoose");

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
    films: [{ type: String, ref: "film" }]
  },
  {
    timestamps: true
  }
);

const planet = model('planet', planetSchema)
module.exports = planet