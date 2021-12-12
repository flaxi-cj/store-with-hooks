import React from 'react'
import StoreItemPage from './StoreItemPage';
import {
    useQuery,
    gql
  } from "@apollo/client";



import { useSelector} from 'react-redux'
import { Link, useParams } from 'react-router-dom';

  

  const PRODUCT_ACCESS = gql`
  {
    category {
      products  {
          id 
          name
          inStock
          gallery
          description   
          category 
          brand
          attributes{
              name
              items{
                  displayValue
                  value
              }
          } 
          prices  {
              currency
              amount
          }           
      }
  }
} `;



const LearnGetData = (propsRecieved) => {


    const params = useParams();
    
    // useEffect(() => {
    //     // setTimeout(() => {
    //     //   console.log("The parameters are as follows: ", params.id);
    //     //   if(params.id){console.log(true)}
    //     //   else{console.log(false)}
    //     // }, 500);
      
    // }, [params])

    const currentCurrency = useSelector(state => state.currency.currencyType)
    const currentCurrencySymbol =useSelector(state => state.currency.currencySymbol)
    const { loading, error, data } = useQuery(PRODUCT_ACCESS);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    // console.log('The naive trying to get a certain index:', data.category.products[1].gallery[0])
    // console.log("here is the data after a query", data.category.products.map(data => data.name));
    // console.log("THE PROPS RECIEVED IS: ", propsRecieved.categoryType)

    return( 
        <>
        {(params.id === undefined)? 
        <main className= "main-section">
            <div>
            <div className="store-layout">
                <h1>{propsRecieved.categoryTitle}</h1>

                                {
                            data.category.products.filter(data => data.category===propsRecieved.categoryType).map(item=>(
                                <div className="item-card">
                                    <Link to={`/${propsRecieved.categoryType}/${item.id}`}>
                                    <div className="store-element">
                                        
                                        {/* Out of stock applyer */}
                                        {!item.inStock && 
                                        <div className="out-of-stock-layer">
                                            <p className="out-of-stock-text">Out Of Stock</p>
                                        </div>}

                                        {/* Presenting the first image */}
                                        <img src={item.gallery[0]} alt="Nope"/>
                                        
                                        {/* Name of the item, price and currency displayer */}
                                        <p key ={item.id}>
                                            {item.brand} {item.name}
                                        </p>

                                        <p style={{fontWeight:"500"}}>
                                        {item.prices.filter(item => item.currency ===currentCurrency).map(item => currentCurrencySymbol)} 
                                        {item.prices.filter(item => item.currency ===currentCurrency).map(item=> item.amount)}
                                        </p>
                                        
                                    </div>
                                    </Link>
                                </div>
                                
                                )
                                )}
                    
            </div>
            </div>
        </main> : 

        // Below we render the selected item
        < StoreItemPage data={data} categoryId={params.id} currentCurrency={currentCurrency} currentCurrencySymbol={currentCurrencySymbol}/>
        }

    </>)

}

      export default LearnGetData;