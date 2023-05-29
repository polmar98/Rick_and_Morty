//import { connect } from "react-redux";
import Card from "../Card/Card";
import { orderCards, filterCards } from "../../redux/actions";
//import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
const endpoint = 'http://localhost:3001/rickandmorty/fav';
var myFavorites = [];

const Favorites = () => {
    const dispatch = useDispatch();
  

    axios.get(endpoint)
    .then((data) => {myFavorites = data.data})
    .catch((error)=> {console.log(error.message)});        
 
    const Ninguna = () => {};
    const handlerFilter = (event) => {
        let genero = event.target.value;
        dispatch(filterCards(genero));
    }

    const handlerOrder = (event) => {
        let orden = event.target.value;
        dispatch(orderCards(orden));
    }


    return (
        <div>
            <div>
            <select name="orden" onChange= {handlerOrder}>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select name="genero" onChange= {handlerFilter}>
                <option value="ALL">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>
            </div>
            {myFavorites.length && myFavorites.map((prop) =>{
                return (
                <Card
                    key={prop.idApi}
                    id={prop.idApi}
                    name={prop.name}
                    species={prop.species}
                    status={prop.status}
                    gender={prop.gender}
                    image={prop.image}
                    onClose={Ninguna}
                    myFavorites={myFavorites}
                 />
                )
            })}
        </div>
    )
 
}

export default Favorites;
/*
const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
        addFav: state.addFav,
        delFav: state.delFav,
    }
}

export default connect(mapStateToProps, null)(Favorites);
*/