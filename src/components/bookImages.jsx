import React from "react"

function BookImage(props){
    
    return(
        <div className="book-search-result-details">
            
            {props.result.map(element => {
                const bookImage = element.volumeInfo.imageLinks.thumbnail
                const originalBookdescription = element.volumeInfo.description 
                const truncatedBookDescription = originalBookdescription.substring(0, 200) + '...';
                
                return(
                    <div className="each-book-detail" key={element.id}>
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
                )
            })}
        </div>
    )
}

export default BookImage