import { useState } from "react";
import { Link } from 'react-router-dom';

const loggedInUser = function () {
    // API call to check authentication
    return true;
}

const Title = () => (
    <Link to="/">
        <img className='logo'
            alt="Logo"
            src="http://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
        />
    </Link>
)

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className='header'>
            <Title />
            <div className='nav-items'>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <Link to="/cart"><li>Cart</li></Link>
                </ul>
            </div>
            {(isLoggedIn ?
                <button onClick={function () {
                    setIsLoggedIn(false);
                }}>Logout</button>
                :
                <button onClick={function () {
                    setIsLoggedIn(true);
                }}>Login</button>)}
        </div>
    )
}

export default Header;