import { ADD_ITEM_TO_CART, ADD_ADDITIONAL_ITEM, REMOVE_ITEM_FROM_CART, CHANGE_ITEM_PROPERTY } from "./shoppingCartTypes"

const initialState = [];

const shoppingCartReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_ITEM_TO_CART: return [
            ...state,
            [{
                id: action.params.id,
                name: action.params.name,
                brand: action.params.brand,
                attributes: [action.params.attributes],
                number: action.number,
                prices: [action.params.prices],
                gallery: action.params.gallery
            }]]


        case ADD_ADDITIONAL_ITEM: return {
            ...state,

        }
        case REMOVE_ITEM_FROM_CART: return {
            ...state,

        }
        case CHANGE_ITEM_PROPERTY: return {
            ...state,

        }
        default: return state
    }

}

export default shoppingCartReducer;