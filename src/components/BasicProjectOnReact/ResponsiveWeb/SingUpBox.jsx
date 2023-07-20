import React from 'react'
import { CustomPopup } from '../../CustomPopup'

const SingUpBox = (props) => {
console.log(props)
  return (
    <div className=''>
      <CustomPopup
        open={props.open}
        onClose={props.onClose}
        title="SignUp form"
        component={
          <div>
          {/* <div className='m-auto'> */}
            {/* <h5>SignUp form</h5> */}
          {/* </div> */}
          {/* <hr /> */}
          <div className='row p-4'>
             <div className='col-sm-3'><label htmlFor="">* Name</label></div>
             <div className='col-sm-8'><input type='text' className='form-control'/></div>
          </div>
      </div>
        }
      />
    </div>
  )
}

export default SingUpBox