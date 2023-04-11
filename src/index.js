import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import {createGlobalState} from 'react-hooks-global-state';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

export const {useGlobalState, setGlobalState} = createGlobalState([]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
     <BrowserRouter>
        <App />
     </BrowserRouter>
  </Provider>
);
