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
import R10 from './components/ExamplDemoProj/R10';
import MonthView from './components/ExampleProj/MonthView';
import HighAuthorityView from './components/ExampleProj/HighAuthorityView';
import Demo from './components/ExamplDemoProj/Demo';
import Todos from './components/ExamplDemoProj/Todos';
import SignIn from './components/Authentication/SignIn';
import SignUp from './components/Authentication/SignUp';
import AuthDetails from './components/Authentication/AuthDetails';
import C from './components/ExamplDemoProj/C';
import C21 from './components/ExamplDemoProj/C21';
import C22 from './components/ExamplDemoProj/C22';
import MyContext from './components/ExamplDemoProj/MyContext';
import MyReducer from './components/UseReducer/MyReducer';
import NewFormReducer from './components/UseReducer/NewFormReducer';
import AddingItem_REDUX from './components/UseReducer/AddingItem_REDUX';
import PhoneNumberAuth from './components/Authentication/PhoneNumberAuth';
import { Facebook_Auth } from './components/Authentication/Facebook_Auth';
import ActiveButtonClick from './components/Learning_React/ActiveButtonClick';
import { demo } from './components/demo'
function App() {
  return (
    <div className="App">

      {/* <RegisterForm/> */}
      {/* <TemperatureControlApp/> */}
      {/* <Filter/> */}


      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/quiz" element={<SimpleQuizApp />}></Route>
        </Routes>
      </BrowserRouter> */}


      {/* <NavBar/> */}
      {/* <TodoApp /> */}
      {/* <Calculator /> */}

      {/* <ContactList /> */}

      {/* <RecipeApp/> */}

      {/* <CurrenWeather /> */}

      {/* <BrowserRouter>
<Routes>
  <Route path='/' element={<AdventureHome/>}></Route>
</Routes>

</BrowserRouter> */}


      {/* <ActiveButtonClick /> */}







      {/* <CustomPopup/> */}




      {/* AUTHENTICATION USING FIREBASE  */}

      {/* <SignIn /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp />}></Route>
          <Route path='/signIn' element={<SignIn />}></Route>
          <Route path='/auth' element={<AuthDetails />}></Route>
        </Routes>
      </BrowserRouter> */}
      {/* <SignUp /> */}
      {/* <AuthDetails /> */}
      {/* <PhoneNumberAuth /> */}

      {/* <Facebook_Auth /> */}



      {/* <demo /> */}


      {/* <C >
        <C21 />
        <C22 />
      </C> */}

      <MyReducer />
      {/* <AddingItem_REDUX /> */}

    </div>
  );
}

export default App;
