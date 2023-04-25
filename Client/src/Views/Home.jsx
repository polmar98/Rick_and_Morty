import React, { useEffect } from "react";
import Cards from '../components/Cards/Cards.jsx';
import NavBar from "../components/NavBar/NavBar.jsx";
import {useState} from "react"; 
import style from "../components/Cards/Cards.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMySelection, addSelection, delSelection } from "../redux/actions.js";
//const url ='https://rickandmortyapi.com/api/character/';
const url ='http://localhost:3001/rickandmorty/character/';  //url del nuevo servidor local

function Home (props) {
    const imagen = "../img/logo.png";
    const personajes = useSelector((state) => state.mySelection);
    const favorites = useSelector((state) => state.myFavorites);
    const [characters, setCharacters] = useState(personajes);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(() => {
       dispatch(getMySelection());
    }, []);

    const logout = () => {
      navigate('/');
   }
    const onSearch = (id) => {
       //revisamos si en ese estado ya fue cargado el id
       const buscado = characters.find(ele => ele.id===id);
       console.log("ID:"+id);
       if(buscado) {
           window.alert('Personaje ya se encuentra cargado');
           return;
       }
       fetch(`${url}${id}`)
          .then(res => res.json())
          .then((data) => {
              if(data.name){

                 setCharacters((oldChars) =>[...oldChars, data]);
                 dispatch(addSelection(data));
              } else {
                  window.alert('Id no encontrado');
              }
       });

    }
   

    const onClose = function(id) {
       setCharacters(characters => characters.filter(ele => ele.id!==id));
       dispatch(delSelection(id));
    }
  
    const onRandom = () =>{
      const numRandom = Math.floor(Math.random()*20);
      onSearch(numRandom);
    }

  
    return (
      <div className='App' >
        <NavBar onSearch={onSearch}  logout={logout}/>
        <div className={style.divBoton} >
            <div className={style.btnRandom} onClick={onRandom}></div>
        </div>
        <div>
           <Cards characters={characters} onClose={onClose} estado={1}/>
        </div>
        <hr />
        <h4 className="productor">By Paul Martinez N.</h4>
      </div>
    )
}


export default Home;
