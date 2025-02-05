import React from "react"; 
import BookSingleCard from "./BookSingleCard"; 

const BooksCard = ({ books = [] }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.length > 0 ? (
        books.map((item) => <BookSingleCard key={item._id} book={item} />)
      ) : (
        <p className="col-span-full text-center text-gray-500">
          No books available
        </p>
      )}
    </div>
  );
};

export default BooksCard;
