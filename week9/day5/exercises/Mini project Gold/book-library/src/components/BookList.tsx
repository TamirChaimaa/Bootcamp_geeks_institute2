import React from 'react';
import { useAppSelector } from '../hooks';
import BookItem from './BookItem';

const BookList: React.FC = () => {
    const books = useAppSelector(state => state.books.books);

    if (books.length === 0) return <p>No books added yet.</p>;

    return (
        <div className="book-list">
            {books.map(book => (
                <BookItem key={book.id} book={book} />
            ))}
        </div>
    );
};

export default BookList;
