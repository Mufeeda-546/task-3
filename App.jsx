// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import axios from 'axios'
import {BrowserRouter,Routes,Route,Navigate}  from 'react-router-dom'
import Register from './registr.jsx'
import Login from './login.jsx'
import Home from './home.jsx'
function App() {

  return (
    <BrowserRouter>
   <Routes>
    <Route index element={<Navigate to="/register" replace/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/home" element={<Home/>}/>
   </Routes>
    </BrowserRouter>
  )
}

export default App
