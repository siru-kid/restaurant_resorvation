import React, { useEffect, useState } from "react";

const Manu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl =
        "https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser";
      const params = new URLSearchParams({
        "nutrition-type": "cooking",
        "category[0]": "generic-foods",
        "health[0]": "alcohol-free",
      });

      try {
        const response = await fetch(`${apiUrl}?${params.toString()}`, {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "5c9ed5f53emsh69245540eb922b4p12afebjsn310d4ec00253",
            "X-RapidAPI-Host":
              "edamam-food-and-grocery-database.p.rapidapi.com",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setMenuItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {menuItems.map((item) => (
        <div key={item.id}>
          <h3>{item.id}</h3>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Manu;
