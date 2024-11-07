import React from 'react';
import { createRoot } from "react-dom/client"
// import { ReactDOM } from 'react'/;
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import $ from 'jquery';
// import Popper from 'popper.js';
import App from "./App";
import { createStoreHook, Provider } from 'react-redux';
import rootReducer from './Serivces/Reducers/index'
import { createStore } from 'redux';
const store = createStore(rootReducer)
createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App />
    </Provider>
)

