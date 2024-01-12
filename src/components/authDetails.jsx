import React, { useState,useEffect } from 'react'
import { auth } from "../firebase"
import { onAuthStateChanged, signOut } from 'firebase/auth'

function AuthDetails(){

    const [authUser, setAuthUser] = useState(null)

    useEffect(()=>{
        const listen = onAuthStateChanged(auth, (user) => {
            if (user){
                setAuthUser(user)
            }else{
                setAuthUser(null)
            }
        })

        return() =>{
            listen()
        }
    },[])

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log("signout")
        }).catch(error => {
            console.log(error)
        })
    }
    return(
        <div>
            {authUser ? <><p>Signed In</p><button onClick={userSignOut}>Sign Out</button></> : <p>Signed Out</p>}
        </div>
    )
}

export default AuthDetails