import React, { useState } from "react"
import { FaPlus } from "react-icons/fa"

function LibrarySearch(props){

    const [bookToAddID, setBookToAddID] = useState()

    function handleAddBook(elementid){
        setBookToAddID(elementid)
        props.setAddedBooks(prevAdded => {
            return([
                ...prevAdded, bookToAddID
            ])
        })
    }
    
    return(
        <div style={{display:"flex",flexDirection:"column",padding:"1rem", gap:"1rem", border:"1px solid gray", marginTop:"1rem", maxHeight:"50vh",overflowY:"auto", backgroundColor:"#fff"}} >
            
            {props.result.map(element => {
                const bookImage = element?.volumeInfo?.imageLinks?.thumbnail
                const elementid = element
                return(
                    <>
                        <div key={elementid.id} className="library-search-each-book" style={{display:"flex", flexDirection:"row", alignItems:"center", gap:"1rem", padding:"1rem", borderRadius:"5px", width:"100%"}}>
                            <img 
                                src={bookImage} 
                                style={{width:"60px", borderRadius:"5px"}}
                            />
                            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", width:"100%"}}>
                                <div>
                                    <p >{element.volumeInfo.title}</p>
                                    <p><i>{element.volumeInfo.authors}</i></p>  
                                </div>
                    
                                <FaPlus id="add"style={{float:"right", color:"#FF630B"}} onClick={()=>handleAddBook(elementid)}/>
                            </div>

                        </div>

                    </>
                )
            })}
        </div>
    )

}
export default LibrarySearch