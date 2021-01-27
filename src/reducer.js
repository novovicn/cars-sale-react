const initialState = {
    user: null,
    car:{},
    searchPriceLow: 0,
    searchPriceHigh: 99999,
    searchBrand: '',
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_USER':
            console.log(action.user);
            return{
                ...state,
                user: action.user
            }
        case 'REMOVE_USER':
            return{
                ...state,
                user: null
            }    
        case 'SET_CAR':
            return{
                ...state,
                car: action.car
            }    
        case 'SEARCH_LOW_PRICE':
            console.log("LOW", action.price)
            return{
                ...state,
                searchPriceLow: action.price,
            }
        case 'SEARCH_HIGH_PRICE':
            console.log("HIGH", action.price)
            return{
                ...state,
                searchPriceHigh: action.price,
            }
        case 'SEARCH_BRAND':
            return{
                ...state,
                searchBrand: action.brand,
                filtered:true
            }

        default: 
            return state;    
    }
}

export default reducer