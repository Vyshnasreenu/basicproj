/* eslint-disable no-unreachable */
import { Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'

export const RegisterForm = () => {
  const [userNames,setUserNames]=useState({
     firstName:"", secondName:"",Email:""
  })

  const onChangeHandler=(event)=>{
     setUserNames({
       ...userNames,
       [event.target.name]:event.target.value
     })
    //  console.log(event.target.name)
  }

  const onSubmitHandler=()=>{
    const regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(userNames.firstName==="" || userNames.firstName===null){
      document.getElementById("fName").style.color="red"
      }
      else{
      document.getElementById("fName").style.color="black"
      }
      if(userNames.secondName===""|| userNames.secondName===null){
        document.getElementById("Sname").style.color="red"
      }
      else{
        document.getElementById("Sname").style.color="black"
        
      }
      if(userNames.Email===""|| userNames.Email===null){
        document.getElementById("email").style.color="red"
      }
      else if(!regex.test(userNames.Email)){
        alert("This is not a valid email format")
      
        document.getElementById("email").style.color="black"
      }
     else if(userNames.firstName!=="" && userNames.secondName!=="" && userNames.Email!=="" ){
        alert("Registered successfully!!!!")
        console.log(userNames)
      }


      // else{
      //   alert("This is not a valid email format")
      // }
  }
  return (
    <div>
        <div style={{height:"500px",width:"50%",margin:"10%"}}>
             <div className='border w-100 '>
                <div>
                    <label>RegisterForm</label>
                    <hr/>
                </div>
                <div className='row'>
                  <div className='col-md-5'>
                    <label id="fName">FirstName :</label>
                  </div>
                  <div className='col-md-6'>
                   <input type='text' className='form-control' name='firstName' value={userNames.firstName}  onChange={(event)=>onChangeHandler(event)}/>
                  </div>
                </div>
                <br/>
                <div className='row'>
                      <div className='col-md-5'>
                        <label id="Sname"> SecondName :</label>
                      </div>
                      <div className='col-md-6'>
                   <input type='text'  className='form-control' name='secondName' value={userNames.secondName} onChange={(event)=>onChangeHandler(event)}/>
                      </div>
                </div>
                <br/>
                <div className='row'>
                      <div className='col-md-5'>
                        <label id="email"> Email :</label>
                      </div>
                      <div className='col-md-6'>
                   <input type='email' className='form-control' name='Email' value={userNames.Email} onChange={(event)=>onChangeHandler(event)}/>
                      </div>
                </div>
                <br/>
                <div>
                    <Button variant='contained' color='success' onClick={()=>onSubmitHandler()}>Submit</Button>
                </div>
             </div>
        </div>
    </div>
  )
}
