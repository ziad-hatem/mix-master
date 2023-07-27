import React, { useRef, useState } from "react";
import "./searchform.css";
import { Form, useNavigation } from "react-router-dom";
const SearchFrom = ({ searchTerm }) => {
  const navigation = useNavigation();
  const isSubmit = navigation.state === "submitting";
  const handleSubmit = (e) => {
    // e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit} className="flex justify-center mt-20 mb-20">
      <input
        className=" w-64 border-green-500 outline-none p-1"
        type="text"
        name="search"
        defaultValue={searchTerm}
      />
      <button
        type="submit"
        disabled={isSubmit}
        className="bg-green-500 px-3 rounded-e-md text-white"
      >
        Search
      </button>
    </Form>
  );
};

export default SearchFrom;
