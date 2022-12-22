import React, { useEffect, useState } from 'react'
import Header from './Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Login from './Authentication/Login'
import BusList from './Booking/BusList'
import Track from './Tracking/Track'
import MainState from './context/MainState'
import BookingConfirmation from './BookingConfirmation/BookingConfirmation'
import BookingConfirmed from './BookingConfirmed/BookingConfirmed'
import Footer from './Footer/Footer'
import Index from './Admin/Index'
import PrivateRoute from './PrivateRoute/Index'
import BusDetails from './Admin/Components/BusDetails'
import LoadingBar from 'react-top-loading-bar'
import Alert from './Util/Alert'
import { toast } from 'react-toastify';

const App = () => {
  const [progress, setProgress] = useState(0);
  const [loginRef, setLoginRef] = useState(false);

  const notify=(type, message)=>{
    if(type==='success')
    {
      toast.success(message);
    }
    else
    {
      toast.error(message);
    }
  };

  const ROLES={
    GUEST:'GUEST',
    USER:'USER',
    ADMIN:'ADMIN'
  };

  return (
    <>
      <BrowserRouter>
        <MainState setProgress={setProgress}>
          <Header notify={notify} loginRef={loginRef} setLoginRef={setLoginRef} />
          <LoadingBar
            color='#f11946'
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <Alert />
          <Routes>

            {/* Routes for everyone */}
            <Route element={<PrivateRoute role={[ROLES.GUEST, ROLES.USER, ROLES.ADMIN]} />}>
              <Route path="/" element={<Home setProgress={setProgress} />} />
              <Route path="/auth" element={<Login notify={notify} setProgress={setProgress} setLoginRef={setLoginRef} loginRef={loginRef} />} />
              <Route path="/buslist" element={<BusList setProgress={setProgress} />} />
              <Route path="/booking-confirmation" element={<BookingConfirmation setProgress={setProgress} />} />
              <Route path="/booking-confirmed" element={<BookingConfirmed setProgress={setProgress} />} />
              <Route path="/track" element={<Track setProgress={setProgress} />} />
            </Route>

            {/* Routes for admin */}
            <Route element={<PrivateRoute role={[ROLES.ADMIN]} />}>
              <Route path="/admin" element={<Index notify={notify} />} />
              <Route path="/admin/:slug" element={<Index notify={notify} />} />
              <Route path="/bus/:id" element={<BusDetails setProgress={setProgress} notify={notify} />} />
            </Route>
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
