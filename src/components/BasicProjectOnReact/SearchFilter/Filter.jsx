/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useRef, useState } from 'react'

const Filter = () => {
  const [name, setName] = useState("")
  let Usernames = ["Sreenu", "Ramu", "Seeta", "Vaishu", "Rajesh", "Mithin", "Mahesh"]
  const [selected, setSelected] = useState(true)

  const currentRef = useRef(null)

  const handleClick = (event, item) => {
    setName(item)
    setSelected(false)
    //  Usernames=[];
    // setUsername([])
  }

  const handleClickOutSide = (event) => {
    if (!currentRef?.current?.contains(event.target)) {
      setSelected(false);
    }
  }


  window.addEventListener("mousedown", handleClickOutSide)


  let SearchName = document.getElementById("name")?.value
  return (
    <div className='m-4'>
      <h5 style={{ fontFamily: "monospace",textAlign:"left" }}>Select Names </h5>
      <div className='row'>
        <style>
          {`.hover-overlay:hover{
            background:#8080801a;
        }`}
        </style>
        <div className='col-md-6'>
          <input type="text"
            id="name"
            className='form-control'
            style={{ width: "" }}
            value={name}
            autoComplete='off'
            onChange={(e) => {
              setName(e.target.value)
              setSelected(true)
            }}
          />
          {selected && (
            <div className='bg-white border' style={{ boxShadow: "3px 3px 10px -5px", width: "", borderRadius: "5px" }} ref={currentRef}>
              {Usernames.map((item) => {
                if (item?.toLocaleUpperCase().includes(SearchName?.toLocaleUpperCase())) {
                  return (
                    <div>
                      <div className=''>
                        <a href='/'
                          style={{
                            textDecoration: "none",
                            color: "black",
                            padding: "4px",
                            fontSize: "17px", display: "flex",
                            fontFamily:"auto"
                          }}
                          className='hover-overlay'
                          onClick={(event) => handleClick(event, item)}
                        >
                          {item}
                        </a>
                      </div>
                    </div>
                  )
                }
              })}
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default Filter