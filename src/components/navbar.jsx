import { useState } from "react"
import Logo from "../assets/cy-logo.svg"
import { FaBars, FaTimes } from "react-icons/fa"
import {  Link } from 'react-router-dom'
import LandingPage from "./landingPage.jsx"
import Register from "./auth/register"

function Navbar(){

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
                        
                            <li><Link to="/" className="active">Home</Link></li>
                            <li><Link to="#">About</Link></li>
                            <li><Link to="/library">Library Catalogue</Link></li>
                            <li><Link to="#">Contact Us</Link></li>

                            <div className="signinbtnmobile" >
                                <Link to="/signin"><p style={{color:"#3A3B3B", textDecoration:"underline", cursor:"pointer"}} >Login</p></Link>
                                <Link to="/signup"><button className="primarybtn" >Sign up</button></Link>
                            </div>
                        </ul>
                        
                    </nav>
                
           
            {/* <div className="signinbtn" >
                <p style={{color:"#3A3B3B", textDecoration:"underline", cursor:"pointer"}} onClick={props.handleLoginButton}>Login</p>
                <button className="primarybtn" onClick={props.handleClick}>Sign up</button>
            </div> */}
            <div className="signinbtn" >
                <Link to="/signin"><p style={{color:"#3A3B3B", textDecoration:"underline", cursor:"pointer"}} >Login</p></Link>
                <Link to="/signup"><button className="primarybtn" >Sign up</button></Link>
            </div>
            <div onClick={handleToggle} className="togglebtn">
                {toggle ? <FaTimes/> : <FaBars />}
            </div>
            
        </div>
    )
}

export default Navbar