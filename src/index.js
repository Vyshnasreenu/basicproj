import React from 'react';
import {createRoot} from "react-dom/client"
// import { ReactDOM } from 'react'/;
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import $ from 'jquery';
// import Popper from 'popper.js';
import App from "./App";

createRoot(document.getElementById("root")).render(<App/>)

