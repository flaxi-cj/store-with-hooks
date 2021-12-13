import React from 'react'
import "./CurrencyChoices.css"

import { useDispatch } from 'react-redux';
import { dollar, britishPound, australianDollar, japaneseYen, russianRubla } from "../../Redux/currency/currencyActions";

function CurrencyChoices() {
    const dispatch = useDispatch();
    return (
        <div className="currency-box-position">
            <ul className="currency-box">
                <li><button onClick={() => dispatch(dollar())}>$ USD</button></li>
                <li><button onClick={() => dispatch(britishPound())}>£ GBP</button></li>
                <li><button onClick={() => dispatch(australianDollar())}>$ AUD</button></li>
                <li><button onClick={() => dispatch(japaneseYen())}>¥ JPY</button></li>
                <li><button onClick={() => dispatch(russianRubla())}>₽ RUB</button></li>
            </ul>

        </div>
    )
}
export default CurrencyChoices;

