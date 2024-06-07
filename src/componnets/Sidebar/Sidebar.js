import { useEffect, useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ ingredients, handleSelected, selected }) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="sidebar">
      <h2 className="sidebar__title"> Ingredients </h2>
      <input
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        className="sidebar__input"
        placeholder="Search for ingredient..."
      />
      <div className="sidebar__ingredients">
        {ingredients
          .filter((val) => {
            if (searchTerm == "") {
              return val;
            } else if (val.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val;
            }
          })

          .map((ingr) => {
            return (
              <button
                onClick={(e) => handleSelected(e)}
                value={ingr}
                key={ingredients.indexOf(ingr)}
                className={
                  selected.includes(ingr)
                    ? "sidebar__button--active"
                    : "sidebar__button"
                }
              >
                <i>
                  <img alt={ingr} src={`../../images/${ingr}.svg`} />
                </i>
              </button>
            );
          })}
      </div>
    </div>
  );
};

export default Sidebar;
