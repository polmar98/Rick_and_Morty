import style from "../Card/Card.module.css";
import { Link } from "react-router-dom";

export default function Card({id,name,species,gender,image,onClose}) {

   
   return (
      <div className={style.tarjeta}>
         <div className={style.navTarjeta}>
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
