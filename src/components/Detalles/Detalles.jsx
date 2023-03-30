import style from "../Detalles/Detalles.module.css";
const Detalles = function({id,name,species,gender,image,status,type,created,origin}) {
    const Ninguna = ()=>{};
    const origen = origin.name;
    return (
        <div className={style.divTarjeta}>
            <h1 className={style.titulo}>{name}</h1>
            <h3 className={style.subtitulo}>Id : {id}</h3>
            <h3 className={style.subtitulo}>Species : {species}</h3>
            <h3 className={style.subtitulo}>Gender : {gender}</h3>    
            <h3 className={style.subtitulo}>Status : {status}</h3>  
            <h3 className={style.subtitulo}>type : {type}</h3>
            <h4 className={style.creacion}>Origin: {origen}</h4> 
            <h4 className={style.creacion}>Created: {created}</h4> 
            <img src={image} alt="" className={style.imagen}/>   
        </div>
     )
}

export default Detalles