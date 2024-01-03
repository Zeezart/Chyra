import React from "react"
import heroImage from "../assets/hero-image.svg"

function Hero(){
    return(
        <section id="hero-section">
            <div className="hero-left">
                <p>Let’s make the best investments</p>
                <h1>The <span>Chyra</span> eBook Library</h1>
                <p className="small">Browse from the largest collection of ebooks<br/>
                Read stories from anywhere, at anytime.</p>
                <div className="search-input">
                    <input type="text" name="search" placeholder="Search by book title, author name"/>
                    <button className="primarybtn">Search</button>
                </div>
            </div>

            <div className="hero-right">
                <img src={heroImage} />
            </div>
        </section>
    )
}

export default Hero