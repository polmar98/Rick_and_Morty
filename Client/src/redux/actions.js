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
}