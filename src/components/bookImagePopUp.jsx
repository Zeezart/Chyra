import React from "react"
import {FaTimes} from "react-icons/fa"

function BookInfoPopUp(props){
    const topValue = props.scrollValue + 50
    console.log("scrollValue: " + props.scrollValue + "and topValue: " + topValue )
    const styles = {    
        top: "calc(topValue+'px')",
        // backgroundColor: "#FFF",
        // boxShadow: "10px 10px 20px 0px rgba(0, 0, 0, 0.5)",
        // margin: "1rem",
        // padding: "1rem 2rem",
        // position: "absolute",
        // maxHeight: "50vh",
        // overflowY: "auto"
    } 
    return(
        <div className="book-info-popUp" key={props.bookInfo.id} style={styles}>
            {/* <img 
                src={bookImage} 
                className="book-image"
            /> */}
            <div className="book-detail">
                <h3 style={{display:"inline"}}>{props.bookInfo.volumeInfo.title}</h3>
                <FaTimes style={{float: "right"}} onClick={() => {props.popUp(false)}}/>
                <p className="book-author"><i>{props.bookInfo.volumeInfo.authors}</i></p>
                <p className="book-description">{props.bookInfo.volumeInfo.description}</p>
                <div className="right-hand-details">
                    <p style={{textDecoration: "underline", color: "blue"}}>Book link: {props.bookInfo.volumeInfo.previewLink}</p>
                    <p>Language: <span>{props.bookInfo.volumeInfo.language}</span></p>
                    <p>Page Count: <span>{props.bookInfo.volumeInfo.pageCount}</span></p>
                </div>
            </div>
        </div>
    )
}

export default BookInfoPopUp