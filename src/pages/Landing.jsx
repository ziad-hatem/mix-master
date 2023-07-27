import { useLoaderData } from "react-router-dom";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { SearchFrom, CoctailList } from "../compononts";
import { QueryClient, useQuery } from "@tanstack/react-query";
const coctailSearch = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

const searchCoctailQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await axios.get(`${coctailSearch}${searchTerm}`);
      return response.data.drinks;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search") || "";
    await queryClient.ensureQueryData(searchCoctailQuery(searchTerm));
    return { searchTerm };
  };

const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCoctailQuery(searchTerm));

  // if (isLoading) {
  //   return (
  //     <div class="lds-ring">
  //     <div></div>
  //     <div></div>
  //     <div></div>
  //     <div></div>
  //   </div>
  //   )
  // }

  return (
    <div className="flex flex-col items-center">
      <SearchFrom searchTerm={searchTerm} />
      <CoctailList drinks={drinks} />
    </div>
  );
};

export default Landing;
