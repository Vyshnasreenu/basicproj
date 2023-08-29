import React, { useState } from 'react'
import { CustomPopup } from '../../CustomPopup'
import { RegisterForm } from '../RegistrationForms/RegisterForm'
import { Button } from '@mui/material'

const SingUpBox = (props) => {
const [login,setLogin]=useState(false)

  return (
    <div className=''>
        <CustomPopup
        open={props.open}
        onClick={props.onClick}
        title="SignUp"
        // active="active"
        component={
          <div>
          <div className='row'>
            <div className='col-sm-12'>
            <input type='text' className='form-control' placeholder='Name'/>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-sm-12'>
            <input type='text' className='form-control ' placeholder='Password'/>
            </div>
          </div>
          <div className='row mt-3'>
            <div className='col-sm-12'>
            <input type='text' className='form-control ' placeholder='Confirm Password'/>
            </div>
          </div>
          <div className='row mt-3'>
            <Button variant='contained'>SignUp</Button>
          </div>
          <div>
            <p>Already have an account? <Button className='btn btn-link ' onClick={()=>setLogin(true)}>Login</Button></p>
          </div>
          <legend>or</legend>
          <div className='row bg-primary face-goog-parent' tabIndex={0}>
             <div className='col-1 mt-1 face-goog'><i class="fa-brands fa-facebook"></i></div>
  <div className='col mt-1 face-goog'>Login with facebook</div>
          </div>
          <div className='row mt-3 bg-info face-goog-parent' tabIndex={0}>
            <div className='col-1 mt-1'><i className='fa fa-google'/></div>
            <div className='col mt-1 face-goog'> Login with Google</div>
          </div>
      </div>
        }
      />
      
    </div>
  )
}

export default SingUpBox