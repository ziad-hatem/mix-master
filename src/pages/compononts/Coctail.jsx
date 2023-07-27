import axios from "axios";
import React from "react";
import { useLoaderData, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
const singleCoctailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
import { useQuery } from "@tanstack/react-query";

const singleCoctailQuery = (id) => {
  return {
    queryKey: ["cocktail", id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCoctailUrl}${id}`);
      return data;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    await queryClient.ensureQueryData(singleCoctailQuery(id));
    return { id };
  };

const Coctail = () => {
  const { id } = useLoaderData();
  const { data } = useQuery(singleCoctailQuery(id));
  if (!data) return <Navigate to="/" />;
  const singleDrink = data.drinks[0];
  const {
    idDrink,
    strDrink,
    strDrinkThumb,
    strAlcoholic,
    strGlass,
    strCategory,
  } = singleDrink;
  const vaildingrident = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith("strIngredient") && singleDrink[key] !== null,
    )
    .map((key) => singleDrink[key])
    .join(", ");

  return (
    <div
      key={id}
      className="flex flex-col items-center justify-center"
      style={{ width: "100vw", height: "80vh" }}
    >
      <Link to={"/"} className="bg-green-500 px-2 py-1 mb-5">
        Back Home
      </Link>
      <div className="title mb-10 text-5xl">
        <h1>{strDrink}</h1>
      </div>
      <div className="container flex justify-center">
        <div className="image w-fit">
          <img src={strDrinkThumb} width={"400px"} />
        </div>
        <div className="info ml-5">
          <ul className="flex flex-col gap-10 mt-5">
            <li>
              <span className="bg-green-500 p-1">name :</span> {strDrink}
            </li>
            <li>
              <span className="bg-green-500 p-1">Category :</span> {strCategory}
            </li>
            <li>
              <span className="bg-green-500 p-1">Info :</span> {strAlcoholic}
            </li>
            <li>
              <span className="bg-green-500 p-1">Glass :</span> {strGlass}
            </li>
            <li>
              <span className="bg-green-500 p-1">Ingredients :</span>{" "}
              {vaildingrident}
            </li>
            <li>
              <span className="bg-green-500 p-1">Instructions :</span>{" "}
              {strDrink}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Coctail;
