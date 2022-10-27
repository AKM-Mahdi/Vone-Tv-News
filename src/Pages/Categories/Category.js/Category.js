import React from "react";
import { useLoaderData } from "react-router-dom";

const Category = () => {
  const news = useLoaderData();
  return (
    <div>
      <p>this is category{news.length}</p>
    </div>
  );
};

export default Category;
