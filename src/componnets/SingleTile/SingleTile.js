import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./SingleTile.css";

const SingleTile = ({ recipe }) => {
  return (
    <div
      className="singleTile"
      style={{
        backgroundImage: `url(${recipe.image})`,
        backgroundPosition: `center`,
      }}
    >
      <div className="singleTile__fade">
        <h2 className="singleTile__title">{recipe.name}</h2>

        <button className="singleTile__button">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to={recipe.name}
          >
            SHOW MORE
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SingleTile;
