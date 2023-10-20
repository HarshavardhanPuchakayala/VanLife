import React from "react"
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Vans from "./Pages/Vans"
import Header from "./Components/Header"
import Footer from "./Components/Footer"

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/vans" element={<Vans/>}/>
      <Route path="/vans/:id" element={<VanDetail />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
      
    </>
  )
}


