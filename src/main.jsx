import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const Header=()=>{
  return(
    <div className="header">
      <div className="logo">
        <img src="https://seeklogo.com/images/M/mrbeast-burger-logo-91E3435A9E-seeklogo.com.png" alt="" />
      </div>
      <div className="nav_item">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact US</li>
          <li>Cart</li>
          
        </ul>
      </div>
    </div>
  )
};
const RestaurantCard=(props)=>{
  return(
    <div className="res-card" >
      <img className='res-logo' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ac3df9254bed073f249ea176ca62265e"  alt="res name" />
      <h3>{props.resobj.info.name}</h3>
      <h4>Rating: {props.resobj.info.avgRating}</h4>
      <h4>Cuisine: {props.resobj.info.cuisines.join(', ')}</h4>
      console.log(props.resobj.info)
    </div>
  )
};
const resobj=[
  {
    "info": {
      "id": "718482",
      "name": "Chinese Wok",
      "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
      "locality": "Phase 10",
      "areaName": "Phase 10",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Chinese",
        "Asian",
        "Tibetan",
        "Desserts"
      ],
      "avgRating": 4.3,
      "parentId": "61955",
      "avgRatingString": "4.3",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 43,
        "lastMileTravel": 8.2,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "8.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-30 00:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/chinese-wok-phase-10-chandigarh-718482",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "39978",
      "name": "Sindhi Sweets",
      "cloudinaryImageId": "ac3df9254bed073f249ea176ca62265e",
      "locality": "Sector 17",
      "areaName": "Sector 17",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Sweets",
        "South Indian",
        "Chinese",
        "Chaat",
        "Street Food",
        "Continental",
        "Italian",
        "Bakery",
        "Thalis",
        "Beverages",
        "Desserts"
      ],
      "avgRating": 4.5,
      "parentId": "4536",
      "avgRatingString": "4.5",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 0.9,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "0.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-29 21:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Mithai.png",
            "description": "Delivery!"
          },
          {
            "imageId": "Rxawards/_CATEGORY-Snacks.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Mithai.png"
                }
              },
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Snacks.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/sindhi-sweets-sector-17-chandigarh-39978",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "555174",
      "name": "Uttam Sweets Bakery & Restaurant",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/27/863202cb-4195-46d1-b916-65a81072122b_555174.jpg",
      "areaName": "Sector 34",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Sweets",
        "Bakery",
        "North Indian",
        "Tandoor",
        "Desserts",
        "Chaat",
        "Fast Food"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "258627",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 19,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "15-20 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-29 22:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/uttam-sweets-bakery-and-restaurant-sector-34-chandigarh-555174",
      "type": "WEBLINK"
    }
  },
  {
    "info": {
      "id": "616716",
      "name": "Ghar ka Khana by EatFit",
      "cloudinaryImageId": "1d578bb732e03c6f591790eb7d2d88e2",
      "locality": "Chandigarh",
      "areaName": "Sector 24 D",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Home Food",
        "North Indian",
        "Healthy Food",
        "Thalis",
        "Desserts",
        "Indian",
        "Punjabi"
      ],
      "avgRating": 4.4,
      "parentId": "422576",
      "avgRatingString": "4.4",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 4,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "4.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-05-30 01:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "",
                  "fontColor": "#7E808C",
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹90"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/ghar-ka-khana-by-eatfit-sector-24-d-chandigarh-616716",
      "type": "WEBLINK"
    }
  }]
const Body=()=>{
  return(
    <div className="body">
      <div className="search">Search</div>
        <div className="res-container">
        {resobj.map((resobj,index)=>(
            <RestaurantCard key={index} resobj={resobj}/>
          ))}
       


        </div>
      
    </div>
  );
};

const Applayout=()=>{
  return(
    <React.Fragment>
      <Header />
      <Body />
    </React.Fragment>

  )
};

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Applayout />
  
)
