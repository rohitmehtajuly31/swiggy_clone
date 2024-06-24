import React, { useEffect, useState } from "react";
import RestaurantCard from "./Restaurantcard";
import ReactShimmer from "./ReactShimmer";
import Restaurantmenu from "./Restaurantmenu";
import { Link } from "react-router-dom";
import useonlinestatus from "../utils/useonlinestatus";

const Body = () => {
  const online = useonlinestatus();
  const [ResData, setResData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterRestaurant, setFilterRestaurant] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const json = await response.json();
      console.log("Response data:", json);
      setResData(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle fetch error here, e.g., show a message to the user
      setLoading(false); // Set loading to false to stop the loading indicator
    }
  };

  if (!online) {
    return <h1>No internet connection.</h1>;
  }

  if (loading) {
    return <ReactShimmer />;
  }

  const handleFilterRestaurant = () => {
    setFilterRestaurant(!filterRestaurant);
  };

  const filteredResObj = filterRestaurant
    ? ResData.filter((res) => res.info.avgRating > 4)
    : ResData.filter((obj) =>
        obj.info.name.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div className="body">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
      <button className="filter-btn" onClick={handleFilterRestaurant}>
        {filterRestaurant ? "Show All" : "Top Rated"}
      </button>
      <div className="res-container">
        {filteredResObj.map((resObj, index) => (
          <Link key={resObj.info.id} to={`/restc/${resObj.info.id}`}>
            <RestaurantCard resobj={resObj} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
