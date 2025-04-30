import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets/frontend_assets/assets";
const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        “Explore our deliciously curated online menu, featuring a wide range of
        mouthwatering dishes made with the freshest ingredients, crafted to
        satisfy every craving—from comforting classics to exciting new flavors,
        all available at your fingertips!
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() => {
                setCategory((prev) =>
                  prev === item.menu_name ? "ALL" : item.menu_name
                );
              }}
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>

      <hr />
    </div>
  );
};

export default ExploreMenu;
