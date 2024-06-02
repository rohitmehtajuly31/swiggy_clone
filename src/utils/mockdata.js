const resobjj=[
  {"cards": [
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
        "collectionId": "80364",
        "title": "Pav Bhaji",
        "description": "Flavourful Pav Bhaji that will remind you of the streets of Mumbai in every bite.",
        "imageId": "v1674029944/PC_Creative%20refresh/3D_bau/collections_new/Pav_Bhaji.png",
        "aspectRatio": "3.44",
        "cta": {
          "link": "swiggy://collectionV2?collection_id=80364&tags=layout_PavBhaji_Contextual,pav_bhaji",
          "type": "collectionv2"
        },
        "type": "COLLECTION_MASTHEAD_TYPE_IMAGE_WITH_TEXT",
        "count": "17 restaurants"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
        "sortConfigs": [
          {
            "key": "relevance",
            "title": "Relevance(Default)",
            "selected": true,
            "defaultSelection": true
          },
          {
            "key": "deliveryTimeAsc",
            "title": "DeliveryTime"
          },
          {
            "key": "modelBasedRatingDesc",
            "title": "Rating"
          },
          {
            "key": "costForTwoAsc",
            "title": "Cost:LowtoHigh"
          },
          {
            "key": "costForTwoDesc",
            "title": "Cost:HightoLow"
          }
        ],
        "restaurantCount": 17,
        "facetList": [
          {
            "label": "Veg/Non-veg",
            "id": "isVeg",
            "selection": "SELECT_TYPE_SINGLESELECT",
            "facetInfo": [
              {
                "label": "Pure veg",
                "id": "isVegfacetquery2",
                "analytics": {
                  
                },
                "openFilter": true
              },
              {
                "label": "Non Veg",
                "id": "isVegfacetquery3",
                "analytics": {
                  
                }
              }
            ],
            "viewType": "VIEW_TYPE_FLATTENED",
            "subLabel": "Filter by"
          },
          {
            "label": "Delivery Time",
            "id": "deliveryTime",
            "selection": "SELECT_TYPE_SINGLESELECT",
            "facetInfo": [
              {
                "label": "Less than 45 mins",
                "id": "deliveryTimefacetquery3",
                "analytics": {
                  
                }
              }
            ],
            "viewType": "VIEW_TYPE_FLATTENED",
            "subLabel": "Filter by"
          },
          {
            "label": "Cost for two",
            "id": "costForTwo",
            "selection": "SELECT_TYPE_MULTISELECT",
            "facetInfo": [
              {
                "label": "Rs. 300-Rs. 600",
                "id": "costForTwofacetquery3",
                "analytics": {
                  
                },
                "openFilter": true
              },
              {
                "label": "Less than Rs. 300",
                "id": "costForTwofacetquery5",
                "analytics": {
                  
                },
                "openFilter": true
              }
            ],
            "viewType": "VIEW_TYPE_HALF_CARD",
            "subLabel": "Filter by"
          }
        ]
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
        "layout": {
          "rows": 1,
          "widgetPadding": {
            "left": 16,
            "top": 20,
            "right": 16,
            "bottom": 16
          },
          "scrollBar": {
            
          },
          "widgetTheme": {
            "defaultMode": {
              "backgroundColour": "#FFFFFF",
              "theme": "THEME_TYPE_LIGHT"
            },
            "darkMode": {
              "backgroundColour": "#1B3028",
              "theme": "THEME_TYPE_DARK"
            }
          }
        },
        "id": "restaurantCountWidget",
        "gridElements": {
          "infoWithStyle": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            "text": "Restaurants to explore",
            "headerStyling": {
              "textSize": 15,
              "textColor": "text_color_highest_emphasis",
              "textFontName": "FONT_NAME_HEADER_H5",
              "maxLines": 1
            }
          }
        }
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "423091",
          "name": "Fiery Grills",
          "cloudinaryImageId": "foe59ivae9yprffndmvv",
          "locality": "Phase-7",
          "areaName": "Phase-7 Mohali",
          "costForTwo": "₹149 for two",
          "cuisines": [
            "Chinese",
            "Snacks",
            "Fast Food",
            "Street Food",
            "Beverages",
            "Italian",
            "Rolls & Wraps",
            "American",
            "Pastas"
          ],
          "avgRating": 3.9,
          "parentId": "79345",
          "avgRatingString": "3.9",
          "totalRatingsString": "100+",
          "promoted": true,
          "adTrackingId": "cid=13973987~p=1~adgrpid=13973987#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=423091~eid=eb8af155-54f9-4817-9d7b-f7f9b77e3856~srvts=1717267142086~collid=80364",
          "sla": {
            "deliveryTime": 39,
            "lastMileTravel": 11.1,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "11.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-08 00:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "maxDuration": "3000",
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
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=423091&source=collection&query=Pav%20bhaji",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_Contextual"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "422909",
          "name": "Chandigarh Cafe",
          "cloudinaryImageId": "paufps05wmkurgifamua",
          "locality": "North Mohali",
          "areaName": "Industrial Area Phase 7 Mohali",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Healthy Food",
            "Snacks",
            "American",
            "Fast Food",
            "Street Food",
            "Chinese",
            "Beverages"
          ],
          "avgRating": 4.2,
          "parentId": "313815",
          "avgRatingString": "4.2",
          "totalRatingsString": "1K+",
          "promoted": true,
          "adTrackingId": "cid=13973984~p=2~adgrpid=13973984#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=422909~eid=007de581-e027-44ca-92ce-3d85fa995fe7~srvts=1717267142086~collid=80364",
          "sla": {
            "deliveryTime": 38,
            "lastMileTravel": 11.1,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "11.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-08 00:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "maxDuration": "3000",
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
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=422909&source=collection&query=Pav%20bhaji",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_Contextual"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "478342",
          "name": "Wok & Bite",
          "cloudinaryImageId": "f275a911b1eccfaaf68e058e3e7a2a6c",
          "locality": "South Chd",
          "areaName": "Industrial Area",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "American",
            "Continental",
            "Italian",
            "Punjabi",
            "Chinese",
            "Tandoor",
            "Mughlai",
            "Afghani",
            "Thalis",
            "Biryani"
          ],
          "avgRating": 4.2,
          "parentId": "487376",
          "avgRatingString": "4.2",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 43,
            "lastMileTravel": 5.8,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "5.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-02 02:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "brand",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "description": "",
                      "shortDescription": "brand",
                      "fontColor": "#7E808C"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "imageBased": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹115"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "maxDuration": "3000",
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
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=478342&source=collection&query=Pav%20bhaji",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_Contextual"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "857632",
          "name": "Thirteen Cafe Restaurant",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/1e739fb6-746a-4b41-887d-0dc0dbee70e4_857632.jpg",
          "locality": "Nac Manimajra",
          "areaName": "Panchkula",
          "costForTwo": "₹399 for two",
          "cuisines": [
            "Indian"
          ],
          "avgRating": 4.6,
          "parentId": "504039",
          "avgRatingString": "4.6",
          "totalRatingsString": "20+",
          "sla": {
            "deliveryTime": 41,
            "lastMileTravel": 7,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "7.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-02 03:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "UPTO ₹80"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "maxDuration": "3000",
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
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=857632&source=collection&query=Pav%20bhaji",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_Contextual"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "875991",
          "name": "Thali Express",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/25/ced63297-e3e3-41ec-904f-07b29edb9a7b_875991.jpg",
          "locality": "North Mohali",
          "areaName": "North Mohali",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Default"
          ],
          "avgRating": 2.9,
          "veg": true,
          "parentId": "10007",
          "avgRatingString": "2.9",
          "totalRatingsString": "2",
          "sla": {
            "deliveryTime": 52,
            "lastMileTravel": 8.8,
            "serviceability": "SERVICEABLE",
            "slaString": "50-55 mins",
            "lastMileTravelString": "8.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-02 07:58:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textExtendedBadges": {
                
              },
              "textBased": {
                
              },
              "imageBased": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "maxDuration": "3000",
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
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=875991&source=collection&query=Pav%20bhaji",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_Contextual"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "860943",
          "name": "Chaatorezz",
          "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/4/13/f5afeaf7-0a0c-4a35-93b0-9433e6fa60ce_b91db465-5b9e-475a-9d7e-2d2916b38203.jpg_compressed",
          "locality": "Phase 3",
          "areaName": "North Mohali",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Chinese",
            "Beverages",
            "Fast Food"
          ],
          "avgRating": 3.3,
          "parentId": "505376",
          "avgRatingString": "3.3",
          "totalRatingsString": "6",
          "sla": {
            "deliveryTime": 46,
            "lastMileTravel": 8.8,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "8.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-02 10:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textExtendedBadges": {
                
              },
              "textBased": {
                
              },
              "imageBased": {
                
              }
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "maxDuration": "3000",
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
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "4.2",
              "ratingCount": "100+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=860943&source=collection&query=Pav%20bhaji",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_Contextual"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "788549",
          "name": "Golgappa",
          "cloudinaryImageId": "edd8251018fd0f9d6a417ab58f2eb53d",
          "locality": "Sector 70",
          "areaName": "Sector 70",
          "costForTwo": "₹100 for two",
          "cuisines": [
            "Beverages",
            "Snacks",
            "North Indian"
          ],
          "avgRating": 3.7,
          "parentId": "88608",
          "avgRatingString": "3.7",
          "totalRatingsString": "50+",
          "sla": {
            "deliveryTime": 34,
            "lastMileTravel": 9.1,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "9.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-02 05:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textExtendedBadges": {
                
              },
              "textBased": {
                
              },
              "imageBased": {
                
              }
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "maxDuration": "3000",
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
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=788549&source=collection&query=Pav%20bhaji",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_Contextual"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "793545",
          "name": "tealogy",
          "cloudinaryImageId": "aee0c69311dd9c131dd51bd8efe0aed9",
          "locality": "GMS Road",
          "areaName": "North Mohali",
          "costForTwo": "₹100 for two",
          "cuisines": [
            "Beverages",
            "Fast Food",
            "Chinese",
            "Pizzas"
          ],
          "avgRating": 3.7,
          "parentId": "202846",
          "avgRatingString": "3.7",
          "totalRatingsString": "20+",
          "sla": {
            "deliveryTime": 42,
            "lastMileTravel": 9.1,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "9.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-02 23:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "maxDuration": "3000",
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
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=793545&source=collection&query=Pav%20bhaji",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_Contextual"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "346453",
          "name": "Daily Healthy Rasoi",
          "cloudinaryImageId": "13acb3a3681b880221c7d085fa018531",
          "locality": "Mohali",
          "areaName": "Sector 70",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Healthy Food",
            "Thalis",
            "Biryani",
            "Punjabi",
            "Chinese",
            "Tandoor",
            "Mughlai",
            "Afghani"
          ],
          "avgRating": 3.9,
          "parentId": "67953",
          "avgRatingString": "3.9",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 47,
            "lastMileTravel": 9.5,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "9.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-02 15:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "brand",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "description": "",
                      "shortDescription": "brand",
                      "fontColor": "#7E808C"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "maxDuration": "3000",
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
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=346453&source=collection&query=Pav%20bhaji",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_Contextual"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "420992",
          "name": "Multani Paratha",
          "cloudinaryImageId": "tdvatz4pllhw34fnmyaz",
          "locality": "Mohali",
          "areaName": "Sector 70",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "North Indian",
            "Punjabi",
            "Tandoor",
            "Thalis"
          ],
          "avgRating": 3.9,
          "parentId": "234305",
          "avgRatingString": "3.9",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 44,
            "lastMileTravel": 9.5,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "9.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-06-02 15:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textExtendedBadges": {
                
              },
              "textBased": {
                
              }
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "maxDuration": "3000",
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
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=420992&source=collection&query=Pav%20bhaji",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_Contextual"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  }
],
"firstOffsetRequest": true,
"nextFetch": 3
},]

export default resobjj