const { authorization_url } = require('../utils/envs')

const authorization = async (req, res, next) => {
  const auth = req.headers.authorization

  if (!auth) {
    res.status(401).send({
      error: true,
      message: 'unauthorized user'
    })
  }

  const token = auth?.split(' ').pop()

  try {
    const verifyToken = await fetch(authorization_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token })
    })

    const { data } = await verifyToken.json()

    if (data?.authorization) {
      next()
    } else {
      res.status(401).send({
        error: true,
        message: data?.message
      })
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = authorization
