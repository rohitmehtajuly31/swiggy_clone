import React, { useEffect, useState } from "react";
import RestaurantCard from "./Restaurantcard";
import resobjj from "../utils/mockdata";

const resobj = resobjj[0].cards.slice(3, 18);

const Body = () => {
  const [ResData, setResData] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log("Response data:", json);
      setResData(json.data.cards[3].card.card.gridElements.infoWithStyle.restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log("ResData:", ResData); // Loginging ResData inside the component body
  ResData.filter((rest)=>{
    console.log(rest.info.avgRating)
  }
  )

  const handleFilterRestaurant = () => {
    setFilterRestaurant(!filterRestaurant);
  };

  const filterResObj = filterRestaurant ? ResData.filter((res) => res.info.avgRating > 4) : ResData;

  return (
    <div className="body">
      <div className="search">Search</div>
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
