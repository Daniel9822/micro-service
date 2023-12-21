const mongoose = require('mongoose')

const MONGO_URI = process.env.MONGO_URI

async function connect() {
  try {
    await mongoose.connect(MONGO_URI)
    console.log('datababe connected')
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = connect
