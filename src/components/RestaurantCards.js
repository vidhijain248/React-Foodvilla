import React from 'react'
import { IMG_CDN_URL } from '../config'

const RestaurantCards = ({
    name,
    cuisines,
    avgRatingString,
    cloudinaryImageId 
 }) => {
     return (
         <div className="restaurant-cards">
             <img src={IMG_CDN_URL +cloudinaryImageId}/>
             <h2>{name}</h2>
             <h3>{cuisines}</h3>
             <h4>{avgRatingString}</h4>
         </div>
     )
 }

export default RestaurantCards

