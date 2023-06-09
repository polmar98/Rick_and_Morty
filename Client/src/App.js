import React from 'react';
import './App.css';
import Landing from './Views/Landing';
import Home from './Views/Home';
import About from './Views/About';
import Details from './Views/Details';
import All from './Views/All';
import Favorites from './components/Favorites/Favorites';
import NavBar from './components/NavBar/NavBar';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { asignaUser } from './redux/actions';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
const url ='http://localhost:3001/rickandmorty/character/';  //url del nuevo servidor local

function App () {
   const location  = useLocation();
   const [access, setAccess] = useState(false);
   const [usuarioId, setUsuarioId] = useState(0);
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const dispatch = useDispatch();
//   ANTIGUA FUNCION DE LOGIN
//   -------------------------------------------------------------------------
//   function login(userData) {
//      if (userData.password === userClave && userData.email === userEmail) {
//         setAccess(true);
//         navigate('/home');
//      }
//   }
//   -------------------------------------------------------------------------

  function login(userData) {
     const { email, password } = userData;

     const URL = 'http://localhost:3001/rickandmorty/login/';
     axios(URL + `?email=${email}&password=${password}`)
     .then(({ data }) => {
        const { access, userId } = data;
        setAccess(access);
        setUsuarioId(userId);
        console.log("Ingreso:",userId);
        dispatch(asignaUser(userId));
        access && navigate('/home');
     })
     .catch(err => console.log(err.message));
  }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const logout = () => {
      setAccess(false);
      navigate('/');
   }

   const onSearch = (id) => {
      //revisamos si en ese estado ya fue cargado el id
      const buscado = characters.find(ele => ele.id==id);
      if(buscado) {
          window.alert('Personaje ya se encuentra cargado');
          return;
      }
       fetch(`${url}${id}`)
         .then(res => res.json())
         .then((data) => {
             if(data.name){
                  setCharacters((oldChars)=>[...oldChars, data]);
             } else {
                 window.alert('Id no encontrado');
                 return;
             }
      });
      console.log(characters);
   }

   const onClose = function(id) {
      setCharacters(characters => characters.filter(ele => ele.id!==id));
   }

   return (
      <div className="App">
      {(location.pathname !== '/' && location.pathname !== '/Cards') && (
          <NavBar onSearch={onSearch} logout={logout}/>
      )}
      <Routes>
          <Route path="/Cards" element={<Home characters={characters} onClose={onClose} estado={1}/>} />
          <Route path="/About" element={<About/>} />
          <Route path='/Favorites' element={<Favorites/>} />
          <Route path="/All" element={<All/>} />
          <Route path="/" element={<Landing login={login}/>} />
          <Route path="/Details/:id" element={<Details/>} />
      </Routes>
      </div>

   )
}

export default App;

