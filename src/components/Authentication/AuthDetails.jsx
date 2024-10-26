import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import auth from '../../firebase'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const AuthDetails = () => {
    const [authUser, setAuthUser] = useState("")
    let nav = useNavigate()

    useEffect(() => {
        const listner = onAuthStateChanged(auth, (listen) => {
            if (listen) {
                setAuthUser(listen)
            }
            else {
                setAuthUser("")
            }
        })
    }, [])
    console.log(authUser)

    const userSignOut = () => {
        console.log("first")
        signOut(auth).then(() => console.log("SignUp successfully/////.....")).catch((err) => console.log(err))
        nav("/")
    }
    return (
        <div>
            {authUser ? <>Signed in
                <button className='btn btn-info' onClick={userSignOut}>SignOut</button>
            </> : <>Signed out</>}
        </div>
    )
}

export default AuthDetails