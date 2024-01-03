import { useState } from "react"
import Logo from "../assets/cy-logo.svg"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"

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
                    <li><Link to="#" className="active">Home</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Library Catalogue</Link></li>
                    <li><Link to="#">Contact Us</Link></li>
                </ul>
            </nav>
            <button className="primarybtn">Sign up</button>
            <div onClick={handleToggle} className="togglebtn">
                {toggle ? <FaTimes/> : <FaBars />}
            </div>
            
        </div>
    )
}

export default Navbar