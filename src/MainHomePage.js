import { Button, Drawer, List, ListItem, ListItemButton, SwipeableDrawer } from '@mui/material'
import React, { useEffect, useState } from 'react'
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
  const [activePage, setActivePage] = useState(0)
  const [open, setOpen] = useState(false)
  const [showApp, setShowApp] = useState(<SimpleQuizApp />)
  const Apps = [
    // { name: "***", page: "" },
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

  const clickhandler = (item, index) => {
    setOpen(true)
    setFlag(true)
    setShowApp(item.page)
    setActivePage(index)
  }



  return (
    <>
      <div className='row'
        style={{ height: "100vh", overflow: "", position: "absolute", width: "100%" }}
      >
        <div className='col-md-1 text-start'>
          <Button className="btn border m-2" onClick={() => setOpen(false)} >
            <i class="fa-solid fa-bars fs-4"></i>

          </Button>
          <SwipeableDrawer open={!open} elevation={16}
            onClose={() => setOpen(true)}
            variant='temporary'
            onOpen={() => setOpen(false)}
          >

            <List>
              <h4 className="text-center">NoBE</h4>
              {Apps.map((item, KEY) => (
                <ListItem key={KEY}>
                  <ListItemButton
                    className='active'
                    onClick={() => clickhandler(item, KEY)}
                    selected={activePage === KEY}
                  >
                    {item.name}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            {/* <button>close</button> */}

          </SwipeableDrawer>
        </div>
        <div className='col-md-11 text-center'>
          <div className='ml-3'>
            {(flag || activePage === 0) && showApp}
          </div>
        </div>
      </div>

      {/* {flag && } */}
    </>
  )
}

export default MainHomePage