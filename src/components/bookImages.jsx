import React, { useState } from "react"
import BookInfoPopUp from "./bookImagePopUp"

function BookImage(props){
    
    const [popUp, setPopUp] = useState(false)
    const [bookInfo, setBookInfo] = useState()
    
    
    return(
        <div className="book-search-result-details">
            
            {props.result.map(element => {
                const bookImage = element.volumeInfo.imageLinks.thumbnail
                const originalBookdescription = element.volumeInfo.description 
                const truncatedBookDescription = originalBookdescription ? originalBookdescription.slice(0, 200) + '...': null;
                
                return(
                    <>
                        <div className="each-book-detail" key={element.id} onClick={()=>{setPopUp(true); setBookInfo(element); }}>
                            <img 
                                src={bookImage} 
                                className="book-image"
                            />
                            <div className="book-detail">
                                <h3>{element.volumeInfo.title}</h3>
                                <p className="book-author"><i>{element.volumeInfo.authors}</i></p>
                                <p className="book-description">{truncatedBookDescription}</p>
                                <div className="right-hand-details">
                                    {/* <p>Rating: <span>{element.volumeInfo.averageRating}</span></p> */}
                                    <p>Language: <span>{element.volumeInfo.language}</span></p>
                                    <p>Page Count: <span>{element.volumeInfo.pageCount}</span></p>
                                </div>
                            </div>
                        </div>

                    </>
                )
            })}
                        {popUp && <BookInfoPopUp popUp={setPopUp} bookInfo = {bookInfo} scrollValue = {props.scrollTopValue}/>}

        <p>Show all</p>
        </div>
    )
}

export default BookImage