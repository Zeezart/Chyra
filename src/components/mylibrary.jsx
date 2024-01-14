import React, { useState,useEffect } from "react"
import avatar from "../assets/avatar.jfif"
import divergent from "../assets/divergent.jfif"
import genreImage6 from "../assets/genre-image (6).svg"
import { FaPlus } from "react-icons/fa"
import SearchInput from "./searchInput"
import LibrarySearch from "./librarysearch"

function MyLibrary(){

    const [add, setAdd] = useState(false)
    function handleSearch(){
        setAdd(true)
    }

    const [result, setResult] = useState([])

    useEffect(() => {
        const handleClickOutside = (event) => {
          // Check if the click occurred outside the popup
          if (add && !event.target.closest('.library-search')) {
            setAdd(false);
        }
        console.log(add)
        };
    
        // Add click event listener to the document
        document.addEventListener('click', handleClickOutside);
    
        // Cleanup the event listener on component unmount
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, []);

    const [addedBook, setAddedBook] = useState([])
    
    function handleAddBook(){
        
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

                    {add && <div  className="library-search">
                        <SearchInput setResult={setResult}/>
                        <LibrarySearch 
                            result = {result}
                            onClick= {handleAddBook}
                        />
                    </div>}
                </div>
            </div>
        </section>
    )
}

export default MyLibrary