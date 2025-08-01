import React from 'react';
import { useAppDispatch } from '../hooks';
import { toggleReadStatus, removeBook } from '../features/books/booksSlice';
import type { Book } from '../model/Book';

interface Props {
    book: Book;
}

const BookItem: React.FC<Props> = ({ book }) => {
    const dispatch = useAppDispatch();

    return (
        <div className="book-item">
            <div>
                <strong>{book.title}</strong> by {book.author} [{book.category}]
                <br />
                Status: <em>{book.isRead ? 'Read' : 'Unread'}</em>
            </div>
            <div>
                <button onClick={() => dispatch(toggleReadStatus(book.id))} className="toggle-button" style={{ marginRight: '10px' }}>
                    Toggle Read
                </button>
                <button onClick={() => dispatch(removeBook(book.id))} className="remove-button">
                    Remove
                </button>
            </div>
        </div>
    );
};

export default BookItem;
