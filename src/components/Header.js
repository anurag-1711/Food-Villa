import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Title = () => (
    <Link to="/">
        <img className="h-28 p-2"
            alt="Logo"
            src="http://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
        />
    </Link>
)

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();

    const { user } = useContext(UserContext);
    console.log(user);

    return (
        <div className='flex justify-between bg-rose-50 shadow-lg'>
            <Title />
            <div className=''>
                <ul className="flex py-12">
                    <Link to="/" className="px-2"><li>Home</li></Link>
                    <Link to="/about" className="px-2"><li>About</li></Link>
                    <Link to="/contact" className="px-2"><li>Contact</li></Link>
                    <Link to="/cart" className="px-2"><li>Cart</li></Link>
                    <Link to="/instamart" className="px-2"><li>Instamart</li></Link>
                </ul>
            </div>
            <h1 className="py-12 text-xl">{isOnline ? "✅" : "❌"}</h1>
            {
                (isLoggedIn ?
                    <button className="px-8" onClick={function () {
                        setIsLoggedIn(false);
                    }}>Logout {user.name}</button>
                    :
                    <button className="px-8" onClick={function () {
                        setIsLoggedIn(true);
                    }}>Login {user.name}</button>)
            }

            {/* <div className="py-12 text-xl">{user.name}</div> */}
        </div>
    )
}

export default Header;