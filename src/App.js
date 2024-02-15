import { useEffect, useState } from "react";
import axios from "axios";
import BookCreate from "./component/BookCreate";
import BookList from "./component/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBook = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBook();
  });
  // Adding Books
  const createBook = async title => {
    const response = await axios.post("http://localhost:3001/books", { title });
    const addedBooks = [...books, response.data];
    setBooks(addedBooks);
  };

  // Edit Books
  const editBook = async (id, newtitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newtitle,
    });
    const editedBooks = books.map(book => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(editedBooks);
  };

  // Deleting Books
  const deleteBook = async id => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const deletBooks = books.filter(book => {
      return book.id !== id;
    });
    setBooks(deletBooks);
  };

  return (
    <div className="App">
      <BookCreate onCreate={createBook} />
      <BookList books={books} onDelete={deleteBook} onEdit={editBook} />
    </div>
  );
}

export default App;
