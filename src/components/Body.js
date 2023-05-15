// import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
// import UserContext from "../utils/UserContext";
import { SWIGGY_API } from "../constants";

const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState(''); // returns = [variable , function to update the variable]
    // const { user, setUser } = useContext(UserContext);

    // for API call
    useEffect(function () {
        getRestaurants();
    }, []);

    // for search filteration of restaurants
    useEffect(() => {
        const data = filterData(searchText, allRestaurants)
        setFilteredRestaurants(data);
    }, [searchText])

    async function getRestaurants() {
        const data = await fetch(SWIGGY_API);
        const json = await data.json();
        console.log(json);

        (json?.data?.cards.length == 3 ? setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards) :
            setAllRestaurants(json?.data?.cards[0]?.data?.data?.cards));
        // console.log(json?.data?.cards[0]?.data?.data?.cards);
        (json?.data?.cards.length == 3 ? setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards) :
            setFilteredRestaurants(json?.data?.cards[0]?.data?.data?.cards));
    }

    const isOnline = useOnline();

    if (!isOnline) {
        return <h1>Offline, Please check your internet connection!!</h1>
    }

    if (!allRestaurants) return null;

    // if (filteredRestaurants?.length == 0) {
    //     return <h1>No restaurants matched your search !!</h1>
    // }


    return allRestaurants.length === 0 ?
        (
            <Shimmer />
        ) : (
            <>
                <form className=" px-4 flex"
                    onSubmit={e => e.preventDefault()}
                >
                    <div className="flex justify-between items-center border mx-1 rounded-lg w-[550px]">
                        <input
                            data-testid='search-input'
                            type="text"
                            className=" w-[500px] rounded-lg p-2 focus:outline-none"
                            placeholder="Search for Restaurants..."
                            value={searchText}
                            onChange={function (e) {
                                setSearchText(e.target.value);
                            }}
                        />

                        <svg className="w-6 h-6 mx-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>

                    {/* <button
                        data-testid="search-btn"
                        className="p-1 m-1 bg-amber-900 hover:bg-amber-800 text-white rounded-md"
                        // style={{
                        //     backgroundColor: "beige",
                        // }}
                        onClick={() => {
                            // need to filter the data and update state of restaurants
                            const data = filterData(searchText, allRestaurants)
                            setFilteredRestaurants(data);
                        }}
                    >
                        Search
                    </button> */}

                    {/* <input
                        type="text"
                        className="p-1 m-1"
                        value={user.name}
                        onChange={(e) => {
                            setUser({
                                ...user,
                                name: e.target.value
                            });
                        }}
                    ></ input> */}
                </form >
                <div className='restaurant-list flex flex-wrap justify-between' data-testid='res-list'>
                    { // write logic for no restaurants found

                        filteredRestaurants.length === 0 ? <h1>No Restaurants found</h1> : filteredRestaurants.map((restaurant) => {
                            return <Link to={'/restaurant/' + restaurant.data.id} key={restaurant.data.id}>
                                <RestaurantCard {...restaurant.data} />
                            </Link>;
                        })
                    }
                </div >

            </>
        );
}

export default Body;