/* eslint-disable no-unused-vars */
import TodoApp from './components/BasicProjectOnReact/TodoListApp/TodoApp';
import NavBar from './components/BasicProjectOnReact/BasicNavBar/NavBar';
import HomePage from './components/BasicProjectOnReact/QuizApp/HomePage';
import SimpleQuizApp from './components/BasicProjectOnReact/QuizApp/SimpleQuizApp';
import { RegisterForm } from './components/BasicProjectOnReact/RegistrationForms/RegisterForm';
import './App.css';
import Filter from './components/BasicProjectOnReact/SearchFilter/Filter';
import Calculator from './components/BasicProjectOnReact/CalculatorApp/Calculator';
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
 <Calculator/>

    </div>
  );
}

export default App;
