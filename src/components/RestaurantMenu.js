import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../constants';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';


const RestaurantMenu = () => {
    const { id } = useParams();

    // const [restaurant, setRestaurant] = useState(null);

    const [restaurant, menu] = useRestaurant(id);

    return (restaurant === null) ? (
        <Shimmer />
    ) : (
        <div className='menu'>
            <div>
                <h1>Restaurant id: {id}</h1>
                <h2>{restaurant.name}</h2>
                <img style={{
                    maxWidth: 300
                }} src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
                <h3>{restaurant.area}</h3>
                <h3>{restaurant.city}</h3>
                <h3>{restaurant.avgRating} stars</h3>
                <h3>{restaurant.costForTwoMessage}</h3>
            </div>
            <div>
                <h1>Menu</h1>
                {
                    menu.map((dish) => {
                        return <li key={dish?.card?.info?.id}>{dish?.card?.info?.name}</li>
                    })
                }
            </div>
            {/* <div>{console.log(Object.values(restaurant.))}</div> */}
        </div>
    )
}

export default RestaurantMenu;