import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addAdditionalItemToCart, removeItemFromCart } from '../../Redux/shoppingCart/shoppingCartActions'
import "./SmallCart.css"

function SmallCart() {

    const itemsInCart = useSelector(state => state.shoppingCart)
    console.log(itemsInCart)
    const currentCurrency = useSelector(state => state.currency.currencyType);
    const currentCurrencySymbol = useSelector(state => state.currency.currencySymbol);
    const dispatch = useDispatch();


    return (
        <div>
            <div className="blurred-background"></div>
            <div className="small-cart-box">
                <p className="small-cart-number-of-items"><b>My Bag,</b> {itemsInCart.length} items</p>
                {
                    itemsInCart.map(item => (
                        <div className="small-cart-product-container">
                            <div className="small-cart-product-decription-conainter">
                                <div className="small-cart-product-description">
                                    <p>{item[0].brand}</p>
                                    <p>{item[0].name}</p>
                                    <p className="small-cart-price-text-style">
                                        {item[0].prices[0].filter(item => item.currency === currentCurrency).map(item => currentCurrencySymbol)}
                                        {item[0].prices[0].filter(item => item.currency === currentCurrency).map(item => item.amount)}
                                    </p>
                                    {
                                        item[0].attributes.map(element => (
                                            <>
                                                {Object.keys(element).map(elems => (
                                                    <p>{elems} : {item[0].attributes[0][elems]}</p>
                                                ))}
                                            </>
                                        ))
                                    }
                                </div>
                                <div className="small-cart-product-number-of-items">
                                    <button onClick={() => dispatch(addAdditionalItemToCart(item[0].id))}>+</button>
                                    <p>{item[0].number}</p>
                                    <button onClick={() => dispatch(removeItemFromCart(item[0].id))}>-</button>
                                </div>
                            </div>

                            <div className="small-cart-photo-container">
                                <img className="small-cart-photo" src={item[0].gallery[0][0]} alt="none" />
                            </div>
                        </div>
                    ))
                }
                <div className="small-cart-checkout-container">

                    <Link className='small-cart-view-bag-link' to="/cart">VIEW BAG</Link>
                    <Link className='small-cart-check-out-link' to="/clothes" onClick={() => window.location.reload(false)}>CHECK OUT</Link>
                </div>




            </div>
        </div>

    )
}

export default SmallCart
