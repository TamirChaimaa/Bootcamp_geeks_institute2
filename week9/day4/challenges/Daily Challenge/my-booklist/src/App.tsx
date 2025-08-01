import React, { useState } from 'react';
import type { Book } from './types';
import List from './components/List';

const initialBooks: Book[] = [
  { id: 1, title: "1984", author: "George Orwell" },
  { id: 2, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
]

const App = () => {

  const [books, setBooks] = useState<Book[]>(initialBooks);

  const [title , setTitle] = useState('');
  const [author, setAuthor] = useState("");

  const addBook = () => {
    if (!title.trim() || !author.trim()) {
      alert('pls enter both title and author')
      return;
    }

    const newBook: Book = {
      id: books.length + 1,
      title: title.trim(),
      author: author.trim(),
    };

    setBooks([...books, newBook]);
    setTitle('');
    setAuthor('');
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Book List</h1>

      <div style={{ marginBottom: "1rem" }}>
        <input type="text" placeholder='Book title' value={title} onChange={(e) => setTitle(e.target.value)} style={{ padding: "0.5rem", marginRight: "0.5rem", width: "45%" }} />
        <input type="text" placeholder='Author' value={author} onChange={(e) => setAuthor(e.target.value)} style={{ padding: "0.5rem", marginRight: "0.5rem", width: "45%" }} />
      </div>

      <button onClick={addBook} style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>Add Book</button>
      <List
        items={books}
        renderItem={(book) => (
          <div>
            <b>{book.title}</b> by {book.author}
          </div>
        )}
      />
    </div>
  );
};

export default App;