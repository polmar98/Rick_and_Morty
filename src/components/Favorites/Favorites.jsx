import { connect } from "react-redux";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

function Favorites(props, onClose) {
    const {myFavorites} = props;
    return (
        <div>
            <Link to='/home'><span>Home</span></Link>
       
            {myFavorites.length && myFavorites.map((prop) =>{
                <Card
                    key={prop.id}
                    id={prop.id}
                    name={prop.name}
                    species={prop.species}
                    gender={prop.gender}
                    image={prop.image}
                    onClose={onClose}
                    myFavorites={myFavorites}
                 />
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