require('dotenv').config()

const NODE_ENV = process.env.NODE_ENV

const services = {
  authorization_url: process.env.AUTHORIZATION_URL,
  authorization: process.env.AUTHORIZATION,
  characters: process.env.CHARACTERS,
  planets: process.env.PLANETS,
  films: process.env.FILMS
}

console.log(services);

if (NODE_ENV === "development") {
  for (const key in services) {
    services[key] = services[key].replace(/\/\/[^:]+:/, "//localhost:");
  }
}

module.exports = services
