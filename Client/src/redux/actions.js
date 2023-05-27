import axios from "axios";

/*
const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character)
       .then(({ data }) => {
          return dispatch({
             type: 'ADD_FAVORITE',
             payload: data,
          });
       });
    };
 };
*/
export const addFav =  (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav?idUser=1';
    try {
        return async (dispatch) => {
            let respons = await axios.post(endpoint, character) ;
            return dispatch({
                type: 'ADD_FAVORITE',
                payload: respons.data,
            });
        }
    } catch (error) {
        console.log(error.message);
    }
}

/*  ANTIGUA FUNCION ADDFAV
const addFav = (character) => {
    return {
        type: 'ADD_FAVORITE',
        payload: character,
    }
};
*/
// -----------------------------------------



 //  ANTIGUA FUNCION DELFAV
 //  --------------------------------
// const delFav = (id) => {
//    return {
//        type: 'REMOVE_FAVORITE',
//        payload: id,
//    }
//};
//  -----------------------------------

export const delFav =  (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
       await axios.delete(endpoint).then(({ data }) => {
          return dispatch({
             type: 'REMOVE_FAVORITE',
             payload: data,
       });
       });
    };
 };


export const filterCards = (gender) => {
    return {
        type: 'FILTER',
        payload: gender,
    }
}

export const orderCards = (orden) => {
    return {
        type: 'ORDER',
        payload: orden,
    }
}

export const addSelection = (character) => {
    return {
        type: 'ADD_SELECTION',
        payload: character,
    }
}

export const getMySelection = () => {
    return {
        type: 'GET_MYSELECTION',
        payload: '',
    }
}

export const delSelection = (id) => {
    return {
        type: 'DEL_MYSELECTION',
        payload: id,
    }
};

export const asignaUser = (id) => {
    return {
        type: 'ASIGNA_USER',
        payload: id,
    }
}
