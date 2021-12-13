import React from 'react'
import { useSelector } from 'react-redux'
import "./BigCart.css"
import ChangeImage from './ChangeImage';

function BigCart() {


    const itemsInCart = useSelector(state => state.shoppingCart)
    console.log("items in cart: ", itemsInCart)
    console.log("We are looking for this: ", itemsInCart[0][0].gallery[0].length)

    
 

    return (
        <div>
            <div className="big-cart-box">
                <p className="big-cart-description"><b>CART</b></p>
                {
                    itemsInCart.map(item => (
                        <div className="big-cart-product-container">
                            <div className="small-cart-product-decription-conainter">
                                <div className="small-cart-product-description">
                                    <p>{item[0].brand}</p>
                                    <p>{item[0].name}</p>
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
                                    <button>+</button>
                                    <p>{item[0].number}</p>
                                    <button>-</button>
                                </div>
                            </div>

                            <div className="big-cart-photo-container">
                                    <ChangeImage item={item[0].gallery[0]}/>



                            </div>
                        </div>
                    ))
                }
                <div className="small-cart-checkout-container">
                    <button>VIEW BAG</button>
                    <button>CHECK OUT</button>
                </div>




            </div>
        </div>

    )
}

export default BigCart
