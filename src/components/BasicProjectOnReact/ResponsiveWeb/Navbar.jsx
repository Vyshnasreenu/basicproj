import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SingUpBox from './SingUpBox'
import { Button } from '@mui/material'
const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false)

  const onClose=()=>{
    setIsOpen(false)
  }
// const Loadingpage=()=>{
//    return(
//     <SingUpBox/>
//    )
//   }
  return (
    <div>
      <div>
        <SingUpBox open={isOpen} onClose={onClose}/>
      </div>
            <div className="container-fluid p-2 ">
            <div className="row">
             <div className='col-sm-6'><h2>#Adventure</h2></div>
              <div className="col-sm-6" id="myNavbar">
              <ul className="nav row">
              <li className='nav-item col-sm-3 p-2'>
                <a href=" #" className='nav-link active'>Home</a>
               </li>
               <li className='nav-item col-sm-3 p-2'>
                <a href="#"className='nav-link'>About</a>
               </li>
               <li className='nav-item col-sm-3 p-2'>
                <a href=" #" className='nav-link'>Services</a>
               </li>
               <li className='nav-item col-sm-3 p-2'>
                {/* <a href="" className='nav-link' onClick={()=>setIsOpen(true)}>SingUp</a> */}
                <Button variant='contained' onClick={()=>setIsOpen(true)}>SignUp</Button>
                {/* <Link to="./signup" className='nav-link' onClick={()=>Loadingpage()}>SingUp</Link> */}
               </li>
              </ul>
            </div>
            </div>
            </div>
        </div>
  )
}

export default Navbar