import { Clothes, Tech} from "./categoryTypes"

export const currentClothes = () => {
    return {
        type: Clothes
    }
}

export const currentMen = () => {
    return {
        type: Tech
    }
}
