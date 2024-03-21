import { Button, Input } from 'antd'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import auth from '../../firebase'
const PhoneNumberAuth = () => {

    const [number, setNumber] = useState("")
    const [numberFlag, setNumberFlag] = useState(false)

    const [error, setError] = useState("")

    const reCaptcha = (number) => {
        const captcha = new RecaptchaVerifier(auth, 'recaptcha-container', {})
        captcha.render();
        return signInWithPhoneNumber(auth, number, captcha)
    }

    const getOtp = async () => {
        if (number === "" || number === undefined || number === null) return setError("Please enter valid phoneNumber")
        setError("")
        try {
            const response = await reCaptcha(number);
            console.log(response)
        } catch (err) {
            // setError(err)
            console.log(err)
        }
    }
    return (
        <div className='mt-5'>
            <Button color='red' onClick={() => setNumberFlag(true)}>
                Login With PhoneNumber
            </Button>
            {numberFlag && (
                <>
                    <div className='mt-2 container'>
                        <PhoneInput defaultCountry='IN' value={number} onChange={setNumber} />
                        <div id='recaptcha-container' className='mt-2' />
                        <label className='text-danger mt-2'>{error}</label>
                    </div>
                    <div className='d-flex justify-content-end container mt-3' style={{ gap: "4px" }}>
                        <Button style={{ background: "gray", color: "black" }} onClick={() => setNumberFlag(false)}>Cancel</Button>
                        <Button style={{ background: "green", color: "black" }} onClick={getOtp}>SendOTP</Button>
                    </div>
                </>
            )}
        </div>
    )
}

export default PhoneNumberAuth