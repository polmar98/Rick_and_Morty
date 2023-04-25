import style from "../Detalles/Detalles.module.css";
import { useNavigate } from "react-router-dom";
const Detalles = function({id,name,species,gender,image,status,type,created,origin}) {
    const navigate = useNavigate() ;
    function navegar(){
        navigate('/home');
    }
    return (

         <div className={style.divTarjeta}>
             <div className={style.barraTitulo}>
                <h1 className={style.titulo}>{name}</h1>
                {/*<buttom className={style.botonVolver} onClick={navegar}>X</buttom>*/}
             </div>
             <h3 className={style.subtitulo}>Id : {id}</h3>
             <h3 className={style.subtitulo}>Species : {species}</h3>
             <h3 className={style.subtitulo}>Gender : {gender}</h3>    
             <h3 className={style.subtitulo}>Status : {status}</h3>  
             <h3 className={style.subtitulo}>type : {type}</h3>
             <h4 className={style.creacion}>Origin: {origin?.name}</h4>
             <h4 className={style.creacion}>Created: {created}</h4> 
             <img src={image} alt="" className={style.imagen}/>   
         </div>
     )
}

export default Detalles