const initialState = {
    user: null,
    car:{},
    searchPriceLow: 0,
    searchPriceHigh: 99999,
    searchBrand: ''
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
            console.log('object')
            return{
                ...state,
                searchPriceLow: action.price
            }
        case 'SEARCH_HIGH_PRICE':
            console.log('object')
            return{
                ...state,
                searchBrand: action.brand
            }
        case 'SEARCH_BRAND':
            return{
                ...state,
                searchPriceHigh: action.price
            }

        default: 
            return state;    
    }
}

export default reducer