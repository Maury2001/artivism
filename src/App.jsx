import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/about';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Blog from './pages/Blog';


function App() {
  

  return (
   <>
   <BrowserRouter>
   <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={< Blog/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
   
   
  
   </>
  )
}

export default App