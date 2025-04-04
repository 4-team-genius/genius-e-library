import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBookCategory } from "./api/v1/categories";

const BookCategory = () => {
  const { id } = useParams();

  useEffect(() => {
    const fetchBookCategory = async () => {
      const data = await getBookCategory(id);
    };
  });
  return (
    <div>
      <h2>Book Category</h2>
    </div>
  );
};
export default BookCategory;
