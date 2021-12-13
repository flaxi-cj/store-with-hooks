import React from 'react'
import StoreContent from '../Components/StoreContent/StoreContent';

// TODO(FP): eliminate clothes and tech and kids
function Clothes(props) {

        



    // console.log("just checking how props look like: ",props.keyIndex);
    return(
        <div>
           <StoreContent categoryType={"clothes"} categoryTitle={"Clothes category"}/>
        </div>
    )


}

export default Clothes
