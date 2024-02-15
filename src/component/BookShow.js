import React, { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handelEdit = () => {
    setShowEdit(!showEdit);
  };

  const handelDelete = () => {
    onDelete(book.id);
  };

  const handleSubmit = (id, newtitle) => {
    setShowEdit(false);
    onEdit(book.id, newtitle);
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }
  return (
    <div
    style={{
      margin: "10px"
    }}
    >
      <img src={`https://picsum.photos/seed/${book.id}/200`} alt="" />
      {content}
      <button onClick={handelEdit}> Edit</button>
      <button onClick={handelDelete}>X</button>
    </div>
  );
}

export default BookShow;
