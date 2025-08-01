import React from 'react';
import ProfileManager from './components/ProfileManager';
import SurveyFeedback from './components/SurveyFeedback';
import ContactForm from './components/ContactForm';
import { ContactProvider } from './context/ContactContext';
import AddContactForm from './components/AddContactForm';
import ContactList from './components/ContactList';
import FocusInput from './components/FocusInput';

const App = () => {
  return (
    <div>
      <h1>Exercise 1 : Managing User Profile with useReducer and TypeScript</h1>
      <ProfileManager /><br /><hr />

      <h1>Exercise 2: Managing Survey Feedback with useReducer and TypeScript</h1>
      <SurveyFeedback /><br /><hr />

      <h1>Exercise 3: Managing Form State with useReducer</h1>
      <ContactForm /><br /><hr />

      <h1>Exercise 4: Using useContext for Global State Management</h1>
      <ContactProvider>
        <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
          <h1>My Contacts App</h1>
          <AddContactForm />
          <ContactList />
        </div>
      </ContactProvider>
      <br /><hr />

      <h1>Exercise 5 : Managing DOM Elements with useRef and TypeScript</h1>
      <FocusInput />
    </div>
  );
};

export default App;