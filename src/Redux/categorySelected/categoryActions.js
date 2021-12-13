import { Clothes, Tech, KIDS } from "./categoryTypes"

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


export const currentKids = () => {
    return {
        type: KIDS
    }
}
