import React, { useState,useEffect } from "react"
import avatar from "../assets/avatar.jfif"
import divergent from "../assets/divergent.jfif"
import genreImage6 from "../assets/genre-image (6).svg"
import { FaPlus, FaTimes, FaBars } from "react-icons/fa"
import SearchInput from "./searchInput"
import LibrarySearch from "./librarysearch"

function MyLibrary(){

    const [add, setAdd] = useState(false)
    function handleSearch(){
        setAdd(true)
    }

    const [result, setResult] = useState([])
    const [displayResult, setDisplayResult] =useState(false)

 
    const [addedBooks, setAddedBooks] = useState([])
    console.log(addedBooks[0])
    
    const bookList = addedBooks.map((eachbook,index) => {
       console.log(eachbook)
        return(
            <div>
             {eachbook !== undefined && eachbook.length > 0 ? <h1>{eachbook.id}</h1> : <h1>{typeof eachbook}</h1>}
            </div>
        )
    })


    const [toggle, setToggle] = useState(false)
    // const [activePage, setActivePage] = useState(<Home />)

    function handleToggle(){
        setToggle(!toggle)
    }

    function handleClose(){
        setAdd(false)
    }
    return(
        <section id="my-library-section">
                <div onClick={handleToggle} className="library-togglebtn">
                    {toggle ? <FaTimes/> : <FaBars />}
                </div>
            <div  className={`library-section-side-navbar ${toggle ? 'open-sidenav' : ''}`}>
            {/* <div  className="library-section-side-navbar"> */}
                <div className="profile">
                    <img className="avatar" src={avatar} />
                    <p>Zhie Za</p>
                </div>
                <hr></hr>
                <nav >
                    {/* <ul className={`sidenav ${toggle ? 'open-sidenav' : ''}`}> */}
                    <ul className="sidenav">
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
                    {addedBooks !== undefined && addedBooks.length > 0 ? bookList : null}
                    <div className="add-new-book" onClick={handleSearch}>
                        <div className="add-icon-circle">
                            <FaPlus className="add-icon" />
                        </div>
                    </div>

                    {add && <div  className="library-search">
                        <FaTimes onClick={handleClose}/>
                    <SearchInput setResult={setResult} setDisplayResult={setDisplayResult}/>
                        {displayResult && <LibrarySearch 
                            result = {result}
                            setAddedBooks={setAddedBooks}
                        />}
                    </div>}
                </div>
            </div>
        </section>
    )
}

export default MyLibrary