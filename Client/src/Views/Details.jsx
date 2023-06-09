import NavBar from "../components/NavBar/NavBar";
import { useParams } from "react-router-dom";
import Detalles from "../components/Detalles/Detalles";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const url ='http://localhost:3001/rickandmorty/character/';  //url del nuevo servidor local


const Details = function() {
    const params = useParams();
    const [characters, setCharacters] = useState({});
    const Ninguna = ()=>{};

   
    useEffect(() => {
        fetch(`${url}${params.id}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacters(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacters({});
    }, [params.id]);
   
 
    const logout=()=>{};

    return (
        <div>
             <Detalles
                     id={characters.id}
                     name={characters.name}
                     species={characters.species}
                     gender={characters.gender}
                     image={characters.image}
                     status={characters.status}
                     type={characters.type}
                     origin={characters.origin}
                     created={characters.created}
             />        
        </div>
     )
}

export default Details;