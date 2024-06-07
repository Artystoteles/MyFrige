import React from "react";
import { useParams } from "react-router-dom";
import recipes from "../../recipes.json";
import "./RecipePage.css";

const RecipePage = () => {
  const { name } = useParams();

  const dish = recipes.find((recipe) => {
    return recipe.name === name;
  });

  console.log(dish.ingredients);

  return (
    <div className="RecipePage">
      <div
        style={{
          backgroundImage: `url(${dish.image})`,
          backgroundPosition: `center`,
          backgroundRepeat: `no-repeat`,
          backgroundSize: `cover`,
        }}
        className="RecipePage__hero"
      >
        <h2 className="RecipePage__heading">{dish.name}</h2>
      </div>
      <div className="RecipePage__content">
        <div className="RecipePage__sidebar">
          <h2>Ingredients:</h2>
          <hr></hr>
          <div className="RecipePage__ingredientsContainer">
            <ul className="RecipePage__ingredientsList">
              {dish.ingredients.map((ingr) => {
                return (
                  <li
                    key={dish.ingredients.indexOf(ingr)}
                    className="RecipePage__ingredient"
                  >
                    {ingr.amount} {ingr.unit} {ingr.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="RecipePage__recipe">
          <div className="RecipePage__recipeContainer">
            <h2>Recipe:</h2>
            <hr></hr>
            <ol>
              {dish.method.map((mthd) => {
                return (
                  <li
                    key={dish.method.indexOf(mthd)}
                    className="RecipePage__method"
                  >
                    <span>{mthd}</span>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
