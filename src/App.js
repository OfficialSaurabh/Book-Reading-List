import { useState } from "react";
import BookCreate from "./component/BookCreate";
import BookList from "./component/BookList";

function App() {
  const [books, setBooks] = useState([]);

  // Adding Books
  const createBook = title => {
    const addedBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 1000),
        title: title,
      },
    ];
    setBooks(addedBooks);
  };

  // Edit Books
  const editBook = (id, newtitle) => {
    const editedBooks = books.map((book)=>{
      if(book.id === id){
        return {...book, title: newtitle}
      }
      return book;
    });
    setBooks(editedBooks);
  }
  
  // Deleting Books
  const deleteBook = id => {
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
