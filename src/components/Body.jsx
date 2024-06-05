import React, { useEffect, useState } from "react";
import RestaurantCard from "./Restaurantcard";
import ReactShimmer from "./ReactShimmer";
import resobjj from "../utils/mockdata";

const Body = () => {
  const [ResData, setResData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterRestaurant, setFilterRestaurant] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log("Response data:", json);
      setResData(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFilterRestaurant = () => {
    setFilterRestaurant(!filterRestaurant);
  };

  const filterResObj = filterRestaurant
    ? ResData.filter((res) => res.info.avgRating > 4)
    : ResData.filter((obj) =>
        obj.info.name.toLowerCase().includes(search.toLowerCase())
      );

  return ResData.length === 0 ? (
    <ReactShimmer />
  ) : (
    <div className="body">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
      <button className="filter-btn" onClick={handleFilterRestaurant}>
        {filterRestaurant ? "Show All" : "Top Rated Button"}
      </button>
      <div className="res-container">
        {filterResObj.map((resObj, index) => (
          <RestaurantCard key={index} resobj={resObj} />
        ))}
      </div>
    </div>
  );
};

export default Body;
