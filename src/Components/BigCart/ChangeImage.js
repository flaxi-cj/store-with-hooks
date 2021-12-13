import React, { useState } from 'react'
import "./ChangeImage.css"
import { ReactComponent as ChangePhotoLeftSvg } from "../../Svg/ChangePhotoLeft.svg";
import { ReactComponent as ChangePhotoRightSvg } from "../../Svg/ChangePhotoRight.svg";



function ChangeImage({item}) {
    console.log("THE ITEM length IS:,",Object.keys(item).length)
    const PREVIOUS="PREVIOUS";
    const NEXT = "NEXT";
    const [currentPhoto,setCurrentPhoto] = useState(0);
    const itemLength = Object.keys(item).length;

    const changePhoto = (params) =>{
       if(itemLength === 1){
           console.log("Has only one photo");
       }

       if(params === PREVIOUS){
           if(currentPhoto === 0){
               setCurrentPhoto(itemLength-1)
           }
           else{
               setCurrentPhoto(currentPhoto-1)
           }
       }

       if(params === NEXT){
        if(currentPhoto === itemLength-1){
            setCurrentPhoto(0)
        }
        else{
            setCurrentPhoto(currentPhoto+1)
        }
    }

    }

    return (
        <>
            <button className='change-photo-svg' onClick={() => changePhoto(PREVIOUS)}>
                <ChangePhotoLeftSvg />
            </button>
            {/* AICI AM RAMAS FA L SA FUNCTIONEZE */}
            <img className="big-cart-photo" src={item[currentPhoto]} alt="none" />
            <button className='change-photo-svg' onClick={() => changePhoto(NEXT)}>
                <ChangePhotoRightSvg />
            </button>
        </>
    )
}

export default ChangeImage
