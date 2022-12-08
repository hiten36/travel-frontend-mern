import React from 'react'
import Header from './Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Login from './Authentication/Login'
// import BusList from './BusList'
import BusList from './Booking/BusList'
import Track from './Tracking/Track'
import MainState from './context/MainState'
import BookingConfirmation from './BookingConfirmation/BookingConfirmation'
import BookingConfirmed from './BookingConfirmed/BookingConfirmed'
import Footer from './Footer/Footer'
import Index from './Admin/Index'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <MainState>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Login />} />
            <Route path="/buslist" element={<BusList />} />
            <Route path="/booking-confirmation" element={<BookingConfirmation />} />
            <Route path="/booking-confirmed" element={<BookingConfirmed />} />
            <Route path="/track" element={<Track />} />
            <Route path="/admin" element={<Index />} />
            <Route path="/admin/:slug" element={<Index />} />
            {/* <Route path="/admin/:booking" element={<Index />} />
            <Route path="/admin/:refund" element={<Index />} /> */}
          </Routes>
          {/* <Footer /> */}
        </MainState>
      </BrowserRouter>
    </>
  )
}

export default App
