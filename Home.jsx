import React, { useState } from 'react'
import Layout from './layout';
import Login from './component/Login';
import Sign from './Sign';
import ContactUs from './Contectus'
import Register from './component/Register'
import Verify from './component/Verify'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
const Home = () => {
  const[otp,setOtp]=useState("")
  return (
    <>
    <Router>
      <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register otp={otp} setOtp={setOtp}/>}/>
      <Route path="/" element={<Layout/>}/>
      <Route path="/Contact" element={<ContactUs/>}/>
      <Route path="/verify" element={<Verify otp={otp} setOtp={setOtp}/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default Home