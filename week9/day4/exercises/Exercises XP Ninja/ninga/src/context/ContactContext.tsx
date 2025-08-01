import React, { createContext, useReducer, useContext, ReactNode, Dispatch } from 'react';

export type Contact = {
    id: number;
    name: string;
    email: string;
};

type ContactState = {
    contacts: Contact[];
};

type ContactAction =
    | { type: 'ADD_CONTACT'; payload: Contact }
    | { type: 'REMOVE_CONTACT'; payload: number }; // payload is id

const initialState: ContactState = {
    contacts: [],
};

function contactReducer(state: ContactState, action: ContactAction): ContactState {
    switch (action.type) {
        case 'ADD_CONTACT':
            return { contacts: [...state.contacts, action.payload] };
        case 'REMOVE_CONTACT':
            return { contacts: state.contacts.filter(c => c.id !== action.payload) };
        default:
            return state;
    }
}

type ContactContextType = {
    state: ContactState;
    dispatch: Dispatch<ContactAction>;
};

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const ContactProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(contactReducer, initialState);

    return (
        <ContactContext.Provider value={{ state, dispatch }}>
            {children}
        </ContactContext.Provider>
    );
};

export const useContacts = (): ContactContextType => {
    const context = useContext(ContactContext);
    if (!context) {
        throw new Error('useContacts must be used within a ContactProvider');
    }
    return context;
};
