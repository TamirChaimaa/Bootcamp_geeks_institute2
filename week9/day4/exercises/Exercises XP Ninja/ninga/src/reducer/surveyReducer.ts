export type SurveyStatus = 'initial' | 'submitting' | 'completed';

export interface SurveyState {
    status: SurveyStatus;
    feedback: string;
}

export type SurveyAction =
    | { type: 'START_SURVEY' }
    | { type: 'SUBMIT_FEEDBACK'; payload: string }
    | { type: 'RESET_SURVEY' };

export const initialSurveyState: SurveyState = {
    status: 'initial',
    feedback: '',
};

export function surveyReducer(state: SurveyState, action: SurveyAction): SurveyState {
    switch (action.type) {
        case 'START_SURVEY':
            return { ...state, status: 'submitting' };

        case 'SUBMIT_FEEDBACK':
            return { status: 'completed', feedback: action.payload };
            
        case 'RESET_SURVEY':
            return initialSurveyState;
            
        default:
            return state;
    }
}

