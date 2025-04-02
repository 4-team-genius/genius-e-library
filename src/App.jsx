import BookCategory from "./BookCategory";
import { useEffect, useState } from "react";

const App = () => {
  const getUsers = async () => {
    try {
      const response = await fetch(
        `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me`,
      )
    }
    catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const createUser = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: nameInput,
            email: emailInput,
            password: passwordInput,
          }),
        }
      )
    }
    catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const logIn = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: emailInput,
            password: passwordInput,
          }),
        }
      )
    }
    catch (error) {
      console.error("Error logging in:", error);
    }
  }
};



export default App;