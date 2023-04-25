import { connect } from "react-redux";
import Card from "../Card/Card";
import { orderCards, filterCards } from "../../redux/actions";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function Favorites(props) {
    const dispatch = useDispatch();
    const {myFavorites} = props;
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
            {/*<Link to='/home'><span>Home</span></Link>*/}
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
                    key={prop.id}
                    id={prop.id}
                    name={prop.name}
                    species={prop.species}
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

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
        addFav: state.addFav,
        delFav: state.delFav,
    }
}

export default connect(mapStateToProps, null)(Favorites);