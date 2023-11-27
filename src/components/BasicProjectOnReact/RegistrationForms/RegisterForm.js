/* eslint-disable no-unreachable */
import { Button, Card, Input } from '@mui/material'
import React from 'react'
import { useState } from 'react'

export const RegisterForm = () => {
  const [userNames, setUserNames] = useState({
    firstName: "", secondName: "", Email: ""
  })

  const onChangeHandler = (event) => {
    setUserNames({
      ...userNames,
      [event.target.name]: event.target.value
    })
    //  console.log(event.target.name)
  }

  const onSubmitHandler = () => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (userNames.firstName === "" || userNames.firstName === null) {
      document.getElementById("fName").style.border = "1px solid red"
    }
    else {
      document.getElementById("fName").style.border = "1px solid black"
    }
    if (userNames.secondName === "" || userNames.secondName === null) {
      document.getElementById("Sname").style.border = "1px solid red"
    }
    else {
      document.getElementById("Sname").style.border = "1px solid black"

    }
    if (userNames.Email === "" || userNames.Email === null) {
      document.getElementById("email").style.border = "1px solid red"
    }
    else if (!regex.test(userNames.Email)) {
      alert("This is not a valid email format")

    }
    else if (userNames.firstName !== "" && userNames.secondName !== "" && userNames.Email !== "") {
      alert("Registered successfully!!!!")
      console.log(userNames)
      document.getElementById("email").style.border = "1px solid black"
    }
    else {
    }


    // else{
    //   alert("This is not a valid email format")
    // }
  }
  return (
    <div>
      <div style={{ height: "", width: "50%", margin: "%" }}>
        <Card className=''>
          <div>
            <h4>RegisterForm</h4>
            <hr />
          </div>
          <div className='row'>
            <div className='col-md-5'>
              <label id="">FirstName :</label>
            </div>
            <div className='col-md-6'>
              <input type='text' className='form-control' name='firstName' id="fName" value={userNames.firstName} onChange={(event) => onChangeHandler(event)} />
            </div>
          </div>
          <br />
          <div className='row'>
            <div className='col-md-5'>
              <label > SecondName :</label>
            </div>
            <div className='col-md-6'>  
              <input type='text' className='form-control' name='secondName'
              id="Sname" 
              value={userNames.secondName} 
              onChange={(event) => onChangeHandler(event)} />
            </div>
          </div>
          <br />
          <div className='row'>
            <div className='col-md-5'>
              <label > Email :</label>
            </div>
            <div className='col-md-6'>
              <input type='email' className='form-control' name='Email'id="email" value={userNames.Email} onChange={(event) => onChangeHandler(event)} />
            </div>
          </div>
          <br />
          <div>
            <Button variant='contained' color='success' onClick={() => onSubmitHandler()}>Submit</Button>
          </div>
        </Card>

      </div>
    </div>
  )
}
