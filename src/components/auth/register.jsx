import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FaGoogle } from "react-icons/fa"
import { auth } from "../../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth"
import Navbar from "../navbar"
import Footer from "../footer"


function Register(){

    const [signUpInfo, setSignUpInfo] = useState({
        username:"",
        email:"",
        password:""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setSignUpInfo(prevValue => {
            return{
                ...prevValue,
                [name]:value
            }
        })
    }

    function handleRegister(e){
        //do something
        e.preventDefault()
        createUserWithEmailAndPassword(auth,signUpInfo.email,signUpInfo.password)
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
                    <form onSubmit={handleRegister}>
                        <h3>Sign Up</h3>
                        <p>Create your own universe of your own Books collection</p>
                        <label>Username</label>
                        <input 
                            type="text" 
                            placeholder="Username" 
                            name='username' 
                            onChange={handleChange}
                            className="login-form-input"
                            value={signUpInfo.username}
                        />
                        <label>Email Address</label>
                        <input 
                            type="email" 
                            placeholder="Email Address" 
                            name='email' 
                            onChange={handleChange}
                            className="login-form-input"
                            value={signUpInfo.email}
                        />
                        <label>Password</label>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            name='password' 
                            onChange={handleChange}
                            className="login-form-input"
                            value={signUpInfo.password}
                        />

                        <button className="primarybtn">Create Account</button>

                    </form>
                    <p className="or">or</p>
                    <button className="secondarybtn" type="submit"><FaGoogle/>Sign up with Google</button>
                    <p style={{marginTop:"1rem", textAlign:"right"}}><small>Already have an account? <Link to="/signin"><span style={{color:"#3A3B3B", textDecoration:"underline", cursor:"pointer"}} >Login</span></Link></small></p>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Register