import style from "../Card/Card.module.css";
import { Link } from "react-router-dom";
import { addFav, delFav } from "../../redux/actions";
import { connect } from "react-redux";
import {useState, useEffect} from 'react';

export function Card({id,name,species,gender,image,onClose,myFavorites,addFav,delFav}) {
   const [isFavorite, setIsFavorite] = useState(false);
   
   const personaje = {
      id: id,
      name: name,
      species: species,
      gender: gender,
      image: image,
   }
   const handleFavorite = () => {
      isFavorite ? delFav(id): addFav(personaje);
      setIsFavorite(!isFavorite);
   }
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFavorite(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.tarjeta}>
         <div className={style.navTarjeta}>
             { isFavorite ? 
                 ( <button onClick={handleFavorite}>❤️</button>) :
                 ( <button onClick={handleFavorite}>🤍</button>)
             }
             <h4 className={style.idTarjeta}>{id}</h4>
             <button className={style.botonCierre} 
                 onClick={()=>onClose(id)} >X</button>
             </div>
         <Link to={`/Details/${id}`}>   
            <div className={style.tituloContainer}>    
               <h2 className={style.titulo}>{name}</h2>
            </div>  
         </Link> 
         <div className={style.contenedorDetalles}>
             <h2 className={style.detalles}>{species}</h2>
         </div> 
         <h2 className={style.detalles}>{gender}</h2>
         <img className={style.imagen} src={image} alt="" /> 
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character))},
      delFav: (id) => {dispatch(delFav(id))}
   }
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);