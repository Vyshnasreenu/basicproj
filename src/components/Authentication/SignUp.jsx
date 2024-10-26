import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import auth from '../../firebase'
import { Link, useNavigate } from 'react-router-dom'
const SignUp = () => {
    let nav = useNavigate("");
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
        createUserWithEmailAndPassword(auth, mail, passWord)
            .then((userCredential) => {
                console.log(userCredential)
                nav('./auth')
            })
            .catch((error) => {
                alert("Already user sigined with this email..")
                setEmail("")
                setPassword("")
                console.log(error)
            })
    }

    return (
        <div>
            <div className='sign-up-container border'>
                <h4>Create an account</h4>
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
                        <button className='btn btn-success' type='submit'>SignUp</button>
                        <Link to={'./signIn'} className='btn btn-success'>SignIn</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp