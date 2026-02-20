import React from "react";

function Ingredients({ getRecipe, toggleRecipeShow, ref }) {
  const ingredientListItem = getRecipe.map((thing, index) => (
    <li key={index}>{thing}</li>
  ));

  return (
    <main>
      <section>
        <div className="list">
          <h1>Ingredients on hand:</h1>
          <ul>{ingredientListItem}</ul>
        </div>

        {getRecipe.length > 3 && (
          <div className="getRecipe" ref={ref}>
            <div className="getRecipeText">
              <h2>Ready for a recipe?</h2>
              <p>Generate a recipe from your list of ingredients</p>
            </div>
            <button onClick={toggleRecipeShow}>Get a recipe</button>
          </div>
        )}
      </section>
    </main>
  );
}

export default Ingredients;
