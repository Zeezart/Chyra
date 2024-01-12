import Navbar from './components/navbar'
import './App.css'
import Footer from './components/footer'
import LandingPage from './components/landingPage'
import Register from './components/auth/register'
import Login from './components/auth/login'
import AuthDetails from './components/authDetails'
import { useState } from 'react'

function App() {

  // function handleResize() {
  //   const screenWidth = window.innerWidth;
  //   console.log('Screen Width:', screenWidth)
  // }
  // window.addEventListener('resize', handleResize);
  // handleResize();
  const [displayPage, setDisplayPage ] = useState(<LandingPage />)
  function handleClick(){
    setDisplayPage(<Register/>)
  }

  function handleLoginButton(){
    setDisplayPage(<Login/>)
  }
  
  
  return (
    <>
      <Navbar handleClick={handleClick} handleLoginButton={handleLoginButton}/>
      {/* <Register />
      <Login />
      <AuthDetails /> */}
      {displayPage}
      {/* <LandingPage /> */}
      <Footer />
    </>
  )
}

export default App
