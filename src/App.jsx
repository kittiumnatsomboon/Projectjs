import { useState } from 'react'
import './App.css'

import Footer from "./components/footer";
import LenisScroll from "./components/lenis-scroll";
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Home  from './pages/Home';
import About from './pages/Aboute';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <>
      {/* router */}
      <BrowserRouter>
        <LenisScroll />
        <Routes>
          {/* router เริ่มต้นที่ Navbar  */}
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
           </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
{/*  */ }
