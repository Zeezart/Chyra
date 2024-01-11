import React, { useState, useEffect } from "react"
import heroImage from "../assets/hero-image.svg"
import axios from "axios"
import BookImage from "./bookImages"

function Hero(){

    const [book, setBook] = useState("")
    const [result, setResult] = useState([])

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
            setResult(response.data.items)
            console.log(result)
        }catch(error){
            console.error(error)
        }
    }

    const handleKeyDown = (event) =>{
        
        if (event.key === "Enter"){
            handleSearch()
        }
    }
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
        <section id="hero-section">
            <section className="hero-header">
                <div className="hero-left">
                    <p>Let’s make the best investments</p>
                    <h1>The <span>Chyra</span> eBook Library</h1>
                    <p className="small">Browse from the largest collection of ebooks<br/>
                    Read stories from anywhere, at anytime.</p>
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
    )
}
//AIzaSyA_KeICDW5MCHF3qAgsgtT-mcB0aWfQlpM
export default Hero