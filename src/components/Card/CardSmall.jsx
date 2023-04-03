import style from "../Card/CardSmall.module.css";
import { Link } from "react-router-dom";


export default function Card({id,name,species,gender,image,onClose}) {

   
   return (
      <div className={style.tarjeta}>
         <Link to={`/Details/${id}`}>  
             <div className={style.navTitulo}>
                  <h2 className={style.titulo}>{name}</h2>
             </div> 
         </Link> 
         <img className={style.imagen} src={image} alt="" /> 
         <h4 className={style.idTarjeta}>{id}</h4>
      </div>
   );
}
