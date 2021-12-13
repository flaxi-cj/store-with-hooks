import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "./SmallCart.css"

function SmallCart() {

    const itemsInCart = useSelector(state => state.shoppingCart)
    console.log("items in cart: ", itemsInCart)
    console.log("We are looking for this: ", itemsInCart[0])
    return (
        <div>
        <div className="blurred-background"></div>
        <div className="small-cart-box"> 
        <p className="small-cart-number-of-items"><b>My Bag,</b> {itemsInCart.length} items</p>
        {
            itemsInCart.map(item =>(
                <div className="small-cart-product-container">
                    <div className="small-cart-product-decription-conainter">
                        <div className="small-cart-product-description">
                        <p>{item[0].brand}</p>
                        <p>{item[0].name}</p>
                        {
                       item[0].attributes.map(element =>(
                        <>
                            {Object.keys(element).map(elems =>(
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

                    <div className="small-cart-photo-container">
                        <img className="small-cart-photo" src={item[0].gallery} alt="none" />
                    </div>
                </div>
            ))
        }
        <div className="small-cart-checkout-container">
        
        <Link to="/cart">VIEW BAG</Link>
        <button>CHECK OUT</button>
        </div>
        



        </div>   
        </div>
        
    )
}

export default SmallCart
