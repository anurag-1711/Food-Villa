import React from 'react'
import { IMG_CDN_URL } from '../constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
import { removeItem } from '../utils/cartSlice';

const DishCard = ({ name, imageId, description, price, id }) => {
    // console.log(name, imageId, description, price);

    const dispatch = useDispatch();

    const handleAddToCart = (info) => {
        dispatch(addItem(info));
    }

    const handleRemoveFromCart = ({ id }) => {
        dispatch(removeItem({ id }));
    }

    return (
        <>
            <div className='flex items-center justify-between space-x-6 h-40'>
                <div className='flex flex-col w-4/5'>
                    <p className='font-medium font-serif'>{name}</p>
                    <p>₹ {price / 100}</p>
                    <p className='my-2 text-gray-600'>{description}</p>
                </div>

                <div className='flex space-x-2 items-center'>
                    <div className='flex flex-col items-center'>
                        <button
                            onClick={() => handleAddToCart({ name, imageId, description, price, id })}
                        >
                            ➕
                        </button>
                        <button
                            onClick={() => handleRemoveFromCart({ id })}
                        >
                            ➖
                        </button>
                    </div>
                    <img
                        className='w-32 rounded-lg'
                        src={IMG_CDN_URL + imageId}
                        alt='dish'
                    />
                </div>
            </div >

            <hr />
        </>
    )
}

export default DishCard