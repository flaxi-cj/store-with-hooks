import { ADD_ITEM_TO_CART, ADD_ADDITIONAL_ITEM, REMOVE_ITEM_FROM_CART, CHANGE_ITEM_PROPERTY } from "./shoppingCartTypes"

const initialState = [];

const shoppingCartReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_ITEM_TO_CART: 
        console.log('state is', ...state)
        return [
            ...state,
            [{
                "id": action.params.id,
                "name": action.params.name,
                "brand": action.params.brand,
                "attributes": [action.params.attributes],
                "number": action.number,
                "prices": [action.params.prices],
                "gallery": action.params.gallery
            }]]

        // TODO(FP): complete the redux actions
        case ADD_ADDITIONAL_ITEM:
            return state.map((element) => {
                console.log('debug point', element[0])
                if (element[0].id === action.id) {
                    return [{
                        id: element[0].id,
                        name: element[0].name,
                        brand: element[0].brand,
                        attributes: element[0].attributes,
                        number: element[0].number + 1,
                        prices: element[0].prices,
                        gallery: element[0].gallery
                    }]
                }
                return [element];
            })

        case REMOVE_ITEM_FROM_CART:
            return state[0][0].number == 1 ? [] :
                state.map((element) => {
                    console.log('debug point', element[0])
                    if (element[0].id === action.id) {
                        if (element[0].number == 1) { return initialState; }
                        return [{
                            id: element[0].id,
                            name: element[0].name,
                            brand: element[0].brand,
                            attributes: element[0].attributes,
                            number: element[0].number - 1,
                            prices: element[0].prices,
                            gallery: element[0].gallery
                        }]
                    }
                    return [element];
                })

        case CHANGE_ITEM_PROPERTY: return [
            ...state,

        ]
        default: return [...state]
    }

}

export default shoppingCartReducer;