import React from 'react'
import StoreItemPage from '../StoreItemPage/StoreItemPage';
import {
    useQuery,
    gql
} from "@apollo/client";


import { useParams } from 'react-router-dom';
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

    const { loading, error, data } = useQuery(PRODUCT_ACCESS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

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