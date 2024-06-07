import { useState, useEffect } from "react";
import Logo from "../images/Logo.svg";
import RecipeSection from "../componnets/RecipeSection/RecipeSection";
import Footer from "../componnets/Footer/Footer";

const Home = () => {
  return (
    <div className="App">
      <div className="home">
        <div className="home__content">
          <h1 className="home__title">Welcome to</h1>
          <img src={Logo} />
        </div>
      </div>
      <RecipeSection />
      <Footer />
    </div>
  );
};

export default Home;
