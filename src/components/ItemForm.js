import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [userInput, setUserInput] = useState("")
  const [category, setCategory] = useState("Produce")

  function handleUserInput(event){
    setUserInput(event.target.value)
  }

  console.log(userInput)
  //when the user selects the category in the drop down, update state to that new category

  function handleCategory(event){
    setCategory(event.target.value)
  }

  console.log(category)


  function addItem(event){
    event.preventDefault()
    const newItem = {
      id: uuid(),
      name: userInput,
      category: category,
    };

    onItemFormSubmit(newItem)
    
  }


  return (
    <form className="NewItem" onSubmit={addItem}>
      <label>
        Name:
        <input onChange={handleUserInput}
        type="text" 
        name="name" />
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
