import { USD, GBP, AUD, JPY, RUB } from "./currencyTypes"

const initialState = {
    currencyType: USD,
    currencySymbol: '$'
}

const currencyReducer = (state = initialState, action) => {

    switch (action.type) {
        case USD: return {
            currencyType: action.type,
            currencySymbol: action.symbol
        }
        case GBP: return {
            currencyType: action.type,
            currencySymbol: action.symbol
        }
        case AUD: return {
            currencyType: action.type,
            currencySymbol: action.symbol
        }
        case JPY: return {
            currencyType: action.type,
            currencySymbol: action.symbol
        }
        case RUB: return {
            currencyType: action.type,
            currencySymbol: action.symbol
        }
        default: return state
    }

}

export default currencyReducer;