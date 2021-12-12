import React from 'react'
import StoreContent from '../Components/StoreContent/StoreContent';


function Clothes(props) {

        



    // console.log("just checking how props look like: ",props.keyIndex);
    return(
        <div>
           <StoreContent categoryType={"clothes"} categoryTitle={"Clothes category"}/>
        </div>
    )


}

export default Clothes
