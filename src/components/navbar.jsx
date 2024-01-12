import { useState } from "react"
import Logo from "../assets/cy-logo.svg"
import { FaBars, FaTimes } from "react-icons/fa"
import { Router, Routes, Route, Link } from 'react-router-dom'
import LandingPage from "./landingPage.jsx"
import Register from "./auth/register"

function Navbar(props){

    const [toggle, setToggle] = useState(false)
    // const [activePage, setActivePage] = useState(<Home />)

    function handleToggle(){
        setToggle(!toggle)
    }

    // function handlepage(){
    //     setActivePage()
    // }

    return(
        <div id="navbar">
            <img src={Logo} />
            
                
                    <nav >
                        <ul className={`nav-links ${toggle ? 'open' : ''}`}>
                        {/* <Routes>
                            <Route path="/" exact Component={<LandingPage/>}><li className="active">Home</li></Route>
                            <Route path="/"  Component={<LandingPage/>}><li className="active">About</li></Route>
                            <Route path="/"  Component={<LandingPage/>}><li className="active">Library Catalogue</li></Route>
                            <Route path="/"  Component={<LandingPage/>}><li className="active">Contact Us</li></Route>

                        </Routes> */}
                            <li><Link to="#" className="active">Home</Link></li>
                            <li><Link to="#">About</Link></li>
                            <li><Link to="#">Library Catalogue</Link></li>
                            <li><Link to="#">Contact Us</Link></li>
                        </ul>
                        
                    </nav>
                
           
            <div className="signinbtn" >
                <p style={{color:"#3A3B3B", textDecoration:"underline", cursor:"pointer"}} onClick={props.handleLoginButton}>Login</p>
                <button className="primarybtn" onClick={props.handleClick}>Sign up</button>
            </div>
            <div onClick={handleToggle} className="togglebtn">
                {toggle ? <FaTimes/> : <FaBars />}
            </div>
            
        </div>
    )
}

export default Navbar