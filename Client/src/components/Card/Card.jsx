import style from "../Card/Card.module.css";
import { Link } from "react-router-dom";
import { addFav, delFav } from "../../redux/actions";
import { connect, useSelector } from "react-redux";
import {useState, useEffect} from 'react';

export function Card({id,name,species,gender,image,status,origin,onClose,myFavorites,addFav,delFav}) {
   const [isFavorite, setIsFavorite] = useState(false);
   const userId = useSelector((state) => state.usuarioId);
   const favoritos = myFavorites;
   const personaje = {
      id,
      name,
      species,
      gender,
      image,
      status,
      origin,
   }
   const handleFavorite = () => {
      if(!isFavorite){
         //verificamos que no haya sido agregado
         const buscado = favoritos.find(ele => ele.id===personaje.id);
         if(buscado) {
            setIsFavorite(isFavorite);
            return;
         }
      }
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