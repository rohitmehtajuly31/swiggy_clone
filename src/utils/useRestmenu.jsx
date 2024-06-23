
import React, { useEffect, useState } from "react";
import { MENU_API } from './constants';

 const useRestmenu = (resID) => {
    const [Restmenu, setRestmenu] = useState(null);
    useEffect(() => {
        fetchData();
      }, []);

    
    const fetchData = async () => {
        try {
          const response = await fetch(MENU_API+resID);
          const data = await response.json();
          console.log("Fetched data:", data);
          setRestmenu(data);
        } catch (error) {
          console.error("Error fetching restaurant data:", error);
          // Handle errors, maybe setRestmenu(null) or show an error message
        }
      };



  return Restmenu
}
export default useRestmenu
