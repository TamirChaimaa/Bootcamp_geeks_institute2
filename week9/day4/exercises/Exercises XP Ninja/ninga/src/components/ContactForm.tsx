import React, { useReducer } from 'react';

type FormState = {
    name: string;
    email: string;
    message: string;
};

type FormAction =
    | { type: 'UPDATE_FIELD'; fieldName: keyof FormState; payload: string }
    | { type: 'RESET_FORM' };

const initialFormState: FormState = {
    name: '',
    email: '',
    message: '',
};

function formReducer(state: FormState, action: FormAction): FormState {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return { ...state, [action.fieldName]: action.payload };
        case 'RESET_FORM':
            return initialFormState;
        default:
            return state;
    }
}

function ContactForm() {
    const [state, dispatch] = useReducer(formReducer, initialFormState);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        dispatch({
            type: 'UPDATE_FIELD',
            fieldName: e.target.name as keyof FormState,
            payload: e.target.value,
        });
    };

    const handleReset = () => {
        dispatch({ type: 'RESET_FORM' });
    };

    return (
        <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
            <h1>Contact Form</h1>

            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={state.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            style={{ marginLeft: 10 }}
                        />
                    </label>
                </div>

                <div style={{ marginTop: 10 }}>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={state.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            style={{ marginLeft: 10 }}
                        />
                    </label>
                </div>

                <div style={{ marginTop: 10 }}>
                    <label>
                        Message:
                        <textarea
                            name="message"
                            value={state.message}
                            onChange={handleChange}
                            placeholder="Write your message"
                            rows={4}
                            cols={40}
                            style={{ verticalAlign: 'top', marginLeft: 10 }}
                        />
                    </label>
                </div>

                <div style={{ marginTop: 15 }}>
                    <button type="button" onClick={handleReset}>
                        Reset Form
                    </button>
                </div>
            </form>

            <div style={{ marginTop: 20 }}>
                <h3>Current Form State:</h3>
                <pre>{JSON.stringify(state, null, 2)}</pre>
            </div>
        </div>
    );
}

export default ContactForm;
