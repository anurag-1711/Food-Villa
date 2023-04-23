import { IMG_CDN_URL } from '../constants';

const FoodItem = ({ name, imageId, description, price }) => {
    // console.log(props.restaurant.data.name);
    // const { imageId, name, cuisines, lastMileTravelString } = restaurant.data;


    return (
        <div className='w-80 h-[340px] bg-rose-100 p-4 m-6 shadow-lg'>
            <img
                className='w-72 h-48'
                alt="Food Item"
                src={IMG_CDN_URL + imageId}
            />
            <h2 className='font-bold text-center text-xl'>{name}</h2>
            <h3 className='text-center'>{description}</h3>
            <h4 className='text-center'>Rupees: {price / 100} </h4>
        </div >
    );
}

export default FoodItem;