import React from 'react';
import BookInput from './components/BookInput';
import BookList from './components/BookList';
import './index.css';

const App = () => {
  return (
    <div className="app-container" style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h1>Personal Book Library</h1>
      <BookInput />
      <BookList />
    </div>
  );
};

export default App;