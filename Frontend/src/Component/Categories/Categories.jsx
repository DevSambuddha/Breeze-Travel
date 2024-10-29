import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Categories.css";
import { useCategory } from "../../context/category-context";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [numberOfCategoriesToShow, setNumberOfCategoriesToShow] = useState(0);
  const { hotelCategory, setHotelCategory } = useCategory();

  const handleShowMoreRightClick = () => {
    setNumberOfCategoriesToShow((prev) => prev + 10);
  };
  const handleShowMoreLeftClick = () => {
    setNumberOfCategoriesToShow((prev) => prev - 10);
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://monkfish-app-ivioy.ondigitalocean.app/api/v1/category"
        );
        const categoriesToShow = data.slice(
          numberOfCategoriesToShow + 10 > data.length - 10
            ? data.length - 10
            : numberOfCategoriesToShow,
          numberOfCategoriesToShow > data.length
            ? data.length
            : numberOfCategoriesToShow + 10
        );
        setCategories(categoriesToShow);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [numberOfCategoriesToShow]);

  const handleCategoryClick = (category) => {
    setHotelCategory(category);
  };

  return (
    <section className="categories d-flex align-center gap-large cursor-pointer">
      {numberOfCategoriesToShow >= 10 && (
        <button
          className="button btn-category btn-left fixed cursor-pointer"
          onClick={handleShowMoreLeftClick}
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
      )}
      {categories &&
        categories.map(({ _id, category }) => (
          <span
            className={`${category === hotelCategory ? "border-buttom" : ""}`}
            key={_id}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </span>
        ))}
      {numberOfCategoriesToShow - 10 < categories.length && (
        <button
          className="button btn-category btn-right fixed cursor-pointer"
          onClick={handleShowMoreRightClick}
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      )}
    </section>
  );
};

export default Categories;
