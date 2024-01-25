const authorization = async (req, res, next) => {
  const auth = req.headers.authorization

  if (!auth) {
    res.status(401).send({
      error: true,
      message: 'unauthorized user'
    })
  }

  const token = auth.split(' ').pop()

  const verifyToken = await fetch('http://localhost:5000/auth/authorization', {
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
}

module.exports = authorization
