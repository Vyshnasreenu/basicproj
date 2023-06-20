import React, { useState } from 'react'
import "./temperature.css"
import { Button } from '@mui/material'
const TemperatureControlApp = () => {
  const [temperature,setTemperature]=useState(10)
  const[temperatureColor,setTemperatureColor]=useState("cold")
  const increaseTemperature=(event)=>{
    console.log(event.target.value)
     if(event.target.value>=15){
      setTemperatureColor("hot")
     }
     setTemperature(temperature+1)
  }
  const decreaseTemperature=(event)=>{
    if(event.target.value<=15){
      setTemperatureColor("cold")
     }
    setTemperature(temperature-1);
  }
  return (
    <div>
        <div className="app-container">
        <div className="temperature-display-container">
            <div className={`temperature-dispaly ${temperatureColor}`}>
               {temperature}&deg;C
            </div>
            <div className="temperature-container p-4">
               <Button variant='contained' onClick={(event)=>increaseTemperature(event)} value={temperature}>+</Button>
               <Button variant='contained' onClick={decreaseTemperature} value={temperature}>-</Button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default TemperatureControlApp