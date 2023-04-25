import style from '../SearchBar/SearchBar.module.css';
import {useState} from "react";

export default function SearchBar(props) {
   const [id, setId] = useState("");

   const handleChange = (event) => {
       setId(event.target.value);
   }
   return (
      <div>
         <input className={style.input} type='search' onChange={handleChange} value={id} />
         <button className={style.boton}
             onClick={ ()=>{
                props.onSearch(id);
                setId('');
             }}
             >Agregar
         </button>
      </div>
   );
}
