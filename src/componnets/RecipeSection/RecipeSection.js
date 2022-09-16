import { useState, useEffect } from "react";
import recipes from "../../recipes.json";
import SingleTile from "../SingleTile/SingleTile";
import Sidebar from "../Sidebar/Sidebar";
import "./RecipeSection.css";

const RecipeSection = () => {
  const [recipesList, setRecipesList] = useState(recipes);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [array, setArray] = useState([]);
  const ingredients = [...new Set(array)];
  const [selected, setSelected] = useState([]);

  const handleSelected = (e) => {
    if (!selected.includes(e.target.alt)) {
      setSelected([...selected, e.target.alt]);
    } else {
      setSelected(
        selected.filter((item) => {
          return item !== e.target.alt;
        })
      );
    }
  };

  const updateFiltered = (arr) => {
    if (selected.length > 0) {
      setFilteredRecipes((recipesList) => [...arr]);
    }
    if (selected.length <= 0) {
      setFilteredRecipes(recipesList);
    }
  };

  // Tu robie ikonki składników
  useEffect(() => {
    recipesList.map((recipe) => {
      recipe.ingredients.map((ingredient) =>
        setArray((array) => [...array, ingredient.type])
      );
    });
    setFilteredRecipes(recipesList);
  }, []);

  // Tu filtruje przepisy
  useEffect(() => {
    let filtered = [];
    recipesList.filter((recipe) => {
      recipe.ingredients.some((ingredient) => {
        if (selected.includes(ingredient.type) && !filtered.includes(recipe)) {
          filtered.push(recipe);
        }
      });
    });
    updateFiltered(filtered);
  }, [selected]);

  return (
    <div className="recipes">
      <h2 className="recipes__title"> Recipes </h2>
      <div className="recipes__container">
        <Sidebar
          selected={selected}
          handleSelected={handleSelected}
          ingredients={ingredients}
        />

        <div className="recipes__recipes">
          {filteredRecipes.map((recipe) => {
            return <SingleTile key={recipe.id} recipe={recipe} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RecipeSection;
