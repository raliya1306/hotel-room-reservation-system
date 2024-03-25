import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Rooms from './components/Rooms/Rooms'
import Room from './components/Room/Room'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/rooms' element={<Rooms />}/>
        <Route path='/room/:id' element={<Room />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
