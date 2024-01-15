import React, { useState, useEffect } from "react"
import heroImage from "../assets/hero-image.svg"
import Navbar from "./navbar"
import BookImage from "./bookImages"
import SearchInput from "./searchInput"

function Hero(){

    const [result, setResult] = useState([])


    const [scrollTopValue, setScrollTopValue] = useState("")
    useEffect(() => {
        const handleScroll = () => {
          const scrollTopValue = window.scrollY;
          setScrollTopValue(scrollTopValue)
        };
    
        // Attach the event listener
        window.addEventListener('scroll', handleScroll);
    
        // Detach the event listener when the component is unmounted
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    })
    
    return(
        <>
            <Navbar/>
            <section id="hero-section">
                <section className="hero-header">
                    <div className="hero-left">
                        <p>Let’s make the best investments</p>
                        <h1>The <span>Chyra</span> eBook Library</h1>
                        <p className="small">Browse from the largest collection of ebooks<br/>
                        Read stories from anywhere, at anytime.</p>
                        <SearchInput setResult={setResult}/>
                    </div>

                    <div className="hero-right">
                        <img src={heroImage} loading="lazy"/>
                    </div>
                </section>

                <section className="book-result">
                    <BookImage 
                        result = {result}
                        scrollTopValue = {scrollTopValue}
                    />
                </section>
                </section>
        </>
        
    )
}
//AIzaSyA_KeICDW5MCHF3qAgsgtT-mcB0aWfQlpM
export default Hero