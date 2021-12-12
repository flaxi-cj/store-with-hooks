import { Clothes, Tech, KIDS } from "./categoryTypes"

const initialState ={
    categoryType : "Clothes"
}

const categoryReducer = (state = initialState, action) => {

    switch(action.type) {
        case Clothes: return {
            ...state,
            categoryType : action.type
        }
        case Tech: return {
            ...state,
            categoryType : action.type
        }
        case KIDS: return {
            ...state,
            categoryType : action.type
        }
        default: return state
    }

}

export default categoryReducer;