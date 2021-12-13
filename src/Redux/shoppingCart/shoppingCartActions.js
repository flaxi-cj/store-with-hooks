import { ADD_ITEM_TO_CART, ADD_ADDITIONAL_ITEM, REMOVE_ITEM_FROM_CART, CHANGE_ITEM_PROPERTY } from "./shoppingCartTypes"

export const addItemToCart = (params) => {

    return {
        type: ADD_ITEM_TO_CART,
        params: params,
        number: 1
    }
}

export const addAdditionalItemToCart = (params) => {
    return {
        type: ADD_ADDITIONAL_ITEM,
        id: params.id
    }
}

export const changeItemProperty = (params) => {
    return {
        type: CHANGE_ITEM_PROPERTY
    }
}

export const removeItemFromCart = (params) => {
    return {
        type: REMOVE_ITEM_FROM_CART,
        id: params.id
    }
}


