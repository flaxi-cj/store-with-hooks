import React from 'react'
import { useSelector } from 'react-redux'
import "./BigCart.css"
import ChangeImage from './ChangeImage';
import { Link } from 'react-router-dom';
function BigCart() {


    const itemsInCart = useSelector(state => state.shoppingCart);
    const currentCurrency = useSelector(state => state.currency.currencyType);
    const currentCurrencySymbol = useSelector(state => state.currency.currencySymbol);


    return (
        <div>
            <div className="big-cart-box">
                <p className="big-cart-description"><b>CART</b></p>
                {
                    itemsInCart.map(item => (
                        <div className="big-cart-product-container">
                            <div className="big-cart-product-decription-container">
                                <div className="big-cart-product-description">
                                    <p className='brand-text-style'>{item[0].brand}</p>
                                    <p className='product-name-text-style'>{item[0].name}</p>
                                    <p className="price-text-style">
                                        {item[0].prices[0].filter(item => item.currency === currentCurrency).map(item => currentCurrencySymbol)}
                                        {item[0].prices[0].filter(item => item.currency === currentCurrency).map(item => item.amount)}
                                    </p>


                                    {
                                        item[0].attributes.map(element => (
                                            <>
                                                {Object.keys(element).map(elems => (
                                                    <div className='attribute-container'>
                                                        <p>{elems} : </p>
                                                        <div className='attribute-border'>
                                                            <p>{item[0].attributes[0][elems]}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </>
                                        ))
                                    }
                                </div>
                                <div className="big-cart-product-number-of-items">
                                    <button>+</button>
                                    <p>{item[0].number}</p>
                                    <button>-</button>
                                </div>
                            </div>

                            <div className="big-cart-photo-container">
                                <ChangeImage item={item[0].gallery[0]} />
                            </div>
                        </div>
                    ))
                }
                <div className='big-cart-checkout-container'>
                    <Link className="big-cart-checkout-text" to="/cart" onClick={() => window.location.reload(false)}>CHECK OUT</Link>
                </div>




            </div>
        </div>

    )
}

export default BigCart
