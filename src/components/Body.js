import React, { useState } from 'react'
import RestaurantCards from './RestaurantCards'
import { RestaurantList } from '../config'

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant)=>
        restaurant.info.name.includes(searchText)
    );
    return filterData;
}


const Body = () => {
    const [searchText, setSearchText] = useState();
    const [restaurants, setRestaurants] = useState(RestaurantList);
    return (  
        <>
        <div className='search-container'>
            <input
            type='text'
            className='search-input'
            placeholder='search your restaurant'
            value={searchText}
            onChange={(e)=>{
                setSearchText(e.target.value);
            }}
            />
            <button 
            className='search-btn'
            onClick={()=>{
                const data = filterData(searchText, restaurants);
                setRestaurants(data);
            }}
            >
                Search
            </button>
        </div>
        <div className="restaurant-list">
            {restaurants.map((restaurant)=>{
                return <RestaurantCards {...restaurant.info} key={restaurant.info.id}/>
            })}
        </div>
        </>
    )
}

export default Body