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
        
        console.log(book)
        const apiKey = "AIzaSyA_KeICDW5MCHF3qAgsgtT-mcB0aWfQlpM"
        const url = "https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey
        console.log(url)
        try{
            const response = await axios.get(url)
            props.setResult(response.data.items)
            // console.log(result)
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