import { Facebook } from '@mui/icons-material'
import { Button } from '@mui/material'
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import auth from '../../firebase'
export const Facebook_Auth = () => {

    const signInWithFacebook = async () => {
        const provider = new FacebookAuthProvider();
        console.log(provider)
        signInWithPopup(auth, provider)
            .then((userAuth) => console.log(userAuth)).catch((err) => console.log(err))
    }

    return (
        <div>
            <div style={{ margin: "40px" }}>
                <Button variant='contained' onClick={signInWithFacebook}>Login with Facebook</Button>
            </div>
        </div>
    )
}
