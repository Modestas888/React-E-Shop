const INITIAL_STATE = {
    products: []
};

function reducer(state = INITIAL STATE, { type, payload })  {
    switch (type) {
        case "SET_PRODUCTS"
        return { ...state,products: payload };
        default:
            return state;
        
    }
}

export default reducer;
