const { Schema, model } = require("mongoose");

const filmSchema = new Schema(
  {
    title: String,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: Date,
    characters: [{ type: String, ref: "character" }],
    planets: [{ type: String, ref: "planet" }]
  },
  {
    timestamps: true
  }
);

const films = model('film', filmSchema)

module.exports = films