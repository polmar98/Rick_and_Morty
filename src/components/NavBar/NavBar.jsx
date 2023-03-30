import SearchBar from "../SearchBar/SearchBar";
import style from "../NavBar/NavBar.module.css";
import { NavLink } from "react-router-dom";


export default function NavBar(props) {
     return (
        <div className={style.Barra}>
            <NavLink to="/Home">
                <h3 className={style.titulo}>Rick and Morty</h3> 
            </NavLink>
            <ul className={style.Menu}>
                <NavLink to="/"><li className={style.itemsMenu}>Home</li></NavLink>
                <NavLink to="/home"><li className={style.itemsMenu}>Cards</li></NavLink>
                <NavLink to="/About"><li className={style.itemsMenu}>About</li></NavLink>
            </ul>
            <div className={style.searchbarContainer}>
                 <SearchBar onSearch={props.onSearch} />
            </div>
 
        </div>
    )
}