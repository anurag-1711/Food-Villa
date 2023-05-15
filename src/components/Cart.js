import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
import DishCard from "./DishCard";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    // console.log(cartItems);

    const dispatch = useDispatch();

    const handleClearButton = () => {
        dispatch(clearCart());
    }

    return (
        <div className="w-[850px] flex flex-col items-center mx-auto">
            <div className="flex items-center space-x-10">
                <h1 className="font-bold text-4xl text-center">Cart Items - {cartItems.length}</h1>
                <button
                    className="p-2 m-2 bg-red-700 text-white rounded-2xl"
                    onClick={() => {
                        handleClearButton();
                    }}>Clear All
                </button>
            </div>

            <div className="flex flex-col justify-between  w-full">
                {
                    cartItems.map((item) => {
                        // return <FoodItem {...item} />
                        return <DishCard {...item} />
                    })
                }
            </div>
        </div>
    )
};

export default Cart;