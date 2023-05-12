const initialState = { 
    myFavorites: [],
    allCharacters: [],
    mySelection: [],
};

const reducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case 'ADD_FAVORITE':
            let copiaFav= state.myFavorites;
            let copiaAll= state.allCharacters;
            copiaFav.push(payload);
            copiaAll.push(payload);
            return {...state, myFavorites: copiaFav, allCharacters: copiaAll};
//              return { ...state, myFavorites: payload, allCharacters: payload };

        case 'REMOVE_FAVORITE':
            //let copia2 = state.myFavorites.filter((char) => {
            //   return char.id !== Number(payload);
            //})
            //return {...state, myFavorites: copia2};
            return { ...state, myFavorites: payload };
        case 'FILTER':
            let copia9 = [...state.allCharacters];
            if(payload === 'ALL') {
                return {...state, myFavorites: copia9};
            } else {
                let filtro = [...state.allCharacters].filter((char) => {
                    return char.gender === payload;
            })
                return {...state, myFavorites: filtro};
            }
        case 'ORDER':
            let orden = [...state.myFavorites];
            let orderChars = orden.sort((a,b) => {
                if(a.id > b.id) {
                    return payload === 'Ascendente' ? 1 : -1
                } else if (a.id < b.id) {
                    return payload === 'Descendente' ? 1 : -1
                } else return 0;
            }) 
            return {...state, myFavorites: orderChars};
        case 'ADD_SELECTION':
            let copia5= state.mySelection;
            copia5.push(payload);
            return {...state, mySelection: copia5};   
        case 'GET_MYSELECTION':
            return {...state};  
        case 'DEL_MYSELECTION':
            let copia6 = state.mySelection.filter((char) => {
                return char.id !== Number(payload);
             })
             return {...state, mySelection: copia6};                  
        default:
            return {...state};        
    }
}

export default reducer;