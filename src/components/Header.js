import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => (
    <Link to="/">
        <img data-testid="logo" className="h-24 p-2"
            alt="Logo"
            src="http://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
        />
    </Link>
)

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();

    const { user } = useContext(UserContext);
    // console.log(user);

    const cartItems = useSelector(store => store.cart.items);
    // console.log(cartItems);

    return (
        <div className='flex h-20 mb-2 items-center justify-between sticky top-0 bg-white'>
            <Title />

            <ul className="flex items-center">
                <Link to="/" className="px-2 text-lg rounded-lg hover:bg-rose-50"><li>Home</li></Link>
                <Link to="/about" className="px-2 text-lg rounded-lg hover:bg-rose-50"><li>About</li></Link>
                <Link to="/contact" className="px-2 text-lg rounded-lg hover:bg-rose-50"><li>Contact</li></Link>
                <Link to="/instamart" className="px-2 text-lg rounded-lg hover:bg-rose-50"><li>Instamart</li></Link>
                <Link to="/cart" className="px-2 text-lg rounded-lg hover:bg-rose-50"><li data-testid="cart">Cart - {cartItems.length}</li></Link>
            </ul>

            <h1 data-testid="online-status" className="py-8 text-xl cursor-default">
                {isOnline ? "Online ✔" : "Offline ❌"}
            </h1>
            {
                (isLoggedIn ?
                    <button className="px-8 text-lg" onClick={function () {
                        setIsLoggedIn(false);
                    }}>Sign out</button>
                    :
                    <button className="px-8 text-lg" onClick={function () {
                        setIsLoggedIn(true);
                    }}>Sign in</button>)
            }

            {/* <div className="py-12 text-xl">{user.name}</div> */}
        </div>
    )
}

export default Header;