import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../Redux/shoppingCart/shoppingCartActions';
import { useSelector } from 'react-redux';



function StoreItemPage(props) {

    const currentCurrency = useSelector(state => state.currency.currencyType)
    const currentCurrencySymbol = useSelector(state => state.currency.currencySymbol)
    const data = props.data.category.products.filter(data => data.id === props.categoryId);
    const [largeImageLink, setLargeImageLink] = useState(data[0].gallery[0])
    const dispatch = useDispatch();


    const [relevantData, setRelevantData] = useState({
        id: data[0].id,
        name: data[0].name,
        brand: data[0].brand,
        attributes: {
        },
        prices: data[0].prices,
        gallery: [
            data[0].gallery.map(item => item)
        ]
    })


    console.log("Here is the relevant data: ", relevantData)
    return (
        <div>
            <main className="main-section">
                <div className="store-item-page-layout">
                    <div className="store-item-page-images">
                        <ul>
                            {data[0].gallery.map(element => (
                                <li>
                                    <button style={{ width: "-webkit-fill-available" }}>
                                        <img style={{ width: "-webkit-fill-available" }} src={element} alt="Nope" onClick={() => setLargeImageLink(element)} />
                                    </button>
                                </li>)
                            )
                            }
                        </ul>
                    </div>

                    <div className="store-item-page-main-image">
                        {/* We change the big image with useState */}
                        <img style={{ width: "-webkit-fill-available" }} src={largeImageLink} alt="Nope" />
                    </div>

                    {/* 3rd column containing product details and buy button */}
                    <div className="store-item-page-details">
                        {/* Brand and product name */}
                        <h1 style={{ marginBottom: "0.4em" }}>{data[0].brand}</h1>
                        <p className="store-item-page-details__item-name">{data[0].name}</p>

                        {/* Here we keep all the attributes of a certain item */}

                        <div className="store-item-page-details__attributes">
                            {data[0].attributes.map(item => (
                                <>
                                    <p className="bolded-text">{(item.name).toUpperCase()}:</p>

                                    <div className="store-item-page-details__attributes__container" >
                                        {item.items.map(element => (
                                            <div style={(item.name === "Color") ? { background: element.displayValue, height: "1.8em", } : {}}
                                                className={(element.displayValue === relevantData.attributes[item.name]) ? "selected-option item-border" : "item-border"}
                                            >
                                                <button value={element.displayValue} style={{ width: "-webkit-fill-available", height: "-webkit-fill-available" }}
                                                    onClick={() => setRelevantData(prevState => {
                                                        const backSender = Object.assign({}, prevState)
                                                        backSender.attributes[item.name] = element.displayValue;
                                                        return backSender;
                                                    }
                                                    )}>
                                                    <p key={element.displayValue} >{!(item.name === "Color") ? element.displayValue : ""}</p>
                                                </button>

                                            </div>))}
                                    </div>
                                </>
                            ))}
                        </div>
                        {/* Here we keep all the attributes of a certain item */}
                        <div style={{ fontWeight: "500" }}>
                            {/* Here we have the price */}
                            <p className="bolded-text">PRICE:</p>
                            <p className="bolded-text" style={{ marginTop: "0.4em" }}>
                                {data[0].prices.filter(item => item.currency === currentCurrency).map(item => currentCurrencySymbol)}
                                {data[0].prices.filter(item => item.currency === currentCurrency).map(item => item.amount)}
                            </p>
                        </div>
                        {/* Here is the buy button */}
                        <div>
                            {data[0].inStock ?
                                <button className="store-item-page-buy-button" onClick={() => {
                                    console.log("CLICKED");
                                    dispatch(addItemToCart(relevantData))
                                }}>
                                    ADD TO CART</button> :
                                <button className="store-item-page-buy-button-out-of-stock" disabled onClick={() => console.log("CLICKED")}>OUT OF STOCK</button>}
                        </div>

                        {/* Here is the desciprtion. There were other options too, especially installing React HTML Parser from npm. this seemed enough for the curreent purpose */}
                        <div className="store-item-page-details__description" dangerouslySetInnerHTML={{ __html: data[0].description }} />

                    </div>

                </div>

            </main>
        </div>
    )
}

export default StoreItemPage
