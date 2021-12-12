import { USD, GBP, AUD, JPY, RUB} from "./currencyTypes"

export const dollar = () =>{
    return {
        type: USD,
        symbol:'$'
    }
}

export const britishPound = () =>{
    return {
        type: GBP,
        symbol:'£'
    }
}


export const australianDollar = () =>{
    return {
        type: AUD,
        symbol:'$'
    }
}

export const japaneseYen = () =>{
    return {
        type: JPY,
        symbol:'¥'
    }
}

export const russianRubla = () =>{
    return {
        type: RUB,
        symbol:'₽'
    }
}
