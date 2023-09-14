import React from "react";
import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
  const renderedBooks = books.map(book => {
    return (
      <div>
        <BookShow
          key={book.id}
          book={book}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      </div>
    );
  });
  return (
    <div>
      Reading List
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          
        }}
      >
        {renderedBooks}
      </div>
    </div>
  );
}

export default BookList;
