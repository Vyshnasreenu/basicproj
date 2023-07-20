import { ClosedCaption, Delete, DeleteOutline } from '@mui/icons-material'
import React, { useState } from 'react'
export const CustomPopup = (props) => {
    console.log(props)
    const [show,setShow]=useState(false)
    console.log(show)

    const OnhandlerClick=()=>setShow(true)
  return (
    <div>
       {props.open!==show?(
        <div className='popup-overlay'>
        <div className='popup'>
           <div className='d-flex justify-content-between'>
           <h5>{props.title}</h5>
                <div className='text-danger' style={{cursor:'pointer'}} onClick={()=>OnhandlerClick()}>X</div>
           </div>
            <div className='border'>
                {props?.component}
            </div>
            </div>
         </div>
       ):""}
    </div>
  )
}
