import React from "react";
export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function handleSubmit(event) {
    event.preventDefault();
    //console.log("Ingredient added");
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");

    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    console.log(newIngredient);
    //ingredients.push(newIngredient); // Add the new ingredient to the ingredients array
    console.log(ingredients);
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>{ingredientsListItems}</ul>
    </main>
  );
}
