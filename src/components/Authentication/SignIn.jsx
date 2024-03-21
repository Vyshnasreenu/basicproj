import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import auth from '../../firebase'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
let nav=useNavigate("")
    const [mail, setEmail] = useState("")
    const [passWord, setPassword] = useState("")

    const changeHandler = (event, name) => {
        if (name === "mail") {
            setEmail(event.target.value)
        }
        else setPassword(event.target.value)
    }

    const submithandler = (event) => {
        event.preventDefault()
        signInWithEmailAndPassword(auth, mail, passWord)
            .then((userCredential) => {
                console.log(userCredential)
                // nav('./auth')
            })
            .catch((error) => console.log(error))
    }

    return (
        <div>
            <div className='sign-up-container border'>
                <form onSubmit={submithandler}>
                    <div className="row p-2 m-5">
                        <div className='col-md-3'>
                            <label className='text-start'>Email :</label>
                        </div>
                        <div className='col-md-6'>
                            <input
                                className='form-control'
                                type='email'
                                name="name"
                                id="name"
                                value={mail}
                                onChange={(event) => changeHandler(event, "mail")}
                            />
                        </div>
                    </div>
                    <div className="row p-2 m-5">
                        <div className='col-md-3'>
                            <label className='text-start'>Password :</label>
                        </div>
                        <div className='col-md-6'>
                            <input
                                className='form-control'
                                type='password'
                                name="password"
                                id="password"
                                value={passWord}
                                onChange={(event) => changeHandler(event, "password")} />
                        </div>
                    </div>
                    <div className=''>
                        <button className='btn btn-success' type='submit'>SignIn</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn