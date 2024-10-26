import React, { useEffect, useState } from 'react'
import './weather.css'
import { AlertTitle, Button, Dialog, DialogTitle } from '@mui/material'
import { Cloud, CloudCircleSharp, CloudSyncOutlined } from '@mui/icons-material'
import { Alert } from 'bootstrap'
export const CurrenWeather = () => {

  const App_Key = "3b3c733a6e674fb8a11142243232706"

  const [weatherData, setWeatherdata] = useState()
  const [open, setOpen] = useState(false)
  const [isCheck, setIscheck] = useState(false)
  const [inputValue, setInputvalue] = useState("Paris")
  const [currenDate, setCurrentdate] = useState(new Date())


  const settingDate = () => {
    let day, date, month, year;
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    day = currenDate.getDay();
    date = currenDate.getDate();
    month = currenDate.getMonth();
    year = currenDate.getUTCFullYear();

    return (`${dayNames[day]} ${date} ${monthNames[month]} ${year}`)
  }
  const api = {
    // url: `http://api.weatherapi.com/v1/current.json?key=${App_Key}&q=${inputValue}`
  }

  useEffect(() => {
    getWeatherData()
  }, [])
  const getWeatherData = async () => {
    try {
      const data = await fetch(api.url)
      const jsondata = await data.json();
      console.log(jsondata)
      setWeatherdata(jsondata)
    } catch (error) {
      alert(error)
    }
  }

  const checkWeatherLocation = () => {
    getWeatherData();
    if (inputValue === "") {
      setIscheck(true)
    }
    else setIscheck(false)
  }

  const openDialog = () => {
    // try {
    //   if (inputValue === "") {
    //     setOpen(false)
    //   }
    //   else {
    //     setOpen(true)
    //   }
    // } catch (error) {
    //   console.log("first")
    // }
    setOpen(true)
  }

  const keyChanger = (event) => {
    if (event.key === "Enter") setOpen(true)
    setTimeout(() => {
      setOpen(false)
    }, 3000)
  }

  return (
    <div className='position-fixed w-100'>
      <div className="container-fluid weather-header row">
        <div className="col-sm-6">
          <div className="col-sm-3 p-3"><h2 className='text-warning'>WeatherInfo</h2>
          </div>
        </div>
        <div className="d-flex justify-content-center col-md-6">
          <div className='search-box m-3 col-7'>
            <input type="text"
              name={inputValue}
              value={inputValue}
              className='form-control m-auto'
              placeholder='Search Location'
              onChange={(e) => setInputvalue(e.target.value)}
            />
          </div>
          <div className="col-sm-3 m-3 text-start">
            <Button variant='contained' value="Check" color='info' onClick={checkWeatherLocation}>Check</Button>
          </div>
        </div>
      </div>
      <div className="weather-box">
        <div className="weather-data">
          <div className="weather-temp">
            {!isCheck ? (
              <div>
                {weatherData?.location?.name}
                <img src={weatherData?.current?.condition?.icon} alt='' />
              </div>
            ) : "Please search for Location!!"}
          </div>
          <div className='curren-date'>
            {settingDate()}
          </div>
          <div className="degree-in-city row d-flex justify-content-center">
            <div className='degrees col-sm-2' onClick={() => openDialog()} tabIndex={0} role='button' onKeyDown={(e) => keyChanger(e)}>
              {weatherData?.current?.temp_c} °C
            </div>
            {open ? (
              <div>
                <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
                  <DialogTitle >Weather Location Details</DialogTitle>
                  <div className='d-flex p-2 border row'>
                    <div className='col-sm-6 p-3'> <span className='default-style'>Condition</span> </div>
                    <div className='col-sm-6'> {weatherData?.current?.condition?.text} <img src={weatherData?.current?.condition?.icon} alt='' />
                    </div>
                  </div>
                  <div className='d-flex  p-3 border row'>
                    <div className='col-sm-6 '> <span className='default-style'>Country</span></div>
                    <div className='col-sm-6'> {weatherData?.location?.country || ""}</div>
                  </div>
                  <div className='d-flex p-3 border row'>
                    <div className='col-sm-6'> <span className='default-style'> LocalTime</span></div>
                    <div className='col-sm-6'> {weatherData?.location?.localtime || ""}</div>
                  </div>
                  <div className='d-flex p-3 border row'>
                    <div className='col-sm-6'> <span className='default-style'> Region</span> </div>
                    <div className='col-sm-6'> {weatherData?.location?.region || ""}</div>
                  </div>
                  <div className='d-flex p-3 border row'>
                    <div className='col-md-6'> <span className='default-style'>Latitude&Longitude</span> </div>
                    <div className='col-sm-6'> {weatherData?.location?.lat}/{weatherData?.location?.lon}</div>
                  </div>
                </Dialog>
              </div>
              // :null
            ) : ""}
          </div>
          <div className="fs-2 text-white m-5">
            Clouds
          </div>
        </div>
      </div>
    </div>
  )
}
