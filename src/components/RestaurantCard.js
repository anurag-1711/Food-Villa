import { IMG_CDN_URL } from '../constants';
// import { useContext } from 'react';
// import UserContext from '../utils/UserContext';

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, lastMileTravelString }) => {
    // console.log(props.restaurant.data.name);
    // const { cloudinaryImageId, name, cuisines, lastMileTravelString } = restaurant.data;

    // limit cuisines to 5
    while (cuisines.length > 5) {
        cuisines.pop();
    }

    // const { user } = useContext(UserContext);
    return (
        <div className='w-72 h-[320px] hover:bg-rose-100 p-4 m-6 shadow-md'>
            <img
                className='w-full h-48'
                alt="Restaurant"
                src={IMG_CDN_URL + cloudinaryImageId}
            />
            <h2 className='font-semibold text-center text-xl mb-1'>{name}</h2>
            <h3 className='text-center font-serif text-gray-700'>{cuisines.join(', ')}</h3>
            <h4 className='text-center text-gray-600'>{lastMileTravelString} </h4>
            {/* <h5 className='text-center'>Please order from here {user.name}</h5> */}
        </div >
    );
}

export default RestaurantCard;