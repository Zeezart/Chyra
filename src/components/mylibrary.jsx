import React from "react"
import avatar from "../assets/avatar.jfif"

function MyLibrary(){
    return(
        <section id="my-library-section">
            <div className="library-section-side-navbar">
                <div className="profile">
                    <img className="avatar" src={avatar} />
                    <p>Zhie Za</p>
                </div>
                <hr></hr>
                <nav>
                    <ul>
                        <li>My Library</li>
                        <li>Favorite</li>
                        <li>My Community</li>
                        <li>Audio Books</li>
                        <li>Video</li>
                        <li>Cart</li>
                        <hr></hr>
                        <li>Settings</li>
                        <li>Help</li>
                        <li>Log out</li>
                    </ul>
                </nav>
            </div>
            <div className="books-in-library">
                <h1>Holla</h1>
            </div>
        </section>
    )
}

export default MyLibrary