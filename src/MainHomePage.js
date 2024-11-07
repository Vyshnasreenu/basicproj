import { Button, Drawer, List, ListItem, ListItemButton, SwipeableDrawer } from '@mui/material'
import React, { useState } from 'react'
import { RegisterForm } from './components/BasicProjectOnReact/RegistrationForms/RegisterForm'
import SimpleQuizApp from './components/BasicProjectOnReact/QuizApp/SimpleQuizApp'
import TemperatureControlApp from './components/BasicProjectOnReact/TemperatureControls/TemperatureControlApp'
import NavBar from './components/BasicProjectOnReact/BasicNavBar/NavBar'
import ContactList from './components/BasicProjectOnReact/ContactApp/ContactList'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Calculator from './components/BasicProjectOnReact/CalculatorApp/Calculator'
import AdventureHome from './components/BasicProjectOnReact/ResponsiveWeb/AdventureHome'
import TodoApp from './components/BasicProjectOnReact/TodoListApp/TodoApp'
import HighAuthorityView from './components/ExampleProj/HighAuthorityView'
import ActiveButtonClick from './components/Learning_React/ActiveButtonClick'

const MainHomePage = () => {
  const [flag, setFlag] = useState(false)

  const [open, setOpen] = useState(false)
  const [showApp, setShowApp] = useState()
  const Apps = [
    { name: "***", page: "" },
    // { name: "RegisterForm", path: "/Register", page: <RegisterForm /> },
    { name: "SimpleQuiz App", path: "/Quiz", page: <SimpleQuizApp /> },
    { name: "TemperatureControl App", path: "/TemperatureControlApp", page: <TemperatureControlApp /> },
    { name: "Calculator App", path: "/CurrenWeather", page: <Calculator /> },
    // { name: "NavBar", page: <NavBar /> },
    // { name: "ContactList App", page: <ContactList /> },
    { name: "Adventure Page", page: <AdventureHome /> },
    { name: "Todo App", page: <TodoApp /> },
    // { name: 'Attendance App', page: <ActiveButtonClick /> }
    // <TemperatureControlApp />,
    // <CurrenWeather />
  ]

  const clickhandler = (item) => {
    setOpen(true)
    setFlag(true)
    setShowApp(item.page)
  }

  return (
    <>
      <div className='row'
      // style={{ height: "100vh", overflow: "auto", position: "absolute", width: "100%" }}
      >
        <div className='col-lg-1 text-start'>
          <Button className="btn border m-2"  onClick={() => setOpen(false)} >
            <i class="fa-solid fa-bars fs-4"></i>
            
          </Button>
          <SwipeableDrawer open={!open} elevation={16}
            onClose={() => setOpen(true)}
          // variant='permanent'
          >

            <List>
              {Apps.map((item, KEY) => (
                <ListItem key={KEY}>
                  <ListItemButton className='active' onClick={() => clickhandler(item)}>
                    {item.name}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            {/* <button>close</button> */}

          </SwipeableDrawer>
        </div>
        <div className='col-lg-11'>
          <div className=''>
            {flag && showApp}
          </div>
        </div>
      </div>

      {/* {flag && } */}
    </>
  )
}

export default MainHomePage