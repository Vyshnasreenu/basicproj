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
import RecipeApp from './components/RecipeProj/RecipeApp';
import { CurrenWeather } from './components/BasicProjectOnReact/WeatherApp/CurrenWeather';
function App() {
  return (
    <div className="App">
  
{/* <RegisterForm/> */}
{/* <TemperatureControlApp/> */}
{/* <Filter/> */}
{/* <SimpleQuizApp/> */}


{/* <BrowserRouter>
<Routes>
  <Route path="/" element={<HomePage/>}></Route>
  <Route path="/quiz" element={<SimpleQuizApp/>}></Route>
</Routes>
</BrowserRouter> */}


{/* <NavBar/> */}
    {/* <TodoApp/> */}
 {/* <Calculator/> */}

 {/* <ContactList/> */}

{/* <RecipeApp/> */}

<CurrenWeather/>
    </div>
  );
}

export default App;
