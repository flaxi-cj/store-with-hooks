import { CLOTHES, TECH} from "./categoryTypes"

export const currentClothes = () => {
    return {
        type: CLOTHES
    }
}

export const currentMen = () => {
    return {
        type: TECH
    }
}
