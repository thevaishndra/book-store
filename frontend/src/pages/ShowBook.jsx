import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton.jsx";
import Spinner from "../components/Spinner.jsx";

const ShowBook = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true); // Start as true to show spinner while loading
  const { id } = useParams();

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${apiUrl}/${id}`)
      .then((response) => {
        setBook(response.data.book);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the book data!", error);
        setLoading(false);
      });
  }, [id]); // Re-run the effect when 'id' changes

   if (loading) {
     return <Spinner />; 
   }

   if (!book) {
     return <div>Book not found</div>; 
   }

  // Handle the case where book properties are undefined or invalid
  const handleDate = (date) => {
    return date ? new Date(date).toString() : "Invalid Date";
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{book._id || "N/A"}</span> 
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Title</span>
            <span>{book.title || "N/A"}</span>{" "}
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Author</span>
            <span>{book.author || "N/A"}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Publish Year</span>
            <span>{book.publishYear || "N/A"}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Genre</span>
            <span>{book.genre || "N/A"}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span>{new Date(book.createdAt).toString() || "Invalid Date"}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
            <span>{new Date(book.updatedAt).toString() || "Invalid Date"}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
