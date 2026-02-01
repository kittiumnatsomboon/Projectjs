import { useState } from 'react'
import './App.css'

import Footer from "./components/footer";
import LenisScroll from "./components/lenis-scroll";
import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Home  from './pages/Home';
import About from './pages/Aboute';
import Quill from './pages/Quill';

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
            <Route path='/Quilljs' element={<Quill/>}/>
           </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
{/*  */ }
