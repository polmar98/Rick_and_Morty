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