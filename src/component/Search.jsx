import React from "react";

function Search({ onAdd }) {
  //function to add new ingredient and call the parent's function
  function addRecipe(formData) {
    const newIng = formData.get("ingredient");
    onAdd(newIng);
  }

  return (
    <div className="Search">
      <form action={addRecipe} className="add-ingrrdient">
        <input
          placeholder="e.g, oregano"
          type="text"
          aria-label="add ingredient"
          name="ingredient"
        />
        <button type="submit">+Add Ingredient</button>
      </form>
    </div>
  );
}

export default Search;
