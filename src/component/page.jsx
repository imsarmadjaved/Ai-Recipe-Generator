import React from "react";
import Search from "./Search";
import GetRecipe from "./Ingredients";
import GetInstruction from "./getInstruction";
import { getRecipeFromAI } from "../ai";

function Page() {
  const [ingredient, newIngredient] = React.useState([]);
  const [recipeShown, setRecipeShown] = React.useState(false);
  const [recipe, setRecipe] = React.useState("");
  const recipeSection = React.useRef(null);

  React.useEffect(() => {
    if (recipe !== "" && recipeSection !== null) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [recipe]);

  function addIngredient(newIng) {
    newIngredient((prev) => [...prev, newIng]);
  }
  async function handleClick() {
    const result = await getRecipeFromAI(ingredient);

    setRecipe(result);

    setRecipeShown(true);
  }

  function clearAll() {
    newIngredient([]);

    setRecipe("");

    setRecipeShown(false);
  }

  return (
    <main className="page">
      <div className="main">
        <Search onAdd={addIngredient} />
      </div>

      <div>
        {ingredient.length > 0 && (
          <GetRecipe
            getRecipe={ingredient}
            toggleRecipeShow={handleClick}
            ref={recipeSection}
          />
        )}
      </div>

      {recipe && (
        <>
          <GetInstruction recipe={recipe} />

          <button className="clearBtn" onClick={clearAll}>
            Clear
          </button>
        </>
      )}
    </main>
  );
}

export default Page;
