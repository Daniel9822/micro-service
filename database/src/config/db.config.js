const mongoose = require('mongoose')

let MONGO_URI = process.env.MONGO_URI

const NODE_ENV = process.env.NODE_ENV

if(NODE_ENV !== 'development') {
  MONGO_URI = process.env.MONGO_TEST
}

async function connect() {
  try {
    await mongoose.connect(MONGO_URI)
    console.log('datababe connected')
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = connect
