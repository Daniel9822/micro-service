const { compare, hash } = require('bcrypt')

const hashPassword = async (password) => {
  try {
    const pass = await hash(password, 8)
    return pass
  } catch (error) {
    return {
      error: true,
      message: error.message
    }
  }
}

const comparePassword = async (password, hash) => {
  try {
    const comparePass = await compare(password, hash)
    return comparePass
  } catch (error) {
    return {
      error: true,
      message: error.message
    }
  }
}


module.exports = {
  hashPassword,
  comparePassword
}