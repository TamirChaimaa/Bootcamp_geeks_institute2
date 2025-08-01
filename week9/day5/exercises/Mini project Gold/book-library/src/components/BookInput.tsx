import React, { useState } from 'react';
import { useAppDispatch } from '../hooks';
import { addBook } from '../features/books/booksSlice';
import { BookItem } from '../model/Book';
import { v4 as uuidv4 } from 'uuid';

const BookInput: React.FC = () => {
    const dispatch = useAppDispatch();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim() || !author.trim() || !category.trim()) return;

        const newBook = new BookItem(uuidv4(), title.trim(), author.trim(), category.trim());
        dispatch(addBook(newBook));

        setTitle('');
        setAuthor('');
        setCategory('');
    };

    return (
        <form className="book-input-form" onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <input
                type="text"
                placeholder="Book Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
                style={{ marginRight: '10px' }}
            />
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={e => setAuthor(e.target.value)}
                required
                style={{ marginRight: '10px' }}
            />
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={e => setCategory(e.target.value)}
                required
                style={{ marginRight: '10px' }}
            />
            <button type="submit">Add Book</button>
        </form>
    );
};

export default BookInput;
