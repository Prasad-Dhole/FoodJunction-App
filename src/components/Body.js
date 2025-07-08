import { useState, useContext, useEffect } from "react";
import RestCard from "./restCard";
import RestList from "../utils/mockdata";
import { ThemeContext } from "./ThemeContext";

const Body = () => {
    const { theme } = useContext(ThemeContext);
    const [listOfRestaurants, setListOfRestaurants] = useState(RestList);
    const [activeFilter, setActiveFilter] = useState("none");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch(
            "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=18.5246091&lng=73.8786239&carousel=true&third_party_vendor=1"
        );
        const json = data.json;
        console.log(json);
    };

    // Filter for top-rated restaurants (avgRating >= 4.0)
    const handleTopRatedFilter = () => {
        const filteredRestaurants = RestList.filter(
            (restaurant) => restaurant.info.avgRating >= 4.0
        ).sort((a, b) => b.info.avgRating - a.info.avgRating);
        setListOfRestaurants(filteredRestaurants);
        setActiveFilter("top-rated");
    };

    // Filter for budget-friendly restaurants (costForTwo <= ₹300)
    const handleBudgetFilter = () => {
        const filteredRestaurants = RestList.filter(
            (restaurant) => parseInt(restaurant.info.costForTwo.match(/\d+/)[0], 10) < 300
        );
        setListOfRestaurants(filteredRestaurants);
        setActiveFilter("budget");
    };

    // Reset to all restaurants
    const handleClearFilter = () => {
        setListOfRestaurants(RestList);
        setActiveFilter("none");
    };

    return (
        <div className={`body-container ${theme}`}>
            <div className="offer-container">
                <button
                    className={`rate-filter ${activeFilter === "top-rated" ? "active" : ""}`}
                    onClick={handleTopRatedFilter}
                >
                    Top Rated (4.0+)
                </button>
                <button
                    className={`budget-filter ${activeFilter === "budget" ? "active" : ""}`}
                    onClick={handleBudgetFilter}
                >
                    Budget Friendly (≤ ₹300)
                </button>
                <button
                    className={`clear-filter ${activeFilter === "none" ? "active" : ""}`}
                    onClick={handleClearFilter}
                >
                    Clear Filters
                </button>
            </div>
            <div className="menu-container">
                {listOfRestaurants.length === 0 ? (
                    <p className="no-results">No restaurants found matching the filter.</p>
                ) : (
                    listOfRestaurants.map((restaurant) => (
                        <RestCard
                            key={restaurant.info.id}
                            restData={restaurant}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Body;