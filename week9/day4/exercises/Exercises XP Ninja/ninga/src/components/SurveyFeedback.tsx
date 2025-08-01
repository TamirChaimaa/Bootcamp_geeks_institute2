import React, { useReducer, useState } from 'react';
import { surveyReducer, initialSurveyState} from '../reducer/surveyReducer';

function SurveyFeedback() {
    const [state, dispatch] = useReducer(surveyReducer, initialSurveyState);
    const [input, setInput] = useState('');

    const handleStart = () => dispatch({ type: 'START_SURVEY' });

    const handleSubmit = () => {
        dispatch({ type: 'SUBMIT_FEEDBACK', payload: input });
        setInput(''); // clear input after submit
    };

    const handleReset = () => dispatch({ type: 'RESET_SURVEY' });

    return (
        <div style={{ fontFamily: 'sans-serif', padding: 20 }}>
            <h1>Survey Feedback</h1>
            <p>Status: <strong>{state.status}</strong></p>

            {state.status === 'initial' && (
                <button onClick={handleStart}>Start Survey</button>
            )}

            {state.status === 'submitting' && (
                <div>
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        rows={4}
                        cols={50}
                        placeholder="Write your feedback here..."
                    />
                    <br />
                    <button onClick={handleSubmit} disabled={input.trim() === ''}>
                        Submit Feedback
                    </button>
                </div>
            )}

            {state.status === 'completed' && (
                <div>
                    <p><strong>Your Feedback:</strong> {state.feedback}</p>
                    <button onClick={handleReset}>Reset Survey</button>
                </div>
            )}
        </div>
    );
}

export default SurveyFeedback;
