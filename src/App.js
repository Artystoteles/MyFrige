import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import RecipePage from "./pages/RecipePage/RecipePage";
import recipes from "./recipes.json";
import Logo from "./images/Logo.svg";
import RecipeSection from "./componnets/RecipeSection/RecipeSection";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:name" element={<RecipePage />} />
    </Routes>
  );
}

export default App;
