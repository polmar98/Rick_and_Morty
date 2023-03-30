import NavBar from "../components/NavBar/NavBar";
import { useParams } from "react-router-dom";
import Detalles from "../components/Detalles/Detalles";
import { useState } from "react";
import { useEffect } from "react";
const url ='https://rickandmortyapi.com/api/character/';



const Details = function() {
    const params = useParams();
    const [characters, setCharacters] = useState({});
    const Ninguna = ()=>{};

    /*
    fetch(`${url}${params.id}`)
       .then(res => res.json())
       .then((data) => {
           setCharacters(data);  
    }); */

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


    return (
       <div>
            <NavBar onSearch={Ninguna}/>
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