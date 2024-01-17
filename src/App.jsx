import Navbar from './components/navbar'
import './App.css'
import Footer from './components/footer'
import LandingPage from './components/landingPage'
import Register from './components/auth/register'
import Login from './components/auth/login'
// import AuthDetails from './components/authDetails'
import { useState } from 'react'
import { Router, Routes, Route } from "react-router-dom"
import MyLibrary from './components/mylibrary'
import { AuthProvider } from './components/authContext'

function App() {

  // function handleResize() {
  //   const screenWidth = window.innerWidth;
  //   console.log('Screen Width:', screenWidth)
  // }
  // window.addEventListener('resize', handleResize);
  // handleResize();
  
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" exact element={<LandingPage/>}></Route>
        <Route path="/signin"  element={<Login/>}></Route>
        <Route path="/signup"  element={<Register/>}></Route>
        <Route path="/library"  element={<MyLibrary/>}></Route>
        <Route path="/"  element={<LandingPage/>}></Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
