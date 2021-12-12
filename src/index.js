import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql
} from "@apollo/client";


const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});


client
  .query({
    query: gql`
    {
      category {
        products  {
            id 
            name
            inStock
            gallery   
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
  } `
  })
  .then(result => console.log("The query result for testing is: ", result.data.category.products[1].id));



// const PRODUCT_NAME = gql`
// {
// category {
//       products  {
//           id
//           name
//           gallery
//       }
//   }
// } `;


// const CATEGORY_NAMES = gql`
// {
//   categories{
//     name
//   }
// }
// `
// function JustTesting(){
//   const { loading, error, data } = useQuery(CATEGORY_NAMES);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;
  
//     console.log("JustTesting to understand the file data is: ", data)
//   return (<p>Boy it worked</p>)
    
// }

// function LearnGetData() {
//   const { loading, error, data } = useQuery(PRODUCT_NAME);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;
//   console.log('The naive trying to get a certain index:', data.category.products[1].gallery[0])
//   console.log("here is the data after a query", data.category.products.map(data => data.name));
  
//   return data.category.products.map(data=>(
//         <div>
//         <p key ={data.id}>{data.name}</p>
//         <p>And the photo link is: {data.gallery.map(data=> data)}</p>
//         <img src={data.gallery[0]} alt="Shit" width="100em"/>
//         </div>
//       ));
    
//     }
   



ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);