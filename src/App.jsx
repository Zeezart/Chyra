import Navbar from './components/navbar'
import Hero from './components/hero'
import './App.css'
import Service from './components/service'
import Community from './components/commuinty'
import Footer from './components/footer'

function App() {

  // function handleResize() {
  //   const screenWidth = window.innerWidth;
  //   console.log('Screen Width:', screenWidth)
  // }
  // window.addEventListener('resize', handleResize);
  // handleResize();
  
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Community />
      <Footer />
    </>
  )
}

export default App
