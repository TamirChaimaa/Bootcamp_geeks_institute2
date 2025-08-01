import React from 'react';
import { useContacts } from '../context/ContactContext';

const ContactList = () => {
    const { state, dispatch } = useContacts();

    const handleRemove = (id: number) => {
        dispatch({ type: 'REMOVE_CONTACT', payload: id });
    };

    return (
        <div>
            <h2>Contact List</h2>
            {state.contacts.length === 0 ? (
                <p>No contacts yet</p>
            ) : (
                <ul>
                    {state.contacts.map(contact => (
                        <li key={contact.id}>
                            {contact.name} ({contact.email})
                            <button
                                onClick={() => handleRemove(contact.id)}
                                style={{ marginLeft: '10px' }}
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ContactList;
