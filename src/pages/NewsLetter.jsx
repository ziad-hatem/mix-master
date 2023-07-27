import React from "react";
import { styled } from "styled-components";
import { Form, redirect, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await axios.post(newsletterUrl, data);
    toast.success(response.data.msg);
    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const NewsLetter = () => {
  const navigation = useNavigation();
  const isSubmit = navigation.state === "submitting";
  return (
    <Wrraper
      className="container flex justify-center items-center flex-col"
      style={{
        height: "70vh",
      }}
    >
      <h1 className="mb-6  text-5xl font-bold">Our Newsletter</h1>
      <Form className="flex flex-col w-96 gap-2" method="POST">
        <label htmlFor="name" className="">
          Name
        </label>
        <input type="text" name="name" required />

        <label htmlFor="lastName">Last Name</label>

        <input type="text" name="lastName" />

        <label htmlFor="email">Email</label>

        <input
          type="email"
          name="email"
          defaultValue={"test@test.com"}
          required
        />

        <button
          type="submit"
          disabled={isSubmit}
          className="bg-green-500 mt-4 p-1 rounded-md h-10 text-white"
        >
          {isSubmit ? <div className="spinner"></div> : "Submit"}
        </button>
      </Form>
    </Wrraper>
  );
};

const Wrraper = styled.div`
  input {
    outline: none;
    padding-left: 5px;
  }
`;

export default NewsLetter;
