import { useReducer } from 'react';
import { profileReducer, initialState } from '../reducer/profileReducer';

function ProfileManager() {
    const [state, dispatch] = useReducer(profileReducer, initialState);

    const simulateUpdate = () => {
        dispatch({ type: 'LOAD_START' });

        setTimeout(() => {
            const success = Math.random() > 0.3;

            if (success) {
                dispatch({
                    type: 'LOAD_SUCCESS',
                    payload: { name: 'Jane Doe', bio: 'Web Developer' },
                });
            } else {
                dispatch({
                    type: 'LOAD_ERROR',
                    payload: 'Failed to load profile',
                });
            }
        }, 1500);
    };

    return (
        <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
            <h1>User Profile</h1>
            <p>Status: <strong>{state.status}</strong></p>

            {state.status === 'success' && state.profile && (
                <div>
                    <p><strong>Name:</strong> {state.profile.name}</p>
                    <p><strong>Bio:</strong> {state.profile.bio}</p>
                </div>
            )}

            {state.status === 'error' && (
                <p style={{ color: 'red' }}>{state.error}</p>
            )}

            <button onClick={simulateUpdate} disabled={state.status === 'loading'}>
                {state.status === 'loading' ? 'Updating...' : 'Update Profile'}
            </button>
        </div>
    );
}

export default ProfileManager;
