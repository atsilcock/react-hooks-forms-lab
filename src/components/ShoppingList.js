import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchField, setSearchField] = useState("")
  
  console.log(searchField)

  function onSearchChange(event) {
    setSearchField(event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;

  }).filter((item) => item.name.toLowerCase().includes(searchField.toLowerCase()));

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={setItem}/>
      <Filter 
      onCategoryChange={handleCategoryChange} 
      onSearchChange={onSearchChange} 
      search={searchField}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
