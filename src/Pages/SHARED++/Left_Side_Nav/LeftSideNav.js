import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/category-item").then((res) =>
      res.json().then((data) => setCategories(data))
    );
  }, []);
  //   console.log(categories);

  return (
    <div>
      <p>All Category{categories.length}</p>
      {categories.map((category) => (
        <p key={category.id}>
          <Link to={`/category/${category.id}`}>key={category.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSideNav;
