import React from "react";
import logo from "../assets/nameless-logo.svg"

function Footer(){
    return(
        <div className="footer">
            <div className="footer-content">
                <img src={logo} />
                <div className="footer-table">
                    <div className="content">
                        <p><b>Product</b></p>
                        <p>Borrowing</p>
                        <p>eAudio</p>
                        <p>Magazine</p>
                        <p>eVideos</p>
                        <p>My Libraries</p>
                    </div>

                    <div className="content">
                        <p><b>Solutions</b></p>
                        <p>Bestsellers Book</p>
                        <p>Trending Books</p>
                        <p>Preference Books</p>
                        <p>Worldwide Books</p>
                        <p>eTools</p>
                    </div>

                    <div className="content">
                        <p><b>Resources</b></p>
                        <p>Partners</p>
                        <p>Customers</p>
                        <p>Blog</p>
                        <p>Case Study</p>
                        <p>FAQs</p>
                    </div>

                    <div className="content">
                        <p><b>Company</b></p>
                        <p>About Us</p>
                        <p>Our Libraries</p>
                        <p>Technical Services</p>
                        <p>Contact</p>
                        
                    </div>
                </div>
            </div>

            <div className="footer-note">

            </div>
        </div>
    )
}

export default Footer