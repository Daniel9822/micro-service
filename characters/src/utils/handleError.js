class HandleError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.satusCode = statusCode
  }
}

module.exports = HandleError