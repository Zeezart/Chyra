import React, {useState,useEffect} from 'react'
import axios from "axios"


function SearchInput(props){

    const [book, setBook] = useState("")
    // const [result, setResult] = useState([])

    const handleChange = (e) => {
        const bookTyped = e.target.value
        const bookSearch = bookTyped.replace(/\s/g,"")
        setBook(bookSearch)
    }

    const handleSearch = async(e) => {
        const apiKey = import.meta.env.VITE_REACT_APP_SEARCH_API_KEY
        const url = "https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey
        try{
            const response = await axios.get(url)
            props.setResult(response.data.items)
            // console.log(result)
            props.setDisplayResult(true)
        }catch(error){
            console.error(error)
        }
    }

    const handleKeyDown = (event) =>{
        
        if (event.key === "Enter"){
            handleSearch()
        }
    }

    return(
        <div className="search-input">
            <input 
            type="text" 
            name="search" 
            placeholder="Search by book title, author name"
            onChange={handleChange}   
            onKeyDown={handleKeyDown}
            />
            <button className="primarybtn" onClick={handleSearch} >Search</button>
        </div>
    )
}

export default SearchInput