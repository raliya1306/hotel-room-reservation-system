const authRouter = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const { SECRET } = require('../utils/config')

authRouter.post('/register', async (req, res, next) => {
  try {
    const saltRounds = 10
    const hash = await bcrypt.hash(req.body.password, saltRounds)

    const newUser = new User({
      ...req.body,
      password: hash,
    })

    await newUser.save()
    res.status(201).send('User has been created')
  } catch (err) {
    next(err)
  }
})

authRouter.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username })

    const passwordCorrect = user === null
      ? false
      : await bcrypt.compare(req.body.password, user.password)

    if (!(user && passwordCorrect)) {
      return res.status(401).json({
        error: 'invalid username or password'
      })
    }
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      SECRET
    )

    // eslint-disable-next-line no-unused-vars
    const { password, isAdmin, ...otherDetails } = user._doc
    
    res
      .cookie('token', token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin })
  } catch (err) {
    next(err)
  }
})

module.exports = authRouter