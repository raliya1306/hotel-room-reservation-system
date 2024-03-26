const usersRouter = require('express').Router()
const User = require('../models/user')
const { verifyUser, verifyAdmin } = require('../utils/verifyToken')

usersRouter.put('/:id', verifyUser, async (req,res,next)=>{
  try {
    const user = req.body		
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      user,
      { new: true }
    )
    res.status(200).json(updatedUser)
  } catch (err) {
    next(err)
  }
})

usersRouter.delete('/:id', verifyUser, async (req,res,next)=>{
  try {
    const user = await User.findById(req.params.id)
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
})

usersRouter.get('/:id', verifyUser, async (req,res,next)=>{
  try {
    const user = await User.findById(req.params.id)
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
})

usersRouter.get('/', verifyAdmin, async (req,res,next)=>{
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (err) {
    next(err)
  }
})	

module.exports = usersRouter