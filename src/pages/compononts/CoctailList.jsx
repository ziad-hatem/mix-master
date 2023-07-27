import React from "react";
import SingleItem from "./SingleItem";
const CoctailList = ({ drinks }) => {
  const formatedData = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;

    return {
      id: idDrink,
      name: strDrink,
      img: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });
  return (
    <ul
      className="flex flex-wrap gap-4 justify-center"
      style={{ width: "80vw" }}
    >
      {formatedData.map((item) => {
        return <SingleItem key={item.id} {...item} />;
      })}
    </ul>
  );
};

export default CoctailList;
