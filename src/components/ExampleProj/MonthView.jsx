import React, { useEffect, useState } from 'react'
import CustomHighView from './CustomHighView';
import Main from '../Main';

const MonthView = () => {
  const daysInWeek = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]

  const [state, setState] = useState({
    daysInMonth: [],
    startDayOfMonth: [],
    noOfdaysInMonth: [],
  })
  const date = new Date()
  const year = date.getFullYear();
  const month = date.getMonth();

  useEffect(() => {
    CalculatingMonthInDays(year, month)
  }, [])

  const CalculatingMonthInDays = (year, month) => {

    const newState = { ...state }

    const startDayOfMonth = new Date(year, month - 1, 0).getDay() //startdayofmonth (EG: Mon or tue) we get number
    const indexOfStartDay = daysInWeek.findIndex(item => item === daysInWeek[startDayOfMonth])  // Finding the index of day in week( daysInWeek array)    
    const lastDayOfMonth = new Date(year, month, 0).getDate(); // Calculating the lastdate of the month

    newState.startDayOfMonth = Main.CalculatingDays(daysInWeek, indexOfStartDay) ///  Calculating which day start the month and we are pushing in different Days array...

    newState.noOfdaysInMonth = Main.CountDays(lastDayOfMonth)


    const noOfWeeksInMonth = parseInt(lastDayOfMonth / 7);   //Calucating total weeks in mobth
    const remainingDays = lastDayOfMonth % 7; // remaining days in month

    newState.daysInMonth = Main.CalculatingdaysInMonth(noOfWeeksInMonth, remainingDays, newState.startDayOfMonth)

    setState({ ...newState })

  }




  return (
    <div>
      <CustomHighView daysInMonth={state.daysInMonth} noOfdaysInMonth={state.noOfdaysInMonth} />
    </div>
  )
}

export default MonthView


