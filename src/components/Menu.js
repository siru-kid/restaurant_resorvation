import React, { useEffect } from "react";

const Manu = ({ restoranId }) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch(`/api/menu/${restoranId}`)
      .then((response) => response.json())
      .then((data) => setMenuItems(data));
  }, [restoranId]);

  return;
  <div>
    {menuItems.map((item) => (
      <div key={item.id}>
        <h3>{item.id}</h3>
        <p>{item.description}</p>
        <p>Price:${item.price}</p>
      </div>
    ))}
  </div>;
};

export default Manu;
