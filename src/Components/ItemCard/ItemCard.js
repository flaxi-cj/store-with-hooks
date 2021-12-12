import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function ItemCard({ propsRecieved, item}) {

    const currentCurrency = useSelector(state => state.currency.currencyType)
    const currentCurrencySymbol = useSelector(state => state.currency.currencySymbol)

    return (
        <div className="item-card">
            <Link to={`/${propsRecieved.categoryType}/${item.id}`}>
                <div className="store-element">

                    {/* Out of stock applyer */}
                    {!item.inStock &&
                        <div className="out-of-stock-layer">
                            <p className="out-of-stock-text">Out Of Stock</p>
                        </div>}

                    {/* Presenting the first image */}
                    <img src={item.gallery[0]} alt="Nope" />

                    {/* Name of the item, price and currency displayer */}
                    <p key={item.id}>
                        {item.brand} {item.name}
                    </p>

                    <p style={{ fontWeight: "500" }}>
                        {item.prices.filter(item => item.currency === currentCurrency).map(item => currentCurrencySymbol)}
                        {item.prices.filter(item => item.currency === currentCurrency).map(item => item.amount)}
                    </p>

                </div>
            </Link>
        </div>
    )
}

export default ItemCard
