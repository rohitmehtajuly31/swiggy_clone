import { useEffect, useState } from "react";
import { MENU_API } from './constants'; // Make sure MENU_API is correctly imported

const useRestmenu = (resID) => {
  const [Restmenu, setRestmenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(MENU_API + resID);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Fetched data:", data);
      setRestmenu(data);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
      // Handle errors, e.g., setRestmenu(null) or show an error message
    }
  };

  return Restmenu;
};

export default useRestmenu;
