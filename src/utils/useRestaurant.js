import { useState, useEffect } from "react";

const useRestaurant = (id) => {
    const [restaurant, setRestaurant] = useState(null);
    const [menu, setMenu] = useState({});

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.651547&lng=86.143377&restaurantId=${id}&submitAction=ENTER`);

        const json = await data.json();
        // console.log(json?.data?.cards[0]?.card?.card?.info);

        setRestaurant(json?.data?.cards[0]?.card?.card?.info);
        setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        // console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
        // console.log(menu);
    }
    return [restaurant, menu];
};

export default useRestaurant;
