const jwt = require('jsonwebtoken')
const { SECRET } = require('../utils/config')

const verifyToken = (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(401).json({ message: 'You are not autheticated' })
  }

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.json({ message: 'Token is not valid' })
    req.user = user
    next()
  })
}

const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next()
    } else {
      return res.status(403).json({ mesage: 'You are not authorized' })
    }
  })
}

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next()
    } else {
      return res.status(403).json({ mesage: 'You are not authorized' })
    }
  })
}


module.exports = {
  verifyToken,
  verifyUser,
  verifyAdmin
}