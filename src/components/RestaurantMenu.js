import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../constants';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';
import DishCard from './DishCard';


const RestaurantMenu = () => {
    const { id } = useParams();

    const [restaurant, menu] = useRestaurant(id);
    // console.log(menu[0]);
    // console.log(restaurant);

    const dispatch = useDispatch();

    const handleFoodItem = (item) => {
        dispatch(addItem(item));
    }

    return (restaurant === null) ? (
        <Shimmer />
    ) : (
        <div className='flex flex-col  mx-auto w-[850px]'>
            <div>
                {/* <h1>Restaurant id: {id}</h1> */}
                <div className='flex justify-between items-center'>
                    <h1 className='text-2xl font-medium mb-2'>{restaurant.name}</h1>
                    <div className='flex items-center space-x-1 cursor-default'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>

                        {/* ratings in decimal */}
                        <span className='text-xl'>{restaurant.avgRatingString}</span>
                    </div>
                </div>
                {/* <img style={{
                    maxWidth: 300
                }} src={IMG_CDN_URL + restaurant.cloudinaryImageId} /> */}
                <h3 className='text-gray-700'>{restaurant.cuisines.join(', ')}</h3>
                <h3 className='text-gray-700'>{restaurant.areaName} , {restaurant?.sla?.lastMileTravelString}</h3>
            </div>

            <hr className='my-4' />

            <div className='flex items-center space-x-5 cursor-default'>
                <div className='flex items-center space-x-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <span className='text-lg'>{restaurant?.sla?.slaString}</span>
                </div>

                <div className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>

                    <span className='text-lg'>{restaurant.costForTwoMessage}</span>
                </div>

            </div>

            <hr className='my-4' />

            {/* Recommended menu */}
            <div className=''>
                <h1 className='text-xl font-medium mb-2'>Recommended</h1>

                {
                    menu.map((dish) => {
                        return (
                            <DishCard {...dish?.card?.info} key={dish?.card?.info?.id} />
                        )
                    })
                }

                {/* {
                    menu.map((dish) => {
                        return (
                            <>
                                <div className='py-2' key={dish?.card?.info?.id}>{dish?.card?.info?.name}
                                    <button
                                        className='p-1 m-1 bg-green-200'
                                        onClick={() => handleFoodItem(dish?.card?.info)}>
                                        Add
                                    </button>
                                </div>
                                <hr />
                            </>
                        )
                    })
                } */}
            </div>
        </div>
    )
}

export default RestaurantMenu;