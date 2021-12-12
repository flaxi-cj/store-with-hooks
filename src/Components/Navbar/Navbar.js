import React from 'react'
import "./Navbar.css"
import {  useState } from 'react'
import CurrencyChoices from '../CurrencyChoice/CurrencyChoices.js';

import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { currentClothes, currentMen, currentKids } from '../../Redux/categorySelected/categoryActions';
import SmallCart from '../SmallCart/SmallCart';


function Navbar() {

const dispatch = useDispatch();
const currentCurrency = useSelector(state => state.currency.currencySymbol)
const currentState = useSelector(state => state.category.categoryType)
const [showCurrency, setShowCurrency] = useState(false);

const [showShoppingCart, setShowShoppingCart] = useState(false);

// console.log("The Currency is: ", currentCurrency)
// console.log("Current state is: ", currentState)
// console.log("The possible currencies are being displayed: ",showCurrency);


const ClothesCheck = {
    color: currentState === "Clothes"? "green": "black",
    textDecoration: currentState === "Clothes"? "underline": "none",
    fontSize: "1.5em",
    paddingLeft:"2em",
    textUnderlineOffset: "1em",
}

const techCheck = {
    color: currentState === "Tech"? "green": "black",
    textDecoration: currentState === "Tech"? "underline": "none",
    fontSize: "1.5em",
    paddingLeft:"2em",
    textUnderlineOffset: "1em"
}

const kidsCheck = {
    color: currentState === "KIDS"? "green": "black",
    textDecoration: currentState === "KIDS"? "underline": "none",
    fontSize: "1.5em",
    paddingLeft:"2em",
    textUnderlineOffset: "1em"
}

    return (
        <div>
            <nav>
                <div className= "categories">
                <Link style = {ClothesCheck} to="/clothes" onClick = {()=> dispatch(currentClothes())}>CLOTHES</Link>
                <Link style = {techCheck} to="/tech" onClick = {()=> dispatch(currentMen())}>TECH</Link>
                <Link style = {kidsCheck} to="/kids" onClick = {()=> dispatch(currentKids())}>KIDS</Link>
                
     
                </div>

                <div className="logo-image">
                    <img src="https://www.adaptivewfs.com/wp-content/uploads/2020/07/logo-placeholder-image.png" alt="" className="nav-photo-element"/>
                </div>

                <div className= "currency-and-checkout">
                    <div>
                        <button className="currency-text" onClick = {() => setShowCurrency(!showCurrency)}>
                        {showCurrency? currentCurrency + "˅": currentCurrency + "˄"}
                        </button>

                        {showCurrency && <CurrencyChoices />}
                    </div>
                
                    <div>
                        <button onClick ={ () => setShowShoppingCart(!showShoppingCart)}>
                            <img src="https://media.istockphoto.com/vectors/shopping-cart-icon-isolated-on-white-background-vector-id1206806317?k=20&m=1206806317&s=612x612&w=0&h=waK8qOHV2Fgz2ntEWHWBQtXpNDAQ_wdhd4tkTUz6tfE=" alt="" className="nav-photo-element"/>
                        </button>
                        {showShoppingCart && <SmallCart />}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
