import React from 'react'
import StoreItemPage from '../StoreItemPage/StoreItemPage';
import {
    useQuery,
    gql
} from "@apollo/client";



import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import ItemCard from '../ItemCard/ItemCard';


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



const StoreContent = (propsRecieved) => {


    const params = useParams();

    // useEffect(() => {
    //     // setTimeout(() => {
    //     //   console.log("The parameters are as follows: ", params.id);
    //     //   if(params.id){console.log(true)}
    //     //   else{console.log(false)}
    //     // }, 500);

    // }, [params])


    const { loading, error, data } = useQuery(PRODUCT_ACCESS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    // console.log('The naive trying to get a certain index:', data.category.products[1].gallery[0])
    // console.log("here is the data after a query", data.category.products.map(data => data.name));
    // console.log("THE PROPS RECIEVED IS: ", propsRecieved.categoryType)

    return (
        <>
            {(params.id === undefined) ?
                <main className="main-section">
                    <div>
                        <div className="store-layout">
                            <h1>{propsRecieved.categoryTitle}</h1>

                            {
                                data.category.products.filter(data => data.category === propsRecieved.categoryType).map(item => (
                                    <ItemCard propsRecieved={propsRecieved} item={item} />
                                )
                                )}

                        </div>
                    </div>
                </main> :

                // Below we render the selected item
                < StoreItemPage data={data} categoryId={params.id} />
            }

        </>)

}

export default StoreContent;