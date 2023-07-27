import React, { useEffect } from "react";
import { useRouteError, Navigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const SinglePageError = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="mt-52 text-5xl">There Was An Error...</h1>
      <Link to={"/"} className="p-1 bg-green-500">
        Back Home
      </Link>
    </div>
  );
};

export default SinglePageError;
