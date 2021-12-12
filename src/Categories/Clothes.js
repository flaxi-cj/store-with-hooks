import React from 'react'
import LearnGetData from '../LearnGetData';


function Clothes(props) {

        



    // console.log("just checking how props look like: ",props.keyIndex);
    return(
        <div>
           <LearnGetData categoryType={"clothes"} categoryTitle={"Clothes category"}/>
        </div>
    )


}

export default Clothes
