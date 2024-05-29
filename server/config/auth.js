const { verify, sign } = require('jsonwebtoken')

function createToken(user_id) {
  const token = sign({ user_id }, process.env.JWT_SECRET)

  return token
}

function authenticate({ req, res }) {
  const token = req.cookies?.token

  if (!token) return { req, res }

  try {
    const data = verify(token, process.env.JWT_SECRET)

    console.log(data)
    req.user_id = data.user_id

    return { req, res }
  } catch (error) {
    return { req, res }
  }
}

module.exports = { createToken, authenticate }