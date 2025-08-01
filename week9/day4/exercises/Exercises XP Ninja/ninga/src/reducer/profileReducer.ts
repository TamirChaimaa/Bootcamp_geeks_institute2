export type ProfileState = {
    status: 'initial' | 'loading' | 'success' | 'error';
    profile: { name: string; bio: string } | null;
    error: string | null;
};

export type ProfileAction =
    | { type: 'LOAD_START' }
    | { type: 'LOAD_SUCCESS'; payload: { name: string; bio: string } }
    | { type: 'LOAD_ERROR'; payload: string };

export const initialState: ProfileState = {
    status: 'initial',
    profile: null,
    error: null,
};

export function profileReducer(
    state: ProfileState,
    action: ProfileAction
): ProfileState {
    switch (action.type) {
        case 'LOAD_START':
            return { ...state, status: 'loading', error: null };

        case 'LOAD_SUCCESS':
            return { ...state, status: 'success', profile: action.payload };

        case 'LOAD_ERROR':
            return { ...state, status: 'error', error: action.payload };

        default:
            return state;
    }
}
