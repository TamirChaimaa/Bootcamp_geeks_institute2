import React, { useState } from 'react';
import { useContacts, type Contact } from '../context/ContactContext';

const AddContactForm = () => {
    const { dispatch } = useContacts();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !email.trim()) return;

        const newContact: Contact = {
            id: Date.now(), // simple unique id
            name,
            email,
        };

        dispatch({ type: 'ADD_CONTACT', payload: newContact });

        setName('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
            <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ marginRight: 10 }}
            />
            <input
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ marginRight: 10 }}
            />
            <button type="submit">Add Contact</button>
        </form>
    );
};

export default AddContactForm;
