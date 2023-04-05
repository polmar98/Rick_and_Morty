import React from "react";
import Cards from '../components/Cards/Cards.jsx';
import {useState} from "react"; 
import style from "../components/Cards/Cards.module.css";
const url ='https://rickandmortyapi.com/api/character/';


function Home () {
    const imagen = "../img/logo.png";
    const [characters, setCharacters] = useState([]);
    
    
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
 
                 setCharacters((oldChars) =>[...oldChars, data]);
              } else {
                  window.alert('Id no encontrado');
              }
       });

    }
   

    const onClose = function(id) {
       setCharacters(characters => characters.filter(ele => ele.id!==id));

    }
  
    const onRandom = () =>{
      const numRandom = Math.floor(Math.random()*826);
      onSearch(numRandom);
    }

  
    return (
      <div className='App' >
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