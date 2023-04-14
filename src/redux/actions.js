export const addFav = (character) => {

    return {
        type: 'ADD_FAVORITE',
        payload: character,
    }
};

export const delFav = (id) => {

    return {
        type: 'REMOVE_FAVORITE',
        payload: id,
    }
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