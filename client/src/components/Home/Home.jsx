import React from 'react'
import Navbar from '../Navbar/Navbar'
import Rooms from '../Rooms/Rooms'
import ContactUs from '../ContactUs/ContactUs'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar navbarimg='/nav.jpg'/>
      <Rooms />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Home