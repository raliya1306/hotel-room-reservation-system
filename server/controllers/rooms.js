const { verifyAdmin } = require('../utils/verifyToken')
const roomsRouter = require('express').Router()
const Room = require('../models/room')

roomsRouter.post('/', verifyAdmin, async (req, res, next) => {
  const newRoom = new Room(req.body)

  try {
    const savedRoom = await newRoom.save()
    res.status(201).json(savedRoom)
  } catch (err) {
    next(err)
  }
})

roomsRouter.put('/availability/:id', async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    )
    res.status(200).json(updatedRoom)
  } catch (err) {
    next(err)
  }
})

roomsRouter.put('/:id', verifyAdmin, async (req, res, next) => {
  try {
    await Room.updateOne(
      { 'roomNumbers._id': req.params.id },
      {
        $push: {
          'roomNumbers.$.unavailableDates': req.body.dates
        },
      }
    )
    res.status(200).json({message: 'Room status has been updated.'})
  } catch (err) {
    next(err)
  }
})

roomsRouter.delete('/:id', verifyAdmin, async (req, res, next) => {
  try {
    await Room.findByIdAndDelete(req.params.id)
    res.status(200).json({message: 'Room has been deleted.'})
  } catch (err) {
    next(err)
  }
})

roomsRouter.post('/:id', async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id)
    res.status(200).json(room)
  } catch (err) {
    next(err)
  }
})

roomsRouter.post('/', async (req, res, next) => {
  try {
    const rooms = await Room.find()
    res.status(200).json(rooms)
  } catch (err) {
    next(err)
  }
})

module.exports = roomsRouter