// import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from 'react';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState(''); // returns = [variable , function to update the variable]

    useEffect(function () {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.651547&lng=86.143377&page_type=DESKTOP_WEB_LISTING");
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
                <div className="search-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search"
                        value={searchText}
                        onChange={function (e) {
                            setSearchText(e.target.value);
                        }}
                    />

                    <button className="search-btn" onClick={
                        function () {
                            // need to filter the data and update state of restaurants
                            const data = filterData(searchText, allRestaurants)
                            setFilteredRestaurants(data);
                        }
                    }>Search - {searchText}</button>
                </div>
                <div className='restaurant-list'>
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