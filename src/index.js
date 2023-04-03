import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import {createGlobalState} from 'react-hooks-global-state';
import './index.css';
//import "bootstrap/dist/css/bootstrap.min.css";
import App from './App'

export const {useGlobalState, setGlobalState} = createGlobalState([]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
     <App />
  </BrowserRouter>
);
