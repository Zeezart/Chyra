import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FaGoogle } from "react-icons/fa"
import { auth } from "../../firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import Navbar from "../navbar"
import Footer from "../footer"

function Login(){

    const [loginInfo, setLoginInfo] = useState({
        email:"",
        password:""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setLoginInfo(prevValue => {
            return{
                ...prevValue,
                [name]:value
            }
        })
    }

    function handleLogin(e){
        //do something
        e.preventDefault()
        signInWithEmailAndPassword(auth,loginInfo.email,loginInfo.password)
        .then((userCredential) => {
            console.log(userCredential)
        }).catch((error)=>{
            console.log(error)
        })
    }
    return(
        <>
            <Navbar />
            <section id="register-section">
                <div className='welcome-message'>
                    <div className = 'welcome-message-text'>
                        <h2>Welcome to Chyra!</h2>
                        <p>Explore multiverse with Chyra library collection and<br/> join our community to explore our world</p>
                    </div>
                </div>
                <div className="register-form">
                    <form onSubmit={handleLogin}>
                        <h3>Log in</h3>
                        <p>Welcome back</p>
                    
                        <label>Email Address</label>
                        <input 
                            type="email" 
                            placeholder="Email Address" 
                            name='email' 
                            onChange={handleChange}
                            className="login-form-input"
                            value={loginInfo.email}
                        />
                        <label>Password</label>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            name='password' 
                            onChange={handleChange}
                            className="login-form-input"
                            value={loginInfo.password}
                        />

                        <button className="primarybtn">Start Reading</button>

                    </form>
                    <p className="or">or</p>
                    <button className="secondarybtn" type="submit"><FaGoogle/>Sign in with Google</button>
                    <p style={{marginTop:"1rem", textAlign:"right"}}><small>Not Registered?<Link to="/signup"><span style={{color:"#3A3B3B", textDecoration:"underline", cursor:"pointer"}} >Sign Up</span></Link></small></p>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Login