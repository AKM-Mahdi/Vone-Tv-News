import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsSummeryCard from "../../SHARED++/NewsSummeryCard/NewsSummeryCard";

const Category = () => {
  const alLCategory = useLoaderData();
  console.log(alLCategory);
  return (
    <div>
      {alLCategory.map((news) => (
        <NewsSummeryCard key={news._id} news={news}></NewsSummeryCard>
      ))}
    </div>
  );
};

export default Category;
