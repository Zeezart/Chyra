import React, { useState } from "react"
import avatar from "../assets/avatar.jfif"
import divergent from "../assets/divergent.jfif"
import genreImage6 from "../assets/genre-image (6).svg"
import { FaPlus } from "react-icons/fa"
import SearchInput from "./searchInput"

function MyLibrary(){

    const [add, setAdd] = useState(false)
    function handleSearch(){
        setAdd(!add)
    }
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
                <div className="library-banner">
                    <div>
                        <h2>Veronica Roth</h2>
                        <h2>Divergent</h2>
                        <p>Continue reading</p>
                    </div>
                    <img src={divergent} />
                </div>

                <div className="added-books">
                    <h3>My Library</h3>
                    <div className="add-new-book" onClick={handleSearch}>
                        <div className="add-icon-circle">
                            <FaPlus className="add-icon" />
                        </div>
                    </div>
                    <div  className="library-search">
                        {add && <SearchInput/>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MyLibrary