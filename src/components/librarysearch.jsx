import React from "react"

function LibrarySearch(props){


    
    return(
        <div style={{display:"flex",flexDirection:"column",padding:"1rem", gap:"1rem", border:"1px solid gray", marginTop:"1rem", maxHeight:"50vh",overflowY:"auto"}} >
            
            {props.result.map(element => {
                const bookImage = element.volumeInfo.imageLinks.thumbnail
                return(
                    <>
                        <div className="library-search-each-book" style={{display:"flex", flexDirection:"row", alignItems:"center", gap:"1rem", padding:"1rem", borderRadius:"5px"}} key={element.id} onClick={()=>{setPopUp(true); setBookInfo(element); }}>
                            <img 
                                src={bookImage} 
                                style={{width:"60px", borderRadius:"5px"}}
                            />
                            <div >
                                <p >{element.volumeInfo.title}</p>
                                <p><i>{element.volumeInfo.authors}</i></p>
                            </div>
                        </div>

                    </>
                )
            })}
        </div>
    )

}
export default LibrarySearch