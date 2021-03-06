import React from 'react'
import "./Navbar.css"
import { useState } from 'react'
import CurrencyChoices from '../CurrencyChoice/CurrencyChoices.js';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { currentClothes, currentTech } from '../../Redux/categorySelected/categoryActions';
import SmallCart from '../SmallCart/SmallCart';

import { ReactComponent as StoreIcon } from "../../Svg/StoreIcon.svg";
import { ReactComponent as CurrencyUpArrow } from "../../Svg/CurrencyUpArrow.svg";
import { ReactComponent as CurrencyDownArrow } from "../../Svg/CurrencyDownArrow.svg";
import { ReactComponent as EmptyCart } from "../../Svg/EmptyCart.svg";

function Navbar() {

    const dispatch = useDispatch();
    const currentCurrency = useSelector(state => state.currency.currencySymbol)
    const currentState = useSelector(state => state.category.categoryType)

    const [showCurrency, setShowCurrency] = useState(false);
    const [showShoppingCart, setShowShoppingCart] = useState(false);


    const clothesCheck = {
        color: currentState === "CLOTHES" ? "green" : "black",
        textDecoration: currentState === "CLOTHES" ? "underline" : "none",
        fontSize: "1.5em",
        paddingRight: "2em",
        textUnderlineOffset: "1em",
    }

    const techCheck = {
        color: currentState === "TECH" ? "green" : "black",
        textDecoration: currentState === "TECH" ? "underline" : "none",
        fontSize: "1.5em",
        paddingRight: "2em",
        textUnderlineOffset: "1em"
    }

    return (
        <div>
            <nav>
                <div className="categories">
                    <Link style={clothesCheck} to="/clothes" onClick={() => dispatch(currentClothes())}>CLOTHES</Link>
                    <Link style={techCheck} to="/tech" onClick={() => dispatch(currentTech())}>TECH</Link>
                </div>

                <div className="logo-image">
                    <StoreIcon />
                </div>

                <div className="currency-and-checkout">
                    <div>
                        <button className="currency-text" onClick={() => setShowCurrency(!showCurrency)}>
                            {showCurrency ? <>{currentCurrency} <CurrencyUpArrow /> </> : <>{currentCurrency} <CurrencyDownArrow /></>}
                        </button>

                        {showCurrency && <CurrencyChoices />}
                    </div>

                    <div className="shopping-cart-container">
                        <button onClick={() => setShowShoppingCart(!showShoppingCart)}>
                            <EmptyCart />
                        </button>
                        {showShoppingCart && <SmallCart />}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
