export interface FormState {
    name: string;
    email: string;
    message: string;
}

export type FormAction =
    | { type: 'UPDATE_FIELD'; fieldName: keyof FormState; payload: string }
    | { type: 'RESET_FORM' };

export const initialFormState: FormState = {
    name: '',
    email: '',
    message: '',
};

export function formReducer(state: FormState, action: FormAction): FormState {
    switch (action.type) {
        case 'UPDATE_FIELD':
            return {
                ...state,
                [action.fieldName]: action.payload,
            };

        case 'RESET_FORM':
            return initialFormState;
            
        default:
            return state;
    }
}
