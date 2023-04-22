import { IMG_CDN_URL } from '../constants';
import { useContext } from 'react';
import UserContext from '../utils/UserContext';

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, lastMileTravelString }) => {
    // console.log(props.restaurant.data.name);
    // const { cloudinaryImageId, name, cuisines, lastMileTravelString } = restaurant.data;

    const { user } = useContext(UserContext);
    return (
        <div className='w-72 h-[340px] bg-rose-100 p-4 m-6 shadow-lg'>
            <img
                className='w-72 h-48'
                alt="Restaurant"
                src={IMG_CDN_URL + cloudinaryImageId}
            />
            <h2 className='font-bold text-center text-xl'>{name}</h2>
            <h3 className='text-center'>{cuisines.join(', ')}</h3>
            <h4 className='text-center'>{lastMileTravelString} </h4>
            <h5 className='text-center'>Please order from here {user.name}</h5>
        </div >
    );
}

export default RestaurantCard;