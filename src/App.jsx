import React from "react"
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from "./Pages/Home"
import About from "./Pages/About"
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Link to="/">Home</Link>
    <Link to="/about">about</Link>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}></Route>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}


