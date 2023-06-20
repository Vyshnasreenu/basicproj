/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react'

const Filter = () => {
  const [name,setName]=useState("")
  let Usernames=["sreenu","ramu","seeta","vaishu","rajesh","mithin","Mahesh"]
const [selected,setSelected]=useState(true)


  const handleClick=(event,item)=>{
    setName(item)
    setSelected(false)
  //  Usernames=[];
  // setUsername([])
   }
  let SearchName=document.getElementById("name")?.value
  return (
    <div className='container'>
       <div className=' m-4'>
       <input type="text" 
       id="name"
       className='form-control'
       style={{width:"50%"}}
       value={name}
       onChange={(e)=>{setName(e.target.value)
       setSelected(true)
      }}
       />
            {Usernames.map((item)=>{
           if(item.includes(SearchName)){
               return(
                <div style={{width:"50%"}} className='border'>
                <div className=''>
                <a href='/' 
                 style={{textDecoration:"none",
                 color:"black",
                 padding:"4px",
                 fontSize:"17px",display:"flex"}}
               onClick={(event)=>handleClick(event,item)}
                 >
                {item}
                </a>
                </div>              
        </div>
            )
           }
        })}
  
        </div>
    </div>
  )
}
 
export default Filter