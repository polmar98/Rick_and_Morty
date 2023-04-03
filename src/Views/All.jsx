import React from "react";
import Cards from '../components/Cards/Cards.jsx';
import {useState, useEffect} from "react"; 
import NavBar from "../components/NavBar/NavBar.jsx";
const urlApi ='https://rickandmortyapi.com/api/character/';

const All = function() {
    const [characters, setCharacters] = useState([]);
    const [pagina, setPagina] = useState(1);

    const sgteClick = function() {
       if(pagina<42) {
          setPagina(pagina+1);
          getList(pagina, null);
       }
    }
    const antClick = function() {
      if(pagina>0) {
         setPagina(pagina-1);
         getList(pagina, null);
      }
   }
    const getList = (page, url) =>{
        let url_Conex =
           page === null
           ? url
           : `${urlApi}?page=${page}`;
        console.log("url :"+url_Conex);   
        fetch(url_Conex)
           .then((response) => response.json())
           .then((data) => {
               setCharacters(data.results);
        });
    }

    useEffect(() => {
       getList(pagina, null);
    }, []); 

    
    
    const Ninguna = ()=>{};
    return (
        <div>
           <div className='App' >
              <NavBar  onSearch = {Ninguna}/>   
           </div>
           <Cards characters={characters} onClose={Ninguna} estado={2} />
           <hr />
           <div>
               <button onClick={antClick}>Anterior</button>
               <button onClick={sgteClick}>Siguiente</button>
           </div>
           <h4 className="productor">By Paul Martinez N.</h4>
        </div>
    )
}

export default All;