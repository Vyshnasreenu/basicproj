/* eslint-disable no-unused-vars */
import TodoApp from './components/BasicProjectOnReact/TodoListApp/TodoApp';
import NavBar from './components/BasicProjectOnReact/BasicNavBar/NavBar';
import HomePage from './components/BasicProjectOnReact/QuizApp/HomePage';
import SimpleQuizApp from './components/BasicProjectOnReact/QuizApp/SimpleQuizApp';
import { RegisterForm } from './components/BasicProjectOnReact/RegistrationForms/RegisterForm';
import './App.css';
import Filter from './components/BasicProjectOnReact/SearchFilter/Filter';
import Calculator from './components/BasicProjectOnReact/CalculatorApp/Calculator';
import ContactList from './components/BasicProjectOnReact/ContactApp/ContactList';
import { CurrenWeather } from './components/BasicProjectOnReact/WeatherApp/CurrenWeather';
import Navbar from './components/BasicProjectOnReact/ResponsiveWeb/Navbar';
import AdventureHome from './components/BasicProjectOnReact/ResponsiveWeb/AdventureHome';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpBox from './components/BasicProjectOnReact/ResponsiveWeb/SignUpBox';
import { CustomPopup } from './components/CustomPopup';
import TemperatureControlApp from './components/BasicProjectOnReact/TemperatureControls/TemperatureControlApp';
function App() {
  return (
    <div className="App">

      {/* <RegisterForm/> */}
      {/* <TemperatureControlApp/> */}
      {/* <Filter/> */}


      {/* <BrowserRouter>
<Routes>
  <Route path="/" element={<HomePage/>}></Route>
  <Route path="/quiz" element={<SimpleQuizApp/>}></Route>
</Routes>
</BrowserRouter> */}


      {/* <NavBar/> */}


      {/* <Calculator/> */}







      {/* <ContactList/> */}








      {/* <TodoApp /> */}


      {/* <RecipeApp/> */}

      <CurrenWeather/>

      {/* <BrowserRouter>
<Routes>
  <Route path='/' element={<AdventureHome/>}></Route>
</Routes>

</BrowserRouter> */}


      {/* <CustomPopup/> */}

    </div>
  );
}

export default App;
