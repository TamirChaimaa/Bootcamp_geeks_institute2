import { createSlice,  } from '@reduxjs/toolkit';
import type { Book } from '../../model/Book';
import type { PayloadAction } from '@reduxjs/toolkit';

interface BooksState {
    books: Book[];
    filter: string;
    category: string | null;
}

const initialState: BooksState = {
    books: [],
    filter: '',
    category: null,
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBook(state, action: PayloadAction<Book>) {
            state.books.push(action.payload);
        },
        removeBook(state, action: PayloadAction<string>) {
            state.books = state.books.filter(book => book.id !== action.payload);
        },
        toggleReadStatus(state, action: PayloadAction<string>) {
            const book = state.books.find(b => b.id === action.payload);
            if (book) book.isRead = !book.isRead;
        },
        setFilter(state, action: PayloadAction<string>) {
            state.filter = action.payload;
        },
        setCategory(state, action: PayloadAction<string | null>) {
            state.category = action.payload;
        },
    },
});

export const { addBook, removeBook, toggleReadStatus, setFilter, setCategory } = booksSlice.actions;

export default booksSlice.reducer;
