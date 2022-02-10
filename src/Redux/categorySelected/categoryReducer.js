import { CLOTHES, TECH } from "./categoryTypes"

const initialState = {
    categoryType: "CLOTHES"
}

const categoryReducer = (state = initialState, action) => {

    switch (action.type) {
        case CLOTHES: return {
            ...state,
            categoryType: action.type
        }
        case TECH: return {
            ...state,
            categoryType: action.type
        }
        default: return state
    }

}

export default categoryReducer;