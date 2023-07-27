import React from "react";
import { Link } from "react-router-dom";

const SingleItem = ({ id, img, name, info, glass }) => {
  return (
    <li key={id} className="w-50 min-h-max">
      <img src={img} width={"400px"} loading="lazy" className="min-h-min" />
      <div className="text px-2 h-36 flex flex-col">
        <h1 className="text-4xl font-bold">{name}</h1>
        <h3 className="text-2xl">{info}</h3>
        <h4>{glass}</h4>
        <Link
          to={`/coctail/${id}`}
          className="btn bg-green-500 p-2 mt-2 w-20 text-center"
        >
          Details
        </Link>
      </div>
    </li>
  );
};

export default SingleItem;
