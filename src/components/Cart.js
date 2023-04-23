import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();

    const handleClearButton = () => {
        dispatch(clearCart());
    }

    return (
        <div>
            <h1 className="font-bold text-4xl text-center">Cart Items - {cartItems.length}</h1>
            <button
                className="p-2 m-2 bg-red-400"
                onClick={() => {
                    handleClearButton();
                }}>Clear</button>

            <div className="flex flex-wrap justify-between">
                {
                    cartItems.map((item) => {
                        return <FoodItem {...item} />
                    })
                }
            </div>
        </div>
    )
};

export default Cart;