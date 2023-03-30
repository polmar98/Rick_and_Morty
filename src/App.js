import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './Views/Landing';
import Home from './Views/Home';
import About from './Views/About';
import Details from './Views/Details';
//import {useGlobalState, setGlobalState} from './index';

function App () {
   return (
      <div className="App">
      
      <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/" element={<Landing/>} />
          <Route path="/Details/:id" element={<Details/>} />
      </Routes>
      </div>

   )
}

export default App;
//export {useGlobalState, setGlobalState};
