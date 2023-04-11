const initialState = { myFavorites: []};

const reducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case 'ADD_FAVORITE':
            let copia1= state.myFavorites;
            copia1.push(payload);
            return {...state, myFavorites: copia1};
        case 'REMOVE_FAVORITE':
            let copia2 = state.myFavorites.filter((char) => {
               return char.id !== Number(payload);
            })
            return {...state, myFavorites: copia2};
        default:
            return {...state};        
    }
}

export default reducer;