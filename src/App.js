import React, { useState } from "react";
import Categories from "./Categories";
import Item from "./Item";
import menu from "./data";
const allCategories = [
  "all",
  ...new Set(menu.map((item) => item.category)),
];

function App() {
  const [menuItems, setMenuItems] = useState(
    menu
  );
  const [categories, setCategories] = useState(
    allCategories
  );
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }

    const newItems = menu.filter(
      (item) => item.category === category
    );
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className='menu-section'>
        <div className='title'>
          <h2>Our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories
          categories={categories}
          filterItems={filterItems}
        />
        <Item menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
